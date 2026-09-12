# Kế hoạch học 30 buổi

Mỗi buổi dùng nhịp trong `CHALLENGE.md`. “Done” chỉ đạt khi có evidence; đọc xong không được tính là hoàn thành.

## Daily contract matrix

Ma trận này là contract vận hành; phần lesson phía dưới giải thích nội dung. `Minimum` là phiên 45 phút. `Target` thường là 120 phút; review có thể 150 phút, capstone 180 phút, baseline/final 210 phút.

Kiến trúc và workload authority: `remediation/THIRTY_DAY_ARCHITECTURE.md` và `remediation/WORKLOAD_BUDGET.md`. Dense Days 6, 20, 27 có target 240 phút; minimum không tạo PASS nếu evaluator bắt buộc còn thiếu.

| Ngày | Outcome | Minimum action | Target action | Done when | Evidence | Stretch |
|---:|---|---|---|---|---|---|
| 1 | Có baseline theo năm domain | Làm 5 scored tasks đóng | Làm đủ 10 scored tasks A1–A4/A6–A11 trong 210'; A5D chỉ diagnostic | Có tổng /100, đúng năm domain /20 và error taxonomy | `baseline-day-01.md` | Làm A5D causal diagnostic |
| 2 | Viết proof không nhảy bước | 1 proof + 1 counterexample | 3 proof forms + phản biện | ≥2 lời giải rubric 3/4 | `day-02.md` | Bỏ assumption và phá claim |
| 3 | Nối algebra với geometry | Trace 1 matrix nhỏ | 2 derivations + 2 hình | Giải thích rank/spectrum/sparsity | `day-03.md` | Biến thể 3D |
| 4 | Tự derive calculus/convex results | 1 gradient derivation | 2 derivations + stability drill | Đúng điều kiện convex/unique | `day-04.md` | Prove bằng hai cách |
| 5 | Estimate có bounds, units và candidate reduction | 2 estimates | Counting + LSH + cost break-even | Có complexity, units, sanity | `day-05.md` | Sensitivity analysis |
| 6 | Dựng probability, estimation và inference mechanisms | 1 M20 derivation | Three mechanism clusters + evaluators trong 240' | M13/M14/M15/M18/M20/M21/M26/M27/M30 có evidence hoặc status trung thực | sampling notebook + ID artifacts | Bayes retrieval |
| 7 | Review 1 thuần, không học topic mới | Quiz 5 câu | Review 150': assessment khóa 75' + chấm, error taxonomy và recovery | Quiz Ngày 2–6 ≥70%; recovery plan không thay PASS | `review-01.md` | Recovery drill + changed retest |
| 8 | Thiết kế inference hợp lệ | 1 p-value + 1 power drill | Experiment memo + paired/Bayes | Không sai semantics | `day-08.md` | Sequential caveat |
| 9 | Chọn bound/reliability evaluator đúng | 2 method-selection drills | Bounds/bootstrap/pass metrics/canary | Nêu validity/failure | `day-09.md` | Derive alternate bound |
| 10 | Điều tra metric không overclaim | 1 Simpson + 1 artifact | Incident plan + bias drills | Có evidence-to-kill mỗi hypothesis | `day-10.md` | 10-minute oral brief |
| 11 | Chọn model/metric từ data process | 2 metric drills | Calibration/GLM/imbalance set | Có decision consequence | `day-11.md` | Recalibration design |
| 12 | Xử lý temporal/latent/censored data | 1 hand trace | AR + HMM + survival traces | Đúng state/time assumptions | `day-12.md` | Numerical scaling demo |
| 13 | Tách causal claims và thiết kế ranking đúng | 1 M39 derivation | leakage + M39/M42 core chains trong 180' | Hai evaluator ≥8/10 hoặc ghi đúng PARTIAL/FAIL | ID-scoped artifacts | Construct non-identifiability |
| 14 | Review 2 thuần, không học topic mới | Quiz modelling | Closed-book review 150' | Domain score ≥70%; nếu fail phải append recovery + changed retest | `review-02.md` | Recovery drill theo lỗi |
| 15 | Dựng và giải Bellman equations | 1 MDP nhỏ | Solve + contraction proof | Equation và convergence đúng | `day-15.md` | POMDP counterexample |
| 16 | Phân biệt TD control methods | 1 update trace | Q/SARSA/triad/shaping set | Giải thích từ update target | `day-16.md` | Off-policy failure trace |
| 17 | Derive policy-gradient objectives | 1 REINFORCE derivation | REINFORCE/GAE/PPO/entropy | Đúng bias–variance behavior | `day-17.md` | Derive baseline optimum |
| 18 | Chọn bandit/OPE/offline method | 2 selection drills | UCB/TS/IS/CQL set | Nhận diện support mismatch | `day-18.md` | Doubly robust sketch |
| 19 | Thiết kế reward khó bị game | 1 reward audit | RLHF + POMDP + reward spec | Có KL/counter-metrics/eval | `day-19.md` | Red-team reward |
| 20 | Giữ correctness, overload và unknown outcomes | 1 M68 trace | Correctness/capacity/product/failure build trong 240' | M67/M68/M69/M71/M73/M76/M83/M98/P12/P15 có rubric evidence | crash matrix + capacity/limiter build | API không idempotency |
| 21 | Review 3 thuần, không học topic mới | Quiz RL/Systems | Closed-book review 150' | RL/Systems-so-far ≥70%; recovery plan không thay PASS | `review-03.md` | Recovery drill + changed retest |
| 22 | Xây durable workflow state machine | 1 DAG trace | Leases/fanout/version/wait design | Restart không lặp effect | `day-22.md` | Live migration critique |
| 23 | Thiết kế serving/data paths có cost | 1 API + 1 retrieval drill | Streaming/cache/LSH/RAG/cost | Contracts và estimates đúng | `day-23.md` | Compare retrieval ablation |
| 24 | Xác lập security boundary thực | 1 threat model | Sandbox/data-flow/GUI verification | Code không thấy secret | `day-24.md` | Residual-risk register |
| 25 | Tạo eval/release gate đáng tin | 1 metric drill | Suites/graders/reliability/video gate | Có floors và escape hatch | `day-25.md` | Grader calibration plan |
| 26 | Ra quyết định product và version có bằng chứng | 1 M77 policy skeleton | decision + M77 trong 150' | Causal status rõ và M77 ≥8/10 | `day-26.md` + M77 artifact | Pre-mortem |
| 27 | Thiết kế context, tool và durable lifecycle | 1 cache calc + lifecycle trace | Context/tool/session/Goal integrated build trong 240' | M85/P1/P2/P3/P4/P9/P13/P16 có rubric evidence | topology + cost + lifecycle defense | Two concurrent wake calls |
| 28 | Review 4 thuần, không học topic mới | Quiz agent architecture | Closed-book review 150' | Agent architecture ≥70%; recovery plan không thay PASS | `review-04.md` | Recovery drill + changed retest |
| 29 | Tích hợp managed-agent architecture | Vẽ state owners + 3 flows | Full capstone trong 180' | Mọi arrow có contract | `capstone-day-29.md` | Oral defense 3 trade-offs |
| 30 | Chứng minh mastery trên đề mới được giữ kín | Làm full sealed final; không rút gọn | Sealed final 210'; prompt/key ngoài learner-visible repo | Tổng ≥80, từng domain ≥14/20 và ledger M1–M100 không còn mandatory gap | packet ID/hash + `final-day-30.md` + capability ledger | Oral defense ngẫu nhiên |

