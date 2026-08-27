<!-- Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 -->

# Update decisions

## Run status

- Workflow: `CHALLENGE_UPDATE_WORKFLOW.md`
- Current gate: `GATE_8_PASS_WORKFLOW_COMPLETE`
- Production UI files changed by this update run: AI Agent `index.html`; DSA and English `index.html`, `app.js`, `app.css`; authority changes approved at Gate 1 are recorded below.
- Existing dirty-worktree changes are user-owned and must be preserved.

## Decisions required

### DEC-001 — AI Agent timeboxes

Status: `APPROVED_2026-08-27`

Recommended resolution derived from current `CHALLENGE.md`:

- Day 1 baseline: total 210 minutes.
- Normal day: total 120 minutes.
- Review Days 7/14/21/28: total 150 minutes; locked assessment duration 75/90/90/105 minutes is included, remaining time is scoring, error taxonomy and recovery.
- Day 30 final: total 210 minutes including self-grade/debrief.

Approved by the user's “tiếp tục” response after the recommendation was presented.

### DEC-002 — DSA setup

Status: `APPROVED_2026-08-27`

Recommended beginner setup:

- `LANGUAGE`: Python 3.
- `PROBLEM_SOURCE`: LeetCode public.
- `SESSION_TYPE`: 30 completed sessions.
- `NORMAL_MINUTES`: 120.

Approved by the user's “tiếp tục” response after the recommendation was presented.

### DEC-003 — Pilot order

Status: `APPROVED_BY_WORKFLOW_RUN_REQUEST`

AI Agent System Design is the first two-view/router pilot. DSA and English remain unchanged until AI pilot re-audit passes.

Pilot result: `PASS` on 2026-08-27. DSA Gate 4 and English Gate 5 have also passed browser re-audit.

### DEC-004 — Content-source edits

Status: `APPROVED_2026-08-27`

The run request authorizes following the workflow, but source learning-content edits remain separated at Phase 6 and will not be mixed into the UI pilot.

UI gates passed first. The user's subsequent “tiếp tục Workflow” approved Phase 6 source edits. Static re-audit passed for AI 118 requirements, DSA exact 15/44 inventory, English 30 daily scaffolds, and byte-for-byte payload integrity. Learner mastery/evidence was not promoted.
