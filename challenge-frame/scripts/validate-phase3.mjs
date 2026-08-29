import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { mkdtemp, readFile, stat, writeFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const scriptDirectory = resolve(fileURLToPath(new URL(".", import.meta.url)));
const frameRoot = resolve(scriptDirectory, "..");
const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const temporaryDirectory = await mkdtemp(join(tmpdir(), "english-challenge-phase3-"));

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8"
};

const server = createServer(async (request, response) => {
  try {
    const pathName = new URL(request.url, "http://127.0.0.1").pathname;
    if (pathName === "/favicon.ico") {
      response.writeHead(204);
      response.end();
      return;
    }
    const relativePath = pathName === "/" ? "index.html" : pathName.slice(1);
    const targetPath = resolve(frameRoot, normalize(relativePath));
    if (!targetPath.startsWith(frameRoot)) throw new Error("Invalid path");
    const fileStat = await stat(targetPath);
    if (!fileStat.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "Content-Type": mimeTypes[extname(targetPath)] || "application/octet-stream" });
    response.end(await readFile(targetPath));
  } catch (_error) {
    response.writeHead(404);
    response.end("Not found");
  }
});

await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
const pageUrl = `http://127.0.0.1:${server.address().port}/`;

const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "--remote-debugging-port=0",
  `--user-data-dir=${temporaryDirectory}`,
  "about:blank"
], { windowsHide: true, stdio: ["ignore", "ignore", "pipe"] });

const browserSocketUrl = await new Promise((resolveSocket, rejectSocket) => {
  const timer = setTimeout(() => rejectSocket(new Error("Chrome debugging endpoint timed out.")), 15000);
  chrome.stderr.on("data", (chunk) => {
    const match = chunk.toString().match(/DevTools listening on (ws:\/\/[^\s]+)/);
    if (match) {
      clearTimeout(timer);
      resolveSocket(match[1]);
    }
  });
  chrome.once("error", rejectSocket);
});

const debugPort = new URL(browserSocketUrl).port;
const target = await fetch(`http://127.0.0.1:${debugPort}/json/new?${encodeURIComponent(pageUrl)}`, { method: "PUT" }).then((response) => response.json());
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolveOpen, rejectOpen) => {
  socket.addEventListener("open", resolveOpen, { once: true });
  socket.addEventListener("error", rejectOpen, { once: true });
});

let messageId = 0;
const pending = new Map();
const runtimeErrors = [];
const loadWaiters = [];

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve: resolveCall, reject: rejectCall } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) rejectCall(new Error(message.error.message));
    else resolveCall(message.result);
  }
  if (message.method === "Runtime.exceptionThrown") runtimeErrors.push(message.params.exceptionDetails.text);
  if (message.method === "Log.entryAdded" && message.params.entry.level === "error") runtimeErrors.push(message.params.entry.text);
  if (message.method === "Page.loadEventFired") loadWaiters.splice(0).forEach((resolveLoad) => resolveLoad());
});

function command(method, params = {}) {
  const id = ++messageId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolveCall, rejectCall) => pending.set(id, { resolve: resolveCall, reject: rejectCall }));
}

function waitForLoad() {
  return new Promise((resolveLoad, rejectLoad) => {
    const timer = setTimeout(() => rejectLoad(new Error("Page load timed out.")), 10000);
    loadWaiters.push(() => {
      clearTimeout(timer);
      resolveLoad();
    });
  });
}

