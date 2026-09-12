# Semantic Coverage Manifest

Đây là authority để kiểm tra phạm vi. Mỗi dòng mô tả năng lực cần học, không chép đáp án. Một câu chỉ được tính `COVERED` khi lesson được chỉ định có theory, example mới, transfer drill và evaluator tương ứng.

Ký hiệu: `M` = `de-luyen-tap.md`; `P` = `ai-agent-system-design-exam.pdf`.

## Mathematics — M1–M12

| ID | Requirement có thể chuyển giao | Ngày |
|---|---|---:|
| M1 | Proof by contradiction với irrational/algebraic closure | 2 |
| M2 | Nhận diện và tính giới hạn dạng Riemann sum | 4 |
| M3 | Idempotent linear map: eigenspaces, rank và trace | 3 |
| M4 | Spectral theorem và quan hệ eigenvalue–singular value | 3 |
| M5 | Dùng concavity/Jensen để chứng minh inequality | 2 |
| M6 | Gradient, Hessian, uniqueness và least-squares solution | 4 |
| M7 | Spectrum và multiplicity của low-rank structured matrix | 3 |
| M8 | Chứng minh convexity của log-sum-exp và derive softmax | 4 |
| M9 | Decision-tree lower bound và asymptotic factorial bounds | 5 |
| M10 | Shift invariance và numerical stability của softmax | 4 |
| M11 | Rank và spectrum của outer product | 3 |
| M12 | Geometry của L1/L2 và hệ quả sparsity | 3 |

## Probability & Statistics — M13–M30

| ID | Requirement có thể chuyển giao | Ngày |
|---|---|---:|
| M13 | Coupon collector: expectation và asymptotics | 6 |
| M14 | Birthday-collision approximation và assumptions | 6 |
| M15 | Poisson MLE, unbiasedness, Fisher information, CRLB | 6 |
| M16 | Two-proportion power và sample-size derivation | 8 |
| M17 | Diễn giải p-value bằng repeated-sampling semantics | 8 |
| M18 | Bayes dưới rare base rate và precision lesson | 6 |
| M19 | So sánh Chebyshev với Hoeffding theo assumptions | 9 |
| M20 | Maximum order statistic và unbiased endpoint estimator | 6 |
| M21 | Sufficiency, completeness, Rao–Blackwell/Lehmann–Scheffé và UMVU | 6 |
| M22 | Tạo và chẩn đoán Simpson reversal | 10 |
| M23 | Incident triage, measurement artifacts và uncertainty communication | 10 |
| M24 | Bootstrap validity, non-smooth/tail/dependent-data failure | 9 |
| M25 | Family-wise error, FDR và correction trade-off | 8 |
| M26 | Uncorrelated nhưng dependent: counterexample và implication | 6 |
| M27 | Indicator variables cho expectation và variance | 6 |
| M28 | Length-biased sampling/inspection paradox | 10 |
| M29 | Proportion SE, CI sample size và paired binary comparison | 8 |
| M30 | Wilks likelihood-ratio test và degrees of freedom | 6 |

## Statistical Modelling — M31–M45

| ID | Requirement có thể chuyển giao | Ngày |
|---|---|---:|
| M31 | Bias–variance decomposition và irreducible noise | 11 |
| M32 | Calibration vs discrimination; measurement và recalibration | 11 |
| M33 | AR(1) stationarity, variance, ACF và unit-root implication | 12 |
| M34 | HMM forward recursion, complexity và log/scaled computation | 12 |
| M35 | Association vs treatment effect; identification strategies/assumptions | 13 |
| M36 | Censoring bias, Kaplan–Meier và hazard | 12 |
| M37 | Beta–Binomial posterior và tính posterior comparison probability | 8 |
| M38 | Adaptive test-set overfitting và evaluation protocol repair | 13 |
| M39 | High-dimensional cosine concentration và dimensional interpretation | 13 |
| M40 | Count GLM, link choice, overdispersion và coefficient interpretation | 11 |
| M41 | Prediction-time leakage audit | 13 |
| M42 | Cold-start ranking, exploration và offline launch evaluation | 13 |
| M43 | Uplift/CATE, randomized training data và bốn response segments | 13 |
| M44 | ROC vs PR dưới extreme imbalance | 11 |
| M45 | Bradley–Terry likelihood, identifiability và model limitations | 13 |

## Reinforcement Learning — M46–M65

