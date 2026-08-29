(function () {
  "use strict";

  const data = window.CHALLENGE_FRAME_DATA;

  if (!data || !Array.isArray(data.days) || !Array.isArray(data.sections)) {
    document.body.innerHTML = "<main><h1>Challenge data unavailable</h1><p>Load the approved content before the interface script.</p></main>";
    return;
  }

  const storageKey = data.challenge.progressStorageKey || `${data.challenge.id}-progress`;

  function loadProgress() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(storageKey) || "{}");
      return stored && typeof stored === "object" ? stored : {};
    } catch (_error) {
      return {};
    }
  }

  const state = {
    selectedDay: data.challenge.currentDay,
    currentDay: data.challenge.currentDay,
    progress: loadProgress()
  };

  const elements = {
    challengeTitles: document.querySelectorAll("[data-challenge-title]"),
    challengeShortTitles: document.querySelectorAll("[data-challenge-short-title]"),
    challengeMarks: document.querySelectorAll("[data-challenge-mark]"),
    challengeMapTitles: document.querySelectorAll("[data-challenge-map-title]"),
    challengeHome: document.querySelector("[data-challenge-home]"),
    primaryNavigation: document.querySelector("[data-primary-navigation]"),
    daysDialogTitle: document.querySelector("[data-days-dialog-title]"),
    lessonSections: document.querySelector("[data-lesson-sections]"),
    sectionNavigation: document.querySelector("[data-section-navigation]"),
    sectionNavHint: document.querySelector("[data-section-nav-hint]"),
    dayGrids: document.querySelectorAll("[data-day-grid], [data-mobile-day-grid]"),
    dayLabel: document.querySelector("[data-day-label]"),
    mobileDayLabel: document.querySelector("[data-mobile-day-label]"),
    dayTime: document.querySelector("[data-day-time]"),
    dayStatus: document.querySelector("[data-day-status]"),
    lessonTitle: document.querySelector("[data-lesson-title]"),
    lessonObjective: document.querySelector("[data-lesson-objective]"),
    dailyProgress: document.querySelector("[data-daily-progress]"),
    completedCount: document.querySelector("[data-completed-count]"),
    progressRing: document.querySelector("[data-progress-ring]"),
    progressValue: document.querySelector("[data-progress-value]"),
    currentSupport: document.querySelector("[data-current-support]"),
    lastEvidence: document.querySelector("[data-last-evidence]"),
    supportLevel: document.querySelector("[data-support-level]"),
    comprehensionScore: document.querySelector("[data-comprehension-score]"),
    responseLatency: document.querySelector("[data-response-latency]"),
    scoreMethod: document.querySelector("[data-score-method]"),
    completionHeading: document.querySelector("[data-completion-heading]"),
    completionCopy: document.querySelector("[data-completion-copy]"),
    retrievalSlot: document.querySelector("[data-slot='retrieval']"),
    listeningSlot: document.querySelector("[data-slot='listening']"),
    lessonSlot: document.querySelector("[data-slot='lesson']"),
    resourceList: document.querySelector("[data-resource-list]"),
    resourceEmpty: document.querySelector("[data-resource-empty]"),
    aiPromptTitle: document.querySelector("[data-ai-prompt-title]"),
    aiPromptSummary: document.querySelector("[data-ai-prompt-summary]"),
    aiSupportPrompt: document.querySelector("[data-ai-support-prompt]"),
    copyAiPrompt: document.querySelector("[data-copy-ai-prompt]"),
    practiceSteps: document.querySelector("[data-practice-steps]"),
    assessmentStations: document.querySelector("[data-assessment-stations]"),
    missionCopy: document.querySelector("[data-mission-copy]"),
    evidenceRequirement: document.querySelector("[data-evidence-requirement]"),
    passCriteria: document.querySelector("[data-pass-criteria]"),
    feedbackCopy: document.querySelector("[data-feedback-copy]"),
    checkpointCard: document.querySelector("[data-checkpoint-card]"),
    evidenceForm: document.querySelector("[data-evidence-form]"),
    evidenceNote: document.querySelector("#evidence-note"),
    evidenceHelp: document.querySelector("[data-evidence-help]"),
    evidenceFile: document.querySelector("[data-evidence-file]"),
    fileName: document.querySelector("[data-file-name]"),
    evidenceSubmit: document.querySelector("[data-evidence-submit]"),
    submitLabel: document.querySelector("[data-submit-label]"),
    submissionResult: document.querySelector("[data-submission-result]"),
    daysDialog: document.querySelector("[data-days-dialog]"),
    toast: document.querySelector("[data-toast]"),
    liveRegion: document.querySelector("[data-live-region]")
  };

  const statusLabels = { completed: "Completed", active: "In progress", available: "Available", locked: "Locked" };

  function getDay(number) {
    return data.days.find((day) => day.number === number);
  }

  function blankDayRecord() {
    return {
      checks: { recall: false, input: false, language: false, practice: false, mission: false, evidence: false, feedback: false },
      support: "",
      comprehension: "",
      latency: "",
      scoreMethod: "",
      evidenceSaved: false,
      evidenceSavedAt: 0,
      completed: false
    };
  }

  function getDayRecord(number) {
    if (!state.progress[number]) state.progress[number] = blankDayRecord();
    const record = state.progress[number];
    record.checks = { ...blankDayRecord().checks, ...(record.checks || {}) };
    return record;
  }

  function saveProgress() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state.progress));
    } catch (_error) {
      showToast("Progress works for this session, but this browser blocked local storage.");
    }
  }

  function recomputeCurrentDay() {
    const firstIncomplete = data.days.find((day) => !getDayRecord(day.number).completed);
    state.currentDay = firstIncomplete?.number || data.challenge.durationDays;
  }

  function getEffectiveDayState(day) {
    if (getDayRecord(day.number).completed) return "completed";
    if (day.number === state.currentDay) return "active";
    if (day.number > state.currentDay) return "locked";
    return "available";
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function announce(message) {
    elements.liveRegion.textContent = "";
    window.requestAnimationFrame(() => { elements.liveRegion.textContent = message; });
  }

  let toastTimer;
  function showToast(message) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.hidden = false;
    toastTimer = window.setTimeout(() => { elements.toast.hidden = true; }, 5000);
  }

  function makeElement(tagName, options = {}) {
    const element = document.createElement(tagName);
    if (options.className) element.className = options.className;
    if (options.text) element.textContent = options.text;
    return element;
  }

  function createNavigationLink(label, target) {
    const link = document.createElement("a");
    link.href = `#${target}`;
    link.textContent = label;
    return link;
  }

  function updateSectionNavHint() {
    const nav = elements.sectionNavigation;
    const hasOverflow = nav.scrollWidth > nav.clientWidth + 1;
    elements.sectionNavHint.hidden = !hasOverflow;
    if (!hasOverflow) return;
    const atEnd = nav.scrollLeft + nav.clientWidth >= nav.scrollWidth - 2;
    elements.sectionNavHint.textContent = atEnd ? "← More steps" : "More steps →";
    elements.sectionNavHint.setAttribute("aria-label", atEnd ? "Show earlier lesson steps" : "Show more lesson steps");
  }

  function renderFrameConfiguration() {
    const challenge = data.challenge;
    document.title = challenge.title;
    elements.challengeTitles.forEach((element) => { element.textContent = challenge.title; });
    elements.challengeShortTitles.forEach((element) => { element.textContent = challenge.shortTitle; });
    elements.challengeMarks.forEach((element) => { element.textContent = String(challenge.durationDays); });
    elements.challengeMapTitles.forEach((element) => { element.textContent = challenge.mapTitle; });
    elements.challengeHome.setAttribute("aria-label", `${challenge.title} home`);
    elements.daysDialogTitle.textContent = `All ${challenge.durationDays} days`;
    elements.primaryNavigation.replaceChildren(...data.navigation.map((item) => createNavigationLink(item.label, item.target)));

    const sectionElements = new Map(
      [...elements.lessonSections.querySelectorAll("[data-section-id]")].map((section) => [section.dataset.sectionId, section])
    );
    const sectionLinks = [];
    data.sections.forEach((sectionConfig) => {
      const section = sectionElements.get(sectionConfig.id);
      if (!section) return;
      section.hidden = false;
      section.id = sectionConfig.id;
      const title = section.querySelector("[data-section-title]");
      const description = section.querySelector("[data-section-description]");
      const titleId = `${sectionConfig.id}-title`;
      title.id = titleId;
      title.textContent = sectionConfig.title;
      if (description && !description.matches("[data-mission-copy]")) description.textContent = sectionConfig.description;
      section.setAttribute("aria-labelledby", titleId);
      elements.lessonSections.appendChild(section);
      sectionLinks.push(createNavigationLink(sectionConfig.label, sectionConfig.id));
    });
    elements.sectionNavigation.replaceChildren(...sectionLinks);
    window.requestAnimationFrame(updateSectionNavHint);
  }

  function createDayButton(day) {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const dayState = getEffectiveDayState(day);
    button.type = "button";
    button.textContent = String(day.number);
    button.dataset.day = String(day.number);
    button.dataset.state = dayState;
    button.setAttribute("aria-label", `${day.label}: ${day.title}. ${statusLabels[dayState]}`);
    if (dayState === "locked") button.setAttribute("aria-disabled", "true");
    if (day.number === state.selectedDay) button.setAttribute("aria-current", "step");
    item.appendChild(button);
    return item;
  }

  function renderDayGrids() {
    elements.dayGrids.forEach((grid) => {
      const fragment = document.createDocumentFragment();
      data.days.forEach((day) => fragment.appendChild(createDayButton(day)));
      grid.replaceChildren(fragment);
    });
  }

  function renderRetrieval(day) {
    elements.retrievalSlot.replaceChildren(
      makeElement("p", { className: "lesson-card__eyebrow", text: day.kind === "assessment" ? "Assessment setup" : "15 minutes · No notes" }),
      makeElement("h3", { text: day.kind === "assessment" ? day.assessmentType : "Retrieve before restudy" }),
      makeElement("p", { text: day.kind === "assessment" ? day.briefing : day.recall })
    );
  }

  function renderListening(day) {
    elements.listeningSlot.replaceChildren(
      makeElement("p", { className: "lesson-card__eyebrow", text: day.kind === "assessment" ? "Validity gate" : "45 minutes" }),
      makeElement("h3", { text: day.kind === "assessment" ? "Conditions before scoring" : "Attempt, analyse, notice" }),
      makeElement("p", { className: "lesson-card__guidance", text: day.kind === "assessment" ? day.validity : day.input })
    );
  }

  function renderLearning(day) {
    const primary = makeElement("div", { className: "pattern-note" });
    primary.append(makeElement("span", { text: day.kind === "assessment" ? "Assessment type" : "Primary skill" }), makeElement("p", { text: day.kind === "assessment" ? day.assessmentType : day.primarySkill }));
    const secondary = makeElement("div", { className: "pattern-note pattern-note--neutral" });
    secondary.append(makeElement("span", { text: day.kind === "assessment" ? "Score record" : "Maintenance skill" }), makeElement("p", { text: day.kind === "assessment" ? day.dailyScore : day.maintenanceSkill }));
    const children = [primary, secondary];
    if (day.kind === "lesson") children.push(makeElement("p", { className: "lesson-card__guidance", text: day.language }));
    elements.lessonSlot.replaceChildren(...children);
  }

  function renderResources(day) {
    const assigned = day.resources.map((id) => data.resources[id]).filter(Boolean);
    elements.resourceEmpty.hidden = assigned.length > 0;
    elements.resourceList.hidden = assigned.length === 0;
    const rows = assigned.map((resource, index) => {
      const row = makeElement("article", { className: "resource-row" });
      const body = document.createElement("div");
      const link = document.createElement("a");
      link.href = resource.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = resource.title;
      const title = document.createElement("h3");
      title.appendChild(link);
      body.append(title, makeElement("p", { text: `${resource.provider}. ${resource.access}.` }));
      row.append(
        makeElement("span", { className: "resource-row__index", text: String(index + 1).padStart(2, "0") }),
        body,
        makeElement("span", { className: "slot-tag", text: resource.id })
      );
      return row;
    });
    elements.resourceList.replaceChildren(...rows);
    if (day.kind === "lesson" && day.resourcesInstruction) {
      elements.resourceEmpty.hidden = true;
      elements.resourceList.hidden = false;
      elements.resourceList.prepend(makeElement("p", { className: "lesson-card__guidance", text: day.resourcesInstruction }));
    }
  }

  function renderPractice(day) {
    const attempts = day.kind === "assessment" ? [] : day.practice;
    const items = attempts.map((attempt, index) => {
      const item = document.createElement("li");
      const body = document.createElement("div");
      body.append(makeElement("h3", { text: `Practice step ${index + 1}` }), makeElement("p", { text: attempt.instruction }));
      item.append(
        makeElement("span", { className: "practice-step__number", text: String(index + 1) }),
        body,
        makeElement("span", { className: "support-level", text: attempt.level })
      );
      return item;
    });
    elements.practiceSteps.replaceChildren(...items);

    const components = day.kind === "assessment" ? day.components : [];
    elements.assessmentStations.hidden = components.length === 0;
    const stationCards = components.map((component, index) => {
      const card = makeElement("article", { className: "station-card" });
      card.append(
        makeElement("span", { className: "lesson-card__eyebrow", text: `Component ${index + 1}` }),
        makeElement("h3", { text: component.name }),
        makeElement("p", { text: component.instruction })
      );
      return card;
    });
    elements.assessmentStations.replaceChildren(...stationCards);
  }

  function renderAiSupport(day) {
    elements.aiPromptTitle.textContent = day.kind === "assessment"
      ? "Use AI without invalidating the assessment"
      : `Learn Day ${day.number} with an AI tutor`;
    elements.aiPromptSummary.textContent = day.kind === "assessment"
      ? "Before answers are locked, AI may explain procedure only. After submission, it can review evidence and plan remediation."
      : "The tutor teaches step by step, explains meaning and pronunciation, checks understanding, then evaluates your submitted work.";
    elements.aiSupportPrompt.value = day.aiSupportPrompt;
  }

  function renderMissionAndFeedback(day) {
    elements.missionCopy.textContent = day.kind === "assessment" ? day.objective : day.mission;
    elements.evidenceRequirement.textContent = day.evidenceRequirement;
    elements.passCriteria.textContent = day.kind === "assessment" ? day.validity : day.passCriteria;
    elements.feedbackCopy.textContent = day.kind === "assessment" ? day.review : day.feedback;
    elements.checkpointCard.hidden = false;
    const scoreChildren = day.kind === "assessment"
      ? [makeElement("span", { className: "lesson-card__eyebrow", text: "Score and provenance" }), makeElement("p", { text: day.score })]
      : [makeElement("span", { className: "lesson-card__eyebrow", text: "Daily score record" })];
    elements.checkpointCard.replaceChildren(
      ...scoreChildren,
      makeElement("p", { text: day.dailyScore }),
      makeElement("strong", { text: "Next retrieval" }),
      makeElement("p", { text: day.nextRetrieval })
    );
  }

  function configureDaySections(day) {
    const configs = day.kind === "assessment"
      ? [["retrieval", "Briefing", "Briefing"], ["listening", "Validity", "Validity conditions"], ["learn", "Assessment", "Assessment information"], ["resources", "Resources", "Registered materials"], ["ai-support", "AI Coach", "AI assessment support"], ["practice", "Components", "Four assessed components"], ["mission", "Outcome", "Assessment outcome"], ["evidence", "Evidence", "Evidence package"], ["feedback", "Score & review", "Score and remediation"]]
      : data.sections.map((section) => [section.id, section.label, section.title]);
    elements.sectionNavigation.replaceChildren(...configs.map(([id, label]) => createNavigationLink(label, id)));
    configs.forEach(([id, , title]) => {
      const heading = document.querySelector(`[data-section-id="${id}"] [data-section-title]`);
      if (heading) heading.textContent = title;
    });
    const lessonLabels = { recall: "R · Recall", input: "I · Input", language: "L · Language", practice: "P · Practice", mission: "M · Mission", evidence: "E · Evidence", feedback: "F · Feedback and retry" };
    const assessmentLabels = { recall: "Briefing", input: "Listening", language: "Reading", practice: "Writing", mission: "Speaking", evidence: "Evidence", feedback: "Score and review" };
    document.querySelectorAll("[data-check-label]").forEach((label) => { label.textContent = (day.kind === "assessment" ? assessmentLabels : lessonLabels)[label.dataset.checkLabel]; });
    window.requestAnimationFrame(updateSectionNavHint);
  }

  function renderDailyContent(day) {
    configureDaySections(day);
    renderRetrieval(day);
    renderListening(day);
    renderLearning(day);
    renderResources(day);
    renderAiSupport(day);
    renderPractice(day);
    renderMissionAndFeedback(day);
  }

  function selectedChecksCount(record) {
    return Object.values(record.checks).filter(Boolean).length;
  }

  function evaluateCompletion(number) {
    const record = getDayRecord(number);
    const day = getDay(number);
    record.completed = day.kind === "assessment"
      ? record.evidenceSaved && Object.values(record.checks).every(Boolean)
      : record.evidenceSaved && record.checks.mission && record.checks.evidence && record.checks.feedback && selectedChecksCount(record) >= 5;
    recomputeCurrentDay();
  }

  function renderCompletionMessage(record) {
    const count = selectedChecksCount(record);
    const day = getDay(state.selectedDay);
    if (record.completed) {
      elements.completionHeading.textContent = "Day complete.";
      elements.completionCopy.textContent = day.kind === "assessment" ? "All assessment components, evidence, and review are recorded." : "M, E, F and at least five of seven checks are recorded.";
    } else if (day.kind === "assessment" && count < 7) {
      elements.completionHeading.textContent = "Complete every assessment component.";
      elements.completionCopy.textContent = `${count}/7 assessment checks selected. All seven are required.`;
    } else if (day.kind === "lesson" && (!record.checks.mission || !record.checks.evidence || !record.checks.feedback)) {
      elements.completionHeading.textContent = "Mission, evidence, and retry are required.";
      elements.completionCopy.textContent = `${count}/7 checks selected. M, E, and F are mandatory.`;
    } else if (day.kind === "lesson" && count < 5) {
      elements.completionHeading.textContent = "More learning steps are needed.";
      elements.completionCopy.textContent = `${count}/7 checks selected. A normal day needs at least five.`;
    } else if (!record.evidenceSaved) {
      elements.completionHeading.textContent = "Record your evidence.";
      elements.completionCopy.textContent = "Add an evidence note or choose a local file reference.";
    }
  }

  function renderProgress() {
    const completed = data.days.filter((day) => getDayRecord(day.number).completed).length;
    const percentage = Math.round((completed / data.challenge.durationDays) * 100);
    const record = getDayRecord(state.selectedDay);
    const lastEvidenceRecord = Object.entries(state.progress)
      .filter(([, value]) => value.evidenceSaved)
      .sort((a, b) => (b[1].evidenceSavedAt || 0) - (a[1].evidenceSavedAt || 0))[0];
    elements.completedCount.textContent = `${completed} / ${data.challenge.durationDays}`;
    elements.progressValue.textContent = `${percentage}%`;
    elements.progressRing.style.setProperty("--progress-angle", `${percentage * 3.6}deg`);
    elements.progressRing.setAttribute("aria-label", `${percentage} percent complete`);
    elements.dailyProgress.textContent = `${selectedChecksCount(record)}/7`;
    elements.currentSupport.textContent = record.support || "Not recorded";
    elements.lastEvidence.textContent = lastEvidenceRecord ? `Day ${lastEvidenceRecord[0]}` : "None";
    renderCompletionMessage(record);
  }

  function resetEvidenceForm(record) {
    elements.evidenceNote.value = "";
    elements.evidenceFile.value = "";
    elements.fileName.textContent = "No file selected";
    elements.evidenceNote.removeAttribute("aria-invalid");
    elements.evidenceHelp.dataset.tone = "neutral";
    elements.evidenceHelp.textContent = record.evidenceSaved
      ? "Evidence was recorded earlier. Add a new note or file reference to refresh the timestamp."
      : "Add a note or choose a local file reference before saving.";
    elements.evidenceSubmit.dataset.state = record.evidenceSaved ? "success" : "default";
    elements.evidenceSubmit.disabled = false;
    elements.submitLabel.textContent = record.evidenceSaved ? "Evidence recorded" : "Save evidence";
    elements.submissionResult.hidden = !record.evidenceSaved;
  }

  function renderProgressInputs(record) {
    document.querySelectorAll("[data-check]").forEach((checkbox) => {
      checkbox.checked = Boolean(record.checks[checkbox.dataset.check]);
    });
    elements.supportLevel.value = record.support || "";
    elements.comprehensionScore.value = record.comprehension ?? "";
    elements.responseLatency.value = record.latency ?? "";
    elements.scoreMethod.value = record.scoreMethod ?? "";
  }

  function updateSelectedDayChrome(day) {
    const dayState = getEffectiveDayState(day);
    elements.dayStatus.textContent = statusLabels[dayState];
    elements.dayStatus.dataset.status = dayState;
    document.querySelectorAll("[data-previous-day]").forEach((button) => { button.disabled = day.number === 1; });
    document.querySelectorAll("[data-next-day]").forEach((button) => { button.disabled = day.number === data.challenge.durationDays || day.number + 1 > state.currentDay; });
  }

  function renderSelectedDay(options = {}) {
    const day = getDay(state.selectedDay);
    const record = getDayRecord(day.number);
    const dayState = getEffectiveDayState(day);
    elements.dayLabel.textContent = day.label;
    elements.mobileDayLabel.textContent = day.label;
    elements.dayTime.textContent = `${day.estimatedMinutes} min`;
    updateSelectedDayChrome(day);
    elements.lessonTitle.textContent = day.title;
    elements.lessonObjective.textContent = day.objective;
    renderDailyContent(day);
    renderProgressInputs(record);
    resetEvidenceForm(record);
    renderDayGrids();
    renderProgress();
    if (options.focusHeading) {
      elements.lessonTitle.setAttribute("tabindex", "-1");
      elements.lessonTitle.focus({ preventScroll: true });
      elements.lessonTitle.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
    }
    announce(`${day.label} selected. ${day.title}. ${statusLabels[dayState]}.`);
  }

  function selectDay(number, options = {}) {
    const day = getDay(number);
    if (!day) return;
    if (getEffectiveDayState(day) === "locked") {
      showToast(`Day ${number} is locked. Complete Day ${state.currentDay} first.`);
      announce(`Day ${number} is locked. Complete Day ${state.currentDay} first.`);
      return;
    }
    state.selectedDay = number;
    renderSelectedDay({ focusHeading: options.focusHeading !== false });
    if (elements.daysDialog.open) elements.daysDialog.close();
  }

  function moveDay(delta) {
    const target = Math.min(data.challenge.durationDays, Math.max(1, state.selectedDay + delta));
    selectDay(target);
  }

  function updateCurrentRecord(mutator, message) {
    const record = getDayRecord(state.selectedDay);
    mutator(record);
    evaluateCompletion(state.selectedDay);
    saveProgress();
    renderDayGrids();
    renderProgress();
    updateSelectedDayChrome(getDay(state.selectedDay));
    if (message) announce(message);
  }

  async function copyAiSupportPrompt() {
    const prompt = elements.aiSupportPrompt.value;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(prompt);
      } else {
        elements.aiSupportPrompt.focus();
        elements.aiSupportPrompt.select();
        if (!document.execCommand("copy")) throw new Error("Copy unavailable");
      }
      elements.copyAiPrompt.textContent = "Prompt copied";
      showToast(`Day ${state.selectedDay} AI tutor prompt copied.`);
      announce(`AI tutor prompt copied for Day ${state.selectedDay}.`);
      window.setTimeout(() => { elements.copyAiPrompt.textContent = "Copy AI prompt"; }, 2500);
    } catch (_error) {
      elements.aiSupportPrompt.focus();
      elements.aiSupportPrompt.select();
      showToast("Copy was blocked. The prompt is selected so you can copy it manually.");
    }
  }

  function handleEvidenceSubmit(event) {
    event.preventDefault();
    const hasNote = elements.evidenceNote.value.trim().length > 0;
    const hasFile = elements.evidenceFile.files.length > 0;
    if (!hasNote && !hasFile) {
      elements.evidenceNote.setAttribute("aria-invalid", "true");
      elements.evidenceHelp.dataset.tone = "error";
      elements.evidenceHelp.textContent = "Evidence is missing. Add a note or choose a local file reference, then save again.";
      elements.evidenceSubmit.dataset.state = "error";
      elements.submitLabel.textContent = "Try saving again";
      elements.evidenceNote.focus();
      return;
    }
    elements.evidenceSubmit.disabled = true;
    elements.evidenceSubmit.dataset.state = "loading";
    elements.submitLabel.textContent = "Saving evidence";
    window.setTimeout(() => {
      updateCurrentRecord((record) => {
        record.evidenceSaved = true;
        record.evidenceSavedAt = Date.now();
      }, `Evidence recorded for Day ${state.selectedDay}.`);
      elements.evidenceSubmit.disabled = false;
      elements.evidenceSubmit.dataset.state = "success";
      elements.submitLabel.textContent = "Evidence recorded";
      elements.evidenceNote.removeAttribute("aria-invalid");
      elements.evidenceHelp.dataset.tone = "neutral";
      elements.evidenceHelp.textContent = "Progress metadata saved. Your note and file contents were not stored or uploaded.";
      elements.submissionResult.hidden = false;
      elements.submissionResult.focus();
    }, prefersReducedMotion() ? 100 : 350);
  }

  document.addEventListener("click", (event) => {
    const dayButton = event.target.closest("[data-day]");
    if (dayButton) return selectDay(Number(dayButton.dataset.day));
    if (event.target.closest("[data-previous-day]")) return moveDay(-1);
    if (event.target.closest("[data-next-day]")) return moveDay(1);
    if (event.target.closest("[data-today], [data-resume]")) return selectDay(state.currentDay);
    if (event.target.closest("[data-open-days]")) {
      elements.daysDialog.showModal();
      elements.daysDialog.querySelector("button").focus();
      return;
    }
    if (event.target.closest("[data-close-days]")) return elements.daysDialog.close();
    if (event.target.closest("[data-copy-ai-prompt]")) return copyAiSupportPrompt();
    if (event.target.closest("[data-retry]")) {
      document.querySelector("#practice").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
      announce("Retry started. Return to the three practice attempts.");
    }
  });

  elements.daysDialog.addEventListener("click", (event) => {
    if (event.target === elements.daysDialog) elements.daysDialog.close();
  });
  elements.evidenceForm.addEventListener("submit", handleEvidenceSubmit);

  elements.evidenceNote.addEventListener("input", () => {
    if (elements.evidenceNote.value.trim()) {
      elements.evidenceNote.removeAttribute("aria-invalid");
      elements.evidenceHelp.dataset.tone = "neutral";
      elements.evidenceHelp.textContent = "Evidence is ready to record.";
      elements.evidenceSubmit.dataset.state = "default";
      elements.submitLabel.textContent = "Save evidence";
    }
  });

  elements.evidenceFile.addEventListener("change", () => {
    const file = elements.evidenceFile.files[0];
    elements.fileName.textContent = file ? file.name : "No file selected";
    if (file) {
      elements.evidenceNote.removeAttribute("aria-invalid");
      elements.evidenceHelp.dataset.tone = "neutral";
      elements.evidenceHelp.textContent = "The selected file stays on your device; only completion metadata is recorded.";
      elements.evidenceSubmit.dataset.state = "default";
      elements.submitLabel.textContent = "Save evidence";
    }
  });

  document.querySelectorAll("[data-check]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      updateCurrentRecord((record) => { record.checks[checkbox.dataset.check] = checkbox.checked; }, "Daily check updated.");
    });
  });

  [
    [elements.supportLevel, "support"],
    [elements.comprehensionScore, "comprehension"],
    [elements.responseLatency, "latency"],
    [elements.scoreMethod, "scoreMethod"]
  ].forEach(([control, key]) => {
    control.addEventListener("change", () => {
      updateCurrentRecord((record) => { record[key] = control.value; }, `${control.labels?.[0]?.textContent || key} recorded.`);
    });
  });

  elements.sectionNavigation.addEventListener("scroll", updateSectionNavHint, { passive: true });
  elements.sectionNavHint.addEventListener("click", () => {
    const nav = elements.sectionNavigation;
    const atEnd = nav.scrollLeft + nav.clientWidth >= nav.scrollWidth - 2;
    nav.scrollBy({ left: atEnd ? -nav.scrollWidth : Math.max(nav.clientWidth * 0.75, 220), behavior: prefersReducedMotion() ? "auto" : "smooth" });
  });
  window.addEventListener("resize", updateSectionNavHint);

  recomputeCurrentDay();
  state.selectedDay = state.currentDay;
  renderFrameConfiguration();
  renderSelectedDay();
})();