async function evaluate(expression) {
  const result = await command("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

async function setViewport(width, height) {
  await command("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768 });
  await new Promise((resolveDelay) => setTimeout(resolveDelay, 80));
}

async function capture(path) {
  const result = await command("Page.captureScreenshot", { format: "png", fromSurface: true });
  await writeFile(path, Buffer.from(result.data, "base64"));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  await command("Page.enable");
  await command("Runtime.enable");
  await command("Log.enable");
  const initialLoad = waitForLoad();
  await command("Page.navigate", { url: pageUrl });
  await initialLoad;
  await setViewport(1280, 900);

  const initial = await evaluate(`(() => ({
    title: document.querySelector('[data-lesson-title]').textContent,
    objective: document.querySelector('[data-lesson-objective]').textContent,
    days: document.querySelectorAll('[data-day-grid] [data-day]').length,
    input: document.querySelector("[data-slot='listening']").textContent,
    language: document.querySelector("[data-slot='lesson']").textContent,
    resources: document.querySelectorAll('[data-resource-list] .resource-row').length,
    aiPrompt: document.querySelector('[data-ai-support-prompt]').value,
    aiCoachSections: document.querySelectorAll('[data-section-id="ai-support"]').length,
    placeholderCopy: document.body.innerText.includes('Awaiting content'),
    disabledDays: document.querySelectorAll('[data-day-grid] [aria-disabled="true"]').length,
    headerShells: document.querySelectorAll('body > .app-nav').length,
    sectionNavInsideHeader: Boolean(document.querySelector('body > .app-nav > .section-nav-wrap [data-section-navigation]')),
    sectionNavInsideLesson: document.querySelectorAll('.lesson-workspace > .section-nav-wrap, [data-lesson-content] > .section-nav-wrap').length
  }))()`);
  assert(initial.title === "Build Complete Personal Sentences", "Day 1 title did not bind.");
  assert(initial.objective.includes("12 complete sentences"), "Day 1 objective did not bind.");
  assert(initial.days === 30, "The desktop day map does not contain 30 days.");
  assert(initial.input.includes("Analyse:"), "Day 1 Input did not bind.");
  assert(initial.language.includes("Primary skill") && initial.language.includes("Integrated foundation"), "Day 1 Language did not bind.");
  assert(initial.resources >= 1, "Day 1 resource did not render.");
  assert(initial.aiCoachSections === 1 && initial.aiPrompt.includes("patient English tutor for Day 1") && initial.aiPrompt.includes("how to read or say a word"), "Day 1 AI tutor prompt did not bind.");
  assert(!initial.placeholderCopy && initial.disabledDays === 29, "Sequential lock state is incorrect on a fresh challenge.");
  assert(initial.headerShells === 1 && initial.sectionNavInsideHeader && initial.sectionNavInsideLesson === 0, "Challenge and lesson navigation are not unified in one header shell.");

  const allDays = await evaluate(`(() => {
    const failures = window.CHALLENGE_FRAME_DATA.days.filter(day => {
      const common = day.title && day.objective && day.dailyScore && day.nextRetrieval && day.aiSupportPrompt;
      const body = day.kind === 'assessment'
        ? day.components?.length === 4 && day.validity && day.evidenceRequirement && day.score && day.review && day.aiSupportPrompt.includes('ANSWERS LOCKED')
        : day.recall && day.input && day.language && day.practice?.length >= 2 && day.mission && day.evidenceRequirement && day.passCriteria && day.feedback;
      return !common || !body;
    }).map(day => day.number);
    return { checked: window.CHALLENGE_FRAME_DATA.days.length, failures };
  })()`);
  assert(allDays.checked === 30 && allDays.failures.length === 0, `Daily binding failures: ${JSON.stringify(allDays.failures)}`);

  await evaluate(`document.querySelector('[data-day="1"]').click()`);
  await evaluate(`document.querySelector('[data-copy-ai-prompt]').click()`);
  await new Promise((resolveDelay) => setTimeout(resolveDelay, 150));
  const aiCopy = await evaluate(`(() => ({ label: document.querySelector('[data-copy-ai-prompt]').textContent, toast: document.querySelector('[data-toast]').textContent, selected: document.querySelector('[data-ai-support-prompt]').selectionEnd > document.querySelector('[data-ai-support-prompt]').selectionStart }))()`);
  assert(aiCopy.label === 'Prompt copied' || (aiCopy.toast.includes('blocked') && aiCopy.selected), "AI prompt copy action produced no visible success or fallback state.");

  await evaluate(`document.querySelector('[data-day="30"]').click()`);
  await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  const lockAttempt = await evaluate(`(() => ({ title: document.querySelector('[data-lesson-title]').textContent, toast: document.querySelector('[data-toast]').textContent, nextDisabled: document.querySelector('[data-next-day]').disabled }))()`);
  assert(lockAttempt.title === "Build Complete Personal Sentences" && lockAttempt.toast.includes("locked") && lockAttempt.nextDisabled, "A future locked day opened before the current day was completed.");

  await evaluate(`document.querySelector('[data-day="1"]').click()`);
  await evaluate(`document.querySelector('[data-evidence-form]').requestSubmit()`);
  await new Promise((resolveDelay) => setTimeout(resolveDelay, 60));
  assert(await evaluate(`document.querySelector('#evidence-note').getAttribute('aria-invalid') === 'true'`), "Empty evidence did not show an error.");

  await evaluate(`(() => {
    const note = document.querySelector('#evidence-note');
    note.value = 'Audio saved on my device.';
    note.dispatchEvent(new Event('input', { bubbles: true }));
    ['recall','input','language','practice','mission','evidence','feedback'].forEach(key => {
      const box = document.querySelector('[data-check="' + key + '"]');
      box.checked = true;
      box.dispatchEvent(new Event('change', { bubbles: true }));
    });
    document.querySelector('[data-support-level]').value = 'I2';
    document.querySelector('[data-support-level]').dispatchEvent(new Event('change', { bubbles: true }));
    document.querySelector('[data-evidence-form]').requestSubmit();
  })()`);
  await new Promise((resolveDelay) => setTimeout(resolveDelay, 600));
  const completion = await evaluate(`(() => ({
    completed: document.querySelector('[data-completed-count]').textContent,
    percent: document.querySelector('[data-progress-value]').textContent,
    state: document.querySelector('[data-day="1"]').dataset.state,
    heading: document.querySelector('[data-completion-heading]').textContent,
    support: document.querySelector('[data-current-support]').textContent,
    day2State: document.querySelector('[data-day="2"]').dataset.state,
    day3Locked: document.querySelector('[data-day="3"]').getAttribute('aria-disabled'),
    nextDisabled: document.querySelector('[data-next-day]').disabled
  }))()`);
  assert(completion.completed === "1 / 30" && completion.percent === "3%", "Completion totals did not update.");
  assert(completion.state === "completed" && completion.heading === "Day complete." && completion.support === "I2", "Completion state or support did not update.");
  assert(completion.day2State === "active" && completion.day3Locked === "true" && !completion.nextDisabled, "Completing Day 1 did not unlock only Day 2.");

  const reload = waitForLoad();
  await command("Page.reload", { ignoreCache: true });
  await reload;
  await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  const persistence = await evaluate(`(() => ({
    title: document.querySelector('[data-lesson-title]').textContent,
    completed: document.querySelector('[data-completed-count]').textContent,
    day1: document.querySelector('[data-day="1"]').dataset.state,
    day2: document.querySelector('[data-day="2"]').dataset.state,
    locked: document.querySelectorAll('[data-day-grid] [aria-disabled="true"]').length
  }))()`);
  assert(persistence.title === "Capture Personal Details", "Resume did not advance to the first incomplete day.");
  assert(persistence.completed === "1 / 30" && persistence.day1 === "completed", "Progress did not persist across reload.");
  assert(persistence.day2 === "active" && persistence.locked === 28, "Sequential lock state did not persist after reload.");

  const responsive = [];
  for (const [width, height] of [[320, 900], [375, 900], [414, 900], [768, 900], [1280, 900], [1280, 800]]) {
    await setViewport(width, height);
    await evaluate(`window.scrollTo(0, 0)`);
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 60));
    const result = await evaluate(`(() => {
      const visible = element => { const style = getComputedStyle(element); const box = element.getBoundingClientRect(); return style.display !== 'none' && style.visibility !== 'hidden' && box.width > 0 && box.height > 0; };
      const smallTargets = [...document.querySelectorAll('button, a, select, textarea, input[type="number"], .file-button')]
        .filter(visible)
        .filter(element => { const box = element.getBoundingClientRect(); return box.width < 44 || box.height < 44; })
        .map(element => ({ tag: element.tagName, text: (element.textContent || element.getAttribute('aria-label') || '').trim(), width: Math.round(element.getBoundingClientRect().width), height: Math.round(element.getBoundingClientRect().height) }));
      return {
        innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        smallTargets,
        titleVisible: visible(document.querySelector('[data-lesson-title]')),
        missionVisible: visible(document.querySelector('[data-mission-copy]')),
        progressVisible: visible(document.querySelector('[data-progress-ring]')),
        sectionNavVisible: visible(document.querySelector('[data-section-navigation]')),
        headerBottom: Math.round(document.querySelector('.app-nav').getBoundingClientRect().bottom),
        lessonTop: Math.round(document.querySelector('.lesson-hero').getBoundingClientRect().top)
      };
    })()`);
    assert(result.scrollWidth <= result.innerWidth, `Horizontal overflow at ${width}x${height}.`);
    assert(result.smallTargets.length === 0, `Small target at ${width}x${height}: ${JSON.stringify(result.smallTargets[0])}`);
    assert(result.titleVisible && result.missionVisible && result.progressVisible, `Required content hidden at ${width}x${height}.`);
    assert(result.sectionNavVisible && result.lessonTop >= result.headerBottom, `Unified header overlaps lesson content at ${width}x${height}.`);
    responsive.push({ width, height, overflow: false, smallTargets: 0 });
    if (width === 375) {
      await capture(join(temporaryDirectory, "phase3-mobile-375.png"));
      const sectionNavAdvance = await evaluate(`(() => {
        const nav = document.querySelector('[data-section-navigation]');
        const hint = document.querySelector('[data-section-nav-hint]');
        const before = nav.scrollLeft;
        hint.click();
        return { before, hintVisible: !hint.hidden };
      })()`);
      await new Promise((resolveDelay) => setTimeout(resolveDelay, 350));
      const sectionNavAfter = await evaluate(`document.querySelector('[data-section-navigation]').scrollLeft`);
      assert(sectionNavAdvance.hintVisible && sectionNavAfter > sectionNavAdvance.before, "Mobile lesson-section overflow control did not advance the navigation.");
      await evaluate(`document.querySelector('#ai-support').scrollIntoView({ block: 'start' })`);
      await new Promise((resolveDelay) => setTimeout(resolveDelay, 350));
      assert(await evaluate(`document.querySelector('[data-copy-ai-prompt]').getBoundingClientRect().width >= 44 && document.querySelector('[data-ai-support-prompt]').value.length > 1000`), "Mobile AI Coach is missing or unusable.");
      await capture(join(temporaryDirectory, "phase3-ai-mobile-375.png"));
    }
    if (width === 1280 && height === 900) {
      await capture(join(temporaryDirectory, "phase3-desktop-1280.png"));
      await evaluate(`document.querySelector('#ai-support').scrollIntoView({ block: 'center' })`);
      await new Promise((resolveDelay) => setTimeout(resolveDelay, 350));
      await capture(join(temporaryDirectory, "phase3-ai-desktop-1280.png"));
    }
  }

  await evaluate(`(() => {
    const checks = { recall: true, input: true, language: true, practice: true, mission: true, evidence: true, feedback: true };
    const progress = {};
    for (let day = 1; day <= 29; day += 1) progress[day] = { checks, support: 'I3', comprehension: '', latency: '', scoreMethod: 'not-scored', evidenceSaved: true, evidenceSavedAt: day, completed: true };
    localStorage.setItem(window.CHALLENGE_FRAME_DATA.challenge.progressStorageKey, JSON.stringify(progress));
  })()`);
  const unlockReload = waitForLoad();
  await command("Page.reload", { ignoreCache: true });
  await unlockReload;
  await new Promise((resolveDelay) => setTimeout(resolveDelay, 120));
  await setViewport(1280, 900);

  const renderedAllDays = await evaluate(`(() => {
    const failures = [];
    for (const day of window.CHALLENGE_FRAME_DATA.days) {
      document.querySelector('[data-day="' + day.number + '"]').click();
      const rendered = {
        title: document.querySelector('[data-lesson-title]').textContent,
        objective: document.querySelector('[data-lesson-objective]').textContent,
        practice: document.querySelectorAll('[data-practice-steps] > li').length,
        components: document.querySelectorAll('.station-card').length,
        resources: document.querySelectorAll('[data-resource-list] .resource-row').length,
        aiPrompt: document.querySelector('[data-ai-support-prompt]').value,
        mission: document.querySelector('[data-mission-copy]').textContent,
        evidence: document.querySelector('[data-evidence-requirement]').textContent,
        pass: document.querySelector('[data-pass-criteria]').textContent,
        feedback: document.querySelector('[data-feedback-copy]').textContent
      };
      const bodyValid = day.kind === 'assessment' ? rendered.components === 4 : rendered.practice >= 2;
      if (rendered.title !== day.title || rendered.objective !== day.objective || !bodyValid || rendered.resources !== day.resources.length || rendered.aiPrompt !== day.aiSupportPrompt || !rendered.mission || !rendered.evidence || !rendered.pass || !rendered.feedback) failures.push(day.number);
    }
    return { checked: window.CHALLENGE_FRAME_DATA.days.length, failures };
  })()`);
  assert(renderedAllDays.checked === 30 && renderedAllDays.failures.length === 0, `Rendered day failures: ${JSON.stringify(renderedAllDays.failures)}`);

  await evaluate(`document.querySelector('[data-day="30"]').click()`);
  await new Promise((resolveDelay) => setTimeout(resolveDelay, 500));
  const day30 = await evaluate(`(() => ({
    title: document.querySelector('[data-lesson-title]').textContent,
    stations: document.querySelectorAll('.station-card').length,
    validity: document.querySelector("[data-slot='listening']").textContent,
    aiGuard: document.querySelector('[data-ai-support-prompt]').value.includes('Before I write ANSWERS LOCKED'),
    nextDisabled: document.querySelector('[data-next-day]').disabled,
    titleTop: Math.round(document.querySelector('[data-lesson-title]').getBoundingClientRect().top),
    headerBottom: Math.round(document.querySelector('.app-nav').getBoundingClientRect().bottom)
  }))()`);
  assert(day30.title === "Full IELTS Academic Mock 2 and Decision", "Day 30 title did not bind.");
  assert(day30.stations === 4 && day30.validity.includes("Different untouched test") && day30.aiGuard && day30.nextDisabled, "Day 30 assessment contract is incomplete.");
  assert(day30.titleTop >= day30.headerBottom, "Focused Day 30 title is hidden behind the fixed header.");
  await capture(join(temporaryDirectory, "phase3-day30-desktop.png"));

  await evaluate(`(() => {
    const note = document.querySelector('#evidence-note');
    note.value = 'Complete Mock 2 provenance package saved locally.';
    note.dispatchEvent(new Event('input', { bubbles: true }));
    ['recall','input','language','practice','mission','evidence'].forEach(key => {
      const box = document.querySelector('[data-check="' + key + '"]');
      box.checked = true;
      box.dispatchEvent(new Event('change', { bubbles: true }));
    });
    document.querySelector('[data-evidence-form]').requestSubmit();
  })()`);
  await new Promise((resolveDelay) => setTimeout(resolveDelay, 600));
  assert(await evaluate(`document.querySelector('[data-day="30"]').dataset.state !== 'completed'`), "Assessment completed before all seven checks.");
  await evaluate(`(() => { const box = document.querySelector('[data-check="feedback"]'); box.checked = true; box.dispatchEvent(new Event('change', { bubbles: true })); })()`);
  const assessmentCompletion = await evaluate(`(() => ({ state: document.querySelector('[data-day="30"]').dataset.state, heading: document.querySelector('[data-completion-heading]').textContent, checks: document.querySelector('[data-daily-progress]').textContent }))()`);
  assert(assessmentCompletion.state === 'completed' && assessmentCompletion.heading === 'Day complete.' && assessmentCompletion.checks === '7/7', "Assessment completion rule failed.");

  assert(runtimeErrors.length === 0, `Runtime errors: ${runtimeErrors.join(" | ")}`);
  console.log(JSON.stringify({
    result: "PASS",
    initial,
    allDays,
    aiCopy,
    lockAttempt,
    renderedAllDays,
    day30,
    completion,
    persistence,
    assessmentCompletion,
    responsive,
    runtimeErrors,
    screenshots: [join(temporaryDirectory, "phase3-mobile-375.png"), join(temporaryDirectory, "phase3-desktop-1280.png"), join(temporaryDirectory, "phase3-ai-mobile-375.png"), join(temporaryDirectory, "phase3-ai-desktop-1280.png"), join(temporaryDirectory, "phase3-day30-desktop.png")]
  }, null, 2));
} finally {
  socket.close();
  chrome.kill();
  server.close();
}
