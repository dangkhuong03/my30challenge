(function () {
  "use strict";

  const dayStates = {
    1: "completed",
    2: "active",
    3: "available"
  };

  const days = Array.from({ length: 30 }, (_, index) => {
    const number = index + 1;
    return {
      id: `day-${String(number).padStart(2, "0")}`,
      number,
      label: `Day ${number}`,
      state: dayStates[number] || "locked",
      title: number === 2 ? "Today’s lesson title" : "Lesson title placeholder",
      objective: "A single observable action supplied by the challenge content layer.",
      estimatedMinutes: 35
    };
  });

  window.CHALLENGE_FRAME_DATA = {
    challenge: {
      id: "demo-30-day-challenge",
      title: "30-Day Functional English Challenge",
      shortTitle: "Functional English",
      description: "Complete one practical English action every day.",
      mapTitle: "Thirty days",
      durationDays: 30,
      currentDay: 2
    },
    navigation: [
      { label: "Today", target: "lesson-workspace" },
      { label: "30 days", target: "day-overview" },
      { label: "Progress", target: "progress-panel" }
    ],
    days,
    sections: [
      {
        id: "retrieval",
        label: "Recall",
        title: "Retrieval",
        description: "Recall previously learned language before looking at notes."
      },
      {
        id: "listening",
        label: "Listen",
        title: "Supported listening",
        description: "Listen, check the transcript, and speak along with the model."
      },
      {
        id: "learn",
        label: "Phrases",
        title: "Phrase and form focus",
        description: "Learn reusable phrases and one small language pattern needed for today’s task."
      },
      {
        id: "resources",
        label: "Resources",
        title: "Resources",
        description: "Use free, verified, level-appropriate learning materials."
      },
      {
        id: "practice",
        label: "Practice",
        title: "Practical task practice",
        description: "Repeat the task with decreasing support across three attempts."
      },
      {
        id: "mission",
        label: "Mission",
        title: "Today’s practical mission",
        description: "Complete one observable real-world action in English."
      },
      {
        id: "evidence",
        label: "Evidence",
        title: "Evidence",
        description: "Attach or describe what proves the mission was completed."
      },
      {
        id: "feedback",
        label: "Retry",
        title: "Feedback and retry",
        description: "Keep up to two important corrections and make one improved attempt."
      }
    ]
  };
})();
