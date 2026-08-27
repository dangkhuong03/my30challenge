# Kế hoạch học 30 buổi

Mỗi buổi dùng nhịp trong `CHALLENGE.md`. “Done” chỉ đạt khi có evidence; đọc xong không được tính là hoàn thành.

## Daily contract matrix

Ma trận này là contract vận hành; phần lesson phía dưới giải thích nội dung. `Minimum` là phiên 45 phút. `Target` thường là 120 phút; review có thể 150 phút, capstone 180 phút, baseline/final 210 phút.

| Ngày | Outcome | Minimum action | Target action | Done when | Evidence | Stretch |
|---:|---|---|---|---|---|---|
| 1 | Có baseline theo năm domain | Làm 5 câu đóng | Làm đủ 10 câu baseline trong 210' | Có điểm và error taxonomy | `baseline-day-01.md` | Oral defense 1 design |
| 2 | Viết proof không nhảy bước | 1 proof + 1 counterexample | 3 proof forms + phản biện | ≥2 lời giải rubric 3/4 | `day-02.md` | Bỏ assumption và phá claim |
| 3 | Nối algebra với geometry | Trace 1 matrix nhỏ | 2 derivations + 2 hình | Giải thích rank/spectrum/sparsity | `day-03.md` | Biến thể 3D |
| 4 | Tự derive calculus/convex results | 1 gradient derivation | 2 derivations + stability drill | Đúng điều kiện convex/unique | `day-04.md` | Prove bằng hai cách |
| 5 | Estimate có bounds, units và candidate reduction | 2 estimates | Counting + LSH + cost break-even | Có complexity, units, sanity | `day-05.md` | Sensitivity analysis |
| 6 | Dùng probability và estimation đúng | 1 probability + 1 MLE drill | 3 probability patterns + estimation foundations | Đúng base rate/dependence/estimator semantics | `day-06.md` | Tạo paradox mới |
| 7 | Review 1 thuần, không học topic mới | Quiz 5 câu | Review 150': assessment khóa 75' + chấm, error taxonomy và recovery | Quiz Ngày 2–6 ≥70% | `review-01.md` | Recovery drill theo lỗi |
| 8 | Thiết kế inference hợp lệ | 1 p-value + 1 power drill | Experiment memo + paired/Bayes | Không sai semantics | `day-08.md` | Sequential caveat |
| 9 | Chọn bound/reliability evaluator đúng | 2 method-selection drills | Bounds/bootstrap/pass metrics/canary | Nêu validity/failure | `day-09.md` | Derive alternate bound |
| 10 | Điều tra metric không overclaim | 1 Simpson + 1 artifact | Incident plan + bias drills | Có evidence-to-kill mỗi hypothesis | `day-10.md` | 10-minute oral brief |
| 11 | Chọn model/metric từ data process | 2 metric drills | Calibration/GLM/imbalance set | Có decision consequence | `day-11.md` | Recalibration design |
| 12 | Xử lý temporal/latent/censored data | 1 hand trace | AR + HMM + survival traces | Đúng state/time assumptions | `day-12.md` | Numerical scaling demo |
| 13 | Tách causal claims và thiết kế ranking đúng | 1 leakage audit + 1 ranking trace | DAG/uplift + embedding/preference drill | Nêu identification và identifiability assumption | `day-13.md` | Construct non-identifiability |
| 14 | Review 2 thuần, không học topic mới | Quiz modelling | Closed-book review 150' | Domain score ≥70% | `review-02.md` | Recovery drill theo lỗi |
| 15 | Dựng và giải Bellman equations | 1 MDP nhỏ | Solve + contraction proof | Equation và convergence đúng | `day-15.md` | POMDP counterexample |
| 16 | Phân biệt TD control methods | 1 update trace | Q/SARSA/triad/shaping set | Giải thích từ update target | `day-16.md` | Off-policy failure trace |
| 17 | Derive policy-gradient objectives | 1 REINFORCE derivation | REINFORCE/GAE/PPO/entropy | Đúng bias–variance behavior | `day-17.md` | Derive baseline optimum |
| 18 | Chọn bandit/OPE/offline method | 2 selection drills | UCB/TS/IS/CQL set | Nhận diện support mismatch | `day-18.md` | Doubly robust sketch |
| 19 | Thiết kế reward khó bị game | 1 reward audit | RLHF + POMDP + reward spec | Có KL/counter-metrics/eval | `day-19.md` | Red-team reward |
| 20 | Giữ correctness và kiểm soát overload | 1 failure trace + capacity calc | Crash/retry + queue/admission design | Bao phủ crash window và overload policy | `day-20.md` | API không idempotency |
| 21 | Review 3 thuần, không học topic mới | Quiz RL/Systems | Closed-book review 150' | RL/Systems-so-far ≥70% | `review-03.md` | Recovery drill theo lỗi |
| 22 | Xây durable workflow state machine | 1 DAG trace | Leases/fanout/version/wait design | Restart không lặp effect | `day-22.md` | Live migration critique |
| 23 | Thiết kế serving/data paths có cost | 1 API + 1 retrieval drill | Streaming/cache/LSH/RAG/cost | Contracts và estimates đúng | `day-23.md` | Compare retrieval ablation |
| 24 | Xác lập security boundary thực | 1 threat model | Sandbox/data-flow/GUI verification | Code không thấy secret | `day-24.md` | Residual-risk register |
| 25 | Tạo eval/release gate đáng tin | 1 metric drill | Suites/graders/reliability/video gate | Có floors và escape hatch | `day-25.md` | Grader calibration plan |
| 26 | Ra quyết định product có bằng chứng | 1 hypothesis tree | SLO/Goodhart/decision/deprecation | Phân loại causal/observational | `day-26.md` | Pre-mortem |
| 27 | Thiết kế context, tool và lifecycle đúng layer | 1 cache calc + lifecycle trace | Topology/cache + session/goal/recovery | Stable interface và durable authority rõ | `day-27.md` | Two concurrent wake calls |
| 28 | Review 4 thuần, không học topic mới | Quiz agent architecture | Closed-book review 150' | Agent architecture ≥70% | `review-04.md` | Recovery drill theo lỗi |
| 29 | Tích hợp managed-agent architecture | Vẽ state owners + 3 flows | Full capstone trong 180' | Mọi arrow có contract | `capstone-day-29.md` | Oral defense 3 trade-offs |
| 30 | Chứng minh mastery trên đề mới | Làm full final; không rút gọn | Final 210' + self-grade | Đạt finish line hoặc ghi đúng fail | `final-day-30.md` | Oral defense ngẫu nhiên |