## Phase 1 — Reasoning foundations

### Ngày 1 — Baseline và cấu trúc câu trả lời

- **Outcome:** đo baseline thật và tạo routing cho toàn bộ learning tree; không học trước khi attempt.
- **Prerequisite:** self-declaration only; không suy mastery từ kinh nghiệm.
- **Target 210':** làm A1–A4/A6–A11 closed-book, khóa original responses, chấm năm domain, lập error taxonomy và làm một changed micro-retry. A5D chỉ diagnostic.
- **Minimum 45':** chỉ dùng khi buổi bị gián đoạn và ghi `PARTIAL`; không thể thay baseline đầy đủ.
- **Done:** original immutable attempt + total/domain scores + error taxonomy + changed retry + routing decision.
- **Evidence:** `baseline-day-01.md`; **Stretch:** oral defense một assumption boundary sau khi khóa bài.

### Ngày 2 — Logic và proof toolkit

- **Outcome:** reconstruct M1/M5 từ closure, domain và curvature; không học thuộc benchmark wording.
- **Prerequisite/retrieval:** baseline error tags; rational closure, prime parity, logarithm.
- **Target 120':** worked reconstruction 30', independent `P3-M1/P3-M5` 45', material transfer 25', rubric/changed retry/evidence 20'.
- **Minimum 45':** một evaluator; ghi `PARTIAL` nếu evaluator còn lại thiếu.
- **Done:** cả hai task ≥8/10, không thiếu dependency/domain/equality checkpoint, hoặc status trung thực với retry scheduled.
- **Evidence:** `day-02/M1-attempt.md`, `day-02/M5-attempt.md`, misconception tags và separate retries. **Stretch:** alternate proof only after Done.

