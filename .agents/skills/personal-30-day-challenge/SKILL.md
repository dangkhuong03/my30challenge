---
name: personal-30-day-challenge
description: Design, run, adapt, and evaluate a personal 30-day challenge with realistic daily actions, measurable completion criteria, progress tracking, and evidence-based reviews. Use when a user wants to start, continue, recover, or assess a 30-day learning, building, fitness, creative, or habit challenge; do not use for a simple one-off task.
---

# Personal 30 Day Challenge

Turn an aspiration into a challenge that can survive real life and produce an honest result after 30 days. Match the user's language.

## Route the request

Choose the mode implied by the request:

- **Design:** define the challenge and its 30-day plan.
- **Daily:** select today's work, help execute it, and record the result.
- **Review:** inspect progress, diagnose friction, and adjust future days.
- **Recovery:** resume after missed days without pretending they were completed.
- **Final:** evaluate the challenge against its original finish line and summarize evidence.

If the user has an existing challenge folder, inspect its authority and progress files before proposing changes. Preserve completed-day records and user-owned work.

## Establish the contract

For a new challenge, determine the following from the request or ask only for details that materially change the plan:

1. A single primary outcome for Day 30.
2. Current baseline and relevant experience.
3. Available minutes on normal days and low-energy days.
4. Constraints, tools, budget, safety limits, and unavailable dates.
5. A measurable finish line and acceptable evidence.
6. Whether "30 days" means 30 consecutive calendar days or 30 completed sessions.

When details are missing but a reversible assumption is safe, create a clearly labeled draft instead of blocking. Do not invent a baseline, available time, results, or completed work.

Prefer one primary outcome. Put useful but nonessential ideas in a backlog so the challenge does not silently expand.

## Design the plan

Build backward from the Day 30 finish line. Use phases suited to the subject; a useful default is orientation, foundations, deliberate practice or production, integration, and final proof. Do not force equal workload across all days.

Every day must contain:

- **Outcome:** what becomes true today.
- **Minimum action:** the smallest meaningful version that preserves momentum.
- **Target action:** the normal planned workload with a timebox.
- **Done when:** an observable completion test.
- **Evidence:** an artifact, measurement, log entry, screenshot, recording, test result, or other appropriate proof.
- **Stretch:** optional work that never becomes hidden scope.

Include a baseline near the start, periodic retrieval or application, a review at least every 7 days, and a final assessment comparable to the baseline. Space demanding days with lighter consolidation or recovery work. For skill learning, favor active practice and feedback over passive consumption.

Keep the challenge demanding but recoverable. Never prescribe unsafe exercise, sleep restriction, extreme dieting, medication changes, or other high-risk behavior. For medical, legal, or financial goals, distinguish educational planning from professional advice and verify current authoritative guidance when needed.

## Persist a challenge when requested

Use the user's existing structure when present. Otherwise, for a file-backed challenge create only the artifacts needed:

- `CHALLENGE.md`: frozen goal, scope, baseline, finish line, constraints, schedule type, evidence rules, and recovery rule.
- `PLAN.md`: Day 1 through Day 30, each with the daily fields above.
- `PROGRESS.md`: append-only daily results plus review decisions.

Do not create placeholder directories or unrelated documentation. Do not commit, push, publish, buy services, contact people, or change external systems unless explicitly authorized.

## Run a day

Read the contract and latest progress first. Present today's minimum and target action before optional extras. Help perform the work that is in scope, then assess the observable result.

Use these statuses consistently:

- `PASS`: the Done test was met and evidence exists.
- `PARTIAL`: meaningful work exists but the Done test was not met.
- `SKIPPED`: no meaningful attempt was completed.
- `BLOCKED`: progress depended on a specific unresolved condition.
- `IN_PROGRESS`: work started but the daily result is not final.

Never upgrade planned work, source inspection, mocked output, or an unverified claim to `PASS`. Record what actually happened, the evidence location or measurement, time spent if known, and the next action. Treat self-reported evidence as self-reported rather than independently verified.

## Review and adapt

At each review, compare actual progress with the contract using evidence rather than motivation alone. Report:

- completion and consistency;
- quality or performance change from baseline;
- recurring friction and its likely cause;
- what to keep, reduce, remove, or reschedule;
- whether the Day 30 finish line is still feasible.

Change future days only. Keep original entries and completed-day results intact. If the main outcome or finish line must change, show the proposed revision and obtain user confirmation before replacing the contract.

For missed days, do not require punishment or automatic double sessions. Choose the smallest viable recovery: resume the next planned day, compress only redundant work, or extend the calendar when the user chose completed sessions. Make the schedule consequence explicit.

## Finish honestly

On Day 30, compare final evidence with the frozen baseline and finish line. Separate:

- proven outcomes;
- partial outcomes;
- unverified claims;
- lessons and remaining gaps.

Return an overall result of `PASS`, `PARTIAL`, or `FAIL` based on the original contract. Recommend a next cycle only after closing the current one; do not silently turn a 30-day challenge into an indefinite program.

## Output quality

Keep daily guidance short enough to act on immediately. Use exact dates when the start date is known. Make dependencies and rest days visible. Preserve the user's chosen topic, tools, language, and scope. Explain important tradeoffs, but avoid motivational filler and fabricated certainty.