## Phase 1 — Reasoning foundations

### Ngày 1 — Baseline và cấu trúc câu trả lời

- **Học:** phân loại proof, calculation, short synthesis, design; cách ghi assumptions và unsupported claims.
- **Target 210':** làm 10 bài mới cân bằng năm nhóm, closed-book; chấm theo rubric trong `LESSON_TEMPLATE.md` và ghi error taxonomy. Assessment khóa là phần chính của timebox này, không cộng thêm workload ngoài 210 phút.
- **Minimum 45':** làm 5 bài, ít nhất một quantitative và một design.
- **Done:** có điểm theo nhóm và error taxonomy: knowledge, setup, algebra, causal, architecture, communication.
- **Evidence:** `baseline-day-01.md`. **Stretch:** oral defense một câu design.

### Ngày 2 — Logic và proof toolkit

- **Học:** direct proof, contradiction, contraposition, induction; concavity/Jensen; existence vs uniqueness.
- **Practice:** chứng minh một mệnh đề về số vô tỉ mới, một inequality mới và phản biện một proof thiếu điều kiện.
- **Done:** viết hai proof không nhảy bước, chỉ rõ theorem conditions.
- **Evidence:** `day-02-proof.md`. **Stretch:** tạo counterexample khi bỏ một assumption.