### Ngày 3 — Linear algebra hình học

- **Outcome:** reconstruct M3/M4/M7/M11/M12 từ invariant subspaces và geometry.
- **Prerequisite/retrieval:** Day 2 proof discipline; basis, image/kernel và quadratic forms.
- **Target 150':** shared mechanism 35', five ID contributions 65', changed-condition transfer 25', rubric/retry/evidence 25'.
- **Minimum 45':** M3 decomposition và một spectral boundary; incomplete batch remains `PARTIAL`.
- **Done:** năm evaluators ≥8/10, including direct sum, symmetry condition, multiplicities, nilpotent boundary và L1 degeneracy.
- **Evidence:** `day-03/<ID>-attempt.md` plus invariant map, sketches and immutable retry trail.

### Ngày 4 — Calculus, limits và convex optimization

- **Outcome:** reconstruct M2/M6/M8/M10 and test where each shortcut fails.
- **Prerequisite/retrieval:** Days 2–3 algebra, functions, basis/nullspace and dimension discipline.
- **Target 150':** four reconstructions 55', independent evaluators 45', transfer 25', feedback/retry/evidence 25'.
- **Minimum 45':** one calculus and one numerical task; remaining mandatory work keeps `PARTIAL`.
- **Done:** four evaluators ≥8/10 with interval scale, singular handling, Hessian null direction and residual precision boundary.
- **Evidence:** `day-04/<ID>-attempt.md`, hand calculation and separate changed retries.

### Ngày 5 — Combinatorics, asymptotics và estimation tay

- **Outcome:** reconstruct M9/M72/M79/M81/P11 as one scale-before-systems decision workflow.
- **Prerequisite/retrieval:** Day 4 functions, units, logarithms and numerical sanity checks.
- **Target 150':** complexity/cost reconstruction 40', dedup design 35', independent evaluators 40', transfer/feedback/evidence 35'.
- **Minimum 45':** one quantitative sheet plus one failure boundary; incomplete IDs remain `PARTIAL`.
- **Done:** all five contributions have rubric evidence for noise, units/retention, transform robustness, savings overlap and sandbox total cost.
- **Evidence:** `day-05/<ID>-attempt.md`, cost model, dedup test plan and changed retries.

## Phase 2 — Probability, statistics và modelling

### Ngày 6 — Probability và estimation foundations

- **Học:** conditioning/Bayes, indicators và ba core chains M20/M21/M30: endpoint maximum, discrete maximum UMVU và Wilks LRT. Các topic còn lại giữ recognition/retrieval routing.
- **Practice:** hoàn thành `P2-M20`, `P2-M21`, `P2-M30`; nếu hết timebox 120 phút, chuyển changed retry sang recovery slot đã định, không hạ Done test.
- **Done:** mỗi ID đạt ≥8/10, có assumption bắt buộc và không thiếu checkpoint in nghiêng; `PARTIAL/FAIL` giữ nguyên attempt và gắn changed retry.
- **Evidence:** `day-06/M20-attempt.md`, `day-06/M21-attempt.md`, `day-06/M30-attempt.md` + rubric tags.

