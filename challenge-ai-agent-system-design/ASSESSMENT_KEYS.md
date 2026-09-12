# Assessment Keys and Rubrics

Chỉ mở sau khi đã khóa bài làm. Mỗi scored task 10 điểm. Các checkpoint dưới đây là minimum evidence; wording không cần giống. Baseline có 10 scored tasks A1–A4 và A6–A11; A5D không tính điểm.

## Baseline Form A

### A1

- 6đ: contradiction đúng: nếu `r+x` rational thì `x=(r+x)-r` rational, mâu thuẫn.
- 2đ: assumptions/closure của rationals rõ.
- 2đ: counterexample multiplication dùng `r=0`, `x` irrational, product 0 rational.

### A2

- 3đ: `grad=Aᵀ(Ax-b)+λx`.
- 2đ: `H=AᵀA+λI`.
- 3đ: `zᵀHz=||Az||²+λ||z||²>0` cho `z≠0`, nên strict convex/unique.
- 2đ: `x*=(AᵀA+λI)^{-1}Aᵀb` và dimensions đúng.

### A3

- 4đ: numerator `0.005×0.96=0.0048`.
- 3đ: denominator `0.0048+0.995×0.03=0.03465`.
- 1đ: posterior xấp xỉ `0.1385`.
- 2đ: base-rate/decision-cost lesson; accuracy không cho precision hoặc harm trade-off.

### A4

- 3đ: paired outcomes trên cùng prompts; estimate mean difference.
- 2đ: gain do positive covariance/correlation của paired performances.
- 2đ: McNemar cho paired binary outcomes.
- 1đ: paired CI/bootstrap phù hợp trên task pairs.
- 2đ: adaptive reuse overfits test set; protocol có hidden final/rotation/limited access.

### A5D — Unscored diagnostic

- 2đ: estimand như ATE/CATE của enabling expert mode.
- 4đ: hai strategies hợp lệ, ví dụ adjustment/propensity và IV/natural experiment.
- 2đ: assumptions đúng cho từng strategy: ignorability/positivity hoặc relevance/exclusion/independence.
- 2đ: falsification/negative control cụ thể.

Điểm diagnostic này chỉ dùng routing và không cộng vào baseline total hoặc domain floor.

### A6

- 2đ: `V(done)=0`.
- 2đ: finish tại busy có value 2.
- 2đ: retry equation/value được so với finish; retry không optimal với reward âm và delay.
- 2đ: `V(ready)=0+0.9×2=1.8`.
- 2đ: missing retry count làm transition/reward future phụ thuộc history; augment state.

### A7

- 3đ: (a) contextual bandit vì immediate reward/no relevant state transition.
- 3đ: (b) sequential RL/POMDP vì actions đổi future state và risk.
- 4đ: offline support/extrapolation error; conservative restriction/behavior cloning/eval before deployment.

### A8

- 2đ: offered load `L=120×0.08=9.6` jobs.
- 2đ: theoretical minimum `ceil(9.6)=10`, nhưng saturation unsafe.
- 3đ: at 60%, `ceil(9.6/0.6)=16` workers.
- 3đ: variability + queue buildup; wait/tail diverges/nonlinear as utilization approaches 1.

### A9

- 2đ: durable local payout intent + unique operation ID before call.
- 2đ: vendor call keyed by that ID.
- 2đ: result event/ledger terminal transition.
- 2đ: crash yields UNKNOWN; lookup-by-ID reconciles instead of blind retry.
- 2đ: concurrency/ordering and audit evidence.

### A10

- 2đ: search/read progressive discovery, không preload 400 schemas.
- 2đ: stable model-facing interface/prefix trong run.
- 2đ: code sandbox không credentials; trusted proxy/vault mediation.
- 2đ: email direct tool với explicit approval/idempotency.
- 2đ: durable session/events plus restorable context and wake lease.

### A11

- 2đ: durable session/transcript owner tách khỏi active context.
- 2đ: bounded Goal lifecycle và terminal-status semantics.
- 2đ: checkpoint/version ownership cùng wake lease/fencing.
- 2đ: durable external-action intent/result với UNKNOWN outcome.
- 2đ: crash trace reconcile an toàn, không blind retry hoặc duplicate effect.

## Weekly review rubric

