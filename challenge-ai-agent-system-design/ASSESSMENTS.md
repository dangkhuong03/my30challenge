# Assessment Forms

Không mở `ASSESSMENT_KEYS.md` trước khi hoàn tất và khóa bài làm. Không dùng AI, internet hoặc tài liệu. Viết assumptions; calculation phải có units; design phải có state, interfaces, failures và verification.

Workload authority: Baseline và Final có tổng timebox 210 phút, bao gồm làm bài và self-grade/debrief. Review Days 7/14/21/28 có tổng timebox 150 phút; assessment khóa lần lượt chiếm 75/90/90/105 phút, thời gian còn lại dùng để chấm, ghi error taxonomy và recovery. Không cộng assessment thêm một lần ngoài Target của ngày.

## Scoring protocol

- Baseline và sealed parallel final: 10 scored tasks × 10 điểm = 100.
- Hai task cho mỗi domain: Foundations, Statistics/Modelling, RL, Systems/Product, Agent Architecture.
- `PASS`: tổng ≥80 và từng domain ≥14/20.
- Baseline scored tasks là A1–A4 và A6–A11. A5D là diagnostic không tính điểm.
- Form B trong file này là calibration công khai, không phải sealed Day 30 final.
- Weekly review: 5 tasks × 10 = 50; đạt khi ≥35/50.
- Với task nhiều phần, checkpoint key phân bổ điểm. Arithmetic slip sau setup đúng chỉ mất tối đa 2 điểm.

## Baseline — Form A, Ngày 1, 210 phút

### A1 — Foundations: proof

Chứng minh: nếu `r` hữu tỉ và `x` vô tỉ thì `r+x` vô tỉ. Sau đó tạo một counterexample cho claim khi thay “cộng” bằng “nhân” mà không yêu cầu `r ≠ 0`.

### A2 — Foundations: optimization

Cho `f(x)=1/2 ||Ax-b||² + λ/2 ||x||²`, `λ>0`. Derive gradient và Hessian; chứng minh minimizer duy nhất ngay cả khi `A` thiếu full column rank; viết nghiệm đóng.

### A3 — Statistics/Modelling: rare-event reasoning

Một detector có sensitivity 96%, specificity 97%; prevalence thật là 0.5%. Tính xác suất item bị flag thực sự positive và giải thích vì sao accuracy tổng thể không đủ để quyết định block.

### A4 — Statistics/Modelling: honest experiment

Hai model được chạy trên cùng 2,000 prompts và mỗi outcome là pass/fail. Thiết kế phép so sánh, chỉ rõ quantity tạo lợi thế của pairing, test phù hợp, CI cần báo và một cách repeated reuse của set này làm kết quả lạc quan.

### A5D — Unscored diagnostic: causal boundary

Người dùng bật “expert mode” có retention cao hơn. Viết estimand thật sự cần, hai causal strategies khi chưa thể A/B test, assumptions không kiểm chứng được và một negative control hoặc falsification check.

Diagnostic này được giữ để routing lỗ hổng, nhưng không cộng vào 100 điểm baseline và không thay thế một trong mười scored tasks.

### A6 — RL: exact small MDP

States `ready`, `busy`, `done`. Tại `ready`, action `start` cho reward 0 và sang `busy`. Tại `busy`, `finish` cho reward 2 và sang `done`; `retry` cho reward -0.2 và ở lại `busy`. `done` terminal, `γ=0.9`. Tính optimal values và giải thích vì sao Markov property có thể hỏng nếu state không ghi số lần retry.

### A7 — RL: method selection

Phân loại và bảo vệ lựa chọn cho: (a) chọn banner theo user context, reward click ngay; (b) agent chọn chuỗi thao tác hoàn tiền có irreversible effects. Với (b), nêu vì sao offline logs không đủ support có thể làm Q-learning nguy hiểm.

### A8 — Systems/Product: queueing

Service nhận 120 requests/s, mean service time 80 ms. Tính average jobs in service, minimum workers theo offered load và workers cần để utilization không quá 60%. Nêu cơ chế khiến p99 tăng mạnh gần saturation.

