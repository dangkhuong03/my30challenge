# Local Validation Harness

Requires Node.js only; no package installation is needed.

For the normal rebuild loop, use one command. It regenerates the HTML payload
from canonical Markdown and then runs the complete validation harness:

```powershell
powershell -ExecutionPolicy Bypass -File challenge-ai-agent-system-design/run-harness.ps1
```

The command exits non-zero while a required gate still fails. It does not author
lessons or fabricate semantic, browser, workload, or learner evidence; the active
agent uses its findings to complete the next `REBUILD_WORKFLOW.md` batch and runs
the same command again until curriculum completion.

Run from the workspace root:

```powershell
node challenge-ai-agent-system-design/validation/validate-structure.mjs
node challenge-ai-agent-system-design/validation/validate-rebuild-contract.mjs
node challenge-ai-agent-system-design/validation/validate-architecture.mjs
node challenge-ai-agent-system-design/validation/validate-audit-data.mjs
node challenge-ai-agent-system-design/validation/validate-coverage.mjs
node challenge-ai-agent-system-design/validation/validate-anti-memorization.mjs
node challenge-ai-agent-system-design/validation/validate-assessments.mjs
node challenge-ai-agent-system-design/validation/validate-phase2.mjs
node challenge-ai-agent-system-design/validation/validate-phase3-foundations.mjs
node challenge-ai-agent-system-design/validation/validate-batch-06-10.mjs
node challenge-ai-agent-system-design/validation/validate-batch-11-14.mjs
node challenge-ai-agent-system-design/validation/validate-batch-15-19.mjs
node challenge-ai-agent-system-design/validation/validate-batch-20-24.mjs
node challenge-ai-agent-system-design/validation/validate-batch-25-29.mjs
node challenge-ai-agent-system-design/validation/validate-final-output.mjs
node challenge-ai-agent-system-design/validation/generate-current-reaudit.mjs
node challenge-ai-agent-system-design/validation/validate-current-reaudit.mjs
node challenge-ai-agent-system-design/validation/validate-application-static.mjs
node challenge-ai-agent-system-design/validation/validate-progression-workload.mjs
node challenge-ai-agent-system-design/validation/validate-payload.mjs
node challenge-ai-agent-system-design/validation/validate-all.mjs
```

Validators are read-only except `validate-all.mjs`, which replaces the generated local summary at `validation-results/latest-result.md`. A non-zero exit is expected while required curriculum gates fail.

## Boundaries

- `validate-rebuild-contract.mjs` is the current top-level acceptance guard. It intentionally fails until all 30 authoritative day sections satisfy the full rebuild contract and detached legacy sections are removed.

- Structure checks shape, counts, IDs, and declared references—not teaching quality.
- `AUDIT_REPORT.md` remains an immutable human-readable snapshot. Normal validation reads deterministic JSON under `remediation/audit-data/` and verifies its source and dataset hashes.
- Coverage refuses acceptance while any selected row is not `PASS`. Filters include `--id M20`, `--from M20 --to M30`, `--day 6`, `--status FAIL`, and `--gap G02`.
- Anti-memorization uses exact normalized fragments and token-overlap heuristics. Warnings require human adjudication and cannot certify transfer.
- Assessment checks source-level invariants. Browser behavior remains unverified.
- Phase 2 validation checks seven dedicated chains, evaluators, rubrics, retries, retrieval routing and the semantic-review ledger; learner performance remains separate.
- Phase 3 Foundations validation checks the 15 Day 2–5 capability labs and their per-ID evaluator, rubric and coverage routing.
- Payload validation decodes and compares; it never regenerates payloads.
- No script evaluates learner mastery or upgrades self-reported evidence.

The aggregate result keeps `FAIL`, `PENDING`, and `WARNING` visible. It does not use permissive exits or convert unfinished review into success.

## Controlled extraction

Normal validation does not parse or rewrite the full audit report. Generate the operational datasets deliberately:

```powershell
node challenge-ai-agent-system-design/validation/extract-audit-data.mjs
```

If the report hash changed, extraction returns `BLOCKED`. Use `--force` only after reviewing and explicitly approving the report change. Generated JSON must not be hand-edited; semantic changes require a new audit or re-audit.

## Payload generation

After an authorized change to payload-backed Markdown, regeneration is a separate explicit command:

```powershell
node challenge-ai-agent-system-design/validation/generate-payloads.mjs
node challenge-ai-agent-system-design/validation/validate-payload.mjs
```

The generator has a fixed source inventory and does not include audit, remediation, generated audit-data, or held-back final content.
