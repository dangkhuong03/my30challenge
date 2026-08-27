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
  const ids = [
    "challengeTitle","challengeLede","passCount","currentDayReadout","runStatus","railOutput","dayGrid","dayPhase","dayTitle",
    "dayOutcome","dayMinimum","dayTarget","dayDone","dayEvidence","dayStretch","dailySources","audioSources","evidenceForm",
    "statusSelect","timeSpent","doneTest","meaningScore","outputDuration","responseLatency","supportLevel","interactionTurns","repairResult",
    "evidence","mainError","nextAction","verified","passButton","formMessage","progressList","historyList","exportButton","importButton",
    "importInput","storageMessage","documentRail","documentTitle","documentNotice","documentContent","actionCopy","previousButton","nextButton",
    "overviewView","dayDetailView","routeNotice","phaseRibbon","chunkSummary","chunkDueCopy","backToOverview","detailStatus","nowStepCopy",
    "dayActionBar","missionShell","missionKind","missionSupport","missionChallenge","missionPass","learningLoop","loopPanel","loopPosition",
    "loopTitle","loopBody","targetChunks","mistakesDue","stageResourceButton","loopNextButton","startSessionButton","sessionShell","loopMode",
    "recallCover","revealRecallButton","performanceTimer","timerReadout","timerToggle","timerReset","missionDayReadout","bossDistance",
    "currentMissionCopy","launchCurrentButton","capabilityGrowth","errorProgress","missionCheck"
  ];
  const el = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
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
  function parseMission(day) {
    const source = selectorContent(config.missionFile,{level:2,pattern:"Ngày {day} —"},day);
    const heading = source.split(/\r?\n/).find(line => /^##\s/.test(line))?.replace(/^##\s+/,"") || `Ngày ${day}`;
    const fields = {};
    source.split(/\r?\n/).forEach(line => {
      const match = line.match(/^- \*\*([^*]+):\*\*\s*(.+)$/);
      if (match) fields[match[1].trim()] = match[2].trim();
    });
    return { heading, fields };
  }
  function parseChunkBank() {
    const source = readFile(config.chunksFile); const chunks = new Map(); const schedule = [];
    source.split(/\r?\n/).forEach(line => {
      const chunk = line.match(/^(\d+)\.\s+`([^`]+)`/); if (chunk) chunks.set(Number(chunk[1]),chunk[2]);
      const row = line.match(/^\|\s*(\d+)\s*\|\s*([\d, ]+)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|$/);
      if (row && Number(row[1]) >= 2 && Number(row[1]) <= 21) schedule.push({ introduce:Number(row[1]), ids:row[2].split(",").map(value => Number(value.trim())), r1:Number(row[3]), r2:Number(row[4]) });
    });
    return { chunks, schedule };
  }
  const days = parseDays();
  const chunkBank = parseChunkBank();
  const loopSteps = [
    { key:"input", label:"Input", mode:"TRAIN" }, { key:"notice", label:"Notice", mode:"TRAIN" }, { key:"imitate", label:"Imitate", mode:"TRAIN" },
    { key:"recall", label:"Recall", mode:"PERFORM" }, { key:"produce", label:"Produce", mode:"PERFORM" }, { key:"interact", label:"Interact", mode:"PERFORM" },
    { key:"feedback", label:"Feedback", mode:"IMPROVE" }, { key:"retry", label:"Retry", mode:"IMPROVE" }, { key:"check", label:"Mission check", mode:"PROVE" }
  ];
  const validStatuses = ["IN_PROGRESS","PASS","PARTIAL","SKIPPED","BLOCKED"];
  const storageKey = `challenge:${config.slug}:v1`; let storageError = "";
  const freshState = () => ({ schema:1, events:[], drafts:{}, unlocks:[] });
  const eventId = () => globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const optionalNumber = value => value === null || value === "" || value === undefined ? null : Number(value);
  function sanitizeEvent(event) {
    if (!event || !validStatuses.includes(event.status) || !Number.isInteger(Number(event.day)) || Number(event.day) < 1 || Number(event.day) > 30) return null;
    return { id:String(event.id || eventId()), timestamp:String(event.timestamp || new Date().toISOString()), session:Number(event.session) || 1, day:Number(event.day), status:event.status, timeMinutes:optionalNumber(event.timeMinutes), doneTest:String(event.doneTest || ""), meaningScore:optionalNumber(event.meaningScore), outputDuration:optionalNumber(event.outputDuration), responseLatency:optionalNumber(event.responseLatency), supportLevel:String(event.supportLevel || ""), interactionTurns:optionalNumber(event.interactionTurns), repairResult:String(event.repairResult || ""), evidence:String(event.evidence || ""), mainError:String(event.mainError || ""), nextAction:String(event.nextAction || ""), verification:String(event.verification || "self-reported") };
  }
  function normalizeState(value) {
    if (!value || value.schema !== 1 || !Array.isArray(value.events)) return null;
    return { schema:1, events:value.events.map(sanitizeEvent).filter(Boolean), drafts:value.drafts && typeof value.drafts === "object" ? value.drafts : {}, unlocks:Array.isArray(value.unlocks) ? value.unlocks.filter(Boolean).map(item => ({ name:String(item.name), day:Number(item.day), timestamp:String(item.timestamp || "") })) : [] };
  }
  function loadState() {
    try { const value = localStorage.getItem(storageKey); return value ? normalizeState(JSON.parse(value)) || freshState() : freshState(); }
    catch { storageError = "Không đọc được localStorage. Hãy dùng Xuất progress để giữ bản sao."; return freshState(); }
  }
  let state = loadState(); let visibleDay = 1; let activeDocument = config.challengeFile; let activeLoopStep = 0; let timerSeconds = 0; let timerHandle = null;
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
  const defaultDraft = () => ({ status:"IN_PROGRESS", timeMinutes:"", doneTest:"", meaningScore:"", outputDuration:"", responseLatency:"", supportLevel:"", interactionTurns:"", repairResult:"", evidence:"", mainError:"", nextAction:"", verified:false, sessionStarted:false, sessionStep:0 });
  const draftForDay = day => state.drafts[day] || defaultDraft();
  function renderDayRail() {
    const phases = config.journeyPhases || [{from:1,to:7,label:"Week 1 · Survival"},{from:8,to:14,label:"Week 2 · Conversation"},{from:15,to:21,label:"Week 3 · Real life & work"},{from:22,to:30,label:"Week 4 · Independence"}];
    el.dayGrid.replaceChildren(...phases.map((phase, phaseIndex) => {
      const section = document.createElement("section"); section.className = "journey-phase"; section.dataset.phase = String(phaseIndex + 1);
      const head = document.createElement("header"); const week = document.createElement("span"); week.textContent = `WEEK ${phaseIndex + 1}`; const title = document.createElement("h3"); title.textContent = String(phase.label || "").replace(/^Week\s*\d+\s*[·—-]?\s*/i, "") || `Phase ${phaseIndex + 1}`; const score = document.createElement("output"); const phaseDays = days.filter(entry => entry.day >= phase.from && entry.day <= phase.to); score.textContent = `${phaseDays.filter(entry => isPass(entry.day)).length}/${phaseDays.length}`; head.append(week,title,score);
      const path = document.createElement("div"); path.className = "mission-path";
      path.append(...phaseDays.map(entry => {
      const button = document.createElement("button"); button.type = "button"; button.className = "day-button";
      const unlocked = isUnlocked(entry.day); const status = statusForDay(entry.day);
      button.dataset.state = !unlocked ? "locked" : isPass(entry.day) ? "complete" : status === "BLOCKED" ? "blocked" : terminalStatuses.includes(status) ? "recorded" : "available";
      const number = document.createElement("span"); number.className = "day-number"; number.textContent = String(entry.day).padStart(2,"0");
      const title = document.createElement("span"); title.className = "day-label"; title.textContent = entry.title;
      const stateLabel = document.createElement("span"); stateLabel.className = "day-state"; stateLabel.textContent = !unlocked ? "LOCKED" : status === "NOT_STARTED" ? "AVAILABLE" : status;
      button.append(number,title,stateLabel);
      if ([7,14,21,28,30].includes(entry.day)) { const marker=document.createElement("span"); marker.className="day-marker"; marker.textContent=entry.day===30?"FINAL":"BOSS"; button.append(marker); button.dataset.kind=entry.day===30?"final":"boss"; }
      const lockReason = entry.day > 1 ? `Hoàn thành Ngày ${entry.day - 1} với PASS để mở.` : "";
      button.setAttribute("aria-label", `Ngày ${entry.day} — ${entry.outcome} — ${stateLabel.textContent}${lockReason ? ` — ${lockReason}` : ""}`);
      button.setAttribute("aria-disabled",String(!unlocked));
      button.addEventListener("click",() => { if (!unlocked) { routeNoticeText = lockReason; el.routeNotice.textContent = routeNoticeText; return; } navigateToDay(entry.day); });
      return button;
      }));
      section.append(head,path); return section;
    }));
  }
  function renderPhaseRibbon() {
    const phases = (config.journeyPhases || []).map(phase => ({name:phase.label,days:days.filter(entry => entry.day >= phase.from && entry.day <= phase.to).map(entry => entry.day)}));
    const current = currentDay();
    el.phaseRibbon.replaceChildren(...phases.map((phase,index) => { const item=document.createElement("div"); item.className="phase-note"; item.dataset.state=current>=phase.days[0]&&current<=phase.days.at(-1)?"current":phase.days.every(isPass)?"complete":"upcoming"; const title=document.createElement("strong"); title.textContent=phase.name; const range=document.createElement("span"); range.textContent=`${phase.days.filter(isPass).length}/${phase.days.length} missions`; item.append(title,range); return item; }));
  }
  function chunkTasks(day) {
    const tasks = [];
    chunkBank.schedule.filter(item => item.introduce === day).forEach(item => tasks.push({label:"Activate",ids:item.ids}));
    chunkBank.schedule.filter(item => item.r1 === day).forEach(item => tasks.push({label:"D+2",ids:item.ids}));
    chunkBank.schedule.filter(item => item.r2 === day).forEach(item => tasks.push({label:"D+7",ids:item.ids}));
    if (day >= 22 && day <= 28) { const ranges=[[41,52],[53,64],[65,76],[77,88],[89,100],[101,110],[111,120]]; tasks.push({label:"Recognition",range:ranges[day-22]}); }
    if (day >= 29) tasks.push({label:"Retain",text:"Chỉ dùng chunks đã ACTIVE"});
    return tasks;
  }
  function chunkDue(day) {
    const tasks = chunkTasks(day).map(task => task.ids ? `${task.label} #${task.ids.join("/#")}` : task.range ? `${task.label} ${task.range[0]}–${task.range[1]}` : task.text);
    return tasks.length ? tasks.join(" · ") : "Chưa có chunk retrieval";
  }
  function splitFeedback(value) {
    const parts = String(value || "").split(";").map(part => part.trim()).filter(Boolean);
    return { feedback:parts[0] || value || "Chưa có feedback instruction.", retry:parts.slice(1).join("; ") || "Áp dụng correction rồi thực hiện lại output liên quan; không chỉ đọc đáp án." };
  }
  function errorsDue(day) {
    const items = state.events.filter(event => event.mainError && [1,3].includes(day - event.day)).map(event => ({ day:event.day, error:event.mainError, due:day-event.day===1?"D+1":"D+3" }));
    return items.filter((item,index,array) => array.findIndex(candidate => candidate.error === item.error && candidate.due === item.due) === index);
  }
  function renderChunkCards(day,mode) {
    el.targetChunks.replaceChildren();
    const tasks = chunkTasks(day).filter(task => mode === "learn" ? task.label === "Activate" : mode === "recall" ? task.label !== "Activate" : false);
    if (!tasks.length) return;
    const heading=document.createElement("h4"); heading.textContent=mode === "learn" ? "Production chunks" : "Retrieval queue"; el.targetChunks.append(heading);
    tasks.forEach(task => {
      const group=document.createElement("div"); group.className="chunk-task"; const label=document.createElement("strong"); label.textContent=task.label; group.append(label);
      if (task.ids) task.ids.forEach(id => { const code=document.createElement("code"); code.textContent=`#${id} ${chunkBank.chunks.get(id) || ""}`; group.append(code); });
      else { const copy=document.createElement("span"); copy.textContent=task.range?`Chunks ${task.range[0]}–${task.range[1]}`:task.text; group.append(copy); }
      el.targetChunks.append(group);
    });
  }
  function renderMistakesDue(day) {
    const items=errorsDue(day); el.mistakesDue.replaceChildren(); const heading=document.createElement("h4"); heading.textContent="Mistakes to fix"; el.mistakesDue.append(heading);
    if (!items.length) { const empty=document.createElement("p"); empty.textContent="Chưa có lỗi D+1/D+3 được ghi trong progress. Không tạo dữ liệu giả."; el.mistakesDue.append(empty); return; }
    const list=document.createElement("ul"); items.forEach(item => { const row=document.createElement("li"); row.textContent=`${item.due} · từ Ngày ${item.day}: ${item.error}`; list.append(row); }); el.mistakesDue.append(list);
  }
  function stageResource(step) {
    const assessmentLocked=(config.assessmentGateDays || []).includes(visibleDay)&&!terminalStatuses.includes(statusForDay(visibleDay));
    if (["input","notice"].includes(step.key)) return visibleDay===1 ? {file:"LESSONS.md",label:"Open diagnostic guide"} : assessmentLocked ? {file:"ASSESSMENTS.md",label:"Open assessment first"} : {file:"LESSONS.md",label:"Open lesson source"};
    if (step.key === "imitate") return assessmentLocked ? {file:"ASSESSMENTS.md",label:"Complete assessment first"} : {file:"EXERCISES.md",label:"Open fixed practice"};
    if (step.key === "recall") return {file:config.errorLedgerFile,label:"Mở Error Ledger",docs:true};
    if (["feedback","retry","check"].includes(step.key)) return {evidence:true,label:"Open mission check"};
    return null;
  }
  function splitAtPause(value) {
    const parts = String(value || "").split(";").map(part => part.trim()).filter(Boolean);
    return { first:parts[0] || value || "", rest:parts.slice(1).join("; ") || parts[0] || value || "" };
  }
  function stopTimer() { if (timerHandle) clearInterval(timerHandle); timerHandle = null; if (el.timerToggle) el.timerToggle.textContent = "Start timer"; }
  function paintTimer() { el.timerReadout.textContent = `${String(Math.floor(timerSeconds/60)).padStart(2,"0")}:${String(timerSeconds%60).padStart(2,"0")}`; }
  function renderLoopStep(index) {
    activeLoopStep=Math.max(0,Math.min(index,loopSteps.length-1)); const step=loopSteps[activeLoopStep]; const mission=parseMission(visibleDay),f=mission.fields,repair=splitFeedback(f["Feedback & Retry"]);
    const input=splitAtPause(f["Input + Target language"]);
    const content={ input:["Input",input.first], notice:["Notice",input.rest], imitate:["Imitate",f["Imitate / Controlled"]], recall:["Recall from memory",f["Recall + Reuse"]], produce:["Now it is your turn",f.Production], interact:["Scenario",f.Interaction], feedback:["Key correction",repair.feedback], retry:["Improved attempt",repair.retry], check:["Prove the mission",f.Evidence] }[step.key];
    stopTimer(); document.body.dataset.sessionMode=step.mode.toLowerCase(); el.loopMode.textContent=step.mode;
    [...el.learningLoop.children].forEach((button,buttonIndex) => { button.setAttribute("aria-current",buttonIndex===activeLoopStep?"step":"false"); button.dataset.state=buttonIndex<activeLoopStep?"visited":buttonIndex===activeLoopStep?"current":"upcoming"; });
    el.loopPosition.textContent=`Bước ${activeLoopStep+1}/${loopSteps.length}`; el.loopTitle.textContent=content[0]; el.loopBody.innerHTML=`<p>${renderInline(content[1] || "Chưa có dữ liệu cho bước này.")}</p>`;
    renderChunkCards(visibleDay,step.key === "input" ? "learn" : step.key); el.mistakesDue.replaceChildren(); if(step.key==="recall")renderMistakesDue(visibleDay);
    el.recallCover.hidden=step.key!=="recall"; el.performanceTimer.hidden=step.key!=="produce"; el.missionCheck.classList.toggle("is-active",step.key==="check");
    if(step.key==="recall") el.targetChunks.hidden=true; else el.targetChunks.hidden=false;
    if(step.key==="produce"){timerSeconds=0;paintTimer();}
    const resource=stageResource(step); el.stageResourceButton.hidden=!resource; el.stageResourceButton.disabled=false; if(resource){el.stageResourceButton.textContent=resource.label;el.stageResourceButton.dataset.file=resource.file||"";el.stageResourceButton.dataset.action=resource.docs?"docs":resource.evidence?"evidence":"source";}
    el.loopNextButton.hidden=false; el.loopNextButton.textContent=activeLoopStep<loopSteps.length-1?`Complete · Next ${loopSteps[activeLoopStep+1].label}`:"Go to mission check";
    const draft=draftForDay(visibleDay); draft.sessionStarted=true; draft.sessionStep=activeLoopStep; state.drafts[visibleDay]=draft; saveState();
  }
  function renderMission(day) {
    const mission=parseMission(day),f=mission.fields,isBoss=[7,14,21,28].includes(day),isFinal=day===30;
    el.missionShell.dataset.kind=isFinal?"final":isBoss?"boss":"daily"; el.missionKind.textContent=isFinal?"FINAL INTERACTION":isBoss?"BOSS FIGHT":"TODAY'S MISSION";
    const ability=f["Required ability + support"] || "",support=ability.match(/`(S[1-4](?:→S[1-4])?)`/)?.[1] || ability.match(/\bS[1-4](?:→S[1-4])?\b/)?.[0] || "Support";
    el.nowStepCopy.innerHTML=renderInline(f["Mission / Why"] || days[day-1].outcome); el.missionSupport.textContent=support; el.missionSupport.title=ability; document.getElementById("missionAbility").innerHTML=renderInline(ability); el.missionChallenge.innerHTML=renderInline(f["Production"] || ""); el.missionPass.innerHTML=renderInline(f["Mission Challenge / PASS"] || days[day-1].done); el.chunkDueCopy.textContent=chunkDue(day); el.missionDayReadout.textContent=`${String(day).padStart(2,"0")} / 30`;
    const nextBoss=[7,14,21,28,30].find(value=>value>=day); el.bossDistance.textContent=nextBoss===day?(isFinal?"Final interaction":"Checkpoint today"):nextBoss?`${nextBoss-day} day${nextBoss-day===1?"":"s"} to ${nextBoss===30?"Final":"Boss Fight"}`:"";
    el.learningLoop.replaceChildren(...loopSteps.map((step,index) => { const button=document.createElement("button"); button.type="button"; button.className="loop-step"; button.textContent=step.label; button.addEventListener("click",()=>renderLoopStep(index)); return button; }));
    const draft=draftForDay(day); el.sessionShell.hidden=!draft.sessionStarted; el.startSessionButton.textContent=draft.sessionStarted?"Resume session":"Start session"; activeLoopStep=Math.max(0,Math.min(Number(draft.sessionStep)||0,loopSteps.length-1)); if(draft.sessionStarted)renderLoopStep(activeLoopStep);
  }
  function openStageResource() {
    const action=el.stageResourceButton.dataset.action,file=el.stageResourceButton.dataset.file;
    if(action==="evidence"){el.missionCheck.classList.add("is-active");el.missionCheck.scrollIntoView({block:"start",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});return;}
    if(action==="docs"){selectTab(2);openDocument(file);return;}
    const surface=[...el.dailySources.querySelectorAll(".markdown[data-source]")].find(item=>item.dataset.source===file); if(!surface){el.formMessage.textContent="Tài liệu này mở sau assessment theo đúng gate của ngày.";el.formMessage.dataset.state="error";return;} const disclosure=surface.closest("details");document.querySelector(".day-materials").classList.add("is-active");disclosure.open=true;disclosure.scrollIntoView({block:"start",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
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
    const tracks = config.audioByDay?.[day] || [];
    el.audioSources.replaceChildren(...tracks.map(path => { const card = document.createElement("div"); card.className = "audio-card"; const label = document.createElement("p"); label.textContent = path; const audio = document.createElement("audio"); audio.controls = true; audio.preload = "metadata"; audio.src = path; card.append(label,audio); return card; }));
  }
  function renderLesson() {
    const entry = days[visibleDay - 1]; el.dayPhase.textContent = entry.phase; el.dayTitle.textContent = entry.title; el.dayTitle.tabIndex = -1; document.body.dataset.missionKind=entry.day===30?"final":[7,14,21,28].includes(entry.day)?"boss":"daily";
    document.querySelector(".day-materials").classList.remove("is-active"); el.missionCheck.classList.remove("is-active");
    el.dayOutcome.textContent = entry.outcome; el.dayMinimum.textContent = entry.minimum; el.dayTarget.textContent = entry.target; el.dayDone.textContent = entry.done; el.dayEvidence.textContent = entry.evidence; el.dayStretch.textContent = entry.stretch;
    el.detailStatus.textContent = statusForDay(entry.day); renderMission(entry.day);
    renderDailySources(entry.day); const draft = draftForDay(entry.day); el.statusSelect.value = draft.status; el.timeSpent.value = draft.timeMinutes ?? ""; el.doneTest.value = draft.doneTest ?? ""; el.meaningScore.value=draft.meaningScore ?? ""; el.outputDuration.value=draft.outputDuration ?? ""; el.responseLatency.value=draft.responseLatency ?? ""; el.supportLevel.value=draft.supportLevel ?? ""; el.interactionTurns.value=draft.interactionTurns ?? ""; el.repairResult.value=draft.repairResult ?? ""; el.evidence.value = draft.evidence ?? ""; el.mainError.value = draft.mainError ?? ""; el.nextAction.value = draft.nextAction ?? ""; el.verified.checked = Boolean(draft.verified);
    [el.statusSelect,el.timeSpent,el.doneTest,el.meaningScore,el.outputDuration,el.responseLatency,el.supportLevel,el.interactionTurns,el.repairResult,el.evidence,el.mainError,el.nextAction].forEach(field => field.setAttribute("aria-invalid","false"));
    const latest = latestEvent(entry.day); el.formMessage.dataset.state = "idle"; el.formMessage.textContent = latest ? `Log gần nhất: ${latest.status} · ${latest.timestamp}` : "PASS cần Done test, evidence và xác nhận tự kiểm tra.";
    el.passButton.disabled = isPass(entry.day); el.passButton.textContent = isPass(entry.day) ? "PASS đã ghi" : "Ghi PASS"; el.passButton.dataset.state = isPass(entry.day) ? "success" : "default";
    el.previousButton.disabled = entry.day === 1; el.nextButton.disabled = !isPass(entry.day) || entry.day === 30; el.nextButton.hidden = entry.day === 30; el.actionCopy.textContent = `Ngày ${entry.day} · ${statusForDay(entry.day)}`;
  }
  function renderProgress() {
    el.progressList.replaceChildren(...days.map(entry => { const item = document.createElement("li"); item.className = "progress-item"; const day = document.createElement("span"); day.textContent = `Ngày ${entry.day}`; const title = document.createElement("strong"); title.textContent = entry.outcome; const status = document.createElement("span"); status.className = "progress-state"; status.dataset.state = statusForDay(entry.day); status.textContent = statusForDay(entry.day); item.append(day,title,status); return item; }));
    const measurable = state.events.filter(event => event.status !== "SKIPPED").sort(compareEvents);
    const capabilitySpecs=[
      {label:"Speak longer",key:"outputDuration",unit:"s",better:"higher"},{label:"Respond faster",key:"responseLatency",unit:"s",better:"lower"},{label:"Need less help",key:"supportLevel",unit:"",better:"support"},{label:"Handle more turns",key:"interactionTurns",unit:" turns",better:"higher"},{label:"Recover better",key:"repairResult",unit:"",better:"repair"}
    ];
    el.capabilityGrowth.replaceChildren(...capabilitySpecs.map(spec=>{
      const values=measurable.map(event=>event[spec.key]).filter(value=>value!==null&&value!==undefined&&value!==""); const item=document.createElement("article"); const label=document.createElement("h2"); label.textContent=spec.label; const result=document.createElement("p");
      if(values.length<2) result.textContent="Need more evidence";
      else { const first=values[0],last=values.at(-1); result.textContent=`${first}${spec.unit} → ${last}${spec.unit}`; }
      const note=document.createElement("small"); note.textContent=values.length?`${values.length} recorded attempt${values.length===1?"":"s"}`:"No measurement yet"; item.append(label,result,note); return item;
    }));
    const fixes=state.events.filter(event=>event.mainError).sort(compareEvents).reverse();
    el.errorProgress.replaceChildren(...(fixes.length?fixes.slice(0,8).map(event=>{const item=document.createElement("article");const label=document.createElement("span");label.textContent=`DAY ${String(event.day).padStart(2,"0")}`;const copy=document.createElement("p");copy.textContent=event.mainError;const due=document.createElement("small");due.textContent=`Review Day ${Math.min(30,event.day+1)} and Day ${Math.min(30,event.day+3)}`;item.append(label,copy,due);return item;}):[Object.assign(document.createElement("p"),{textContent:"No recorded correction yet."})]));
    if (!state.events.length) { const item = document.createElement("li"); item.className = "history-item"; item.textContent = "Chưa có log."; el.historyList.replaceChildren(item); }
    else el.historyList.replaceChildren(...[...state.events].sort(compareEvents).reverse().map(event => { const item = document.createElement("li"); item.className = "history-item"; const meta = document.createElement("div"); meta.className = "history-meta"; meta.textContent = `Buổi ${event.session} · Ngày ${event.day} · ${event.status} · ${event.timestamp}`; const performance=document.createElement("p"); performance.className="performance-metrics"; performance.textContent=`Meaning ${event.meaningScore ?? "—"}% · Output ${event.outputDuration ?? "—"}s · Latency ${event.responseLatency ?? "—"}s · Support ${event.supportLevel || "—"} · Turns ${event.interactionTurns ?? "—"} · Repair ${event.repairResult || "—"}`; const detail = document.createElement("p"); detail.textContent = `Thời gian: ${event.timeMinutes === null ? "—" : `${event.timeMinutes}'`} · Done test: ${event.doneTest || "—"} · Evidence: ${event.evidence || "—"} · Lỗi: ${event.mainError || "—"} · Next: ${event.nextAction || "—"} · ${event.verification}`; item.append(meta,performance,detail); return item; }));
  }
  function renderSummary() { const passes = days.filter(entry => isPass(entry.day)).length; const today=currentDay(); const phase=(config.journeyPhases||[]).find(item=>today>=item.from&&today<=item.to); el.currentDayReadout.textContent = String(today).padStart(2,"0"); el.railOutput.textContent = `${passes}/30`; el.chunkSummary.textContent = `${phase?.label || "30-day journey"} · ${passes} PASS`; el.currentMissionCopy.textContent=days[today-1]?.outcome||""; el.launchCurrentButton.textContent=state.drafts[today]?.sessionStarted?"Resume mission":"Open mission"; el.runStatus.textContent = statusForDay(30) === "PASS" ? "PASS" : state.events.length ? "IN_PROGRESS" : "DRAFT"; }
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
  function syncDraft() { if(activeRoute.kind!=="day")return; const existing=draftForDay(visibleDay); state.drafts[visibleDay] = { status:el.statusSelect.value,timeMinutes:el.timeSpent.value,doneTest:el.doneTest.value,meaningScore:el.meaningScore.value,outputDuration:el.outputDuration.value,responseLatency:el.responseLatency.value,supportLevel:el.supportLevel.value,interactionTurns:el.interactionTurns.value,repairResult:el.repairResult.value,evidence:el.evidence.value,mainError:el.mainError.value,nextAction:el.nextAction.value,verified:el.verified.checked,sessionStarted:Boolean(existing.sessionStarted),sessionStep:Number(existing.sessionStep)||0 }; saveState(); }
  [el.statusSelect,el.timeSpent,el.doneTest,el.meaningScore,el.outputDuration,el.responseLatency,el.supportLevel,el.interactionTurns,el.repairResult,el.evidence,el.mainError,el.nextAction,el.verified].forEach(field => field.addEventListener("input",syncDraft));
  function formMessage(message,stateName,invalid=[]) { [el.statusSelect,el.timeSpent,el.doneTest,el.meaningScore,el.outputDuration,el.responseLatency,el.supportLevel,el.interactionTurns,el.repairResult,el.evidence,el.mainError,el.nextAction].forEach(field => field.setAttribute("aria-invalid",String(invalid.includes(field)))); el.formMessage.textContent = message; el.formMessage.dataset.state = stateName; invalid[0]?.focus(); }
  function appendProgress(status) {
    syncDraft(); const draft = draftForDay(visibleDay); const evidence = draft.evidence.trim(); const doneTest = draft.doneTest.trim();
    if (status === "PASS" && (!evidence || !doneTest || !draft.verified)) return formMessage("PASS cần Done test, evidence và xác nhận tự kiểm tra.","error",[!doneTest && el.doneTest,!evidence && el.evidence].filter(Boolean));
    if (["IN_PROGRESS","PARTIAL"].includes(status) && !evidence) return formMessage(`${status} cần evidence của phần đã làm.`,"error",[el.evidence]);
    if (status === "BLOCKED" && !(draft.mainError||"").trim()) return formMessage("BLOCKED cần blocker cụ thể.","error",[el.mainError]);
    if (status === "SKIPPED" && !(draft.nextAction||"").trim()) return formMessage("SKIPPED cần next action.","error",[el.nextAction]);
    state.events.push(sanitizeEvent({id:eventId(),timestamp:new Date().toISOString(),session:nextSession(),day:visibleDay,status,timeMinutes:draft.timeMinutes,doneTest,meaningScore:draft.meaningScore,outputDuration:draft.outputDuration,responseLatency:draft.responseLatency,supportLevel:draft.supportLevel,interactionTurns:draft.interactionTurns,repairResult:draft.repairResult,evidence,mainError:(draft.mainError||"").trim(),nextAction:(draft.nextAction||"").trim(),verification:status === "PASS" ? "self-reported" : "not-verified"})); delete state.drafts[visibleDay]; saveState(); render(); formMessage(`Đã thêm log ${status}. Log cũ không bị sửa.`,"success");
  }
  el.evidenceForm.addEventListener("submit",event => { event.preventDefault(); appendProgress(el.statusSelect.value); }); el.passButton.addEventListener("click",() => appendProgress("PASS"));
  el.previousButton.addEventListener("click",() => { if(visibleDay<=1)return; navigateToDay(visibleDay-1); });
  el.nextButton.addEventListener("click",() => { if (!isPass(visibleDay) || visibleDay >= 30) return; navigateToDay(visibleDay+1); });
  el.backToOverview.addEventListener("click",navigateToOverview);
  el.startSessionButton.addEventListener("click",()=>{const draft=draftForDay(visibleDay);draft.sessionStarted=true;draft.sessionStep=Number(draft.sessionStep)||0;state.drafts[visibleDay]=draft;saveState();el.sessionShell.hidden=false;renderLoopStep(draft.sessionStep);el.sessionShell.scrollIntoView({block:"start",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});});
  el.launchCurrentButton.addEventListener("click",()=>navigateToDay(currentDay()));
  el.loopNextButton.addEventListener("click",()=>{if(activeLoopStep<loopSteps.length-1)renderLoopStep(activeLoopStep+1);else{el.missionCheck.classList.add("is-active");el.missionCheck.scrollIntoView({block:"start",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});}}); el.stageResourceButton.addEventListener("click",openStageResource);
  el.revealRecallButton.addEventListener("click",()=>{el.recallCover.hidden=true;el.targetChunks.hidden=false;el.revealRecallButton.textContent="Revealed";});
  el.timerToggle.addEventListener("click",()=>{if(timerHandle){stopTimer();return;}el.timerToggle.textContent="Pause timer";timerHandle=setInterval(()=>{timerSeconds+=1;paintTimer();},1000);});
  el.timerReset.addEventListener("click",()=>{stopTimer();timerSeconds=0;paintTimer();});
  el.exportButton.addEventListener("click",() => { const blob = new Blob([JSON.stringify(state,null,2)],{type:"application/json"}); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = `${config.slug}-progress.json`; link.click(); URL.revokeObjectURL(url); });
  el.importButton.addEventListener("click",() => el.importInput.click()); el.importInput.addEventListener("change",async event => { const file = event.target.files?.[0]; if (!file) return; try { const imported = normalizeState(JSON.parse(await file.text())); if (!imported) throw new Error("invalid"); const ids = new Set(state.events.map(item => item.id)); state.events.push(...imported.events.filter(item => !ids.has(item.id))); state.drafts = {...imported.drafts,...state.drafts}; const unlocks = new Set(state.unlocks.map(item => `${item.name}:${item.day}:${item.timestamp}`)); state.unlocks.push(...imported.unlocks.filter(item => !unlocks.has(`${item.name}:${item.day}:${item.timestamp}`))); saveState(); visibleDay = currentDay(); render(); el.storageMessage.textContent = "Đã hợp nhất progress; log hiện có được giữ nguyên."; el.storageMessage.dataset.state = "success"; } catch { el.storageMessage.textContent = "File progress không hợp lệ; dữ liệu hiện có được giữ nguyên."; el.storageMessage.dataset.state = "error"; } finally { event.target.value = ""; } });
  const tabs = [document.getElementById("learnTab"),document.getElementById("progressTab"),document.getElementById("docsTab")]; const panels = [document.getElementById("learnPanel"),document.getElementById("progressPanel"),document.getElementById("docsPanel")];
  function selectTab(active) { tabs.forEach((tab,index) => { const selected = index === active; tab.setAttribute("aria-selected",String(selected)); tab.tabIndex = selected ? 0 : -1; panels[index].hidden = !selected; }); el.dayActionBar.hidden=active!==0||activeRoute.kind!=="day"; }
  tabs.forEach((tab,index) => { tab.addEventListener("click",() => selectTab(index)); tab.addEventListener("keydown",event => { if (!['ArrowLeft','ArrowRight'].includes(event.key)) return; event.preventDefault(); const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length; selectTab(next); tabs[next].focus({preventScroll:true}); }); });
  window.addEventListener("popstate",()=>{selectTab(0);applyRoute({focus:true});}); window.addEventListener("hashchange",()=>{selectTab(0);applyRoute({focus:true});});
  const challenge = readFile(config.challengeFile); el.challengeTitle.textContent = firstHeading(challenge); el.challengeLede.textContent = firstParagraph(challenge);  document.title = firstHeading(challenge); visibleDay = currentDay(); openDocument(activeDocument,true); if(!location.hash)history.replaceState(null,"","#overview"); applyRoute();
})();