| ID | Requirement có thể chuyển giao | Ngày |
|---|---|---:|
| M46 | MDP components, Bellman Q và Markov-property boundary | 15 |
| M47 | Bellman optimality contraction và convergence consequence | 15 |
| M48 | Giải exact value cho Markov reward process/MDP nhỏ | 15 |
| M49 | Q-learning vs SARSA và safe exploration behavior | 16 |
| M50 | REINFORCE derivation và baseline unbiasedness | 17 |
| M51 | Advantage/GAE bias–variance endpoints | 17 |
| M52 | UCB bonus từ Hoeffding và logarithmic regret reasoning | 18 |
| M53 | Beta–Bernoulli Thompson sampling | 18 |
| M54 | Reward model, KL-regularized RLHF và reward hacking | 19 |
| M55 | Deadly triad, divergence mechanism và mitigation | 16 |
| M56 | Effective horizon và discount-factor trade-off | 15 |
| M57 | Potential-based shaping và policy invariance | 16 |
| M58 | Trajectory importance sampling, unbiasedness và variance controls | 18 |
| M59 | Contextual bandit vs sequential RL decision criterion | 18 |
| M60 | PPO clipped objective, ratio và advantage-sign behavior | 17 |
| M61 | Reward specification, Goodhart và counter-metrics | 19 |
| M62 | Iteration bound từ geometric contraction | 15 |
| M63 | Entropy regularization: behavior và extreme-alpha risk | 17 |
| M64 | Offline RL extrapolation error và conservative principle | 18 |
| M65 | Computer-use agent như POMDP và pre-user evaluation | 19 |

## Product Engineering & Product Sense — M66–M100

| ID | Requirement có thể chuyển giao | Ngày |
|---|---|---:|
| M66 | Streaming pipeline, chunking/prosody, backpressure và TTFA SLO | 23 |
| M67 | Atomic debit-plus-enqueue với idempotency/outbox/recovery | 20 |
| M68 | Lazy token bucket, O(1) state và boundary behavior | 20 |
| M69 | Mixed-duration GPU scheduling, fairness và utilization | 20 |
| M70 | Durable DAG engine, leases, retries, checkpoint và side effects | 22 |
| M71 | Little’s law, worker count, utilization và p99 queueing | 20 |
| M72 | Order-of-magnitude storage/egress estimate và cost levers | 5 |
| M73 | Saga, compensation và non-compensatable effects | 20 |
| M74 | Semantic cache key, normalization, versioning, CDN và hit-rate reasoning | 23 |
| M75 | Ranked product hypotheses, evidence và activation experiment | 26 |
| M76 | Race-condition interleaving và transactional/conditional fixes | 20 |
| M77 | Model versioning, compatibility và deprecation policy | 26 |
| M78 | Value-based agent SLIs/SLOs và error-budget policy | 26 |
| M79 | Robust media fingerprinting, LSH candidate retrieval và clustering | 5 |
| M80 | Threat model và layered sandbox with residual risks | 24 |
| M81 | Token-cost model và non-overlapping optimization accounting | 5 |
| M82 | Stable API response contract cho sync/async work | 23 |
| M83 | Composed reliability, idempotent retry và retry isolation | 20 |
| M84 | Document-aware chunking, hybrid retrieval, reranking, citation eval | 23 |
| M85 | Agent control loop, verified termination, anti-loop và budgets | 27 |
| M86 | Cycle detection và dependency-based incremental recompute | 22 |
| M87 | Bounded fan-out, partial failure, cost cap và checkpoint | 22 |
| M88 | Immutable workflow versions và in-flight semantics | 22 |
| M89 | Durable human wait, timers và idempotent late/duplicate action | 22 |
| M90 | Reproducible agent eval harness và anti-saturation | 25 |
| M91 | Unbiased pass@k estimator bằng counting | 9 |
| M92 | Flake probability, behavioral harm và bounded retry policy | 9 |
| M93 | Test gaps, test gaming và human-acceptance evaluation | 25 |
| M94 | Goodhart analysis và metric set có counter-metrics | 26 |
| M95 | Copy-on-write checkpoint và irreversible-effect taxonomy | 24 |
| M96 | GUI action verification và ambiguous-outcome retry semantics | 24 |
| M97 | Noisy canary regression detection và attribution | 9 |
| M98 | Overload admission, priority, graceful degradation và retry storms | 20 |
| M99 | Spatial/temporal quality axes, human sampling và release escape hatch | 25 |
| M100 | Causal-vs-observational decision memo và cheap de-risking test | 26 |

## Agent System Design PDF — P1–P18