### Ngày 7 — Review 1

- **Học:** không có topic mới; đóng tài liệu trước khi bắt đầu.
- **Practice:** review 150 phút gồm assessment khóa 75 phút, chấm, error taxonomy và recovery; retrieve một probability extension và một estimation extension đã defer từ Ngày 6.
- **Done:** đạt ≥70%. Nếu chưa đạt, append `FAIL`, recovery nhắm root cause và changed retest; recovery plan không thay `PASS`.
- **Evidence:** `review-01.md`.

### Ngày 8 — Experiments và inference

- **Học:** p-value, confidence interval, power/sample size, paired design, multiple testing, Bayesian posterior.
- **Practice:** thiết kế experiment cho activation metric mới; so paired vs independent bằng covariance.
- **Done:** không diễn giải p-value thành xác suất null đúng; nêu được FWER vs FDR trade-off.
- **Evidence:** experiment memo + derivation.

### Ngày 9 — Concentration, bootstrap và noisy evaluation

- **Học:** Chebyshev, Hoeffding, CLT boundary, bootstrap validity/failure, pass@k estimator, flaky tests, noisy canaries.
- **Practice:** chọn bound cho hai tình huống khác nhau; thiết kế retry policy không “retry until green”.
- **Done:** nêu assumptions khiến từng bound/resampling method hợp lệ hoặc hỏng.
- **Evidence:** comparison table + two transfer drills.

### Ngày 10 — Statistical judgment

- **Học:** Simpson reversal, measurement artifacts, selection/length bias, incident communication under uncertainty.
- **Practice:** tạo Simpson example mới; điều tra metric giảm giả với bốn artifact mechanisms.
- **Done:** mỗi hypothesis có evidence xác nhận hoặc bác bỏ và câu báo cáo không overclaim.
- **Evidence:** `day-10.md`.
- **Required delayed retrieval:** closed-book `P2-M20-R`, `P2-M21-R`, `P2-M30-R`; mỗi task đổi family hoặc sampling/model condition và append kết quả.

### Ngày 11 — Predictive models và metrics

- **Outcome:** biến model outputs thành cost-sensitive decisions; routes M31, M32, M40, M44.
- **Minimum action (60 phút):** worked threshold/calibration reconstruction + một evaluator ở route yếu nhất; ghi `PARTIAL` cho phần chưa làm.
- **Target action (150 phút):** lesson/retrieval 35, four evaluators 80, transfer 20, grade/retry 15.
- **Done when:** bốn evaluator ≥8/10 hoặc có trạng thái trung thực; model/link/metric/threshold đều nối với data-generating process và cost.
- **Evidence:** `day-11/model-card.md` + `day-11/<ID>-attempt.md`.
- **Stretch:** capacity-constrained subgroup policy; không thay mandatory work.

### Ngày 12 — Sequential và censored data

- **Outcome:** phân biệt temporal dependence, latent state và censoring; routes M33, M34, M36.
- **Minimum action (60 phút):** một AR derivation, một scaled HMM step và một KM risk-set update.
- **Target action (150 phút):** reconstruction 35, three evaluators 75, changed transfer 25, grade/retry 15.
- **Done when:** ba evaluator ≥8/10 hoặc trạng thái trung thực; numerical scaling và observation assumptions hiện rõ.
- **Evidence:** `day-12/temporal-latent-censoring.md` + ID attempts.
- **Stretch:** compare state-space filtering; không bắt buộc.

### Ngày 13 — Causality, leakage, ranking và preferences

- **Outcome:** thiết kế causal/ranking decision không overclaim; routes M35, M38, M39, M41, M42, M43, M45.
- **Minimum action (75 phút):** DAG/estimand, leakage audit và hai core evaluators M39/M42; phần còn lại giữ `PARTIAL`.
- **Target action (180 phút):** reconstruction 35, seven evaluators 100, transfer 25, grade/retry 20.
- **Done when:** cả bảy route có result ≥8/10 hoặc trạng thái trung thực; identification, null/support và launch evidence tách rõ.
- **Evidence:** `day-13/causal-ranking-pack.md` + seven ID attempts.
- **Stretch:** non-transitive contextual preference simulation.

