# Audit Gap Tracker

Current remediation status is intentionally `PENDING`. Audit status describes the finding in `../AUDIT_REPORT.md`; it is not a workflow completion claim.

| Gap | Severity | Audit status | Affected scope | Root cause / required outcome | Phase | Allowed files | Acceptance evidence | Automated gate | Semantic gate | Workflow status |
|---|---|---|---|---|---:|---|---|---|---|---|
| G01 | CRITICAL | PARTIAL | Broad; D2–27 | Assertions/prompts replace worked teaching; add specified worked mechanisms and evaluated attempts | 3 | Lessons, plan, keys, coverage | Per-M teaching chain | Coverage/structure | Required | PENDING |
| G02 | CRITICAL | FAIL | M20,M21,M30,M39,M42,M68,M77 | Seven missing taught-to-tested paths | 2 | Lessons, plan, assessments, keys, coverage | Eight-link chain per ID | Coverage/structure | Required | PASS |
| G03 | HIGH | FAIL | M8,M12,M16,M18,M22,M23,M27,M33,M35,M37,M41,M45,M57,M67,M87 | Surface variants credited as transfer; change reasoning conditions | 4 | Lessons, applied assessments, coverage | Transfer delta and review | Anti-memorization | Required | PENDING |
| G04 | CRITICAL | FAIL | All M; D30 | Published ten-task final cannot establish unseen universal capability | 1 | Challenge, assessments, keys, UI, coverage | Held-back parallel protocol and 100-capability acceptance | Assessment | Required | PASS |
| G05 | HIGH | FAIL | Baseline/final domains | Claimed domain balance conflicts with actual allocation | 1 | Challenge, assessments, keys, plan | Canonical taxonomy and comparable denominators | Assessment | Required | PASS |
| G06 | HIGH | FAIL | All M; D1–30 | Mandatory evaluator claim conflicts with optional DAA/UI | 1 | Coverage, DAA, plan, UI | One coherent evaluator contract | Assessment | Required | PASS |
| G07 | HIGH | PARTIAL | Many M; D6 onward | Deferred/selective topics lack scheduled retrieval | 5 | Plan, lessons, coverage, progress schema | Per-ID delayed retrieval schedule | Coverage | Required | PENDING |
| G08 | HIGH | PARTIAL | All M/days | Generic self-grading cannot reliably correct misconceptions | 5 | Lessons, keys, DAA, template | Checkable criteria and changed retry trail | Structure | Required | PENDING |
| G09 | HIGH | PARTIAL | M46,M48,M50,M51,M57,M60 | Compressed RL explanations obscure assumptions | 3 | Lessons, keys, assessments | Correct conditional mechanisms and branch/boundary checks | Coverage | Required | PENDING |
| G10 | HIGH | PARTIAL | Systems/product subset | Generic capsule mapped to many missing specific mechanisms | 3 | Lessons, plan, assessments, coverage | Focused traces/checkpoints listed in report | Coverage | Required | PENDING |
| G11 | HIGH | UNKNOWN | All M; dense days | No baseline or observed workload evidence | 7 | Progress/evidence append only; future plan after approval | Baseline and workload pilots | Structure only | Required | PENDING |
| G12 | HIGH | FAIL | App; D1–30 | Keys/import/PASS gates accept insufficient evidence | 1 | UI and assessment contract | Finished-attempt key gate and unverified-import handling | Assessment | Browser required | PARTIAL |
| G13 | MEDIUM | PARTIAL | Reviews and final | Recovery/progression/status semantics conflict | 1 | Challenge, plan, UI, progress schema | Reachable recovery without false PASS | Assessment | Browser required | PARTIAL |
| G14 | HIGH | UNKNOWN | M21,M40,M48,M73,M92 | Benchmark conventions are underspecified | 1 | Assessment errata/rubric only | Conditional-answer rubric; benchmark unchanged | Assessment | Required | PASS |
| G15 | HIGH | UNKNOWN | All M/days | No learner performance evidence | 7 | Progress/evidence append only | Original attempts, conditions, retries, delayed results | Structure only | Learner evidence required | PENDING |
| G16 | MEDIUM | FAIL | All M; companion route | Root roadmap conflicts with anti-rehearsal contract | 0 | Authority/workflow only initially | Explicit non-authority boundary | Structure | Required | PENDING |
| G17 | MEDIUM | PARTIAL | D2–29 | No prerequisite or support-fading map | 5 | Plan, lessons, coverage | Dependencies and decreasing-support annotations | Coverage | Required | PENDING |
| G18 | HIGH | PARTIAL | Applied systems/RL subset | Build/test work is optional or only a plan | 5 | Lessons, plan, DAA, evidence schema | Predicted/observed/delta/retest artifact | Structure | Required | PENDING |

## Closure rule

A row becomes `PASS` only after its automated gate passes and its required semantic/browser/learner gate has direct evidence. Historical audit `UNKNOWN` remains distinct from workflow `PENDING`; missing evidence is never fabricated.
