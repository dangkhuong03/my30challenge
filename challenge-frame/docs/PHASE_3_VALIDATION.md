# Phase 3 V2 Integration and Validation

**Status:** PASS  
**Date:** 29 August 2026  
**Scope:** Approved IELTS Academic V2 content integrated into the reusable frame

## Outcome

The frame now renders the approved 30-day IELTS Academic 4.0 Bridge. The data adapter supports two explicit lesson types:

- 25 normal learning days using Recall, Input, Language, Resources, Practice, Mission, Evidence, Feedback/changed retry, daily score, and retrieval schedule;
- five assessment days (7, 14, 21, 28, and 30) using Briefing, validity conditions, four components, evidence, score provenance, and review/remediation.

The approved specification and Phase 2 source documents were not changed during integration.

## Data and UI Changes

- `scripts/build-content-data.mjs` parses the V2 Markdown and rejects missing or unordered days and missing required fields.
- `data/english-30-day-content.js` is regenerated from the approved Markdown; it contains 30 days, five assessments, and nine audited resources.
- Every generated day contains a self-contained `aiSupportPrompt` that turns an AI assistant into a day-specific tutor. It teaches in small steps, explains meaning and pronunciation, checks understanding, limits feedback, creates changed retries, and evaluates submitted evidence against the daily pass condition.
- Assessment prompts require the learner to declare `ANSWERS LOCKED`; before that declaration, AI is restricted to procedure, timing, permitted support, and technical setup.
- `data/challenge-data.js` now identifies the IELTS Academic bridge and exposes `Input` and `Language` instead of the obsolete `Listen` and `Phrases` labels.
- Assessment days dynamically replace normal navigation labels with Briefing, Validity, Assessment, Components, Outcome, Evidence, and Score & review.
- The progress panel now records seven completion checks and score provenance.
- Normal completion requires saved evidence, M/E/F, and at least five of seven checks.
- Assessment completion requires all seven assessment checks and saved evidence.
- Day focus now scrolls to a visible centred heading; a regression check prevents the fixed header from covering it.
- Sequential unlock is enforced: the first incomplete day is active, completed days remain reviewable, and every later day is locked. Completion unlocks only the next day and the policy persists after reload.

## Automated Browser Results

Local Chrome headless returned **PASS** for:

- all 30 day titles and canonical outcomes;
- all 30 AI tutor prompts and the five assessment guardrails;
- copy-prompt success or a keyboard-accessible manual-copy fallback when clipboard permission is blocked;
- all normal-day Input, Language, Practice, Resources, Mission, Evidence, pass, and Feedback bindings;
- four component cards and validity conditions on every assessment day;
- bounded Previous/Next navigation and Resume to the first incomplete day;
- empty-evidence validation, evidence recording, progress update, and persistence after reload;
- normal Day 1 completion with seven checks;
- fresh-state locking of Days 2–30, refusal to open locked Day 30, unlock of only Day 2 after Day 1, and persistence of 28 remaining locks;
- rejection of incomplete Day 30 assessment evidence and completion only at 7/7;
- one unified header and no duplicate lesson navigation shell;
- zero runtime or console errors.

Responsive viewports tested:

- 320 × 900;
- 375 × 900;
- 414 × 900;
- 768 × 900;
- 1280 × 800;
- 1280 × 900.

Every viewport had no document-level horizontal overflow, no visible interactive target below 44 × 44 CSS pixels, and visible lesson, mission, progress, and section navigation surfaces.

## Visual Inspection

Desktop, mobile, AI Coach, and Day 30 assessment captures were inspected. The AI prompt remains readable inside a bounded textarea, the copy control becomes full-width on mobile, and locked days remain visually distinct. The normal-day frame preserves the approved three-region desktop workbench and intentional mobile flow. Assessment navigation and the full-mock title render without being hidden by the fixed header.

The in-app browser connection could not initialize because its supplied sandbox metadata omitted a required policy field. Browser evidence therefore comes from the installed local Chrome headless runtime, and this distinction is retained rather than reporting in-app verification.

## Protected Source Hashes

- `ENGLISH_30_DAY_CHALLENGE_SPEC.md`: `1251BC9269398E8C692736A5ED34D316A74718C297E276C3FDCF2D8D727AE7C0`
- `challenge-content/ENGLISH_30_DAY_CONTENT.md`: `D02915185BBF528ED9A599E628EC5EB29239506A067DA0D307D4FDB152D14379`
- `challenge-content/FREE_RESOURCE_AUDIT.md`: `4103CB3C42A86C6B81690ED94F2AFBD956FB0146A18718D49ED1F4209453EBA9`
- `challenge-content/PHASE_2_VALIDATION.md`: `9E8EE6972B3FEF0076E05202F51B19DE4CABCB3DA01A079DD69520AAD5A7E283`

## Remaining Boundaries

- This is local static-browser validation, not hosted deployment or backend readiness.
- Evidence notes and selected file contents are not uploaded; only completion metadata is stored in local storage.
- External resource access may change and must be rechecked before deployment.
- A static UI cannot supply two untouched mocks or a qualified human Writing/Speaking evaluator.
- The frame copies prompts but does not send them to an AI provider; the learner chooses the assistant and controls transmission.
- `IELTS 4.0 READY` remains dependent on the approved two-mock rule; only an official Test Report Form can verify an official band.

## Final Decision

**PHASE 3 V2: PASS.**

The approved IELTS Academic V2 content is integrated and locally verified within the agreed three-phase scope.
