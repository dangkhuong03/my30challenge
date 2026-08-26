# Daily Exercise Keys

Mở sau khi khóa bài của ngày tương ứng. Example answers không phải wording duy nhất.

## D02

1 agent/receives/goal; 2 result/is/clear; 3 model/predicts/action; 4 user/needs/answer; 5 system/stores/events; 6 files/are/available; 7 worker/sends/message; 8 task/has/steps; 9 model/uses/data; 10 report/contains/tables; 11 tool/returns/error; 12 method/reduces/cost; 13 reviewers/check/output; 14 evidence/supports/claim; 15 limitation/is/important.

## D03

Head nouns theo thứ tự: tool, result, actions, method, request, model, output, tasks, system, response, agent, cost, environment, question, checklist, state, name, rate, reviewer, process. Articles/plurals phải agreement với head.

## D04

1 present fact/process; 2 past completed; 3 ability; 4 requirement/prohibition; 5 uncertainty; 6 recommendation; 7 past passive; 8 present negative; 9 past negative; 10 weak possibility; 11 future; 12 condition + future consequence.

## D05

Expected starts: `How many tools does...`; `Why did...`; `Where is...`; `When did...`; `May/Can the result...`; `Who trained...`; `What does the system need?`; `Has the task finished?`; `Which datasets does...`; `What does verification prevent?`.

## D06

Content-word stress targets: `AGENT–READS–USER REQUEST`; `CHOOSES–ACTION–USES–TOOL`; `SYSTEM–CHECKS–FINAL RESULT`; `RISKY ACTION–NEEDS–VERIFICATION`; `WORKER–STOPS–BUDGET–ENDS`. Final consonants must remain audible without adding an extra vowel.

## D08

Heads: rate, step, policy, store, message, service, process, time, gate, limit. Expansion must preserve modifier relationships; e.g. `the rate of successful completion of tasks by the agent`.

## D09

Passive items: 1,3,5,7,9,10. Active items: 2,4,6,8. In 7/10 actor may remain unknown. Do not invent actor unless marked as assumption.

## D10

Core logic: success message **but** missing file → do not continue; read-only check finds absence → classify failed; **however** possible in-progress state → wait/reconcile; after timeout retry same ID → no duplicate. Accept connector substitutions only if relation remains identical.

## D11

Main clauses: 1 model produced errors; 2 results show X; 3 agent reported failure; 4 file remained available; 5 worker should reconcile; 6 authors argue X; 7 method may fail; 8 paper does not claim X.

## D12

Core families: predict/prediction/predictive/predictably; evaluate/evaluation/evaluative; rely/reliability/reliable/reliably; verify/verification/verifiable; observe/observation/observable; compare/comparison/comparative; differ/difference/different/differently; signify/significance/significant/significantly; complete/completion/complete/completely; ambiguous/ambiguity/ambiguously. Some rare forms should not be forced.

## D13

- Main claim: reliable evaluation checks observable end states/postconditions, not model self-report.
- Examples: file existence/name/contents; durable form confirmation.
- Limitation: weak postcondition can accept false success.
- A faithful summary must retain result focus, requirement-to-check mapping and uncertainty when no reliable check exists.

## D15–D20 — Paper map

- Abstract compresses problem, checklist method, synthetic comparison, results, cost and limitation.
- Introduction: incomplete observations → risky retries → question/contribution.
- Method: 120 tasks, two agent conditions, three checklist steps, budget and metrics.
- Results: 82/120 vs 101/120; duplicates 11 vs 3; unresolved 7; steps 8.4 vs 10.1; no significance claim.
- Discussion: interpretation, extra cost, weak-postcondition risk, synthetic/small boundary and future work.
- Correct claim strength is generally `suggests/supports`, not `proves`.

## D22

Main clauses: 1 study cannot show generalization; 2 worker records outcome; 3 rule may accept output; 4 gate should include hidden set; 5 results do not prove universal checking; 6 layer can reveal definitions; 7 store preserves events; 8 retrying can duplicate; 9 evaluation reports both; 10 reviewer may overestimate intelligibility.

## D23

Expected dominant functions: Abstract = compressed claim/evidence/limitation; Introduction paragraph 2 = problem/risk explanation; Results paragraph 1 = numeric evidence/comparison; Discussion paragraph 2 = costs/limitations/examples.

## D24

Accept paraphrases only if they preserve actor, numbers, uncertainty and causal status. Reject `suggests → proves`, omission of `average`, `largest`, `no significance claim`, or synthetic/small limitations.

## D25–D27

PREML minimum: problem (unverified tool outcomes), relevance (false/duplicate actions), evidence/method (120 synthetic tasks, checklist comparison), main results (68→84%; 11→3; +1.7 steps), limitation (synthetic, one run, weak postconditions). Q10 should be conditional: verification intensity should depend on risk/cost and verifiability.

## D29

Every claim must trace to the paper. Unsupported extrapolation, invented statistical significance or universal recommendation is an error tagged `CLAIM`.