### Ngày 3 — Linear algebra hình học

- **Học:** rank/null space, projection, eigen/singular values, symmetric matrices, outer product, norm balls và sparsity.
- **Practice:** diagonalize một projection khác nguồn; giải thích L1/L2 bằng giao tuyến hình học trong 3D.
- **Done:** nối algebraic property ↔ geometry ↔ modeling consequence.
- **Evidence:** derivation + hai hình vẽ có chú thích.

### Ngày 4 — Calculus, limits và convex optimization

- **Học:** Riemann sums, gradient/Hessian, PSD test, convexity, log-sum-exp, stable softmax, least squares.
- **Practice:** derive gradient/Hessian cho một loss biến thể; kiểm tra uniqueness và numerical stability.
- **Done:** tự dựng lại derivation và nêu điều kiện hạng đầy đủ.
- **Evidence:** `day-04-calculus.md`.

### Ngày 5 — Combinatorics, asymptotics và estimation tay

- **Học:** counting lower bounds, factorial bounds, birthday scale, indicator variables, Big-O, unit economics.
- **Practice:** estimate một hệ thống audio khác số liệu nguồn; cho lower/upper bound trước khi tính.
- **Done:** mọi kết quả có units, order of magnitude và sanity check.
- **Evidence:** một trang calculation sheet.

## Phase 2 — Probability, statistics và modelling

### Ngày 6 — Probability và estimation foundations

- **Học:** core gồm conditioning, Bayes/base rate, indicators, covariance vs dependence và một MLE; các mục collision/length bias/order statistics/sufficiency/Fisher–CRLB/LRT là recognition map để retrieve ở Ngày 7–10.
- **Practice:** diagnostic alert ở prevalence mới; fixed points bằng indicators; derive một MLE và kiểm tra bias/regularity assumptions. Dừng khi hết 120 phút, không cộng enrichment.
- **Done:** giải thích base-rate effect và phân biệt estimator, estimate, sampling distribution, efficiency.
- **Evidence:** probability drills + estimation derivation + teach-back 90 giây.

### Ngày 7 — Review 1

- **Học:** không có topic mới; đóng tài liệu trước khi bắt đầu.
- **Practice:** review 150 phút gồm assessment khóa 75 phút, chấm, error taxonomy và recovery; retrieve một probability extension và một estimation extension đã defer từ Ngày 6.
- **Done:** đạt ≥70% hoặc tạo recovery drills nhắm đúng lỗi cho kế hoạch tương lai.
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

### Ngày 11 — Predictive models và metrics

- **Học:** bias–variance, calibration vs discrimination, GLM counts, overdispersion, ROC vs PR under imbalance.
- **Practice:** chọn metric theo decision cost; giải thích coefficient và calibration repair.
- **Done:** chọn model/link/metric từ data-generating process, không từ thói quen.
- **Evidence:** model card mini.

### Ngày 12 — Sequential và censored data

- **Học:** AR(1) stationarity, random walk, HMM forward recursion/scaling, survival, censoring, hazard, Kaplan–Meier.
- **Practice:** derive autocorrelation; trace forward pass nhỏ; giải thích churn censoring.
- **Done:** phân biệt temporal dependence, latent state và censoring.
- **Evidence:** ba hand traces.

### Ngày 13 — Causality, leakage, ranking và preferences

- **Học:** core gồm prediction-vs-causality, confounding, prediction-time leakage và một DAG/estimand; uplift/propensity/IV và ranking topics là recognition map cho Review 2.
- **Practice:** audit feature set theo prediction-time boundary và dựng một DAG; chỉ làm thêm một causal hoặc ranking extension nếu còn trong 120 phút.
- **Done:** tách prediction khỏi causal claim và nêu identification/identifiability assumptions.
- **Evidence:** leakage audit + DAG + ranking/preference trace.

### Ngày 14 — Review 2

