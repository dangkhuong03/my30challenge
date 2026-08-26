(() => {
  "use strict";
  const config = window.CHALLENGE_APP || {};
  const payloads = Object.fromEntries((window.CHALLENGE_CONTENT || []).map(file => [file.name, file]));
  const cache = {};
  const readFile = name => {
    if (!(name in cache)) {
      const file = payloads[name];
      if (!file) return "";
      cache[name] = new TextDecoder().decode(Uint8Array.from(atob(file.base64), character => character.charCodeAt(0)));
    }
    return cache[name];
  };
  const ids = ["challengeTitle","challengeLede","passCount","currentDayReadout","runStatus","railOutput","dayGrid","dayPhase","dayTitle","dayOutcome","dayMinimum","dayTarget","dayDone","dayEvidence","dayStretch","dailySources","audioSources","evidenceForm","statusSelect","timeSpent","doneTest","evidence","mainError","nextAction","verified","passButton","formMessage","progressList","historyList","exportButton","importButton","importInput","storageMessage","documentRail","documentTitle","documentNotice","documentContent","footerCopy","actionCopy","nextButton"];
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
  function saveState() {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); storageError = ""; renderStorage(); return true; }
    catch { storageError = "Không lưu được localStorage. Hãy dùng Xuất progress để giữ bản sao."; renderStorage(); return false; }
  }
  const compareEvents = (a,b) => (Date.parse(a.timestamp) - Date.parse(b.timestamp)) || (a.session - b.session);
  const eventsForDay = day => state.events.filter(event => event.day === day);
  const latestEvent = day => eventsForDay(day).sort(compareEvents).at(-1) || null;
  const statusForDay = day => latestEvent(day)?.status || "NOT_STARTED";
  const isPass = day => statusForDay(day) === "PASS";
  function contiguousPasses() { let count = 0; while (count < 30 && isPass(count + 1)) count += 1; return count; }
  const currentDay = () => Math.min(contiguousPasses() + 1, 30);
  const isUnlocked = day => day <= Math.min(contiguousPasses() + 1, 30);
  const nextSession = () => state.events.reduce((max,event) => Math.max(max,event.session),0) + 1;
  const defaultDraft = () => ({ status:"IN_PROGRESS", timeMinutes:"", doneTest:"", evidence:"", mainError:"", nextAction:"", verified:false });
  const draftForDay = day => state.drafts[day] || defaultDraft();
  function renderDayRail() {
    el.dayGrid.replaceChildren(...days.map(entry => {
      const button = document.createElement("button"); button.type = "button"; button.className = "day-button"; button.textContent = String(entry.day).padStart(2,"0"); button.disabled = !isUnlocked(entry.day);
      button.dataset.state = isPass(entry.day) ? "complete" : ["PARTIAL","SKIPPED","BLOCKED"].includes(statusForDay(entry.day)) ? "recorded" : entry.day === visibleDay ? "current" : "idle";
      button.setAttribute("aria-label", `Ngày ${entry.day} — ${entry.outcome} — ${statusForDay(entry.day)}`); if (entry.day === visibleDay) button.setAttribute("aria-current","step");
      button.addEventListener("click", () => { visibleDay = entry.day; render(); el.dayTitle.focus({preventScroll:true}); }); return button;
    }));
  }
  function renderDailySources(day) {
    const sections = (config.dailySources || []).map(source => ({ name:source.file, content:selectorContent(source.file,source.selector,day) })).filter(section => section.content);
    el.dailySources.replaceChildren(...sections.map(section => { const surface = document.createElement("section"); surface.className = "markdown"; surface.dataset.source = section.name; surface.innerHTML = renderMarkdown(section.content); return surface; }));
    const tracks = config.audioByDay?.[day] || [];
    el.audioSources.replaceChildren(...tracks.map(path => { const card = document.createElement("div"); card.className = "audio-card"; const label = document.createElement("p"); label.textContent = path; const audio = document.createElement("audio"); audio.controls = true; audio.preload = "metadata"; audio.src = path; card.append(label,audio); return card; }));
  }
  function renderLesson() {
    const entry = days[visibleDay - 1]; el.dayPhase.textContent = entry.phase; el.dayTitle.textContent = `Ngày ${entry.day} — ${entry.title}`; el.dayTitle.tabIndex = -1;
    el.dayOutcome.textContent = entry.outcome; el.dayMinimum.textContent = entry.minimum; el.dayTarget.textContent = entry.target; el.dayDone.textContent = entry.done; el.dayEvidence.textContent = entry.evidence; el.dayStretch.textContent = entry.stretch;
    renderDailySources(entry.day); const draft = draftForDay(entry.day); el.statusSelect.value = draft.status; el.timeSpent.value = draft.timeMinutes; el.doneTest.value = draft.doneTest; el.evidence.value = draft.evidence; el.mainError.value = draft.mainError; el.nextAction.value = draft.nextAction; el.verified.checked = draft.verified;
    [el.statusSelect,el.timeSpent,el.doneTest,el.evidence,el.mainError,el.nextAction].forEach(field => field.setAttribute("aria-invalid","false"));
    const latest = latestEvent(entry.day); el.formMessage.dataset.state = "idle"; el.formMessage.textContent = latest ? `Log gần nhất: ${latest.status} · ${latest.timestamp}` : "PASS cần Done test, evidence và xác nhận tự kiểm tra.";
    el.passButton.disabled = isPass(entry.day); el.passButton.textContent = isPass(entry.day) ? "PASS đã ghi" : "Ghi PASS"; el.passButton.dataset.state = isPass(entry.day) ? "success" : "default";
    el.nextButton.disabled = !isPass(entry.day) || entry.day === 30; el.nextButton.hidden = entry.day === 30; el.actionCopy.textContent = `Ngày ${entry.day} · ${statusForDay(entry.day)}`;
  }
  function renderProgress() {
    el.progressList.replaceChildren(...days.map(entry => { const item = document.createElement("li"); item.className = "progress-item"; const day = document.createElement("span"); day.textContent = `Ngày ${entry.day}`; const title = document.createElement("strong"); title.textContent = entry.outcome; const status = document.createElement("span"); status.className = "progress-state"; status.dataset.state = statusForDay(entry.day); status.textContent = statusForDay(entry.day); item.append(day,title,status); return item; }));
    if (!state.events.length) { const item = document.createElement("li"); item.className = "history-item"; item.textContent = "Chưa có log."; el.historyList.replaceChildren(item); }
    else el.historyList.replaceChildren(...[...state.events].sort(compareEvents).reverse().map(event => { const item = document.createElement("li"); item.className = "history-item"; const meta = document.createElement("div"); meta.className = "history-meta"; meta.textContent = `Buổi ${event.session} · Ngày ${event.day} · ${event.status} · ${event.timestamp}`; const detail = document.createElement("p"); detail.textContent = `Thời gian: ${event.timeMinutes === null ? "—" : `${event.timeMinutes}'`} · Done test: ${event.doneTest || "—"} · Evidence: ${event.evidence || "—"} · Lỗi: ${event.mainError || "—"} · Next: ${event.nextAction || "—"} · ${event.verification}`; item.append(meta,detail); return item; }));
  }
  function renderSummary() { const passes = days.filter(entry => isPass(entry.day)).length; el.passCount.textContent = passes; el.currentDayReadout.textContent = String(currentDay()).padStart(2,"0"); el.railOutput.textContent = `${passes}/30`; el.runStatus.textContent = statusForDay(30) === "PASS" ? "PASS" : state.events.length ? "IN_PROGRESS" : "DRAFT"; }
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
    renderDayRail(); renderLesson(); renderProgress(); renderSummary(); renderStorage();
    if (config.protectedDocs?.[activeDocument] && !hasUnlock(activeDocument,visibleDay)) { activeDocument = config.challengeFile; openDocument(activeDocument,true); }
  }
  function syncDraft() { state.drafts[visibleDay] = { status:el.statusSelect.value,timeMinutes:el.timeSpent.value,doneTest:el.doneTest.value,evidence:el.evidence.value,mainError:el.mainError.value,nextAction:el.nextAction.value,verified:el.verified.checked }; saveState(); }
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
  el.nextButton.addEventListener("click",() => { if (!isPass(visibleDay) || visibleDay >= 30) return; visibleDay += 1; render(); el.dayTitle.focus({preventScroll:true}); window.scrollTo({top:document.getElementById("learnPanel").offsetTop - 72,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"}); });
  el.exportButton.addEventListener("click",() => { const blob = new Blob([JSON.stringify(state,null,2)],{type:"application/json"}); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = `${config.slug}-progress.json`; link.click(); URL.revokeObjectURL(url); });
  el.importButton.addEventListener("click",() => el.importInput.click()); el.importInput.addEventListener("change",async event => { const file = event.target.files?.[0]; if (!file) return; try { const imported = normalizeState(JSON.parse(await file.text())); if (!imported) throw new Error("invalid"); const ids = new Set(state.events.map(item => item.id)); state.events.push(...imported.events.filter(item => !ids.has(item.id))); state.drafts = {...imported.drafts,...state.drafts}; const unlocks = new Set(state.unlocks.map(item => `${item.name}:${item.day}:${item.timestamp}`)); state.unlocks.push(...imported.unlocks.filter(item => !unlocks.has(`${item.name}:${item.day}:${item.timestamp}`))); saveState(); visibleDay = currentDay(); render(); el.storageMessage.textContent = "Đã hợp nhất progress; log hiện có được giữ nguyên."; el.storageMessage.dataset.state = "success"; } catch { el.storageMessage.textContent = "File progress không hợp lệ; dữ liệu hiện có được giữ nguyên."; el.storageMessage.dataset.state = "error"; } finally { event.target.value = ""; } });
  const tabs = [document.getElementById("learnTab"),document.getElementById("progressTab"),document.getElementById("docsTab")]; const panels = [document.getElementById("learnPanel"),document.getElementById("progressPanel"),document.getElementById("docsPanel")];
  function selectTab(active) { tabs.forEach((tab,index) => { const selected = index === active; tab.setAttribute("aria-selected",String(selected)); tab.tabIndex = selected ? 0 : -1; panels[index].hidden = !selected; }); }
  tabs.forEach((tab,index) => { tab.addEventListener("click",() => selectTab(index)); tab.addEventListener("keydown",event => { if (!['ArrowLeft','ArrowRight'].includes(event.key)) return; event.preventDefault(); const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length; selectTab(next); tabs[next].focus({preventScroll:true}); }); });
  const challenge = readFile(config.challengeFile); el.challengeTitle.textContent = firstHeading(challenge); el.challengeLede.textContent = firstParagraph(challenge); el.footerCopy.textContent = firstHeading(challenge); document.title = firstHeading(challenge); visibleDay = currentDay(); openDocument(activeDocument,true); render();
})();
