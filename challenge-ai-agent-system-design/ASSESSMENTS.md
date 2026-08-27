# Assessment Forms

Không mở `ASSESSMENT_KEYS.md` trước khi hoàn tất và khóa bài làm. Không dùng AI, internet hoặc tài liệu. Viết assumptions; calculation phải có units; design phải có state, interfaces, failures và verification.

Workload authority: Baseline và Final có tổng timebox 210 phút, bao gồm làm bài và self-grade/debrief. Review Days 7/14/21/28 có tổng timebox 150 phút; assessment khóa lần lượt chiếm 75/90/90/105 phút, thời gian còn lại dùng để chấm, ghi error taxonomy và recovery. Không cộng assessment thêm một lần ngoài Target của ngày.

## Scoring protocol

- Baseline và Final: 10 tasks × 10 điểm = 100.
- Hai task cho mỗi domain: Foundations, Statistics/Modelling, RL, Systems/Product, Agent Architecture.
- `PASS`: tổng ≥80 và từng domain ≥14/20.
- Weekly review: 5 tasks × 10 = 50; đạt khi ≥35/50.
- Với task nhiều phần, checkpoint key phân bổ điểm. Arithmetic slip sau setup đúng chỉ mất tối đa 2 điểm.

## Baseline — Form A, Ngày 1, 210 phút

### A1 — Foundations: proof

Chứng minh: nếu `r` hữu tỉ và `x` vô tỉ thì `r+x` vô tỉ. Sau đó tạo một counterexample cho claim khi thay “cộng” bằng “nhân” mà không yêu cầu `r ≠ 0`.

### A2 — Foundations: optimization

Cho `f(x)=1/2 ||Ax-b||² + λ/2 ||x||²`, `λ>0`. Derive gradient và Hessian; chứng minh minimizer duy nhất ngay cả khi `A` thiếu full column rank; viết nghiệm đóng.

### A3 — Statistics: rare-event reasoning

Một detector có sensitivity 96%, specificity 97%; prevalence thật là 0.5%. Tính xác suất item bị flag thực sự positive và giải thích vì sao accuracy tổng thể không đủ để quyết định block.

### A4 — Statistics/Modelling: honest experiment

Hai model được chạy trên cùng 2,000 prompts và mỗi outcome là pass/fail. Thiết kế phép so sánh, chỉ rõ quantity tạo lợi thế của pairing, test phù hợp, CI cần báo và một cách repeated reuse của set này làm kết quả lạc quan.

### A5 — Modelling: causal boundary

Người dùng bật “expert mode” có retention cao hơn. Viết estimand thật sự cần, hai causal strategies khi chưa thể A/B test, assumptions không kiểm chứng được và một negative control hoặc falsification check.

### A6 — RL: exact small MDP

States `ready`, `busy`, `done`. Tại `ready`, action `start` cho reward 0 và sang `busy`. Tại `busy`, `finish` cho reward 2 và sang `done`; `retry` cho reward -0.2 và ở lại `busy`. `done` terminal, `γ=0.9`. Tính optimal values và giải thích vì sao Markov property có thể hỏng nếu state không ghi số lần retry.

### A7 — RL: method selection

Phân loại và bảo vệ lựa chọn cho: (a) chọn banner theo user context, reward click ngay; (b) agent chọn chuỗi thao tác hoàn tiền có irreversible effects. Với (b), nêu vì sao offline logs không đủ support có thể làm Q-learning nguy hiểm.

### A8 — Systems: queueing

Service nhận 120 requests/s, mean service time 80 ms. Tính average jobs in service, minimum workers theo offered load và workers cần để utilization không quá 60%. Nêu cơ chế khiến p99 tăng mạnh gần saturation.

### A9 — Systems: external effect

Thiết kế “ghi ledger rồi gửi payout qua vendor” sao cho retry không trả hai lần và crash sau vendor commit nhưng trước local result có thể reconcile. Vendor hỗ trợ client operation ID và lookup-by-ID.

### A10 — Agent architecture

Một agent đọc tài liệu không tin cậy, query CRM và gửi email. Thiết kế tool/context/security topology sao cho model không thấy 400 schemas cùng lúc, generated code không đọc credentials, send là approval-gated và session có thể wake sau crash.

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

## Final — Form B, Ngày 30, 210 phút

### F1 — Foundations: proof and convexity

Cho positive weights `w_i` có tổng 1. Chứng minh `log(Σ_i w_i e^{x_i}) ≥ Σ_i w_i x_i` và ghi equality case. Sau đó chứng minh Hessian của unweighted log-sum-exp là PSD bằng covariance interpretation.

### F2 — Foundations: estimation and scale

Một service quan sát counts `X_1,...,X_n ~ Poisson(λ)` trong các cửa sổ 5 phút. Derive MLE của mean count/window, Fisher information và CRLB. Sau đó estimate 30-day storage cho 250 events/s, 1,200 bytes/event và replication factor 3; giữ units và sensitivity theo từng input.

### F3 — Statistics: experiment under traps

Tạo numerical Simpson reversal với hai cohorts. Đề xuất report đúng, rồi thiết kế experiment tiếp theo có power reasoning, multiplicity policy và paired analysis nếu applicable.

### F4 — Modelling: decision pipeline

Thiết kế model phân bổ limited intervention budget: phân biệt calibration, ranking và uplift; nêu prediction-time boundary, causal assumptions, evaluation metrics dưới imbalance và protocol tránh test-set overfit.

### F5 — RL: sequential control

Formalize một browser agent như POMDP; viết Bellman object phù hợp; chọn on/off-policy training behavior quanh irreversible actions; giải thích shaping, discount và reward-hacking boundaries.

### F6 — RL: logged-data decision

Từ logged trajectories, thiết kế OPE cho candidate policy, derive importance weights, giải thích horizon variance và support; so với conservative offline RL và behavior cloning.

### F7 — Systems: overload and serving

Thiết kế streaming generation service có hard first-output SLO 250 ms, steady load 200 requests/s, mean worker service time 120 ms và burst 8× capacity. Tính offered concurrency và số workers để utilization không quá 60%; bao phủ admission/priority, backpressure, scheduling, ETA và retry-storm prevention.

### F8 — Systems: durable workflow

Thiết kế versioned workflow gồm parallel map, human wait, paid external action và resumability. Bao phủ leases, checkpoints, idempotency, saga, unknown outcomes, duplicate approval và incremental recompute.

### F9 — Agent security/context/tooling

Thiết kế topology cho 700 operations và untrusted customer documents. Bao phủ progressive discovery, stable prefix, direct high-risk tools, code sandbox, vault/proxy, data-flow policy, active context vs durable session và cache/cost trade-offs.

### F10 — Integrated release decision

Viết release memo cho một agent model mới: capability/regression suites, end-state/control grading, pass^3 threshold, human-quality floors, canaries, causal-vs-observational product evidence, strongest counterargument và rollback/escape hatch.
