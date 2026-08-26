# Assessment Keys and Rubrics

Chỉ mở sau khi đã khóa bài làm. Mỗi task 10 điểm. Các checkpoint dưới đây là minimum evidence; wording không cần giống.

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

### A5

- 2đ: estimand như ATE/CATE của enabling expert mode.
- 4đ: hai strategies hợp lệ, ví dụ adjustment/propensity và IV/natural experiment.
- 2đ: assumptions đúng cho từng strategy: ignorability/positivity hoặc relevance/exclusion/independence.
- 2đ: falsification/negative control cụ thể.

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

## Weekly review rubric

Mỗi câu: 2đ definitions/assumptions, 3đ mechanism/derivation, 2đ boundary/failure, 2đ transfer example, 1đ clarity/sanity. Numeric questions thay 2đ transfer bằng arithmetic/units. Review đạt `PASS` ở 35/50; ghi từng lỗi vào `PROGRESS.md`.

## Final Form B

### F1 — Foundations (10)

Jensen dùng đúng convex/concave direction và equality (4); Hessian `diag(p)-ppᵀ` (3); covariance/variance quadratic form chứng minh PSD (3).

### F2 — Foundations (10)

Poisson log-likelihood và `λ_hat=sample mean counts/window` (2); information `n/λ` và CRLB `λ/n` cho unbiased estimator của mean/window (2); storage: `250×86,400×30=648,000,000` events, nhân `1,200×3` = `2,332,800,000,000` bytes ≈ `2.33 TB` decimal (4); sensitivity tuyến tính theo rate/bytes/replication và phân biệt TB/TiB (2).

### F3 — Statistics (10)

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

- `PASS`: total ≥80 và mỗi cặp domain ≥14/20.
- `PARTIAL`: total 60–79 hoặc total ≥80 nhưng có domain dưới 14.
- `FAIL`: total <60 hoặc bài không làm trong điều kiện đóng.
- Không cộng điểm vì câu trả lời giống source wording; chỉ cộng cho reasoning evidence.