| ID | Requirement có thể chuyển giao | Ngày |
|---|---|---:|
| P1 | Tách execution-token saving khỏi schema/context-discovery cost | 27 |
| P2 | Reconcile stable tool interface, masking và progressive disclosure | 27 |
| P3 | Phân biệt durable object, append-only transcript và recent recitation | 27 |
| P4 | Durable session, context policy và active context responsibilities | 27 |
| P5 | Token scope không thay credential-isolation boundary | 24 |
| P6 | Outcome grading vs legitimate control/ordering checks | 25 |
| P7 | Regression health vs capability-suite saturation | 25 |
| P8 | Prerequisites/boundaries của high-throughput merge philosophy | 26 |
| P9 | KV-cache cost model cho stable append-only prefix | 27 |
| P10 | pass@k vs pass^k và per-trial reliability threshold | 9 |
| P11 | Token saving vs sandbox total-cost break-even | 5 |
| P12 | Percentage latency claims, strict bounds và stratification | 20 |
| P13 | Large-tool topology: direct/code/discovery/masking/contracts | 27 |
| P14 | Prompt-injection-resistant data and credential architecture | 24 |
| P15 | Intent/result protocol cho external unknown outcome | 20 |
| P16 | Bounded Goal lifecycle, authority, budgets và evidence | 27 |
| P17 | Capability/regression/human eval release program | 25 |
| P18 | Full managed-agent architecture synthesis | 29 |

## Evaluator và evidence mapping hai chiều

Mapping này là normative và áp dụng cho **từng dòng ID**, không phải blanket coverage:

1. Với một ID có cột `Ngày = N`, lesson authority là `LESSONS.md` mục `Ngày N`.
2. Evaluator bắt buộc là core Done/evaluator subpart được gán rõ trong lesson, plan hoặc assessment authority. `DAILY_APPLIED_ASSESSMENTS.md` chỉ là optional stretch/diagnostic và không chứng minh mandatory coverage. Review gần nhất sau first-learn lấy mẫu integration nhưng không thay evidence theo từng ID.
3. Evidence bắt buộc là artifact có ID trong tên hoặc heading: `day-N/<ID>-attempt`, gồm answer/design, assumptions, derivation hoặc flow, failure/boundary, verification và self-grade theo rubric. Không có artifact này thì ID chỉ là `TAUGHT`, chưa phải `COVERED` hay mastery.
4. Reverse audit bắt đầu từ mỗi evaluator Ngày N: evaluator chỉ được chấm các ID có `Ngày = N` hoặc ID được liệt kê trong review window tương ứng; evidence phải trỏ ngược về ID. Một artifact tích hợp có thể trỏ nhiều ID nhưng phải ghi contribution riêng của từng ID.

| Evaluator window | Requirement rows được phép đo | Evidence index |
|---|---|---|
| Daily N | M/P có `Ngày = N` | `day-N/evidence-index.md` |
| Review 1 — Ngày 7 | M1–M30 đã first-learn | `review-01.md` |
| Review 2 — Ngày 14 | M31–M45 và recovery M1–M30 | `review-02.md` |
| Review 3 — Ngày 21 | M46–M65 và recovery trước đó | `review-03.md` |
| Review 4 — Ngày 28 | M66–M100, P1–P17 và recovery trước đó | `review-04.md` |
| Final — Ngày 30 | sealed parallel sample + audit ledger M1–M100/P1–P18; không thay daily evidence còn thiếu | packet ID/hash + `final-day-30.md` |

Validation hai chiều: scan 118 ID → resolve đúng lesson/evaluator/evidence rule; sau đó scan mọi daily/review evaluator → ít nhất một ID hợp lệ và artifact pointer. Không được suy PASS từ việc ID chỉ xuất hiện trong manifest.

## Validation rule

- Không dùng blanket ranges như `M1–M100` để chứng minh coverage.
- Mỗi ID phải xuất hiện đúng một lần trong manifest authority.
- Lesson ngày tương ứng phải chứa concept, mechanism, boundary, example mới và ít nhất hai transfer drills.
- Assessment phải lấy mẫu mỗi canonical domain. Day 30 cần sealed parallel form và ledger từng capability; public calibration form không phải final acceptance.
- Coverage tĩnh không được nâng thành mastery.

## Full Rebuild Days 11–14 ledger

