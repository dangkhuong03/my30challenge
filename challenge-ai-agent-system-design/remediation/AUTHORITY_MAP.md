# Authority Map

`audit-musk.md` governs acceptance. `AUDIT_REPORT.md` is the current evidence-based diagnosis, not editable proof that a gap is closed. Conflicts are surfaced and resolved through Phase 1; validators must not choose the less demanding interpretation.

| Artifact | Purpose | Status | Permitted writers | Consumers | Synchronization / validation | Learner evidence | Assessment exposure |
|---|---|---|---|---|---|---|---|
| `../audit-musk.md` | Audit contract and acceptance standard | Authoritative, frozen | User-approved contract change only | Audit and remediation | Manual authority review | No | Defines isolation |
| `../AUDIT_REPORT.md` | Current audit evidence and G01–G18 | Authoritative audit snapshot | Independent re-audit only | Gap tracker and reviewers | Validate 100-row matrix and gap IDs | No | May discuss forms; not a test surface |
| `PHASE1_ASSESSMENT_CONTRACT.md` | Canonical domains, evaluator, sealed-final, import and recovery rules | Authoritative assessment architecture | Phase 1 or explicit later contract revision | Challenge, assessments, UI, validators | Assessment and semantic review | Defines metadata only | Must never contain held-back prompt/key |
| `FULL_REBUILD_CONTRACT.md` | Complete 30-day product and final-output acceptance | Highest current remediation authority | User-approved contract revision only | Curriculum, application, validators, re-audit | 30 days plus 118 routes | Defines evidence contract | No held-back prompt/key |
| `REBUILD_WORKFLOW.md` | Current full-rebuild gates and batch handoffs | Authoritative current workflow | Workflow phase owner | All rebuild work | Gates 0–7 and batch evidence | No learner attempts | No held-back content |
| `THIRTY_DAY_ARCHITECTURE.md` | Coherent Days 1–30 dependency, route, output and support blueprint | Gate 1 candidate authority | Full-rebuild Gate 1 | Plan, lessons, assessments, UI | 30 rows and 118 unique routes | No learner attempts | No held-back prompts |
| `ARCHITECTURE_REVIEW.md` | Gate 1 semantic and workload decision | Review evidence | Gate 1 reviewer | Phase status and batch planning | Separate sequencing/workload decisions | No | No |
| `PHASE2_SEMANTIC_REVIEW.md` | Seven-chain semantic readiness decision | Phase 2 review evidence | Phase 2 reviewer | Phase gate and re-audit | Eight-link decisions plus validator | No learner attempts | Public rubric references only |
| `PHASE3_BATCH_STATUS.md` | 93-row bounded remediation routing | Phase 3 operational authority | Phase 3 reviewer | Batch gates and re-audit | Exact per-ID status; no blanket ranges | No learner attempts | No held-back content |
| `audit-data/manifest.json` | Pin operational audit data to one report SHA-256 | Generated index | Controlled extractor only | Validators | Source and dataset hashes must match | No | No new prompt content |
| `audit-data/questions.json` | Queryable M1–M100 semantic findings | Generated | Controlled extractor only | Coverage validator | 100 unique records and manifest hash | No | Mirrors audit discussion only |
| `audit-data/days.json` | Queryable Day 1–30 findings | Generated | Controlled extractor only | Phase/domain review | 30 unique records and manifest hash | No | Mirrors audit discussion only |
| `audit-data/gaps.json` | Queryable G01–G18 findings | Generated | Controlled extractor only | Gap routing | 18 unique records and manifest hash | No | No held-back prompts |
| `audit-data/acceptance.json` | Queryable AC01–AC09 decisions | Generated | Controlled extractor only | Final gate | 9 unique records and manifest hash | No | No held-back prompts |
| `audit-data/conflicts.json` | Queryable source-authority conflicts | Generated | Controlled extractor only | Phase 1 | Manifest hash and status validation | No | May identify exposure defects |
| `../CHALLENGE.md` | Challenge contract, finish line, workload, recovery | Authoritative curriculum contract | Authorized curriculum phase | Plan, UI, reviewers | Assessment/structure validation | No | Rules only |
| `../PLAN.md` | Daily operational contracts | Authoritative | Authorized curriculum phase | UI and learner | 30-day structural validation | References only | Does not contain held-back final |
| `../LESSONS.md` | Teaching, examples, core drills, checkpoints | Authoritative | Authorized curriculum phase | UI and learner | Day structure, coverage, anti-copy review | No | Must not expose held-back final |
| `../LESSON_TEMPLATE.md` | Normative reasoning and evidence format | Authoritative | Authorized workflow/curriculum phase | Lessons and learner | Required-field review | Defines evidence | No final prompts |
| `../ASSESSMENTS.md` | Baseline, reviews, public calibration forms | Authoritative public assessment source | Phase 1+ only | UI and learner | Arithmetic/domain/gate validation | Attempts live elsewhere | Public; cannot be called held-back |
| `../ASSESSMENT_KEYS.md` | Keys and scoring rubrics | Authoritative protected key source | Phase 1+ only | UI after valid completion | Key-access validation | No | Protected until finished attempt |
| `../DAILY_APPLIED_ASSESSMENTS.md` | Applied diagnostic/stretch tasks | Authoritative for its declared optional status until conflict is resolved | Phase 1+ only | UI and learner | Optional/mandatory consistency check | Attempts live elsewhere | Public practice |
| `../COVERAGE_MAP.md` | Requirement manifest and day mapping | Authoritative for scope, not mastery | Authorized semantic phase | Validators and reviewers | M/P uniqueness and semantic-ledger links | References only | No final prompts |
| `../PROGRESS.md` | Append-only execution record | Authoritative learner history | Learner/runtime append only | Reviews and final evaluation | Never rewrite or upgrade past results | Yes | May record exposure, not keys |
| `../SUPPLEMENTAL_RESOURCES.md` | Optional supporting sources | Supplemental, non-authoritative | Authorized resource review | Learner | Link/currentness review separately | No | Must not repair core gaps by implication |
| `../RESEARCH_LEDGER.md` | Historical resource rationale | Supplemental historical snapshot | Explicit research refresh only | Reviewers | Date and provenance review | No | No |
| `../content-data.js` | Embedded core Markdown payload | Generated | `validation/generate-payloads.mjs` after authorized source changes | Browser UI | Decode and byte-compare to fixed sources | Contains `PROGRESS.md` template only | Includes public assessment/key sources, never held-back prompt/key |
| `../supplemental-data.js` | Embedded supplemental Markdown payload | Generated | `validation/generate-payloads.mjs` after authorized source changes | Browser UI | Decode and byte-compare to fixed sources | No | No held-back content allowed |
| `CURRENT_REAUDIT.md` | Current 118-route curriculum-readiness matrix | Generated current re-audit | `validation/generate-current-reaudit.mjs` after authorized curriculum changes | Rebuild acceptance | Exact M1–M100/P1–P18, evaluator/rubric/transfer checks | No learner attempts | No sealed prompts/keys |
| `FINAL_REBUILD_REPORT.md` | Closure decision with separated evidence states | Authoritative closure report | Full-rebuild Gate 7 | Maintainers/learner | Aggregate harness plus named evidence | Reports only | No sealed content |
| `BROWSER_REVIEW.md` | Static versus interactive delivery state | Authoritative review note | Application-delivery gate | Maintainers | Static validator or browser run | No | No |
| `../index.html` | Delivery, routing, status, evidence and key gates | Authoritative implementation | Phase 1/6 only | Browser user | Static/function and browser validation | Browser local state | Must enforce access boundaries |
| `../../de-luyen-tap.md` | 100-question outcome benchmark | Authoritative benchmark, frozen | User-controlled source only | Audit and held-back evaluation design | 100 unique source questions | No | Must not become daily lesson bank |
| `../../Lo_trinh_hoc_100_cau_de_thi.md` | Separate companion roadmap | Supplemental and non-authoritative | User-controlled source only | Optional reference | Must not override anti-rehearsal or 30-session contract | No | Direct-original route conflicts with this challenge |
| `WORKFLOW.md` | Phase gates | Authoritative remediation process | Phase 0 or user-approved workflow change | All remediation | Structural validator | No | No |
| `GAP_TRACKER.md` | G01–G18 routing and evidence state | Authoritative tracking index | Current authorized phase | Reviewers and validators | Unique gaps/status vocabulary | References only | No held-back prompts |
| `PHASE_STATUS.md` | Current authorization boundary | Authoritative current state | Phase owner after gate decision | All work | Structural validator | No | No |
| `../validation/*.mjs` | Reproducible local checks | Tooling, not curriculum authority | Phase 0/6 | Maintainers | Self-executing Node checks | No | Must not print protected prompt bodies |
| `../validation-results/*` | Generated run summaries | Generated evidence, replaceable | Aggregate validator | Reviewers | Timestamped/local scope | No learner answers | Must not contain held-back questions |

## Generated payload rule

Validation is read-only. It never updates `content-data.js` or `supplemental-data.js`. `validation/generate-payloads.mjs` is the explicit deterministic generator with a fixed source inventory and must be invoked separately after authorized source edits.

Audit-data extraction is a separate controlled operation. Normal validators read only the dataset they need. A report SHA mismatch blocks validation until the change is reviewed and datasets are explicitly regenerated; generated JSON is never independent semantic authority.

## Resolved and deferred authority decisions

- Mandatory evaluators live in core lesson/plan/assessment authority; `DAILY_APPLIED_ASSESSMENTS.md` remains optional.
- The canonical five-domain taxonomy and comparable baseline/final allocation are defined in `PHASE1_ASSESSMENT_CONTRACT.md`.
- Public Form B is calibration only; a held-back final must remain outside learner-visible sources and payloads.
- Browser verification is `PENDING` by explicit user deferral and returns as a Phase 6 gate; it is not recorded as browser `PASS`.