- **Học:** không có topic mới; đóng tài liệu trước khi bắt đầu.
- **Practice:** review 150 phút gồm assessment khóa 90 phút, chấm, error taxonomy và recovery; retrieve một causal extension và một ranking extension đã defer từ Ngày 13.
- **Done:** score nhóm Statistics/Modelling ≥70%.
- **Evidence:** `review-02.md`.

## Phase 3 — Reinforcement learning

### Ngày 15 — MDP và Bellman foundations

- **Học:** MDP/POMDP, return, value/Q, Bellman expectation/optimality, contraction, fixed point, effective horizon.
- **Practice:** solve MDP ba trạng thái mới; prove contraction bằng sup norm.
- **Done:** từ dynamics dựng được equations và convergence consequence.
- **Evidence:** derivation + state diagram.

### Ngày 16 — Dynamic programming và temporal difference

- **Học:** policy/value iteration, Q-learning vs SARSA, on/off-policy, bootstrapping, deadly triad, reward shaping.
- **Practice:** hand-trace updates trên grid mới; chỉ ra unsafe exploration consequence.
- **Done:** giải thích algorithm behavior từ update target, không chỉ nhớ nhãn.
- **Evidence:** update table + failure analysis.

### Ngày 17 — Policy gradients

- **Học:** log-derivative trick, REINFORCE, baseline unbiasedness, advantage, GAE, PPO clipping, entropy.
- **Practice:** derive estimator; phân tích positive/negative advantage dưới clipping.
- **Done:** nói rõ bias–variance knobs và failure khi hyperparameter cực trị.
- **Evidence:** `day-17-policy-gradient.md`.

### Ngày 18 — Bandits, OPE và offline RL

- **Học:** regret, UCB từ concentration, Thompson sampling, contextual bandit vs RL, importance sampling, coverage/support, conservative RL.
- **Practice:** chọn bandit/RL cho bốn tình huống mới; phân tích variance theo horizon.
- **Done:** nhận diện distribution shift và unsupported actions.
- **Evidence:** decision table + derivation.

### Ngày 19 — RLHF, rewards và agent formalization

- **Học:** preference reward model, KL-regularized policy optimization, reward hacking, potential shaping, computer-use POMDP và pre-deploy eval.
- **Practice:** thiết kế reward spec có counter-metrics; threat-model một proxy reward.
- **Done:** reward spec có counter-metrics, KL boundary và pre-deploy evaluation.
- **Evidence:** `day-19.md`.

## Phase 4 — Product, systems và agent architecture

### Ngày 20 — Correctness, queueing và overload

- **Học:** atomicity, isolation, idempotency/outbox/saga/unknown outcome; Little’s law, utilization/p99, backpressure, token bucket, admission control, fairness và retry storms.
- **Practice:** thiết kế payment + async job; tính capacity và overload policy cho mixed-duration jobs.
- **Done:** nêu consistency guarantee, mọi crash window, units và tail/fairness trade-off.
- **Evidence:** sequence diagram + failure matrix + capacity sheet.

### Ngày 21 — Review 3

- **Học:** không có topic mới; đóng tài liệu trước khi bắt đầu.
- **Practice:** review 150 phút gồm assessment khóa 90 phút, chấm, error taxonomy và recovery; closed-book quiz Ngày 15–20 và failure-design oral defense.
- **Done:** score RL/Systems-so-far ≥70% hoặc có recovery drills cụ thể.
- **Evidence:** `review-03.md`.

### Ngày 22 — Durable workflow engines

- **Học:** DAG execution, worker claiming/leases, checkpointing, fan-out limits, partial results, graph cycles, incremental recompute, immutable versions, durable timers/approval.
- **Practice:** state machine cho workflow có map + human wait + version update.
- **Done:** restart không làm lại completed expensive work hoặc lặp side effect.
- **Evidence:** state schema + transition table.

### Ngày 23 — API, streaming, retrieval, deduplication và cost