### Ngày 14 — Review 2

- **Outcome:** đo retained transfer Days 8–13; không có topic mới.
- **Minimum action (75 phút):** locked form và lưu original response; thiếu grading/repair là `PARTIAL`.
- **Target action (150 phút):** locked form 75, grading 25, two changed retrievals 30, repair plan 20.
- **Done when:** tổng ≥70%, mọi sampled-domain floor đạt, correction ledger và two changed transfers tồn tại; nếu không, ghi `FAIL/PARTIAL`.
- **Evidence:** `review-02.md` với timestamps, scores và immutable attempt references.
- **Stretch:** oral defense một failed assumption; không cộng điểm.

## Phase 3 — Reinforcement learning

### Ngày 15 — MDP và Bellman foundations

- **Outcome:** formalize and solve sequential decisions; routes M46,M47,M48,M56,M62.
- **Minimum action (60 phút):** state diagram, one exact Bellman solve and contraction error bound.
- **Target action (150 phút):** reconstruction 35, five evaluators 80, transfer 20, grade 15.
- **Done when:** five routes ≥8/10 or honest status; equations, reward timing and convergence consequence are explicit.
- **Evidence:** `day-15/bellman-pack.md` + per-ID attempts.
- **Stretch:** state-aliasing POMDP counterexample.

### Ngày 16 — Dynamic programming và temporal difference

- **Outcome:** explain TD control from targets and diagnose instability; routes M49,M55,M57.
- **Minimum action (60 phút):** paired Q/SARSA trace and one shaping endpoint proof.
- **Target action (150 phút):** reconstruction 35, three evaluators 70, transfer 25, grade/retry 20.
- **Done when:** all routes meet rubric or retain honest status; unsafe behavior and deadly-triad mechanism are causal traces.
- **Evidence:** `day-16/td-stability.md` + per-ID attempts.
- **Stretch:** linear off-policy divergence simulation design.

### Ngày 17 — Policy gradients

- **Outcome:** derive and stress-test policy-gradient mechanisms; routes M50,M51,M60,M63.
- **Minimum action (60 phút):** baseline proof and two-sign PPO trace.
- **Target action (150 phút):** reconstruction 35, four evaluators 75, transfer 25, grade 15.
- **Done when:** four routes ≥8/10 or honest status; GAE/clip/entropy extremes are reasoned, not labeled.
- **Evidence:** `day-17/policy-gradient-pack.md` + per-ID attempts.
- **Stretch:** action-dependent baseline counterexample.

### Ngày 18 — Bandits, OPE và offline RL

- **Outcome:** choose bandit/RL and evaluate logged policies under support limits; routes M52,M53,M58,M59,M64.
- **Minimum action (60 phút):** UCB or posterior trace, abstraction choice and one IS support audit.
- **Target action (150 phút):** reconstruction 30, five evaluators 75, delayed retrieval 20, transfer/grade 25.
- **Done when:** five routes and M39/M42 retrievals have results; unsupported actions and horizon variance are explicit.
- **Evidence:** `day-18/logged-decision-pack.md`, per-ID attempts and `P2-M39-R/P2-M42-R`.
- **Stretch:** posterior misspecification sensitivity.
- **Required delayed retrieval:** `P2-M39-R` trên clustered embeddings và `P2-M42-R` cho new-user cold start; lưu riêng original response và rubric result.

### Ngày 19 — RLHF, rewards và agent formalization

- **Outcome:** build reward/evaluation contracts resistant to proxy gaming; routes M54,M61,M65.
- **Minimum action (60 phút):** preference/KL objective, one reward spec and verified-postcondition sketch.
- **Target action (150 phút):** reconstruction 35, three evaluators 65, red-team/transfer 35, grade 15.
- **Done when:** three routes ≥8/10 or honest status; counter-metrics, KL extremes, partial observation and postconditions exist.
- **Evidence:** `day-19/reward-integrity.md` + per-ID attempts.
- **Stretch:** disagreement-aware reward-model protocol.