### A9 — Systems/Product: external effect

Thiết kế “ghi ledger rồi gửi payout qua vendor” sao cho retry không trả hai lần và crash sau vendor commit nhưng trước local result có thể reconcile. Vendor hỗ trợ client operation ID và lookup-by-ID.

### A10 — Agent Architecture: tool and security topology

Một agent đọc tài liệu không tin cậy, query CRM và gửi email. Thiết kế tool/context/security topology sao cho model không thấy 400 schemas cùng lúc, generated code không đọc credentials, send là approval-gated và session có thể wake sau crash.

### A11 — Agent Architecture: durable lifecycle

Thiết kế state model cho một agent nghiên cứu dài hạn có session bền vững, active context bị giới hạn, Goal có lifecycle hữu hạn và wake lease sau crash. Chỉ rõ owner của transcript, checkpoint, Goal status và external-action intent/result; trace một crash sau external commit nhưng trước local result.

## Review 1 — Ngày 7, 75 phút

1. Chứng minh bằng contraposition một claim tự chọn và chỉ ra vì sao converse không tự động đúng.
2. Cho symmetric matrix mới; tìm eigen/singular values và giải thích geometry.
3. Derive gradient/Hessian của weighted ridge loss và kiểm tra dimensions.
4. Dùng indicators tính expectation/variance của một count trong random permutation.
5. Với một parametric model mới do người học chọn, phân biệt MLE, sufficient statistic, CRLB và điều kiện để gọi estimator là UMVU.

## Review 2 — Ngày 14, 90 phút

1. Thiết kế two-arm test: effect, alpha, power, paired/independent và multiplicity policy.
2. Cho một rare-event confusion matrix tự tạo; tính precision và chọn ROC/PR metric.
3. Vẽ HMM ba state, viết forward recursion và cách tránh underflow.
4. Audit một feature table theo prediction-time boundary và nêu ít nhất ba leaks.
5. Viết Bradley–Terry likelihood cho bốn items, constraint identifiability và một limitation.

## Review 3 — Ngày 21, 90 phút

1. Prove Bellman contraction và derive iteration bound cho epsilon cho trước.
2. Trace Q-learning vs SARSA trên cùng episode có exploratory action nguy hiểm.
3. Derive REINFORCE; chứng minh state baseline không tạo bias; giải thích GAE endpoints.
4. Thiết kế offline evaluation cho policy mới và phân tích support/variance.
5. Thiết kế debit + enqueue + external notification qua crash/retry; kèm consistency guarantees.

## Review 4 — Ngày 28, 105 phút

1. Thiết kế durable DAG có fan-out 5,000, leases, partial failures và version pinning.
2. Thiết kế hybrid retrieval + citation eval và robust media dedup bằng LSH.
3. Threat-model sandbox và thiết kế postcondition verification cho GUI submit action.
4. Tạo release gate kết hợp regression/capability, pass^k, human grading và noisy canaries.
5. Thiết kế session/Goal/wake lifecycle với unknown external outcome và approval authority.

## Full Rebuild evaluators — Days 6–10

- **P3-M13:** Derive expected completion time for unequal-probability collection; compare with uniform stage decomposition.
- **P3-M14:** Compute exact no-collision probability and justified approximation for a new occupancy setting; bound degradation.
- **P3-M15:** Derive Poisson MLE, bias, information and CRLB, then diagnose an overdispersed changed case.
- **P3-M18:** Build a rare-event count table, compute precision and choose threshold under asymmetric loss.
- **P3-M26:** Construct dependent variables with zero covariance and explain why independence does not follow.
- **P3-M27:** Derive observed interval-length law under random-time inspection and redesign for nonuniform inspection.
- **P3-M16:** Derive two-proportion sample size from alpha, power, baseline and effect; change to paired outcomes.
- **P3-M17:** Interpret a p-value through repeated-sampling semantics and reject posterior/replication misreadings.
- **P3-M25:** Analyze paired binary outcomes with discordant counts, test, CI and sampling-unit justification.
- **P3-M29:** Define a hypothesis family and choose FWER/FDR procedure under correlation and adaptive follow-up.
- **P3-M37:** Update two Beta-Bernoulli arms and compute a decision-relevant posterior comparison with loss.
- **P3-M19:** Compare Chebyshev/Hoeffding assumptions and bounds; redesign for heavy-tailed data.
- **P3-M24:** Defend a bootstrap scheme, then expose failure for dependence or an extreme statistic.
- **P3-M91:** Derive finite-trial pass@k and distinguish opportunity from repeated reliability.
- **P3-M92:** Design flaky-evaluator policy with bounded retry, uncertainty and no retry-until-green bias.
- **P3-M97:** Use repeated crossed model/environment canaries to decide regression and attribute cause.
- **P3-P10:** Compute pass@k/pass^k and derive per-trial reliability required by a repeated-success SLO.
- **P3-M22:** Construct/decompose numerical Simpson reversal; state report and next experiment.
- **P3-M23:** Derive selection/length-bias mechanism and evidence separating it from real change.
- **P3-M28:** Write calibrated incident update separating observation, hypotheses, checks, uncertainty and next update.

