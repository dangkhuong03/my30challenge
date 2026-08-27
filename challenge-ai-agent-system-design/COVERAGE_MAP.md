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
2. Evaluator transfer bắt buộc là `DAILY_APPLIED_ASSESSMENTS.md` mục `Ngày N`; review evaluator gần nhất sau first-learn là Form trong `ASSESSMENTS.md` ở Ngày 7/14/21/28, hoặc Final Ngày 30.
3. Evidence bắt buộc là artifact có ID trong tên hoặc heading: `day-N/<ID>-attempt`, gồm answer/design, assumptions, derivation hoặc flow, failure/boundary, verification và self-grade theo rubric. Không có artifact này thì ID chỉ là `TAUGHT`, chưa phải `COVERED` hay mastery.
4. Reverse audit bắt đầu từ mỗi evaluator Ngày N: evaluator chỉ được chấm các ID có `Ngày = N` hoặc ID được liệt kê trong review window tương ứng; evidence phải trỏ ngược về ID. Một artifact tích hợp có thể trỏ nhiều ID nhưng phải ghi contribution riêng của từng ID.

| Evaluator window | Requirement rows được phép đo | Evidence index |
|---|---|---|
| Daily N | M/P có `Ngày = N` | `day-N/evidence-index.md` |
| Review 1 — Ngày 7 | M1–M30 đã first-learn | `review-01.md` |
| Review 2 — Ngày 14 | M31–M45 và recovery M1–M30 | `review-02.md` |
| Review 3 — Ngày 21 | M46–M65 và recovery trước đó | `review-03.md` |
| Review 4 — Ngày 28 | M66–M100, P1–P17 và recovery trước đó | `review-04.md` |
| Final — Ngày 30 | mẫu tích hợp M1–M100/P1–P18; không thay daily evidence còn thiếu | `final-day-30.md` |

Validation hai chiều: scan 118 ID → resolve đúng lesson/evaluator/evidence rule; sau đó scan mọi daily/review evaluator → ít nhất một ID hợp lệ và artifact pointer. Không được suy PASS từ việc ID chỉ xuất hiện trong manifest.

## Validation rule

- Không dùng blanket ranges như `M1–M100` để chứng minh coverage.
- Mỗi ID phải xuất hiện đúng một lần trong manifest authority.
- Lesson ngày tương ứng phải chứa concept, mechanism, boundary, example mới và ít nhất hai transfer drills.
- Assessment phải lấy mẫu mọi domain và final phải có ít nhất một task tích hợp nhiều concept.
- Coverage tĩnh không được nâng thành mastery.
