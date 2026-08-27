(() => {
  "use strict";
  const config = window.CHALLENGE_APP || {};
  const payloads = Object.fromEntries([...(window.CHALLENGE_CONTENT || []), ...(window.CHALLENGE_SUPPLEMENTAL || [])].map(file => [file.name, file]));
  const cache = {};
  const readFile = name => {
    if (!(name in cache)) {
      const file = payloads[name];
      if (!file) return "";
      cache[name] = new TextDecoder().decode(Uint8Array.from(atob(file.base64), character => character.charCodeAt(0)));
    }
    return cache[name];
  };
  const ids = ["challengeTitle","challengeLede","passCount","currentDayReadout","runStatus","railOutput","dayGrid","dayPhase","dayTitle","dayOutcome","dayMinimum","dayTarget","dayDone","dayEvidence","dayStretch","dailySources","audioSources","evidenceForm","statusSelect","timeSpent","doneTest","evidence","mainError","nextAction","verified","passButton","formMessage","progressList","historyList","exportButton","importButton","importInput","storageMessage","documentRail","documentTitle","documentNotice","documentContent","footerCopy","actionCopy","previousButton","nextButton","overviewView","dayDetailView","routeNotice","phaseRibbon","chunkSummary","chunkDueCopy","dayOutline","backToOverview","detailStatus","nowStepCopy","dayActionBar"];
  const el = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
  const lessonShell = el.dayDetailView.querySelector(".lesson");
  const dayBrief = document.createElement("div"); dayBrief.className = "day-brief";
  const dayWork = document.createElement("div"); dayWork.className = "day-work";
  [".lesson-head",".start-here",".contract-disclosure"].forEach(selector => dayBrief.append(lessonShell.querySelector(selector)));
  ["#dayOutline","#dailySources","#audioSources",".evidence-disclosure"].forEach(selector => dayWork.append(lessonShell.querySelector(selector)));
  lessonShell.append(dayBrief,dayWork);
  const escapeHtml = value => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  function renderInline(value) {
    const code = [];
    let output = escapeHtml(value).replace(/`([^`]+)`/g, (_, content) => { code.push(content); return `@@CODE${code.length - 1}@@`; });
    output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    return output.replace(/@@CODE(\d+)@@/g, (_, index) => `<code>${escapeHtml(code[Number(index)])}</code>`);
  }
  function startsBlock(lines, index) {
    const line = lines[index] || "";
    return /^#{1,6}\s/.test(line) || /^```/.test(line) || /^>\s?/.test(line) || /^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line) || /^\|/.test(line);
  }
  function renderMarkdown(markdown) {
    const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
    const output = [];
    let index = 0;
    while (index < lines.length) {
      const line = lines[index];
      if (!line.trim()) { index += 1; continue; }
      const fence = line.match(/^```(.*)$/);
      if (fence) {
        const body = []; index += 1;
        while (index < lines.length && !/^```/.test(lines[index])) body.push(lines[index++]);
        if (index < lines.length) index += 1;
        output.push(`<pre><code>${escapeHtml(body.join("\n"))}</code></pre>`); continue;
      }
      const heading = line.match(/^(#{1,6})\s+(.+)$/);
      if (heading) { const level = Math.min(heading[1].length, 4); output.push(`<h${level}>${renderInline(heading[2])}</h${level}>`); index += 1; continue; }
      if (/^\|/.test(line) && index + 1 < lines.length && /^\|?\s*:?-+/.test(lines[index + 1])) {
        const rows = []; const header = line.split("|").slice(1, -1).map(cell => cell.trim()); index += 2;
        while (index < lines.length && /^\|/.test(lines[index])) { rows.push(lines[index].split("|").slice(1, -1).map(cell => cell.trim())); index += 1; }
        output.push(`<div class="table-scroll"><table><thead><tr>${header.map(cell => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${renderInline(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`); continue;
      }
      if (/^[-*]\s+/.test(line)) {
        const items = []; while (index < lines.length && /^[-*]\s+/.test(lines[index])) items.push(lines[index++].replace(/^[-*]\s+/, ""));
        output.push(`<ul>${items.map(item => `<li>${renderInline(item)}</li>`).join("")}</ul>`); continue;
      }
      if (/^\d+\.\s+/.test(line)) {
        const items = []; while (index < lines.length && /^\d+\.\s+/.test(lines[index])) items.push(lines[index++].replace(/^\d+\.\s+/, ""));
        output.push(`<ol>${items.map(item => `<li>${renderInline(item)}</li>`).join("")}</ol>`); continue;
      }
      if (/^>\s?/.test(line)) {
        const quote = []; while (index < lines.length && /^>\s?/.test(lines[index])) quote.push(lines[index++].replace(/^>\s?/, ""));
        output.push(`<blockquote><p>${renderInline(quote.join(" "))}</p></blockquote>`); continue;
      }
      const paragraph = [line.trim()]; index += 1;
      while (index < lines.length && lines[index].trim() && !startsBlock(lines, index)) paragraph.push(lines[index++].trim());
      output.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    }
    return output.join("\n");
  }
  function extractSection(markdown, level, headingText) {
    const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
    const marker = "#".repeat(level) + " ";
    const start = lines.findIndex(line => line.startsWith(marker) && line.includes(headingText));
    if (start < 0) return "";
    let end = start + 1; const boundary = new RegExp(`^#{1,${level}}\\s`);
    while (end < lines.length && !boundary.test(lines[end])) end += 1;
    return lines.slice(start, end).join("\n").trim();
  }
  function selectorContent(file, selector, day) {
    if (!selector) return "";
    if (selector.days && !selector.days.includes(day)) return "";
    if (selector.full) return readFile(file);
    const heading = selector.headings?.[day] || selector.pattern?.replace("{day}", String(day)).replace("{day2}", String(day).padStart(2, "0"));
    if (Array.isArray(heading)) return heading.map(item => extractSection(readFile(file), selector.level, item)).filter(Boolean).join("\n\n");
    return heading ? extractSection(readFile(file), selector.level, heading) : "";
  }
  function firstHeading(markdown) { return String(markdown).split(/\r?\n/).find(line => /^#\s+/.test(line))?.slice(2).trim() || ""; }
  function firstParagraph(markdown) {
    const lines = String(markdown).replace(/\r\n/g, "\n").split("\n"); let buffer = [];
    for (let index = 1; index < lines.length; index += 1) {
      const line = lines[index].trim();
      if (/^##\s/.test(line)) break;
      if (!line) { if (buffer.length) break; continue; }
      if (!/^Status:/.test(line)) buffer.push(line);
    }
    return buffer.join(" ");
  }
  function parseDays() {
    const plan = readFile(config.planFile); const lines = plan.replace(/\r\n/g, "\n").split("\n");
    const headerIndex = lines.findIndex(line => /^\|\s*Ngày\s*\|/.test(line));
    if (headerIndex < 0) throw new Error("PLAN.md thiếu bảng Daily Contract.");
    const cells = line => line.trim().slice(1, -1).split("|").map(value => value.trim().replace(/^`([^`]*)`$/, "$1"));
    const headers = cells(lines[headerIndex]); const rows = [];
    for (let index = headerIndex + 2; index < lines.length && /^\|\s*\d+\s*\|/.test(lines[index]); index += 1) rows.push(cells(lines[index]));
    const lessonHeadings = new Map(); let lessonPhase = "";
    if (payloads["LESSONS.md"]) readFile("LESSONS.md").split(/\r?\n/).forEach(line => {
      if (/^##\s+Phase/.test(line)) lessonPhase = line.slice(3).trim();
      const match = line.match(/^###\s+Ngày\s+(\d+)\s+—\s+(.+)$/); if (match) lessonHeadings.set(Number(match[1]), { phase: lessonPhase, title: match[2].trim() });
    });
    const result = rows.map(row => {
      const record = Object.fromEntries(headers.map((header, index) => [header, row[index] || ""])); const day = Number(record["Ngày"]); const lesson = lessonHeadings.get(day) || {};
      return { day, phase: record["Phase"] || lesson.phase || "", title: lesson.title || record["Outcome"], outcome: record["Outcome"], minimum: record["Minimum action"], target: record["Target action"], done: record["Done when"], evidence: record["Evidence"], stretch: record["Stretch"] };
    });
    if (result.length !== 30 || result.some((entry, index) => entry.day !== index + 1)) throw new Error("Daily Contract không đủ 30 ngày theo đúng thứ tự.");
    return result;
  }
  const days = parseDays();
  const validStatuses = ["IN_PROGRESS","PASS","PARTIAL","SKIPPED","BLOCKED"];
  const storageKey = `challenge:${config.slug}:v1`; let storageError = "";
  const freshState = () => ({ schema:1, events:[], drafts:{}, unlocks:[] });
  const eventId = () => globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  function sanitizeEvent(event) {
    if (!event || !validStatuses.includes(event.status) || !Number.isInteger(Number(event.day)) || Number(event.day) < 1 || Number(event.day) > 30) return null;
    return { id:String(event.id || eventId()), timestamp:String(event.timestamp || new Date().toISOString()), session:Number(event.session) || 1, day:Number(event.day), status:event.status, timeMinutes:event.timeMinutes === null || event.timeMinutes === "" ? null : Number(event.timeMinutes), doneTest:String(event.doneTest || ""), evidence:String(event.evidence || ""), mainError:String(event.mainError || ""), nextAction:String(event.nextAction || ""), verification:String(event.verification || "self-reported") };
  }
  function normalizeState(value) {
    if (!value || value.schema !== 1 || !Array.isArray(value.events)) return null;
    return { schema:1, events:value.events.map(sanitizeEvent).filter(Boolean), drafts:value.drafts && typeof value.drafts === "object" ? value.drafts : {}, unlocks:Array.isArray(value.unlocks) ? value.unlocks.filter(Boolean).map(item => ({ name:String(item.name), day:Number(item.day), timestamp:String(item.timestamp || "") })) : [] };
  }
  function loadState() {
    try { const value = localStorage.getItem(storageKey); return value ? normalizeState(JSON.parse(value)) || freshState() : freshState(); }
    catch { storageError = "Không đọc được localStorage. Hãy dùng Xuất progress để giữ bản sao."; return freshState(); }
  }
  let state = loadState(); let visibleDay = 1; let activeDocument = config.challengeFile;
  let activeRoute = {kind:"overview"}; let routeNoticeText = "";
  function saveState() {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); storageError = ""; renderStorage(); return true; }
    catch { storageError = "Không lưu được localStorage. Hãy dùng Xuất progress để giữ bản sao."; renderStorage(); return false; }
  }
  const compareEvents = (a,b) => (Date.parse(a.timestamp) - Date.parse(b.timestamp)) || (a.session - b.session);
  const eventsForDay = day => state.events.filter(event => event.day === day);
  const latestEvent = day => eventsForDay(day).sort(compareEvents).at(-1) || null;
  const statusForDay = day => latestEvent(day)?.status || "NOT_STARTED";
  const isPass = day => statusForDay(day) === "PASS";
  const terminalStatuses = ["PASS","PARTIAL","SKIPPED","BLOCKED"];
  function contiguousPasses() { let count = 0; while (count < 30 && isPass(count + 1)) count += 1; return count; }
  const currentDay = () => Math.min(contiguousPasses() + 1, 30);
  const isUnlocked = day => day <= Math.min(contiguousPasses() + 1, 30);
  const nextSession = () => state.events.reduce((max,event) => Math.max(max,event.session),0) + 1;
  const defaultDraft = () => ({ status:"IN_PROGRESS", timeMinutes:"", doneTest:"", evidence:"", mainError:"", nextAction:"", verified:false });
  const draftForDay = day => state.drafts[day] || defaultDraft();
  function renderDayRail() {
    el.dayGrid.replaceChildren(...days.map(entry => {
      const button = document.createElement("button"); button.type = "button"; button.className = "day-button";
      const unlocked = isUnlocked(entry.day); const status = statusForDay(entry.day);
      button.dataset.state = !unlocked ? "locked" : isPass(entry.day) ? "complete" : status === "BLOCKED" ? "blocked" : terminalStatuses.includes(status) ? "recorded" : "available";
      const number = document.createElement("span"); number.className = "day-number"; number.textContent = String(entry.day).padStart(2,"0");
      const title = document.createElement("span"); title.className = "day-label"; title.textContent = entry.title;
      const stateLabel = document.createElement("span"); stateLabel.className = "day-state"; stateLabel.textContent = !unlocked ? "LOCKED" : status === "NOT_STARTED" ? "AVAILABLE" : status;
      button.append(number,title,stateLabel);
      const lockReason = entry.day > 1 ? `Hoàn thành Ngày ${entry.day - 1} với PASS để mở.` : "";
      button.setAttribute("aria-label", `Ngày ${entry.day} — ${entry.outcome} — ${stateLabel.textContent}${lockReason ? ` — ${lockReason}` : ""}`);
      button.setAttribute("aria-disabled",String(!unlocked));
      button.addEventListener("click",() => { if (!unlocked) { routeNoticeText = lockReason; el.routeNotice.textContent = routeNoticeText; return; } navigateToDay(entry.day); });
      return button;
    }));
  }
  function renderPhaseRibbon() {
    const phases = [];
    days.forEach(entry => { let phase = phases.at(-1); if (!phase || phase.name !== entry.phase) { phase = {name:entry.phase,days:[]}; phases.push(phase); } phase.days.push(entry.day); });
    el.phaseRibbon.replaceChildren(...phases.map(phase => { const item=document.createElement("div"); item.className="phase-note"; const title=document.createElement("strong"); title.textContent=phase.name; const range=document.createElement("span"); range.textContent=`Ngày ${phase.days[0]}–${phase.days.at(-1)} · ${phase.days.filter(isPass).length}/${phase.days.length}`; item.append(title,range); return item; }));
  }
  function chunkDue(day) {
    const tasks = [];
    if (day >= 2 && day <= 21) tasks.push(`activate Group ${day - 1}`);
    if (day >= 4 && day <= 23) tasks.push(`D-2 Group ${day - 3}`);
    if (day >= 9 && day <= 28) tasks.push(`D-7 Group ${day - 8}`);
    if (day >= 22 && day <= 28) { const ranges = [[41,52],[53,64],[65,76],[77,88],[89,100],[101,110],[111,120]]; const range=ranges[day-22]; tasks.push(`recognition ${range[0]}–${range[1]}`); }
    if (day >= 29) tasks.push("chỉ dùng chunks đã ACTIVE");
    return tasks.length ? tasks.join(" · ") : "chưa có chunk retrieval";
  }
  function renderDailySources(day) {
    const assessmentLocked = (config.assessmentGateDays || []).includes(day) && !terminalStatuses.includes(statusForDay(day));
    const sections = (config.dailySources || [])
      .filter(source => !source.excludeDays?.includes(day))
      .filter(source => !assessmentLocked || !source.postAssessment)
      .map(source => ({ ...source, content:selectorContent(source.file,source.selector,day) }))
      .filter(section => section.content);
    const preferredIndex = assessmentLocked && day !== 1 ? Math.max(0,sections.findIndex(section => section.file === "ASSESSMENTS.md")) : 0;
    const surfaces = sections.map((section,index) => {
      const disclosure = document.createElement("details"); disclosure.className = "source-disclosure";
      const summary = document.createElement("summary"); summary.textContent = section.label || section.file; summary.title = summary.textContent;
      const surface = document.createElement("section"); surface.className = "markdown"; surface.dataset.source = section.file;
      const body = document.createElement("div"); body.innerHTML = renderMarkdown(section.content); surface.append(body); disclosure.append(summary,surface);
      disclosure.addEventListener("toggle",() => { if (disclosure.isConnected && disclosure.open) [...el.dailySources.querySelectorAll("details.source-disclosure")].forEach(item => { if (item !== disclosure) item.open = false; }); });
      return disclosure;
    });
    if (assessmentLocked) {
      const notice = document.createElement("p"); notice.className = "message assessment-gate";
      notice.textContent = "Assessment đang được khóa theo đúng thứ tự: hoàn thành và lưu một trạng thái kết thúc trước khi mở bài học, tài nguyên và phần luyện bổ trợ của ngày này.";
      surfaces.push(notice);
    }
    el.dailySources.replaceChildren(...surfaces);
    if (surfaces[preferredIndex] instanceof HTMLDetailsElement) surfaces[preferredIndex].open = true;
    const disclosures = [...el.dailySources.querySelectorAll("details.source-disclosure")];
    const outlineLinks = disclosures.map((disclosure,index) => {
      const surface = disclosure.querySelector("section.markdown");
      surface.id = `day-${String(day).padStart(2,"0")}-source-${index + 1}`;
      const link = document.createElement("button"); link.type = "button"; link.className = "outline-link"; link.textContent = disclosure.querySelector("summary").textContent; link.title = link.textContent; link.addEventListener("click",() => { disclosures.forEach(item => item.open = item === disclosure); disclosure.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",block:"start"}); }); return link;
    });
    el.dayOutline.replaceChildren(...outlineLinks); el.dayOutline.hidden = outlineLinks.length < 2;
    const tracks = config.audioByDay?.[day] || [];
    el.audioSources.replaceChildren(...tracks.map(path => { const card = document.createElement("div"); card.className = "audio-card"; const label = document.createElement("p"); label.textContent = path; const audio = document.createElement("audio"); audio.controls = true; audio.preload = "metadata"; audio.src = path; card.append(label,audio); return card; }));
  }
  function renderLesson() {
    const entry = days[visibleDay - 1]; el.dayPhase.textContent = entry.phase; el.dayTitle.textContent = `Ngày ${entry.day} — ${entry.title}`; el.dayTitle.tabIndex = -1;
    el.dayOutcome.textContent = entry.outcome; el.dayMinimum.textContent = entry.minimum; el.dayTarget.textContent = entry.target; el.dayDone.textContent = entry.done; el.dayEvidence.textContent = entry.evidence; el.dayStretch.textContent = entry.stretch;
    el.detailStatus.textContent = statusForDay(entry.day); el.nowStepCopy.textContent = entry.minimum; el.chunkDueCopy.textContent = `Chunk due: ${chunkDue(entry.day)}`;
    renderDailySources(entry.day); const draft = draftForDay(entry.day); el.statusSelect.value = draft.status; el.timeSpent.value = draft.timeMinutes; el.doneTest.value = draft.doneTest; el.evidence.value = draft.evidence; el.mainError.value = draft.mainError; el.nextAction.value = draft.nextAction; el.verified.checked = draft.verified;
    [el.statusSelect,el.timeSpent,el.doneTest,el.evidence,el.mainError,el.nextAction].forEach(field => field.setAttribute("aria-invalid","false"));
    const latest = latestEvent(entry.day); el.formMessage.dataset.state = "idle"; el.formMessage.textContent = latest ? `Log gần nhất: ${latest.status} · ${latest.timestamp}` : "PASS cần Done test, evidence và xác nhận tự kiểm tra.";
    el.passButton.disabled = isPass(entry.day); el.passButton.textContent = isPass(entry.day) ? "PASS đã ghi" : "Ghi PASS"; el.passButton.dataset.state = isPass(entry.day) ? "success" : "default";
    el.previousButton.disabled = entry.day === 1; el.nextButton.disabled = !isPass(entry.day) || entry.day === 30; el.nextButton.hidden = entry.day === 30; el.actionCopy.textContent = `Ngày ${entry.day} · ${statusForDay(entry.day)}`;
  }
  function renderProgress() {
    el.progressList.replaceChildren(...days.map(entry => { const item = document.createElement("li"); item.className = "progress-item"; const day = document.createElement("span"); day.textContent = `Ngày ${entry.day}`; const title = document.createElement("strong"); title.textContent = entry.outcome; const status = document.createElement("span"); status.className = "progress-state"; status.dataset.state = statusForDay(entry.day); status.textContent = statusForDay(entry.day); item.append(day,title,status); return item; }));
    if (!state.events.length) { const item = document.createElement("li"); item.className = "history-item"; item.textContent = "Chưa có log."; el.historyList.replaceChildren(item); }
    else el.historyList.replaceChildren(...[...state.events].sort(compareEvents).reverse().map(event => { const item = document.createElement("li"); item.className = "history-item"; const meta = document.createElement("div"); meta.className = "history-meta"; meta.textContent = `Buổi ${event.session} · Ngày ${event.day} · ${event.status} · ${event.timestamp}`; const detail = document.createElement("p"); detail.textContent = `Thời gian: ${event.timeMinutes === null ? "—" : `${event.timeMinutes}'`} · Done test: ${event.doneTest || "—"} · Evidence: ${event.evidence || "—"} · Lỗi: ${event.mainError || "—"} · Next: ${event.nextAction || "—"} · ${event.verification}`; item.append(meta,detail); return item; }));
  }
  function renderSummary() { const passes = days.filter(entry => isPass(entry.day)).length; const today=currentDay(); el.passCount.textContent = passes; el.currentDayReadout.textContent = String(today).padStart(2,"0"); el.railOutput.textContent = `${passes}/30`; el.chunkSummary.textContent = `Chunk plan · Ngày ${today}: ${chunkDue(today)}`; el.runStatus.textContent = statusForDay(30) === "PASS" ? "PASS" : state.events.length ? "IN_PROGRESS" : "DRAFT"; }
  function renderStorage() { if (!el.storageMessage) return; el.storageMessage.textContent = storageError || "Progress được lưu trên trình duyệt này."; el.storageMessage.dataset.state = storageError ? "error" : "idle"; }
  function hasUnlock(name,day) { return state.unlocks.some(item => item.name === name && item.day === day); }
  function protectedContent(name,day) {
    const rule = config.protectedDocs?.[name]; if (!rule) return { allowed:true, content:readFile(name) };
    const section = rule.sections?.[day]; const dayAllowed = section || rule.days?.includes(day);
    if (!dayAllowed) return { allowed:false, message:"Tài liệu này chưa thuộc ngày hiện tại." };
    if (rule.requiresEvidence && !eventsForDay(day).some(event => event.evidence && event.status !== "SKIPPED")) return { allowed:false, message:"Hãy ghi attempt có evidence trước khi mở tài liệu này." };
    if (!hasUnlock(name,day)) {
      if (!window.confirm("Việc mở tài liệu khóa sẽ được ghi lại trong progress. Tiếp tục?")) return { allowed:false, message:"Tài liệu vẫn đang khóa." };
      state.unlocks.push({name,day,timestamp:new Date().toISOString()}); saveState();
    }
    const content = section
      ? (Array.isArray(section[0]) ? section.map(item => extractSection(readFile(name),item[0],item[1])).join("\n\n") : extractSection(readFile(name),section[0],section[1]))
      : readFile(name);
    return { allowed:true, content };
  }
  function renderDocumentRail() {
    el.documentRail.replaceChildren(...Object.keys(payloads).map(name => { const button = document.createElement("button"); button.type = "button"; button.className = "button"; button.textContent = name; button.setAttribute("aria-current",String(name === activeDocument)); button.addEventListener("click",() => openDocument(name)); return button; }));
  }
  function openDocument(name,quiet=false) {
    el.documentNotice.textContent = ""; el.documentNotice.dataset.state = "idle"; const view = protectedContent(name,visibleDay);
    if (!view.allowed) { if (!quiet) { el.documentNotice.textContent = view.message; el.documentNotice.dataset.state = "error"; } return false; }
    activeDocument = name; el.documentTitle.textContent = name; el.documentTitle.tabIndex = -1;
    el.documentContent.innerHTML = name.endsWith(".py") ? `<pre><code>${escapeHtml(view.content)}</code></pre>` : renderMarkdown(view.content); renderDocumentRail(); return true;
  }
  function render() {
    renderDayRail(); renderPhaseRibbon(); if (activeRoute.kind === "day") renderLesson(); renderProgress(); renderSummary(); renderStorage();
    if (config.protectedDocs?.[activeDocument] && !hasUnlock(activeDocument,visibleDay)) { activeDocument = config.challengeFile; openDocument(activeDocument,true); }
  }
  function routeFromLocation() { if (!location.hash || location.hash === "#overview") return {kind:"overview"}; const match=/^#day\/(\d{2})$/.exec(location.hash); if (!match) return {kind:"invalid"}; const day=Number(match[1]); return day>=1&&day<=30?{kind:"day",day}:{kind:"invalid"}; }
  function replaceOverviewRoute(message="") { routeNoticeText=message; history.replaceState(null,"","#overview"); return {kind:"overview"}; }
  function applyRoute({focus=false}={}) {
    let route=routeFromLocation(); if (route.kind==="invalid") route=replaceOverviewRoute("Đường dẫn ngày không hợp lệ. Đã quay về lịch 30 ngày.");
    if (route.kind==="day"&&!isUnlocked(route.day)) route=replaceOverviewRoute(`Ngày ${route.day} đang khóa. Hoàn thành Ngày ${route.day-1} với PASS để mở.`);
    activeRoute=route; if(route.kind==="day") visibleDay=route.day; document.body.dataset.route=route.kind;
    el.overviewView.hidden=route.kind!=="overview"; el.dayDetailView.hidden=route.kind!=="day"; el.dayActionBar.hidden=route.kind!=="day"||document.getElementById("learnPanel").hidden; el.routeNotice.textContent=routeNoticeText;
    render(); if(focus){const target=route.kind==="day"?el.dayTitle:document.querySelector(`.day-button:nth-child(${visibleDay})`)||document.getElementById("overviewTitle");target?.focus({preventScroll:true});}
  }
  function navigateToDay(day,{replace=false}={}) { if(!isUnlocked(day))return; routeNoticeText=""; if(activeRoute.kind==="day")syncDraft(); selectTab(0); history[replace?"replaceState":"pushState"](null,"",`#day/${String(day).padStart(2,"0")}`); applyRoute({focus:true}); window.scrollTo({top:document.getElementById("learnPanel").offsetTop-72,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}); }
  function navigateToOverview(){if(activeRoute.kind==="day")syncDraft();routeNoticeText="";selectTab(0);history.pushState(null,"","#overview");applyRoute({focus:true});document.querySelector(`.day-button:nth-child(${visibleDay})`)?.focus({preventScroll:true});}
  function syncDraft() { if(activeRoute.kind!=="day")return; state.drafts[visibleDay] = { status:el.statusSelect.value,timeMinutes:el.timeSpent.value,doneTest:el.doneTest.value,evidence:el.evidence.value,mainError:el.mainError.value,nextAction:el.nextAction.value,verified:el.verified.checked }; saveState(); }
  [el.statusSelect,el.timeSpent,el.doneTest,el.evidence,el.mainError,el.nextAction,el.verified].forEach(field => field.addEventListener("input",syncDraft));
  function formMessage(message,stateName,invalid=[]) { [el.statusSelect,el.timeSpent,el.doneTest,el.evidence,el.mainError,el.nextAction].forEach(field => field.setAttribute("aria-invalid",String(invalid.includes(field)))); el.formMessage.textContent = message; el.formMessage.dataset.state = stateName; invalid[0]?.focus(); }
  function appendProgress(status) {
    syncDraft(); const draft = draftForDay(visibleDay); const evidence = draft.evidence.trim(); const doneTest = draft.doneTest.trim();
    if (status === "PASS" && (!evidence || !doneTest || !draft.verified)) return formMessage("PASS cần Done test, evidence và xác nhận tự kiểm tra.","error",[!doneTest && el.doneTest,!evidence && el.evidence].filter(Boolean));
    if (["IN_PROGRESS","PARTIAL"].includes(status) && !evidence) return formMessage(`${status} cần evidence của phần đã làm.`,"error",[el.evidence]);
    if (status === "BLOCKED" && !draft.mainError.trim()) return formMessage("BLOCKED cần blocker cụ thể.","error",[el.mainError]);
    if (status === "SKIPPED" && !draft.nextAction.trim()) return formMessage("SKIPPED cần next action.","error",[el.nextAction]);
    state.events.push(sanitizeEvent({id:eventId(),timestamp:new Date().toISOString(),session:nextSession(),day:visibleDay,status,timeMinutes:draft.timeMinutes,doneTest,evidence,mainError:draft.mainError.trim(),nextAction:draft.nextAction.trim(),verification:status === "PASS" ? "self-reported" : "not-verified"})); delete state.drafts[visibleDay]; saveState(); render(); formMessage(`Đã thêm log ${status}. Log cũ không bị sửa.`,"success");
  }
  el.evidenceForm.addEventListener("submit",event => { event.preventDefault(); appendProgress(el.statusSelect.value); }); el.passButton.addEventListener("click",() => appendProgress("PASS"));
  el.previousButton.addEventListener("click",() => { if(visibleDay<=1)return; navigateToDay(visibleDay-1); });
  el.nextButton.addEventListener("click",() => { if (!isPass(visibleDay) || visibleDay >= 30) return; navigateToDay(visibleDay+1); });
  el.backToOverview.addEventListener("click",navigateToOverview);
  el.exportButton.addEventListener("click",() => { const blob = new Blob([JSON.stringify(state,null,2)],{type:"application/json"}); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = `${config.slug}-progress.json`; link.click(); URL.revokeObjectURL(url); });
  el.importButton.addEventListener("click",() => el.importInput.click()); el.importInput.addEventListener("change",async event => { const file = event.target.files?.[0]; if (!file) return; try { const imported = normalizeState(JSON.parse(await file.text())); if (!imported) throw new Error("invalid"); const ids = new Set(state.events.map(item => item.id)); state.events.push(...imported.events.filter(item => !ids.has(item.id))); state.drafts = {...imported.drafts,...state.drafts}; const unlocks = new Set(state.unlocks.map(item => `${item.name}:${item.day}:${item.timestamp}`)); state.unlocks.push(...imported.unlocks.filter(item => !unlocks.has(`${item.name}:${item.day}:${item.timestamp}`))); saveState(); visibleDay = currentDay(); render(); el.storageMessage.textContent = "Đã hợp nhất progress; log hiện có được giữ nguyên."; el.storageMessage.dataset.state = "success"; } catch { el.storageMessage.textContent = "File progress không hợp lệ; dữ liệu hiện có được giữ nguyên."; el.storageMessage.dataset.state = "error"; } finally { event.target.value = ""; } });
  const tabs = [document.getElementById("learnTab"),document.getElementById("progressTab"),document.getElementById("docsTab")]; const panels = [document.getElementById("learnPanel"),document.getElementById("progressPanel"),document.getElementById("docsPanel")];
  function selectTab(active) { tabs.forEach((tab,index) => { const selected = index === active; tab.setAttribute("aria-selected",String(selected)); tab.tabIndex = selected ? 0 : -1; panels[index].hidden = !selected; }); el.dayActionBar.hidden=active!==0||activeRoute.kind!=="day"; }
  tabs.forEach((tab,index) => { tab.addEventListener("click",() => selectTab(index)); tab.addEventListener("keydown",event => { if (!['ArrowLeft','ArrowRight'].includes(event.key)) return; event.preventDefault(); const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length; selectTab(next); tabs[next].focus({preventScroll:true}); }); });
  window.addEventListener("popstate",()=>{selectTab(0);applyRoute({focus:true});}); window.addEventListener("hashchange",()=>{selectTab(0);applyRoute({focus:true});});
  const challenge = readFile(config.challengeFile); el.challengeTitle.textContent = firstHeading(challenge); el.challengeLede.textContent = firstParagraph(challenge);  document.title = firstHeading(challenge); visibleDay = currentDay(); openDocument(activeDocument,true); if(!location.hash)history.replaceState(null,"","#overview"); applyRoute();
})();