## Phase 3 Foundations evaluators — Days 2–3

Các task này tạo evidence theo ID; không thay weekly score. Original attempt, misconception tag và changed retry phải được lưu tách biệt.

- **P3-M1:** Prove một radical sum do evaluator cấp bằng isolation/contradiction; phá một blanket irrational-sum claim và xử lý một shared-factor retry.
- **P3-M5:** Derive weighted AM–GM từ concavity, gồm domain/equality; transfer sang inequality cần convex function khác.
- **P3-M3:** Prove rank=trace cho nonsymmetric idempotent bằng image/kernel decomposition; transfer sang `A²=cA`.
- **P3-M4:** Từ một real symmetric matrix mixed-sign, derive eigen/singular values; đưa nonsymmetric counterexample cho shortcut.
- **P3-M7:** Derive full spectrum/multiplicities của `J_n`, rồi solve `aI+bJ` và một block-constant transfer.
- **P3-M11:** Analyze `uvᵀ` cả trường hợp `vᵀu=0`; transfer sang sum of two outer products.
- **P3-M12:** Solve L1/L2 contact geometry và tạo degenerate L1 case có multiple minimizers.

### Days 4–5

- **P3-M2:** Convert a supplied uniform and nonuniform limiting sum to the correct integral, including interval scale and validity conditions.
- **P3-M6:** Derive/solve least squares, classify uniqueness from rank, then handle a singular changed case without an invalid inverse.
- **P3-M8:** Derive softmax and the log-sum-exp Hessian; prove PSD as variance and identify its null direction/temperature change.
- **P3-M10:** Prove shift invariance algebraically and hand-evaluate extreme logits; state residual precision limits.
- **P3-M9:** Prove a sorting comparison lower bound using elementary factorial bounds, then budget noisy comparisons under a stated error target.
- **P3-M72:** Compute retained storage and egress with growth/retention/replication, showing units and sensitivity.
- **P3-M79:** Design and evaluate transform-robust audio dedup with candidate scaling, verification and clustering failure cases.
- **P3-M81:** Produce a full token/system bill and combine overlapping savings multiplicatively with quality/cost guardrails.
- **P3-P11:** Compare direct-tool and code-sandbox execution for a supplied workload using token, compute, startup, storage/I/O, orchestration, security-operations and failure-recovery costs; find the break-even and run sensitivity.

## Phase 2 mandatory capability evaluators

Các evaluator này thuộc daily/retrieval evidence ledger, không cộng vào weekly score 50 điểm. Attempt đầu phải closed-book; `PARTIAL/FAIL` phải giữ original answer, ghi misconception và làm changed retry thay vì sửa đè.

### P2-M20 — Endpoint order statistic

Cho iid sample từ `F(x|a)=(x/a)^3`, `0≤x≤a`. Từ first principles derive maximum CDF, expectation và một unbiased estimator của `a`; giải thích vì sao regular CRLB cần được kiểm tra lại. Retrieval `P2-M20-R` dùng exponent khác do evaluator chọn.

### P2-M21 — Discrete maximum UMVU