Mỗi câu: 2đ definitions/assumptions, 3đ mechanism/derivation, 2đ boundary/failure, 2đ transfer example, 1đ clarity/sanity. Numeric questions thay 2đ transfer bằng arithmetic/units. Review đạt `PASS` ở 35/50; ghi từng lỗi vào `PROGRESS.md`.

## Full Rebuild rubrics — Days 6–10

Each task is 10 points: assumptions/target 2, mechanism/derivation 3, correct result/design 2, changed-condition boundary 2, evidence clarity 1. `PASS≥8` and the italic checkpoint is mandatory.

- **P3-M13:** geometric waiting stages; *unequal probabilities invalidate harmonic shortcut*.
- **P3-M14:** pair/occupancy logic and exact product; *approximation regime/error*.
- **P3-M15:** likelihood/MLE/information; *regularity and overdispersion boundary*.
- **P3-M18:** correct count denominator; *decision loss separated from posterior*.
- **P3-M26:** valid dependent zero-covariance construction; *independence explicitly disproved*.
- **P3-M27:** size-biased law and normalization; *inspection mechanism stated*.
- **P3-M16:** alpha/power quantiles and effect scale; *paired redesign uses covariance/discordance*.
- **P3-M17:** repeated-sampling statement; *not probability null is true or replication probability*.
- **P3-M25:** discordant-pair analysis; *sampling unit and paired CI*.
- **P3-M29:** family definition and correction; *adaptive reuse policy*.
- **P3-M37:** posterior parameters and comparison; *decision/loss, not posterior mean alone*.
- **P3-M19:** valid numeric bounds; *boundedness/variance assumptions choose theorem*.
- **P3-M24:** resampling unit and statistic; *dependence/extreme failure diagnosed*.
- **P3-M91:** finite-trial opportunity estimator; *not repeated reliability*.
- **P3-M92:** bounded retry and uncertainty; *no selective green reporting*.
- **P3-M97:** repeats plus crossed controls; *one failure/timing does not prove attribution*.
- **P3-P10:** both formulas and threshold algebra; *pass@k versus pass^k semantics*.
- **P3-M22:** within/aggregate arithmetic; *mix shift separated from causal decline*.
- **P3-M23:** observation weighting; *selection evidence versus real change*.
- **P3-M28:** calibrated language and evidence-to-kill; *observation separated from cause*.

## Phase 3 Foundations rubrics — Days 2–3

Mỗi task 10 điểm, `PASS≥8`; thiếu checkpoint in nghiêng không được PASS.

- **P3-M1:** contradiction/isolation (3), irrationality proof of resulting radical (3), *dependency assumptions* (2), blanket-claim counterexample (2).
- **P3-M5:** concavity and Jensen direction (3), normalized weights/domain (2), exponentiation (2), *equality conditions* (2), transfer choice (1).
- **P3-M3:** image/kernel decomposition (3), direct-sum proof (2), adapted basis (2), trace/rank count (1), *symmetry unnecessary and scaled transfer* (2).
- **P3-M4:** spectral theorem (2), `AᵀA` derivation (3), absolute values (2), *real-symmetric condition* (1), nonsymmetric counterexample (2).
- **P3-M7:** constant eigenspace (2), zero-sum eigenspace (2), multiplicities/dimension closure (2), `aI+bJ` (2), block transfer (2).
- **P3-M11:** image/rank (2), trace/eigenvalue (2), *zero-dot nilpotent case* (3), diagonalizability boundary (1), two-term transfer (2).
- **P3-M12:** correct norm-ball contact (3), sparsity tendency (2), *degenerate/multiple-minimizer case* (3), modeling consequence (2).

