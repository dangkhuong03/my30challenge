# Curriculum Remediation Workflow

> Superseded for current execution by `REBUILD_WORKFLOW.md` and `FULL_REBUILD_CONTRACT.md`. This file remains historical routing for G01–G18 and cannot authorize gap-only acceptance.

Status: `IN_PROGRESS` (Phase 2 curriculum readiness complete; Phase 3 pending authorization)

This workflow is governed by `../audit-musk.md` and the findings in `../AUDIT_REPORT.md`. It preserves the 30-session structure, current thresholds, learner-owned evidence, and append-only history. A green local script is never sufficient evidence of semantic quality or learner mastery.

## Gate rules

- Phases run in order. A successor phase remains `PENDING` until its prerequisite is `PASS`.
- The current authorized phase is recorded in `PHASE_STATUS.md`.
- Each change must name its gap IDs, permitted files, acceptance evidence, and validation commands before editing.
- Structural/local, semantic-review, browser, workload-pilot, and learner-evidence gates are reported separately.
- Topic labels, ID ranges, generated payload consistency, and successful script execution do not establish mastery.
- Existing attempts and progress events are immutable. Corrections are appended and linked to the original evidence.
- Thresholds, domain floors, anti-rehearsal rules, and required evidence may not be weakened to obtain `PASS`.
- A phase exit requires its automated gates plus every named human-review gate. `PARTIAL`, `FAIL`, `BLOCKED`, or `PENDING` cannot unlock the next phase.

### Phase 0 — Authority and invariant freeze

Scope: `remediation/**`, `validation/**`, and generated `validation-results/**` only.

Entry: audit contract and audit report exist.

Exit evidence:

- authority and generated-file ownership are explicit;
- G01–G18 are individually routed;
- benchmark invariants are frozen at M1–M100, unique and complete;
- current acceptance thresholds and learner-history rules are recorded;
- the immutable audit snapshot is indexed by SHA-256 and deterministically split into queryable operational datasets;
- validators run independently and together, exposing current failures honestly;
- curriculum, assessments, UI, payloads, benchmark, and progress remain unchanged.

Normal checks use `audit-data/*.json` instead of repeatedly parsing the full report. `extract-audit-data.mjs` is an explicit controlled operation: it refuses a changed report unless reviewed regeneration is requested. Operational JSON is generated, hash-checked, and never hand-edited.

### Phase 1 — Assessment architecture

Resolve canonical domain taxonomy and allocation, denominators, floors, mandatory versus optional evaluators, recovery/status semantics, key exposure, held-back final requirements, and an all-capability acceptance path. Preserve existing scores and thresholds; do not reinterpret them silently. A held-back form must not enter public Markdown or payloads.

Exit: assessment validator passes and semantic reviewer approves equivalence and coverage. Browser confirmation may be explicitly deferred by the user to Phase 6; such deferral is recorded as `PENDING`, never browser `PASS`. G04, G05, G06, G12, and G13 must be closed or explicitly deferred/blocked.

### Phase 2 — Seven failed capabilities

Scope: M20, M21, M30, M39, M42, M68, and M77 only. Each must provide:

`foundational mechanism → worked example → independent exercise → materially changed transfer → evaluator → misconception correction → changed retry → delayed retrieval`

Exit: each chain has direct references, automated structure is complete, and a semantic reviewer marks every link `PASS`. This phase must not use renamed benchmark questions as transfer evidence.

### Phase 3 — Remaining semantic deficiencies

Route the 93 `PARTIAL` rows into bounded batches: foundations; probability/statistics; modelling; RL; systems/product; agent architecture. Each M ID remains individually traceable. Batches may share instruction, but each capability must identify its own contribution and evaluator.

Exit: no matrix row remains `PARTIAL`, `FAIL`, `BLOCKED`, or unreviewed. Workload consequences are disclosed rather than hidden in stretch work.

Daily-surface rule: remediation must rewrite the authoritative `## Ngày N —` section into the lesson contract, not append a detached capability appendix beneath unchanged teaching. The browser-rendered section, `LESSONS.md`, `PLAN.md`, evaluators, keys and payload must agree.

### Phase 4 — Transfer and anti-memorization

Replace claimed transfer that changes only numbers, dimensions, or nouns. A qualifying task changes an assumption, representation, available evidence, constraint, loss, dependency, or failure semantics and records why the original solution no longer applies directly.

Exit: exact-duplication checks pass, heuristic warnings are adjudicated, and independent semantic review approves every claimed material transfer.

### Phase 5 — Feedback, retrieval, and progressive independence

Establish checkable feedback, immutable before/after attempts, misconception diagnosis, materially changed retries, per-capability retrieval due dates, delayed reassessment, fading support, increasing ambiguity, and build-test-feedback-iterate evidence.

Exit: every capability has scheduled retrieval and a reviewed correction route; required executable or hand-executed traces record predicted result, observed result, discrepancy, revision, and changed retest.

### Phase 6 — Content, payload, and application synchronization

Propagate approved authoritative Markdown to document payloads and the generated typed day schema. Validate byte equality, 30/30 non-empty daily content contracts, typed code blocks, grouped learning-surface routing, assessment isolation, evidence-bearing status transitions, import/export integrity, and append-only preservation. Generation is an explicit command; validation never rewrites sources.

Exit: payload, day-schema and application validators pass locally and browser behavior is verified. Browser evidence must show `SCHEMA V1 · 30 DAYS`, non-empty opened learning sections, readable code, and rendered or readable-fallback mathematics. Static/function-level checks remain distinct from browser evidence.

### Phase 7 — Full validation and independent re-audit

Run all local checks, semantic re-audit, browser validation, workload pilots, held-back-final integrity review, and learner-evidence review when evidence exists.

Exit: an independent audit closes all acceptance conditions. If learner evidence does not exist, curriculum readiness and learner mastery remain separate conclusions.

## Required phase handoff

Every phase handoff records: phase, authorized scope, gaps addressed, files changed, invariant results, semantic decision, browser status, learner-evidence status, remaining risks, and next authorized action. No commit or push is implied.