## Phase 4 — Product, systems và agent architecture

### Ngày 20 — Correctness, queueing và overload

- **Outcome:** preserve correctness through races/crashes/retries/overload; routes M67,M68,M69,M71,M73,M76,M83,M98,P12,P15.
- **Minimum action (90 phút):** atomic intent/effect trace, capacity calculation, P2-M68 trace and one unknown-outcome recovery.
- **Target action (240 phút):** reconstruction 40, ten evaluators 130, transfer 40, grade/retry 30.
- **Done when:** all routes meet rubric or honest status; every effect has owner, invariant, crash behavior and verification.
- **Evidence:** `day-20/correctness-overload-pack.md` + per-ID attempts.
- **Stretch:** multi-region overload; never substitutes mandatory routes.

- **Học:** atomicity, isolation, idempotency/outbox/saga/unknown outcome; Little’s law, utilization/p99, backpressure, token bucket, admission control, fairness và retry storms.
- **Practice:** thiết kế payment + async job; tính capacity; hoàn thành `P2-M68` bằng atomic pseudocode, hand trace và concurrency/clock failure test.
- **Done:** ngoài consistency/capacity, M68 đạt ≥8/10 và bảo vệ `O(1)` state, burst cap, monotonic time, atomic debit.
- **Evidence:** sequence diagram + capacity sheet + `day-20/M68-attempt.md`.

### Ngày 21 — Review 3

- **Outcome:** measure retained RL/system transfer; no new capability.
- **Minimum action (60 phút):** locked core sample and error taxonomy.
- **Target action (150 phút):** locked form 75, grade 20, oral defense 20, changed retries 35.
- **Done when:** total ≥70%, every floor and mandatory artifact pass; otherwise preserve `PARTIAL/FAIL`.
- **Evidence:** `review-03.md`.
- **Stretch:** none until recovery is complete.

- **Học:** không có topic mới; đóng tài liệu trước khi bắt đầu.
- **Practice:** review 150 phút gồm assessment khóa 90 phút, chấm, error taxonomy và recovery; closed-book quiz Ngày 15–20 và failure-design oral defense.
- **Done:** score RL/Systems-so-far ≥70%; recovery plan không thay `PASS`.
- **Evidence:** `review-03.md`.

### Ngày 22 — Durable workflow engines

- **Outcome:** build crash-safe durable workflows; routes M70,M86,M87,M88,M89.
- **Minimum action (75 phút):** state table, fenced lease trace and version-pinned restart.
- **Target action (180 phút):** reconstruction 35, five evaluators 90, transfer 35, grade 20.
- **Done when:** stale writes, partial fan-out, edit invalidation, in-flight version and human wait are deterministic.
- **Evidence:** `day-22/durable-workflow.md` + per-ID attempts.
- **Stretch:** constrained live-migration argument.

- **Học:** DAG execution, worker claiming/leases, checkpointing, fan-out limits, partial results, graph cycles, incremental recompute, immutable versions, durable timers/approval.
- **Practice:** state machine cho workflow có map + human wait + version update.
- **Done:** restart không làm lại completed expensive work hoặc lặp side effect.
- **Evidence:** state schema + transition table.

### Ngày 23 — API, streaming, retrieval, deduplication và cost

- **Outcome:** create stable serving/retrieval contracts; routes M66,M74,M82,M84.
- **Minimum action (75 phút):** API state schema, TTFA/backpressure trace and retrieval evidence metric.
- **Target action (180 phút):** reconstruction 35, four evaluators 80, M68 retrieval 20, transfer/grade 45.
- **Done when:** all four routes and delayed retrieval have results; latency, evidence, cache identity and cost are separable.
- **Evidence:** `day-23/serving-retrieval.md` + attempts and `P2-M68-R`.
- **Stretch:** index migration compatibility.

