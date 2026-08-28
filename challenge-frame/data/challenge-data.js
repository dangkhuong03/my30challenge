(function () {
  "use strict";

  const content = window.ENGLISH_CHALLENGE_CONTENT;

  if (!content || !Array.isArray(content.days)) {
    window.CHALLENGE_FRAME_DATA = null;
    return;
  }

  const days = content.days.map((day) => ({
    ...day,
    state: day.number === 1 ? "active" : "available"
  }));

  window.CHALLENGE_FRAME_DATA = {
    challenge: {
      id: "ielts-academic-4-bridge",
      title: "30-Day IELTS Academic 4.0 Bridge",
      shortTitle: "IELTS 4.0 Bridge",
      description: "Complete one measurable IELTS Academic action every day.",
      mapTitle: "Thirty days",
      durationDays: 30,
      currentDay: 1,
      progressStorageKey: "ielts-academic-4-bridge-progress-v2"
    },
    navigation: [
      { label: "Today", target: "lesson-workspace" },
      { label: "30 days", target: "day-overview" },
      { label: "Progress", target: "progress-panel" }
    ],
    days,
    resources: content.resources,
    sections: [
      {
        id: "retrieval",
        label: "Recall",
        title: "Retrieval",
        description: "Recall five items from earlier days before looking at notes."
      },
      {
        id: "listening",
        label: "Input",
        title: "Input",
        description: "Attempt, analyse, and notice the language or strategy in today's source."
      },
      {
        id: "learn",
        label: "Language",
        title: "Language",
        description: "Build the vocabulary, grammar, spelling, pronunciation, or cohesion needed today."
      },
      {
        id: "resources",
        label: "Resources",
        title: "Learning resources",
        description: "Use the assigned authoritative resources under their stated access and scoring conditions."
      },
      {
        id: "ai-support",
        label: "AI Coach",
        title: "AI lesson coach",
        description: "Copy the day-specific tutor prompt into your preferred AI assistant."
      },
      {
        id: "practice",
        label: "Practice",
        title: "Practice ladder",
        description: "Move from supported work to changed, independent transfer."
      },
      {
        id: "mission",
        label: "Mission",
        title: "Today's IELTS mission",
        description: "Complete the observable IELTS-relevant action under the stated conditions."
      },
      {
        id: "evidence",
        label: "Evidence",
        title: "Evidence",
        description: "Record where your proof is saved; files stay on your device."
      },
      {
        id: "feedback",
        label: "Retry",
        title: "Feedback and retry",
        description: "Keep no more than two corrections and make one improved attempt."
      }
    ]
  };
})();