- **P3-M2:** mesh/domain/integrability (2), correct integral and scale (3), calculation (2), *nonuniform representation transfer* (3).
- **P3-M6:** gradient/Hessian (3), dimensions (1), rank/uniqueness (2), solve (2), *singular-case handling* (2).
- **P3-M8:** gradient (2), Hessian (2), variance PSD proof (3), *null direction/non-strictness* (2), temperature transfer (1).
- **P3-M10:** common-factor proof (3), subtract-max choice (2), numeric trace (2), *remaining underflow/precision boundary* (3).
- **P3-M9:** outcome count/tree bound (3), elementary factorial bound (2), asymptotic conclusion (1), *explicit noisy-rater model and budget* (4).
- **P3-M72:** bit/byte units (2), flow-vs-stock (2), growth/retention/replication (3), egress (1), sensitivity/levers (2).
- **P3-M79:** robust feature (2), LSH scaling (2), verifier (2), clustering caveat (2), *worst-case/transform test* (2).
- **P3-M81:** input/output decomposition (2), correct base bill (2), distinct levers (2), *nonoverlap multiplication* (2), total-cost/quality gate (2).
- **P3-P11:** token model (2), sandbox compute/startup/I/O (2), orchestration/security/recovery cost (2), break-even equation (2), *sensitivity and operational boundary* (2).

## Phase 2 mandatory evaluator rubrics

Mỗi evaluator đạt `PASS` khi đủ 8/10 và không thiếu checkpoint bắt buộc in nghiêng. `PARTIAL/FAIL` phải giữ original attempt, ghi misconception, rồi làm changed retry với conditions khác.

- **P2-M20:** max CDF/support (2), expectation derivation (2), unbiased correction (2), variance/tail sanity (2), *moving-support regularity warning* (2).
- **P2-M21:** stated uniform-without-replacement assumption (1), factorization/sufficiency (2), combinatorial expectation/unbiased estimator (2), *triangular completeness proof* (3), Lehmann–Scheffé plus changed-scheme boundary (2).
- **P2-M30:** both nested MLE/log-likelihoods (2), *factor-two statistic* (2), *dimension-difference df* (2), threshold decision (1), regularity/interior/asymptotic conditions and boundary alternative (3).
- **P2-M39:** rotational reduction (2), sign-symmetry mean (1), *exchangeability gives second moment `1/d`* (2), dimension-standardized comparison (2), anisotropic empirical-null/whitening boundary (3).
- **P2-M42:** signals/prior (2), bounded exploration objective (2), *logged-support limitation* (2), offline plus randomized online gate/rollback (2), high-harm redesign (2).
- **P2-M68:** bounded state/refill cap (2), atomic admit/debit/reject (2), correct trace (2), *monotonic clock and race control* (2), fixed-window/boundary distinction (2).
- **P2-M77:** existing pin/new default split (2), cohort comparison and opt-in/canary (2), notice/tooling/retention (2), rollback/support trade-off (2), *forced-retirement exception without silent substitution* (2).

## Full Rebuild rubrics — Days 11–14

Mỗi evaluator có 10 điểm và cần ≥8/10 cùng checkpoint in nghiêng.

- **P3-M31:** decomposition (2), repeated-fit estimates (3), intervention (2), *single-split boundary* (3).
- **P3-M32:** distinction (2), calibration computation (3), cost threshold (2), *same-AUC action boundary* (3).
- **P3-M40:** support/exposure/link (2), dispersion reasoning (3), interpretation (2), *Poisson/zero-inflation boundary* (3).
- **P3-M44:** calculations (2), PR/ROC distinction (3), cost decision (2), *reject accuracy/AUC-only launch* (3).
- **P3-M33:** stationarity (2), variance/ACF (3), shock trace (2), *unit-root boundary* (3).
- **P3-M34:** recursion (2), scaled trace/likelihood (3), complexity (2), *underflow/lost-scale boundary* (3).
- **P3-M36:** risk sets/KM (3), hazard (2), censor handling (2), *informative-censoring boundary* (3).
- **P3-M35:** estimand/DAG (2), identification (3), assumptions (2), *positivity/confounding sensitivity* (3).
- **P3-M38:** reuse mechanism (2), locked protocol (3), final gate (2), *iteration metric is not final evidence* (3).
- **P3-M41:** timestamps (2), deployable split (3), monitor (2), *post-outcome boundary* (3).
- **P3-M43:** randomized uplift (3), four segments (2), action (2), *uplift differs from risk* (3).
- **P3-M45:** likelihood/anchor (3), score reasoning (2), data graph (2), *context/nontransitivity limit* (3).

`P2-M39` và `P2-M42` retain existing rubrics. Review 2 PASS requires total ≥70%, every domain floor and all mandatory artifacts.

## Full Rebuild rubrics — Days 15–19

