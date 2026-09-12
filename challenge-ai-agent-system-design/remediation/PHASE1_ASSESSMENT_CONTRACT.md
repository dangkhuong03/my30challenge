# Phase 1 Assessment Contract

Status: `AUTHORITATIVE` for assessment architecture. This contract does not claim curriculum mastery and does not contain a held-back final prompt or key.

## Canonical domains and scoring

Every scored baseline, parallel final, and domain report uses exactly five domains worth 20 points each:

1. Foundations
2. Statistics/Modelling
3. Reinforcement Learning
4. Systems/Product
5. Agent Architecture

Overall maximum is 100. `PASS` requires total at least 80 and every domain at least 14/20. These floors are conjunctive and may not be averaged away or lowered.

Baseline Form A has ten scored tasks: A1–A4 and A6–A11. A5D is retained as an unscored causal diagnostic so no existing content is deleted or silently recategorized. Calibration Form B has F1–F10 and is public practice, not Day 30 acceptance evidence.

## Evaluator authority

- Core daily Done tests and explicitly assigned capability subparts are mandatory.
- Review forms sample and integrate previously taught capabilities; they do not replace missing per-capability evidence.
- `DAILY_APPLIED_ASSESSMENTS.md` remains optional stretch/diagnostic and cannot establish mandatory coverage.
- Each M1–M100 capability must ultimately have a required evidence record linking its taught mechanism, independent attempt, material transfer, evaluator, correction/retry when needed, and delayed retrieval.
- Phase 1 defines this route; Phases 2–5 must supply and semantically approve the missing content.

## Sealed Day 30 final

The Day 30 final must be a parallel form delivered outside learner-visible repository files, embedded payloads, browser documents, logs, and version control. It must follow the five-domain blueprint above, use new inputs and changed reasoning conditions, and be identified by a packet ID plus SHA-256 recorded before the attempt.

The learner record must contain only metadata and results: packet ID/hash, start/end time, closed conditions, assistance/exposure declaration, original response artifact, domain scores, total, evaluator identity/method, and immutable correction record. The prompt and key remain outside the learner-visible repository.

Day 30 acceptance requires all of:

- sealed parallel-form total at least 80/100;
- every canonical domain at least 14/20;
- complete M1–M100 capability evidence ledger with no unresolved mandatory subpart;
- at least one materially changed transfer/retrieval result for every capability;
- no unresolved critical misconception or unverified imported `PASS`;
- original attempt preserved before key, feedback, or correction exposure.

A ten-task final samples transfer and integration. It never substitutes for the cumulative 100-capability evidence ledger.

## Attempt, key, import, and recovery rules

- Assessment prompts for the current day may be shown before an attempt; lesson/remediation material remains hidden until the attempt is recorded.
- A key may be exposed only after an app-origin terminal attempt (`PASS`, `PARTIAL`, or `FAIL`) contains a Done-test statement, evidence reference, and explicit self-check confirmation.
- `IN_PROGRESS`, `SKIPPED`, and `BLOCKED` do not authorize key exposure.
- Imported events remain append-only but are labeled `imported-unverified`; imported assessment unlocks are ignored. They do not unlock days or keys until locally revalidated by a new event.
- A failed review remains recorded as `FAIL`. The learner completes a targeted recovery, takes a changed retest, and appends a new result. Only a later valid `PASS` unlocks the next day.
- No old event, score, or learner artifact is overwritten.

## Verification boundaries

Local structural and source checks may verify schema, arithmetic, access logic, and consistency. Semantic quality, final-form equivalence, browser behavior, workload feasibility, and learner mastery require their own evidence and remain separately reported.

## Benchmark assumption rubric

The benchmark text remains unchanged. Evaluators must accept a justified conditional answer when the source omits a convention:

- **M21:** state whether sampling is uniform without replacement before claiming the discrete-maximum sufficient/complete statistic or UMVU result.
- **M40:** distinguish the Poisson default log link from an explicitly assumed identity link; interpret coefficients under the chosen link and reject invalid negative means.
- **M48:** solve symbolically unless gamma and the destination of the remaining transition probability are supplied; state terminal and reward timing.
- **M73:** qualify “never duplicate” by vendor idempotency/lookup and compensation feasibility; otherwise use UNKNOWN plus reconciliation rather than an impossible guarantee.
- **M92:** distinguish failure of one full-suite run from failure across a bounded three-run acceptance attempt and state the independence assumption.

A defensible answer that exposes the ambiguity must not be marked wrong merely for declining to invent missing data.