| ID | Day | Evaluator | Material transfer | Retrieval |
|---|---:|---|---|---|
| M31 | Day 11 | P3-M31 | repeated fits and intervention choice | Day 14/25 |
| M32 | Day 11 | P3-M32 | shifted prevalence and capacity | Day 14/25 |
| M40 | Day 11 | P3-M40 | zero inflation and unequal exposure | Day 14 |
| M44 | Day 11 | P3-M44 | rare-event prevalence and asymmetric cost | Day 14/25 |
| M33 | Day 12 | P3-M33 | unit root/local trend boundary | Day 14/15 |
| M34 | Day 12 | P3-M34 | weak emissions and long-sequence scaling | Day 14/27 |
| M36 | Day 12 | P3-M36 | informative dropout | Day 14 |
| M35 | Day 13 | P3-M35 | weak positivity and alternate DAG | Day 14/25 |
| M38 | Day 13 | P3-M38 | adaptive best-of-many selection | Day 14/25 |
| M39 | Day 13 | P2-M39 | anisotropic empirical null | Day 14/18 |
| M41 | Day 13 | P3-M41 | availability-time shift | Day 14/25 |
| M42 | Day 13 | P2-M42 | high-harm cold start | Day 14/18 |
| M43 | Day 13 | P3-M43 | budgeted action and segment shift | Day 14/25 |
| M45 | Day 13 | P3-M45 | context and non-transitive preferences | Day 14 |

## Full Rebuild Days 15–19 ledger

| ID | Day | Evaluator | Material transfer | Retrieval |
|---|---:|---|---|---|
| M46 | Day 15 | P3-M46 | state aliasing and partial observation | Day 19/21 |
| M47 | Day 15 | P3-M47 | changed norm/operator assumptions | Day 21 |
| M48 | Day 15 | P3-M48 | altered reward timing and terminal state | Day 21 |
| M56 | Day 15 | P3-M56 | long-delay horizon trade-off | Day 21 |
| M62 | Day 15 | P3-M62 | changed tolerance and contraction | Day 21 |
| M49 | Day 16 | P3-M49 | irreversible-action behavior policy | Day 21 |
| M55 | Day 16 | P3-M55 | linear off-policy replay | Day 21 |
| M57 | Day 16 | P3-M57 | nonzero terminal potential | Day 21 |
| M50 | Day 17 | P3-M50 | action-dependent baseline | Day 21 |
| M51 | Day 17 | P3-M51 | sparse long-horizon rewards | Day 21 |
| M60 | Day 17 | P3-M60 | both advantage signs/extreme ratios | Day 21 |
| M63 | Day 17 | P3-M63 | entropy extremes under safety | Day 21 |
| M52 | Day 18 | P3-M52 | changed confidence and nonstationarity | Day 21 |
| M53 | Day 18 | P3-M53 | misspecified posterior | Day 21 |
| M58 | Day 18 | P3-M58 | near-deterministic logs/horizon | Day 21/25 |
| M59 | Day 18 | P3-M59 | delayed state consequences | Day 21 |
| M64 | Day 18 | P3-M64 | unsupported actions and abstention | Day 21/25 |
| M54 | Day 19 | P3-M54 | rater disagreement and KL extremes | Day 21/25 |
| M61 | Day 19 | P3-M61 | asymmetric-harm proxy gaming | Day 21/25 |
| M65 | Day 19 | P3-M65 | stale observations and verified state | Day 21/29 |

## Full Rebuild Days 20–24 ledger

| ID | Day | Evaluator | Material transfer | Retrieval |
|---|---:|---|---|---|
| M67 | Day 20 | P3-M67 | paid GPU outbox crash windows | Day 21/22 |
| M68 | Day 20 | P2-M68 | distributed weighted limiter | Day 21/23 |
| M69 | Day 20 | P3-M69 | mixed-duration fairness/starvation | Day 21/23 |
| M71 | Day 20 | P3-M71 | burst and strict tail target | Day 21/23 |
| M73 | Day 20 | P3-M73 | irreversible saga pivot | Day 21/24 |
| M76 | Day 20 | P3-M76 | changed isolation/interleaving | Day 21/22 |
| M83 | Day 20 | P3-M83 | correlated failures and retry isolation | Day 21/25 |
| M98 | Day 20 | P3-M98 | 8x burst and degradation | Day 21/25 |
| P12 | Day 20 | P3-P12 | percentage versus strict client bound | Day 21/25 |
| P15 | Day 20 | P3-P15 | non-idempotent unknown outcome | Day 21/24 |
| M70 | Day 22 | P3-M70 | paid effect and stale lease | Day 28/29 |
| M86 | Day 22 | P3-M86 | graph edit/cycle and invalidation | Day 28/29 |
| M87 | Day 22 | P3-M87 | out-of-order capped fan-out | Day 28/29 |
| M88 | Day 22 | P3-M88 | waiting run plus definition edit | Day 28/29 |
| M89 | Day 22 | P3-M89 | duplicate/late human action | Day 28/29 |
| M66 | Day 23 | P3-M66 | streaming speech/prosody | Day 25/28 |
| M74 | Day 23 | P3-M74 | index migration and tenant isolation | Day 25/28 |
| M82 | Day 23 | P3-M82 | sync/async timing compatibility | Day 25/28 |
| M84 | Day 23 | P3-M84 | stale citation and ablation | Day 25/28 |
| M80 | Day 24 | P3-M80 | multi-tenant hostile dependency | Day 25/28 |
| M95 | Day 24 | P3-M95 | local snapshot versus publish | Day 25/28 |
| M96 | Day 24 | P3-M96 | ambiguous GUI effect | Day 25/28 |
| P5 | Day 24 | P3-P5 | scoped credential exfiltration | Day 25/28 |
| P14 | Day 24 | P3-P14 | hostile retrieved instructions | Day 25/28 |