Với uniform `k`-subset không hoàn lại từ `{1,...,N}`, chứng minh max sufficient và complete, derive unbiased estimator của `N`, rồi viện dẫn đúng theorem để kết luận UMVU. Sau đó chỉ ra mắt xích nào hỏng nếu sampling probabilities phụ thuộc label. Retrieval `P2-M21-R` đổi sampling scheme.

### P2-M30 — Nested likelihood ratio

Tự dựng comparison giữa rate chung và group-specific rates với exposure khác nhau; tính `D`, df và decision từ supplied threshold. Sau đó phân tích boundary-null case nơi Wilks chuẩn không tự động hợp lệ. Retrieval `P2-M30-R` đổi model family.

### P2-M39 — Cosine calibration

Derive mean/variance cosine của hai random unit vectors, chuẩn hóa hai observed cosines ở dimensions khác nhau, rồi thiết kế null check cho anisotropic learned embeddings. Retrieval `P2-M39-R` dùng clustered embeddings.

### P2-M42 — Cold-start ranking

Thiết kế new-item ranker cho domain mới: signals, prior/model, exploration constraint, logged support, offline gate, online causal test và rollback. Sau đó sửa policy cho high-harm domain cấm random exploration. Retrieval `P2-M42-R` chuyển sang new-user cold start.

### P2-M68 — Lazy token bucket

Viết atomic pseudocode, trace burst/rejection/refill và chứng minh state `O(1)` cùng burst cap. Phân tích concurrent update và clock rollback. Retrieval `P2-M68-R` thêm weighted cost và stale retry.

### P2-M77 — Version/deprecation policy

Từ evidence packet có average gain nhưng cohort regression, viết policy pin/default/migration/notice/retention/rollback. Xử lý forced retirement do security issue mà không silent-replace. Retrieval `P2-M77-R` dùng incompatible embedding migration.

## Full Rebuild evaluators — Days 11–14

Attempt đầu closed-book. Mỗi task dùng dữ liệu/domain khác lesson, có original response bất biến, self-grade, misconception tag và changed retry nếu dưới 8/10.

### P3-M31 — Bias–variance decision
Từ three repeated training fits và test predictions, ước lượng bias², variance và noise remainder; chọn intervention và nêu điều không thể kết luận từ một split.

### P3-M32 — Calibration versus ranking
Hai model có cùng ordering nhưng probability scales khác nhau. Lập reliability table, tính calibration error, chọn recalibration và derive threshold từ cost.

### P3-M40 — Count likelihood under dispersion
So sánh Poisson và negative-binomial reasoning cho counts có exposure khác nhau; diễn giải log-link coefficient và phân biệt excess zeros với heterogeneity.

### P3-M44 — Rare-event metric choice
Từ confusion matrices ở hai prevalences, tính precision/recall, chọn metric theo cost/capacity và bác bỏ launch claim dựa trên accuracy/AUC đơn độc.

### P3-M33 — AR mechanism and boundary
Derive stationary mean, variance và lag-k ACF cho AR(1) mới; trace shock và giải thích điều hỏng tại unit root/outside-unit-circle.

### P3-M34 — Scaled HMM forward pass
Tính forward messages cho HMM hai state, bốn observations bằng scaling/log-space; ghi likelihood từ scale factors, complexity và state semantics.

### P3-M36 — Survival with observation process
Từ event/censor timeline mới, dựng risk sets và Kaplan–Meier curve; giải thích hazard, median boundary và informative-dropout bias.

### P3-M35 — Causal estimand and identification
Vẽ DAG cho rollout có self-selection, định nghĩa estimand, chọn strategy và liệt kê identification assumptions cùng sensitivity check.

### P3-M38 — Adaptive test contamination
Phân tích best-of-40 trên cùng test set; thiết kế locked/rotated holdout, access log và final confirmation.

### P3-M41 — Prediction-time leakage
Audit event-time, availability-time và correction-time; sửa feature/split và đề xuất training-serving monitor.

### P3-M43 — Uplift action policy
Từ randomized outcomes theo segment, ước lượng uplift, phân loại bốn response groups và chọn action dưới budget; phân biệt với churn-risk ranking.