- **Học:** sync/async API contracts, streaming/backpressure, cache versioning, robust fingerprints + LSH/clustering, document-aware chunking, BM25/vector hybrid, reranking, grounded citations và cost decomposition.
- **Practice:** redesign API mixed-shape; thiết kế dedup pipeline và retrieval ablation; estimate cost với số mới.
- **Done:** tách latency, quality, cost và compatibility trade-offs.
- **Evidence:** API spec mini + cost sheet.

### Ngày 24 — Security boundaries và action verification

- **Học:** prompt injection, credential vault/proxy, egress/filesystem isolation, PII flow, publish authorization, copy-on-write rollback, GUI postcondition verification và ambiguous outcomes.
- **Practice:** redesign pipeline xử lý tài liệu độc hại; phân loại effects; thiết kế verify/retry cho action có thể đã được áp dụng.
- **Done:** generated code không nhận secret; nêu ít nhất hai residual risks.
- **Evidence:** trust-boundary diagram + abuse cases.

### Ngày 25 — Evaluation, monitoring và quality gates

- **Học:** regression vs capability suites, end-state vs control grading, calibrated graders, pass@k/pass^k, flaky tests, noisy canaries, spatial/temporal video-quality axes, stratified human sampling và suite saturation.
- **Practice:** thiết kế gate cho agent sáng tạo ở domain mới; nêu release rule không dựa average đơn thuần.
- **Done:** gate có critical floors, counter-metrics, sample policy và rollback/escape hatch.
- **Evidence:** eval plan + scorecard.

### Ngày 26 — Product sense và decision quality

- **Học:** hypotheses, SLI/SLO/error budget, Goodhart, causal vs observational evidence, expected value, deprecation policy và prerequisites của high-throughput merge philosophy.
- **Practice:** viết decision memo cho ba lựa chọn mới; thiết kế north-star + guardrails.
- **Done:** memo có reversal condition, counter-metric và boundary nơi chính sách không an toàn.
- **Evidence:** `day-26.md`.

### Ngày 27 — Context, tool topology và lifecycle

- **Học:** direct tools vs code mode, discovery/masking/stable interface, KV cache, transcript/recitation; durable session, active context, goal contract, budgets, anti-spin, intent/result và concurrency-safe wake.
- **Practice:** topology cho hàng trăm operations; cost model cache; crash-recovery trace và bounded goal.
- **Done:** phân biệt đúng cost layer, durable state, authority và recovery boundary.
- **Evidence:** topology diagram + quantitative model + lifecycle trace.

### Ngày 28 — Review 4

- **Học:** không có topic mới; đóng tài liệu trước khi bắt đầu.
- **Practice:** review 150 phút gồm assessment khóa 105 phút, chấm, error taxonomy và recovery; closed-book quiz Ngày 22–27 và agent-architecture oral defense.
- **Done:** score Agent Architecture ≥70% hoặc có recovery drills cụ thể.
- **Evidence:** `review-04.md`.

### Ngày 29 — Capstone synthesis

- **Học:** ghép brain/harness, session, sandbox, proxy, vault, workspace, workflows, approvals và eval plane thành contracts.
- **Target:** thiết kế một managed-agent platform với scale và constraints mới; mọi arrow có contract.
- **Done:** đáp án có state ownership, context/tool/security/failure/eval/goal policies và ba trade-offs.
- **Evidence:** `capstone-day-29.md`; tự chấm bằng design template.

### Ngày 30 — Final unseen mock và closure

- **Target 210':** closed-book mock mới, có đủ proof, quantitative, statistics, RL, product/system và agent architecture; self-grade/debrief nằm trong cùng timebox này.
- **Minimum:** không áp dụng; đây là verification surface bắt buộc.
- **Done:** chấm theo finish line trong `CHALLENGE.md`, review lỗi trước khi xem lời giải.
- **Evidence:** đề, bài làm, rubric theo câu, score theo nhóm, error log và kết luận `PASS/PARTIAL/FAIL` trong `final-day-30.md`.
- **Stretch:** oral defense ngẫu nhiên ba câu design.