## Full Rebuild Days 25–29 ledger

| ID | Day | Evaluator | Material transfer | Retrieval |
|---|---:|---|---|---|
| M90 | Day 25 | P3-M90 | stochastic fresh-suite harness | Day 28/29 |
| M93 | Day 25 | P3-M93 | hidden failure despite green tests | Day 28/29 |
| M99 | Day 25 | P3-M99 | video multi-axis human gate | Day 28/29 |
| P6 | Day 25 | P3-P6 | outcome/control grading boundary | Day 28/29 |
| P7 | Day 25 | P3-P7 | saturated capability suite | Day 28/29 |
| P17 | Day 25 | P3-P17 | noisy canary/human disagreement | Day 28/29 |
| M75 | Day 26 | P3-M75 | regulated evidence ranking | Day 28/29 |
| M77 | Day 26 | P2-M77 | forced retirement/cohort regression | Day 28/29 |
| M78 | Day 26 | P3-M78 | user-outcome error-budget action | Day 28/29 |
| M94 | Day 26 | P3-M94 | proxy gaming/counter-metric | Day 28/29 |
| M100 | Day 26 | P3-M100 | observational-to-causal decision | Day 28/29 |
| P8 | Day 26 | P3-P8 | irreversible high-blast merge | Day 28/29 |
| M85 | Day 27 | P3-M85 | ambiguous effect and loop limit | Day 28/29 |
| P1 | Day 27 | P3-P1 | schema/compute/ops cost layers | Day 28/29 |
| P2 | Day 27 | P3-P2 | stable masking plus discovery | Day 28/29 |
| P3 | Day 27 | P3-P3 | compaction/restart state identity | Day 28/29 |
| P4 | Day 27 | P3-P4 | context-policy version change | Day 28/29 |
| P9 | Day 27 | P3-P9 | early-prefix cache invalidation | Day 28/29 |
| P13 | Day 27 | P3-P13 | regulated high-risk topology | Day 28/29 |
| P16 | Day 27 | P3-P16 | concurrent wake and bounded goal | Day 28/29 |
| P18 | Day 29 | P3-P18 | unfamiliar managed-agent constraints | Day 30 |

## Full Rebuild Days 6–10 ledger