### P3-M45 — Preference likelihood and limits
Viết Bradley–Terry likelihood cho graph mới, đặt identifiability constraint, derive score difference và chỉ ra context/non-transitive failure.

`P2-M39` và `P2-M42` vẫn là evaluator chuẩn. Review 2 dùng locked sample độc lập; recovery không ghi đè kết quả gốc.

## Full Rebuild evaluators — Days 15–19

Mỗi evaluator dùng environment/reward/numbers khác lesson. Original attempt bất biến; retry phải đổi dynamics, support hoặc failure condition.

- **P3-M46:** Formalize a partially observed service process; define state/action/transition/reward/horizon and test whether proposed state is Markov.
- **P3-M47:** Prove Bellman optimality is a sup-norm contraction, including the max inequality and fixed-point consequence.
- **P3-M48:** Solve an unfamiliar three-state reward process exactly and verify by substitution/simulation expectation.
- **P3-M56:** Compare two discount factors using effective horizon and delayed-reward distortion; choose from product requirements.
- **P3-M62:** Derive the iteration count for a supplied initial error, contraction factor and tolerance; handle log signs/ceilings.
- **P3-M49:** Hand-trace Q-learning and SARSA on identical transitions where behavior differs from greedy action; explain safety impact.
- **P3-M55:** Trace how off-policy bootstrapping with approximation amplifies an unsupported estimate; propose and bound mitigations.
- **P3-M57:** Derive the telescoping potential-shaping return and expose a terminal-potential condition that breaks invariance.
- **P3-M50:** Derive REINFORCE and prove state-only baseline unbiasedness; show why action-dependent baseline can bias it.
- **P3-M51:** Compute GAE for a short trajectory at two lambda endpoints and diagnose bias/variance implications.
- **P3-M60:** Evaluate PPO clipped terms for positive and negative advantages across ratios below/inside/above the clip interval.
- **P3-M63:** Design an entropy schedule and failure monitors for zero and excessive coefficients under an action-safety constraint.
- **P3-M52:** Derive a UCB confidence radius and select arms over a supplied history; state probability/regret assumptions.
- **P3-M53:** Update Beta–Bernoulli posteriors and calculate a Thompson decision probability or defensible approximation.
- **P3-M58:** Compute trajectory/per-decision importance weights, identify support failure and choose variance controls without claiming lost coverage.
- **P3-M59:** Classify four products as contextual bandit or RL from whether actions change future state/information; defend boundary cases.
- **P3-M64:** Given narrow logged support, show extrapolation failure and specify a conservative/abstaining offline policy with evaluation limits.
- **P3-M54:** Derive pairwise reward loss and KL-regularized objective; reason about beta at both extremes and rater disagreement.
- **P3-M61:** Red-team a proxy reward, then specify primary outcome, constraints, counter-metrics and a detection/rollback plan.
- **P3-M65:** Formalize a computer-use task as POMDP and design pre-deploy graders using environment postconditions rather than self-report.

## Full Rebuild evaluators — Days 20–24

Each task uses a new domain, fixed evidence packet and explicit failure injection. Original attempts remain immutable; changed retry changes timing, load, trust or dependency.