Mỗi P3 evaluator có 10 điểm: objects/assumptions (2), mechanism/derivation (3), numeric/design verification (2), mandatory boundary/changed transfer (3). PASS requires ≥8/10 and the italic checkpoint.

- **P3-M46:** *Markov sufficiency or POMDP boundary*.
- **P3-M47:** *max/expectation non-expansion and gamma factor*.
- **P3-M48:** *exact equations verified by substitution*.
- **P3-M56:** *delayed-reward/horizon trade-off, not formula only*.
- **P3-M62:** *correct logarithm direction and ceiling*.
- **P3-M49:** *target-policy arithmetic for both algorithms*.
- **P3-M55:** *complete deadly-triad amplification chain*.
- **P3-M57:** *terminal/endpoint condition for invariance*.
- **P3-M50:** *baseline action-independence proof*.
- **P3-M51:** *lambda endpoint interpretation from computed trace*.
- **P3-M60:** *both advantage signs and min-objective direction*.
- **P3-M63:** *reliability failure at both entropy extremes*.
- **P3-M52:** *confidence event and pull-count dependence*.
- **P3-M53:** *posterior update plus probability-matching semantics*.
- **P3-M58:** *zero-support impossibility and horizon variance*.
- **P3-M59:** *future-state causal criterion*.
- **P3-M64:** *unsupported-action penalty/abstention without invented evidence*.
- **P3-M54:** *KL beta extremes and preference-model limitation*.
- **P3-M61:** *counter-metric tied to a concrete exploit*.
- **P3-M65:** *environment postcondition and partial-observation boundary*.

## Full Rebuild rubrics — Days 20–24

Each P3 evaluator is /10: contract/assumptions (2), mechanism/state or calculation (3), failure trace/verification (2), mandatory boundary (3). PASS requires ≥8 and the italic checkpoint.

- **P3-M67:** *business state and outbox intent share atomic boundary*.
- **P3-M69:** *mixed-duration fairness plus quantified capacity*.
- **P3-M71:** *units and utilization margin; mean is not p99*.
- **P3-M73:** *non-compensatable pivot/manual state*.
- **P3-M76:** *actual interleaving and matching isolation guarantee*.
- **P3-M83:** *correlated failure/idempotent retry boundary*.
- **P3-M98:** *bounded admission and retry amplification control*.
- **P3-P12:** *absolute client-observed bound and stratification*.
- **P3-P15:** *UNKNOWN is distinct from failed and is reconciled*.
- **P3-M70:** *fencing rejects stale writes and effects are safe*.
- **P3-M86:** *cycle proof plus dependency-exact invalidation*.
- **P3-M87:** *per-item durable result with three resource caps*.
- **P3-M88:** *in-flight version pin and schedule/migration rule*.
- **P3-M89:** *no held thread; duplicate/late action is idempotent*.
- **P3-M66:** *client-consumable TTFA and backpressure*.
- **P3-M74:** *all behavior versions and tenant boundary in key*.
- **P3-M82:** *one stable schema/state machine across timing paths*.
- **P3-M84:** *retrieval recall and citation support measured separately*.
- **P3-M80:** *credential/egress isolation plus residual risk*.
- **P3-M95:** *snapshot cannot undo external effects*.
- **P3-M96:** *ambiguous outcome forbids blind retry*.
- **P3-P5:** *scope is not secret isolation*.
- **P3-P14:** *untrusted text cannot grant tool/data authority*.

`P2-M68` retains its dedicated rubric. Review 3 remains a locked integration result, never a replacement for missing per-ID evidence.

## Full Rebuild rubrics — Days 25–29

Each P3 evaluator is /10: target/contract (2), mechanism/design (3), evidence/quantification (2), mandatory boundary (3). PASS requires ≥8 and the italic checkpoint.