| ID | Day | Evaluator | Material transfer | Retrieval |
|---|---:|---|---|---|
| M13 | Day 6 | P3-M13 | unequal collection probabilities | Day 10/14 |
| M14 | Day 6 | P3-M14 | skewed occupancy/approximation regime | Day 10/14 |
| M15 | Day 6 | P3-M15 | overdispersed counts | Day 10/14 |
| M18 | Day 6 | P3-M18 | asymmetric decision loss | Day 10/14 |
| M20 | Day 6 | P2-M20 | changed support family | Day 10 |
| M21 | Day 6 | P2-M21 | changed sampling law | Day 10 |
| M26 | Day 6 | P3-M26 | dependent zero-covariance construction | Day 10/14 |
| M27 | Day 6 | P3-M27 | nonuniform inspection process | Day 10/14 |
| M30 | Day 6 | P2-M30 | boundary/nonidentifiable null | Day 10 |
| M16 | Day 8 | P3-M16 | paired outcome design | Day 14 |
| M17 | Day 8 | P3-M17 | sequential/adaptive interpretation | Day 14 |
| M25 | Day 8 | P3-M25 | discordant paired outcomes | Day 14 |
| M29 | Day 8 | P3-M29 | correlated/adaptive family | Day 14 |
| M37 | Day 8 | P3-M37 | loss-aware posterior decision | Day 14 |
| M19 | Day 9 | P3-M19 | heavy-tail/unbounded data | Day 14 |
| M24 | Day 9 | P3-M24 | dependent/extreme statistic | Day 14 |
| M91 | Day 9 | P3-M91 | finite opportunity versus reliability | Day 25 |
| M92 | Day 9 | P3-M92 | correlated flake/retry policy | Day 25 |
| M97 | Day 9 | P3-M97 | crossed environment/model controls | Day 25 |
| P10 | Day 9 | P3-P10 | repeated-success SLO | Day 25 |
| M22 | Day 10 | P3-M22 | mix shift without stratum decline | Day 14 |
| M23 | Day 10 | P3-M23 | altered observation mechanism | Day 14 |
| M28 | Day 10 | P3-M28 | instrumentation plus real change | Day 14 |

Each row requires immutable original attempt, rubric-tagged diagnosis, changed retry and the named delayed retrieval. Shared daily artifacts do not erase per-ID contributions.

## Phase 3 Foundations batch ledger

| ID | Day | Evaluator | Changed-condition transfer | Retrieval |
|---|---:|---|---|---|
| M1 | Day 2 | P3-M1 | dependent/shared-factor radicals | Day 7 |
| M5 | Day 2 | P3-M5 | convex-function/direction change | Day 7 |
| M3 | Day 3 | P3-M3 | `A²=cA`, oblique projection | Day 7 |
| M4 | Day 3 | P3-M4 | nonsymmetric counterexample | Day 7 |
| M7 | Day 3 | P3-M7 | block-constant quotient | Day 7 |
| M11 | Day 3 | P3-M11 | nilpotent and two outer products | Day 7 |
| M12 | Day 3 | P3-M12 | degenerate face/multiple optima | Day 7 |
| M2 | Day 4 | P3-M2 | nonuniform partition | Day 7 |
| M6 | Day 4 | P3-M6 | rank-deficient solution set | Day 7 |
| M8 | Day 4 | P3-M8 | temperature/null direction | Day 7 |
| M10 | Day 4 | P3-M10 | log-softmax/mixed precision | Day 7 |
| M9 | Day 5 | P3-M9 | noisy comparison budget | Day 7 |
| M72 | Day 5 | P3-M72 | growth and retention policy | Day 28 |
| M79 | Day 5 | P3-M79 | adversarial transforms/clusters | Day 28 |
| M81 | Day 5 | P3-M81 | overlapping savings/cache condition | Day 28 |
| P11 | Day 5 | P3-P11 | token saving versus sandbox total cost | Day 27 |

The immutable audit rows remain the pre-remediation diagnosis. These rows route new evidence and do not rewrite historical audit status.

## Phase 2 eight-link chain index

| ID | First learn | Worked + independent + transfer | Evaluator + correction | Changed retry | Delayed retrieval |
|---|---|---|---|---|---|
| M20 | Lesson Day 6 | `LESSONS.md` M20 chain | `P2-M20` + rubric | changed endpoint family | `P2-M20-R`, Day 10 |
| M21 | Lesson Day 6 | `LESSONS.md` M21 chain | `P2-M21` + rubric | changed sampling scheme | `P2-M21-R`, Day 10 |
| M30 | Lesson Day 6 | `LESSONS.md` M30 chain | `P2-M30` + rubric | changed nested model | `P2-M30-R`, Day 10 |
| M39 | Lesson Day 13 | `LESSONS.md` M39 chain | `P2-M39` + rubric | dimension/null change | `P2-M39-R`, Day 18 |
| M42 | Lesson Day 13 | `LESSONS.md` M42 chain | `P2-M42` + rubric | new-user constraint | `P2-M42-R`, Day 18 |
| M68 | Lesson Day 20 | `LESSONS.md` M68 chain | `P2-M68` + rubric | weighted/distributed retry | `P2-M68-R`, Day 23 |
| M77 | Lesson Day 26 | `LESSONS.md` M77 chain | `P2-M77` + rubric | incompatible-output migration | `P2-M77-R`, Day 29 |

For each row, correction means immutable original attempt → rubric-tagged misconception → materially changed retry. A planned or optional retrieval is not a `PASS`; the learner artifact must exist and meet the rubric.