- **Học:** sync/async API contracts, streaming/backpressure, cache versioning, robust fingerprints + LSH/clustering, document-aware chunking, BM25/vector hybrid, reranking, grounded citations và cost decomposition.
- **Practice:** redesign API mixed-shape; thiết kế dedup pipeline và retrieval ablation; estimate cost với số mới.
- **Done:** tách latency, quality, cost và compatibility trade-offs.
- **Evidence:** API spec mini + cost sheet.
- **Required delayed retrieval:** `P2-M68-R` với weighted jobs, stale retry và cancellation refund; append result theo rubric.

### Ngày 24 — Security boundaries và action verification

- **Outcome:** isolate credentials/data and verify irreversible actions; routes M80,M95,M96,P5,P14.
- **Minimum action (60 phút):** trust boundary, effect taxonomy and one ambiguous-action state trace.
- **Target action (150 phút):** reconstruction 30, five evaluators 75, transfer/red-team 30, grade 15.
- **Done when:** all routes meet rubric or honest status; generated code has no secret and residual risks remain explicit.
- **Evidence:** `day-24/security-action-pack.md` + per-ID attempts.
- **Stretch:** dependency-compromise tabletop.

- **Học:** prompt injection, credential vault/proxy, egress/filesystem isolation, PII flow, publish authorization, copy-on-write rollback, GUI postcondition verification và ambiguous outcomes.
- **Practice:** redesign pipeline xử lý tài liệu độc hại; phân loại effects; thiết kế verify/retry cho action có thể đã được áp dụng.
- **Done:** generated code không nhận secret; nêu ít nhất hai residual risks.
- **Evidence:** trust-boundary diagram + abuse cases.

### Ngày 25 — Evaluation, monitoring và quality gates

- **Outcome:** build calibrated anti-gaming release evidence; routes M90,M93,M99,P6,P7,P17.
- **Minimum action (75 phút):** task/grader definition, repeated reliability floor and rollback rule.
- **Target action (180 phút):** reconstruction 35, six evaluators 90, transfer/human sampling 35, grade 20.
- **Done when:** every route has a result; no average hides a critical regression and suite saturation is governed.
- **Evidence:** `day-25/eval-release.md` + per-ID attempts.
- **Stretch:** disagreement-aware sampling optimization.

- **Học:** regression vs capability suites, end-state vs control grading, calibrated graders, pass@k/pass^k, flaky tests, noisy canaries, spatial/temporal video-quality axes, stratified human sampling và suite saturation.
- **Practice:** thiết kế gate cho agent sáng tạo ở domain mới; nêu release rule không dựa average đơn thuần.
- **Done:** gate có critical floors, counter-metrics, sample policy và rollback/escape hatch.
- **Evidence:** eval plan + scorecard.

### Ngày 26 — Product sense và decision quality

- **Outcome:** make quantified reversible product/compatibility decisions; routes M75,M77,M78,M94,M100,P8.
- **Minimum action (60 phút):** ranked hypotheses, one outcome SLO and M77 migration skeleton.
- **Target action (150 phút):** reconstruction 30, six evaluators 75, transfer 25, grade/retry 20.
- **Done when:** all routes meet rubric or honest status; causal status, kill evidence, guardrail and reversal condition exist.
- **Evidence:** `day-26/product-decision.md` + per-ID attempts.
- **Stretch:** regulated forced-retirement hearing.

- **Học:** hypotheses, SLI/SLO/error budget, Goodhart, causal vs observational evidence, expected value, deprecation policy và prerequisites của high-throughput merge philosophy.
- **Practice:** viết decision memo, rồi hoàn thành `P2-M77` với version pin, cohort regression, migration tooling, notice/retention, rollback và forced-retirement exception.
- **Done:** M77 đạt ≥8/10; average gain không được dùng để silent-replace customer behavior.
- **Evidence:** `day-26.md` + `day-26/M77-attempt.md`.

### Ngày 27 — Context, tool topology và lifecycle

- **Outcome:** design and cost the complete agent lifecycle; routes M85,P1,P2,P3,P4,P9,P13,P16.
- **Minimum action (90 phút):** topology, durable-owner table, cache calculation and one concurrent-wake trace.
- **Target action (240 phút):** reconstruction 40, eight evaluators 120, transfer 50, grade 30.
- **Done when:** all routes have results and cost/authority/state layers are not conflated.
- **Evidence:** `day-27/agent-lifecycle.md` + per-ID attempts.
- **Stretch:** schema churn migration; never replaces mandatory work.