- **P3-M90:** *repetitions/uncertainty and fresh anti-saturation suite*.
- **P3-M93:** *passing tests cannot substitute human/end-state acceptance*.
- **P3-M99:** *separate spatial and temporal floors plus escape hatch*.
- **P3-P6:** *trajectory checks only for legitimate control invariants*.
- **P3-P7:** *regression health distinct from capability saturation*.
- **P3-P17:** *critical floors, calibrated human signal and rollback*.
- **P3-M75:** *ranked kill evidence and cheapest decisive test*.
- **P3-M78:** *error-budget burn triggers an explicit action*.
- **P3-M94:** *counter-metric detects a named gaming mechanism*.
- **P3-M100:** *causal status and quantified reversal condition*.
- **P3-P8:** *reversibility/blast/test/observability prerequisites*.
- **P3-M85:** *verified termination and bounded anti-loop budget*.
- **P3-P1:** *execution tokens separated from schema/compute/ops cost*.
- **P3-P2:** *masking does not claim to erase already loaded schema cost*.
- **P3-P3:** *object/transcript/recitation remain distinct after restart*.
- **P3-P4:** *session is durable; context is bounded/versioned projection*.
- **P3-P9:** *correct cache arithmetic and invalidation boundary*.
- **P3-P13:** *high-risk action remains direct and authority-gated*.
- **P3-P16:** *authority/budget/evidence/terminal state plus CAS wake*.
- **P3-P18:** *all architecture dimensions, quantitative bottleneck and three trade-offs*.

`P2-M77` retains its rubric. Review 4 and P18 cannot replace missing per-ID evidence.

## Calibration Form B

Key này thuộc public calibration form và không được dùng để chấm sealed Day 30 final.

### F1 — Foundations (10)

Jensen dùng đúng convex/concave direction và equality (4); Hessian `diag(p)-ppᵀ` (3); covariance/variance quadratic form chứng minh PSD (3).

### F2 — Foundations (10)

Poisson log-likelihood và `λ_hat=sample mean counts/window` (2); information `n/λ` và CRLB `λ/n` cho unbiased estimator của mean/window (2); storage: `250×86,400×30=648,000,000` events, nhân `1,200×3` = `2,332,800,000,000` bytes ≈ `2.33 TB` decimal (4); sensitivity tuyến tính theo rate/bytes/replication và phân biệt TB/TiB (2).

### F3 — Statistics/Modelling (10)

Numerical reversal hợp lệ trong cả hai strata và aggregate (4); report stratified + mix explanation (2); experiment có effect/power/multiplicity/pairing assumptions (4).

### F4 — Statistics/Modelling (10)

Calibration/ranking/uplift phân biệt (3); prediction-time và causal assumptions (3); imbalance metrics/decision curve (2); locked/rotated test protocol (2).

### F5 — RL (10)

POMDP objects đầy đủ (2); Bellman/value object đúng (2); safety-aware on/off-policy reasoning (2); potential shaping/discount boundaries (2); reward-hacking guardrails (2).

### F6 — RL (10)

Trajectory ratios/estimator đúng (3); unbiasedness conditions (2); horizon variance/support failure (2); mitigation + conservative RL/BC comparison (3).

### F7 — Systems/Product (10)

Transport/chunk/backpressure và client-consumable first-output measurement (2); offered concurrency `200×0.12=24`, workers tại 60% `ceil(24/0.6)=40` (2); bounded admission/priority/scheduling (3); ETA/retry-storm/degradation trade-offs (3).

### F8 — Systems/Product (10)

Durable states/leases/checkpoints (2); version pin/incremental dependency invariant (2); idempotency/saga/unknown outcome (3); human wait/duplicate/timeout/fan-out semantics (3).

### F9 — Agent Architecture (10)

Discovery/stable interface/direct-vs-code split (3); sandbox–proxy–vault/data-flow boundary (3); durable session/context/cache semantics (2); cost/operational downside/residual risk (2).

### F10 — Agent Architecture (10)

Capability/regression and calibrated graders (2); pass^3/multi-trial critical floors (2); human quality/canary/monitoring (2); causal evidence and decision reasoning (2); counterargument + rollback/escape hatch (2).

## Final status

Chỉ áp dụng cho sealed parallel form có packet ID/hash, original response bất biến và năm domain đúng `remediation/PHASE1_ASSESSMENT_CONTRACT.md`. Public Calibration Form B không thể tạo Day 30 `PASS`.

- `PASS`: total ≥80, mỗi domain ≥14/20 và ledger M1–M100 không còn mandatory subpart chưa kiểm chứng.
- `PARTIAL`: total 60–79 hoặc total ≥80 nhưng có domain dưới 14.
- `FAIL`: total <60 hoặc bài không làm trong điều kiện đóng.
- Không cộng điểm vì câu trả lời giống source wording; chỉ cộng cho reasoning evidence.