- **P3-M67:** Design atomic debit-plus-enqueue with operation ID/outbox; enumerate commit/publish crash windows and reconciliation.
- **P3-M69:** Schedule mixed-duration GPU jobs under fairness/SLO constraints; quantify utilization and starvation protection.
- **P3-M71:** Apply Little's law, target utilization and burst/tail margin to size workers; distinguish mean from p99 queue delay.
- **P3-M73:** Design a saga containing reversible and irreversible steps; specify compensation, pivot and manual-recovery states.
- **P3-M76:** Give a concrete lost-update/write-skew interleaving and fix it with stated isolation or conditional-write semantics.
- **P3-M83:** Compute composed reliability and a bounded retry policy; account for correlation, idempotency and retry isolation.
- **P3-M98:** Design admission, priorities, bounded queues, degradation and retry-storm prevention for an 8× burst.
- **P3-P12:** Audit percentage latency claims against absolute SLOs, strata and client-observed measurement.
- **P3-P15:** Specify intent/result/unknown reconciliation for a non-idempotent external effect.
- **P3-M70:** Build durable DAG states, fenced lease claims, checkpoint/retry and side-effect handling; trace three crashes.
- **P3-M86:** Detect a cycle and compute exact descendants invalidated by a node/code/input edit.
- **P3-M87:** Bound fan-out by worker/quota/memory/cost and preserve per-item success/error/checkpoint state.
- **P3-M88:** Define immutable run versions, schedule adoption and prohibited/verified live migration behavior.
- **P3-M89:** Model human wait with durable timer, authorization, timeout and duplicate/late response deduplication.
- **P3-M66:** Design a streaming pipeline with client-consumable TTFA, chunk semantics and backpressure/cancellation.
- **P3-M74:** Define a semantic cache key including every behavior-changing version and test invalidation/tenant isolation.
- **P3-M82:** Specify one stable sync/async API state machine with errors, polling/events, idempotency and compatibility.
- **P3-M84:** Design chunking, hybrid retrieval, reranking and citation-span evaluation; interpret an ablation packet.
- **P3-M80:** Threat-model sandbox escape, prompt injection, dependency and resource abuse; layer controls and residual risks.
- **P3-M95:** Classify local reversible versus external irreversible effects and design copy-on-write checkpoints accordingly.
- **P3-M96:** Trace GUI action timeout through postcondition lookup, dedup/reconciliation and human review without blind retry.
- **P3-P5:** Explain why scoped tokens do not remove credential isolation; design vault/proxy/identity/data-flow enforcement.
- **P3-P14:** Design prompt-injection-resistant document-to-tool architecture with untrusted-data labeling and egress policy.

`P2-M68` remains the Day 20 limiter evaluator and `P2-M68-R` the Day 23 delayed retrieval.

## Full Rebuild evaluators — Days 25–29

Use unfamiliar domains and fixed evidence packets. Original attempts are immutable; changed retry alters cohort, evaluator, constraint or architecture failure.

- **P3-M90:** Specify executable tasks, environment, repetitions, uncertainty, graders, fresh-suite policy and multi-axis release gate.
- **P3-M93:** Diagnose test gaming/gaps from a passing suite and design human/end-state checks that expose the hidden failure.
- **P3-M99:** Build spatial/temporal/identity/prompt/safety scorecard, stratified human sample and escape hatch for a video model.
- **P3-P6:** Separate legitimate control/ordering checks from outcome grading in a tool-agent task; justify every trajectory constraint.
- **P3-P7:** Design regression and capability suite lifecycles, including saturation detection, promotion/retirement and fresh holdout sourcing.
- **P3-P17:** Produce a complete capability/regression/human/canary release program with critical floors and rollback.
- **P3-M75:** Rank five hypotheses by mechanism, expected impact, uncertainty, cost and evidence-to-kill; choose the cheapest decisive test.
- **P3-M78:** Define outcome SLIs/SLOs, error budget and concrete policy actions for burn; distinguish internal metric from user value.
- **P3-M94:** Analyze Goodhart failure for a target metric and design counter-metrics, audit sample and stop rule.
- **P3-M100:** Compare observational and causal evidence in a decision memo; quantify reversal conditions and cheap de-risking experiment.
- **P3-P8:** State prerequisites for high-throughput merge, test a high-blast/irreversible countercase and design stronger gates.
- **P3-M85:** Specify agent control loop, termination evidence, loop/budget guards and recovery across ambiguous tool outcomes.
- **P3-P1:** Quantify execution-token savings separately from schema discovery, sandbox and orchestration costs.
- **P3-P2:** Reconcile stable interface positions, masking and progressive schema disclosure across a run.
- **P3-P3:** Distinguish durable object, append-only transcript and recent recitation under compaction/restart.
- **P3-P4:** Assign durable session versus active context-policy responsibilities and test replay/version change.
- **P3-P9:** Calculate cached/uncached tokens over multiple turns and expose an early-prefix cache break.
- **P3-P13:** Choose direct/code/discovery/masking topology for a large tool inventory including high-risk actions.
- **P3-P16:** Define bounded Goal outcome, authority, budget, evidence, stop state and concurrent-wake ownership.
- **P3-P18:** Deliver and defend a full managed-agent architecture covering state, interfaces, context/tools, security, failures, evaluation, Goal lifecycle, cost and trade-offs.