- **Học:** direct tools vs code mode, discovery/masking/stable interface, KV cache, transcript/recitation; durable session, active context, goal contract, budgets, anti-spin, intent/result và concurrency-safe wake.
- **Practice:** topology cho hàng trăm operations; cost model cache; crash-recovery trace và bounded goal.
- **Done:** phân biệt đúng cost layer, durable state, authority và recovery boundary.
- **Evidence:** topology diagram + quantitative model + lifecycle trace.

### Ngày 28 — Review 4

- **Outcome:** measure retained systems/agent transfer; no new capability.
- **Minimum action (60 phút):** locked core sample and error routing.
- **Target action (150 phút):** locked form 75, grade 20, oral defense 20, changed retries 35.
- **Done when:** total ≥70%, every floor and artifact pass; otherwise preserve `PARTIAL/FAIL`.
- **Evidence:** `review-04.md`.
- **Stretch:** none before recovery.

- **Học:** không có topic mới; đóng tài liệu trước khi bắt đầu.
- **Practice:** review 150 phút gồm assessment khóa 105 phút, chấm, error taxonomy và recovery; closed-book quiz Ngày 22–27 và agent-architecture oral defense.
- **Done:** score Agent Architecture ≥70%; recovery plan không thay `PASS`.
- **Evidence:** `review-04.md`.

### Ngày 29 — Capstone synthesis

- **Outcome:** synthesize and defend a complete unfamiliar-domain architecture; route P18.
- **Minimum action (90 phút):** topology/owner table, one crash trace, security boundary and eval gate.
- **Target action (180 phút):** architecture build 90, adversarial traces 35, quantitative bottleneck 20, defense/grade 35.
- **Done when:** P18 mandatory dimensions pass or honest status; delayed M77 retrieval is separate and complete.
- **Evidence:** `capstone-day-29.md` and `P2-M77-R`.
- **Stretch:** alternate architecture comparison after core pass.

- **Học:** ghép brain/harness, session, sandbox, proxy, vault, workspace, workflows, approvals và eval plane thành contracts.
- **Target:** thiết kế một managed-agent platform với scale và constraints mới; mọi arrow có contract.
- **Done:** đáp án có state ownership, context/tool/security/failure/eval/goal policies và ba trade-offs.
- **Evidence:** `capstone-day-29.md`; tự chấm bằng design template.
- **Required delayed retrieval:** `P2-M77-R` cho incompatible embedding migration dưới cost cap và regulatory notice constraint.

### Ngày 30 — Sealed parallel final và closure

- **Outcome:** produce comparable sealed evidence across all five domains; no new learning.
- **Minimum action:** none; the full verification surface is mandatory and cannot be converted to a low-energy substitute.
- **Target action (210 phút):** setup/hash 10, sealed work 165, oral defense 20, evidence lock 15; grading happens only after lock.
- **Done when:** total ≥80, every domain ≥14/20 and the 118-capability evidence ledger has no mandatory hole; otherwise record `PARTIAL/FAIL`.
- **Evidence:** `final-day-30.md`, external packet ID/hash and immutable response reference; never store sealed prompt/key.
- **Stretch:** none before verdict; post-closure recovery is a separate cycle.

- **Target 210':** làm sealed parallel form do evaluator cấp ngoài repository; ghi packet ID/SHA-256 trước attempt; prompt/key không vào learner-visible files hoặc payload.
- **Minimum:** không áp dụng; đây là verification surface bắt buộc.
- **Done:** tổng ≥80, từng domain ≥14/20 và capability ledger M1–M100 không còn mandatory subpart chưa kiểm chứng; nếu thiếu phải ghi đúng `PARTIAL` hoặc `FAIL`.
- **Evidence:** packet ID/hash, original response bất biến, rubric/score theo domain, exposure declaration, error log và kết luận trong `final-day-30.md`; không lưu sealed prompt/key.
- **Stretch:** oral defense ngẫu nhiên ba câu design.