`P2-M77` remains the Day 26 evaluator; `P2-M77-R` is required on Day 29.

## Calibration — Public Form B, 210 phút

Form này dùng để luyện và calibration sau baseline. Nó được công khai nên không được dùng làm bằng chứng “unseen” hoặc thay thế sealed Day 30 final.

### F1 — Foundations: proof and convexity

Cho positive weights `w_i` có tổng 1. Chứng minh `log(Σ_i w_i e^{x_i}) ≥ Σ_i w_i x_i` và ghi equality case. Sau đó chứng minh Hessian của unweighted log-sum-exp là PSD bằng covariance interpretation.

### F2 — Foundations: estimation and scale

Một service quan sát counts `X_1,...,X_n ~ Poisson(λ)` trong các cửa sổ 5 phút. Derive MLE của mean count/window, Fisher information và CRLB. Sau đó estimate 30-day storage cho 250 events/s, 1,200 bytes/event và replication factor 3; giữ units và sensitivity theo từng input.

### F3 — Statistics/Modelling: experiment under traps

Tạo numerical Simpson reversal với hai cohorts. Đề xuất report đúng, rồi thiết kế experiment tiếp theo có power reasoning, multiplicity policy và paired analysis nếu applicable.

### F4 — Statistics/Modelling: decision pipeline

Thiết kế model phân bổ limited intervention budget: phân biệt calibration, ranking và uplift; nêu prediction-time boundary, causal assumptions, evaluation metrics dưới imbalance và protocol tránh test-set overfit.

### F5 — RL: sequential control

Formalize một browser agent như POMDP; viết Bellman object phù hợp; chọn on/off-policy training behavior quanh irreversible actions; giải thích shaping, discount và reward-hacking boundaries.

### F6 — RL: logged-data decision

Từ logged trajectories, thiết kế OPE cho candidate policy, derive importance weights, giải thích horizon variance và support; so với conservative offline RL và behavior cloning.

### F7 — Systems/Product: overload and serving

Thiết kế streaming generation service có hard first-output SLO 250 ms, steady load 200 requests/s, mean worker service time 120 ms và burst 8× capacity. Tính offered concurrency và số workers để utilization không quá 60%; bao phủ admission/priority, backpressure, scheduling, ETA và retry-storm prevention.

### F8 — Systems/Product: durable workflow

Thiết kế versioned workflow gồm parallel map, human wait, paid external action và resumability. Bao phủ leases, checkpoints, idempotency, saga, unknown outcomes, duplicate approval và incremental recompute.

### F9 — Agent Architecture: security/context/tooling

Thiết kế topology cho 700 operations và untrusted customer documents. Bao phủ progressive discovery, stable prefix, direct high-risk tools, code sandbox, vault/proxy, data-flow policy, active context vs durable session và cache/cost trade-offs.

### F10 — Agent Architecture: integrated release decision

Viết release memo cho một agent model mới: capability/regression suites, end-state/control grading, pass^3 threshold, human-quality floors, canaries, causal-vs-observational product evidence, strongest counterargument và rollback/escape hatch.

## Final — Sealed Parallel Form, Ngày 30, 210 phút

Không lưu prompt hoặc key của sealed final trong repository, payload hay browser documents. Trước khi bắt đầu, ghi packet ID và SHA-256 do evaluator cung cấp ngoài repository. Làm bài closed-book, lưu original response bất biến, rồi ghi score theo đúng năm domain trong `remediation/PHASE1_ASSESSMENT_CONTRACT.md`.

Form công khai phía trên chỉ dùng calibration. Day 30 chỉ đạt `PASS` khi sealed form đạt tổng ≥80, từng domain ≥14/20 và capability evidence ledger M1–M100 không còn mandatory subpart chưa được kiểm chứng.
