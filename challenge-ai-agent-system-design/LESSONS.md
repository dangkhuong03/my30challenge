# Lesson Capsules — Theory, Mechanism và Transfer

Đọc capsule tương ứng trước phần practice trong `PLAN.md`. Đây là kiến thức lõi, không phải lời giải cho câu nguồn. Mỗi drill đổi domain hoặc assumption; checkpoint chỉ nêu điều phải xuất hiện, không thay lời giải đầy đủ.

## Cách dùng worked reasoning

Mỗi ngày phải chọn đúng một mẫu dưới đây trước khi làm Drill A/B; mẫu là quy trình suy luận, không phải đáp án cho đề nguồn.

- **Proof:** ghi assumptions và claim → chọn direct/contradiction/contraposition/induction → nối từng bước với theorem có điều kiện → kiểm tra boundary/equality → thử phá claim bằng counterexample khi bỏ một assumption.
- **Quantitative:** khai báo biến và units → viết công thức tổng quát → thay số từng bước → đổi units một lần ở cuối → sanity-check bằng lower/upper bound và scale → nêu assumption làm kết quả đổi nhiều nhất.
- **Statistical claim:** định nghĩa estimand/population → nêu sampling/identification assumptions → derive estimator hoặc test statistic → kiểm tra bias/variance/support → phân biệt observed effect với causal conclusion.
- **System design:** chốt requirement/constraint/SLO → vẽ data và control flow → chỉ owner của state/invariant → trace một happy path và một failure path → gắn observability/postcondition → nêu trade-off và residual risk.

Một attempt chỉ đủ điều kiện `Done` khi artifact cho thấy các bước trung gian trên; kết quả cuối không có derivation/flow được ghi `PARTIAL`.

## Ngày 1 — Answer architecture

### Outcome and learning tree

Đo năng lực xuất phát trên năm domain trước khi dạy, đồng thời tạo error taxonomy để route 29 ngày còn lại. Baseline không được dùng lesson, key, AI hoặc benchmark source.

### Prerequisites and earlier retrieval

Không giả định prerequisite đã đạt. Learner khai báo kinh nghiệm, thời gian khả dụng và mức quen thuộc; đây là metadata, không cộng điểm.

### First principles and worked reconstruction

Phần này chỉ mở sau khi original baseline đã khóa. Chọn một response của chính learner và reconstruct theo loại claim: proof dùng assumptions→invariant→derivation→boundary; quantitative dùng variables/units→formula→calculation→sanity; design dùng requirements→state owners→interfaces→failure trace→verification. Không cung cấp đáp án mẫu trước attempt.

### Independent practice

Làm closed-book A1–A4 và A6–A11. A5D chỉ diagnostic routing. Mỗi response giữ nguyên timestamp và không sửa sau khi mở key.

### Material transfer and advanced variant

Sau self-grade, chọn một lỗi lớn và tạo changed micro-retry khác domain hoặc assumption; không đổi số đơn thuần. Advanced oral defense hỏi “assumption nào nếu bỏ sẽ làm thiết kế/proof hỏng?”.

### Evaluator, feedback and retrieval

Chấm đúng năm domain theo `PHASE1_ASSESSMENT_CONTRACT.md`: tổng /100 và từng domain /20. Tag lỗi thành missing concept, wrong assumption, derivation gap, boundary miss, evidence gap hoặc communication ambiguity. Kết quả route prerequisite/retrieval, không miễn học capability chưa có evidence.

### Done and evidence

Done khi có original response bất biến, 10 scored tasks, domain scores, error taxonomy, một changed micro-retry và plan routing. Evidence: `baseline-day-01.md`. Status phản ánh kết quả thật; baseline thấp không được nâng PASS vì có kế hoạch.

## Ngày 2 — Proof reconstruction

### Outcome and learning tree
Tự dựng proof từ closure/domain/curvature. Core: M1 và M5; prerequisites là rational closure, prime parity, logarithm, concavity và weighted means.

### Prerequisites and earlier retrieval
Từ baseline, retrieve lỗi proof/assumption tương ứng; nếu rational closure, prime parity hoặc log domain chưa giải thích được thì làm micro-repair trước evaluator.

### First principles and worked reconstruction
**M1:** giả sử `√2+√3=q` rational; square và isolate được `√6=(q²-5)/2`, trái với prime-exponent parity. **M5:** concavity của `log` cho `Σw_i log x_i≤log(Σw_i x_i)` khi `x_i>0`, `w_i≥0`, `Σw_i=1`; exponentiate ra weighted AM–GM, equality khi mọi positive-weight input bằng nhau.

### Independent practice
Làm `P3-M1` với `√5+√7` và `P3-M5` với weights `(1/2,1/3,1/6)`; không dùng khẩu quyết thay derivation.

### Material transfer and advanced variant
M1 chuyển sang radicals phụ thuộc `√(2+t)+√(2-t)` và common-factor retry. M5 chuyển sang harmonic≤arithmetic bằng convex `1/x`, đổi function và Jensen direction.

### Evaluator, feedback and retrieval
Chấm theo rubrics `P3-M1/P3-M5`; thiếu dependency/domain/equality checkpoint không PASS. Giữ original attempt, tag misconception, làm changed retry. Retrieval closed-book Ngày 7.

### Done and evidence
Cả hai evaluator ≥8/10 hoặc ghi đúng `PARTIAL/FAIL`. Evidence: `day-02/<ID>-attempt.md` và retry riêng.

## Ngày 3 — Linear maps from invariant subspaces

### Outcome and learning tree
Đi từ image/kernel đến spectrum, singular values và optimization geometry. Core: M3, M4, M7, M11, M12.

### Prerequisites and earlier retrieval
Retrieve Day 2 proof discipline, basis/decomposition, inner product và matrix multiplication; mọi dimension mismatch phải được sửa trước khi suy spectrum.

### First principles and worked reconstruction
**M3:** `v=Av+(v-Av)` tạo direct sum `im A⊕ker A`; adapted basis cho `diag(I_r,0)`, nên trace=rank không cần symmetry. **M4:** real symmetric `A=QΛQᵀ` cho `AᵀA=QΛ²Qᵀ`, singular values `|λ_i|`. **M7:** `J_n1=n1`, zero-sum subspace dimension `n-1` có eigenvalue 0. **M11:** `uvᵀ` rank 1 nhưng khi `vᵀu=0` thì mọi eigenvalue zero và `A²=0`. **M12:** L1 corner contact tạo sparsity tendency nhưng degeneracy có thể cho nhiều minimizers.

### Independent practice
Hoàn thành `P3-M3`, `P3-M4`, `P3-M7`, `P3-M11`, `P3-M12`; mỗi artifact có derivation, dimension closure và boundary case.

### Material transfer and advanced variant
Chuyển lần lượt sang `A²=cA`, nonsymmetric triangular matrix, block-constant operator, sum of outer products và L1 constraint song song một face. Đây là thay invariant/geometry, không chỉ đổi số.

### Evaluator, feedback and retrieval
Checkpoint bắt buộc: direct-sum proof, symmetry condition, multiplicity, nilpotent zero-dot case và multiple-minimizer degeneracy. Changed retry dùng input khác; retrieval Ngày 7.

### Done and evidence
5 evaluator ≥8/10 hoặc status trung thực. Evidence: `day-03/<ID>-attempt.md` với misconception/retry trail.

## Ngày 4 — Calculus and convexity under changed assumptions

### Outcome and learning tree
Biến sum→integral, residual→gradient/Hessian và log-partition→probability geometry. Core: M2, M6, M8, M10.

### Prerequisites and earlier retrieval
Retrieve algebra/geometry từ Days 2–3, chain rule, matrix dimensions và exponential/log domain; thiếu phần nào thì ghi prerequisite repair thay vì đoán công thức.

### First principles and worked reconstruction
**M2:** `1/n Σ(k/n)²→∫_0^1x²dx=1/3`, gồm mesh/domain/scale/integrability. **M6:** squared loss có gradient `Aᵀ(Ax-b)`, Hessian `AᵀA`; uniqueness cần trivial nullspace, ridge thêm `λI`. **M8:** Hessian log-sum-exp `diag(p)-ppᵀ` là covariance PSD với all-ones null direction. **M10:** common-factor cancellation chứng minh shift invariance; subtract-max ngăn overflow nhưng không chữa mọi precision loss.

### Independent practice
Làm `P3-M2`, `P3-M6`, `P3-M8`, `P3-M10` với calculation và dimension check.

### Material transfer and advanced variant
Nonuniform partition; rank-deficient solution set/pseudoinverse; temperature-scaled log-sum-exp; log-softmax mixed precision.

### Evaluator, feedback and retrieval
Thiếu interval scale, singular-case handling, null direction hoặc residual numeric limitation không PASS. Original→misconception→changed retry là append-only; retrieval Ngày 7.

### Done and evidence
4 evaluator ≥8/10 hoặc status trung thực. Evidence: `day-04/<ID>-attempt.md` và retry riêng.

## Ngày 5 — Scale, cost and candidate explosion

### Outcome and learning tree
Dùng information bounds và dimensional analysis trước khi tối ưu. Core: M9, M72, M79, M81.

### Prerequisites and earlier retrieval
Retrieve Day 4 functions/units and Day 2 proof bounds; define outcome count, unit conversions and total-cost boundary before selecting an optimization.

### First principles and worked reconstruction
**M9:** `n!` outcomes đòi depth `ceil(log2 n!)`; elementary lower bound cho `Ω(n log n)`. **M72:** `seconds×bits/s÷8×items×retention×replication`, tách flow/stock/egress. **M79:** robust fingerprint→LSH candidates→verification→clustering, đo recall/candidate rate/worst bucket. **M81:** tách input/output; savings overlap dùng `1-(1-a)(1-b)`. **P11:** compare token saving với sandbox total cost bằng `compute + startup + storage/I/O + orchestration + security operations + failure recovery`; token saving không đồng nhất system saving.

### Independent practice
Làm `P3-M9`, `P3-M72`, `P3-M79`, `P3-M81`, `P3-P11` trên dữ liệu mới, giữ units và assumptions.

### Material transfer and advanced variant
Noisy comparison budget; compounding growth+tiered retention; adversarial transforms/nontransitive clusters; cache saving phụ thuộc stable-prefix hit rate và quality floor.

### Evaluator, feedback and retrieval
Rubrics bắt buộc noisy-rater model, flow-vs-stock, worst-case transform và nonoverlap multiplication. Changed retry đổi noise/retention/transform/overlap. M9 retrieval Ngày 7; M72/M79/M81 Ngày 28.

### Done and evidence
4 evaluator ≥8/10 hoặc status trung thực. Evidence: `day-05/<ID>-attempt.md`, sensitivity và retry riêng.

## Ngày 6 — Probability và estimation foundations

### Outcome and learning tree

Từ sample-space reasoning đến estimator/test có assumptions kiểm chứng được. Core routes: M13,M14,M15,M18,M20,M21,M26,M27,M30. Day 6 dùng 240 phút vì ba shared clusters: rare-event/counting, likelihood/estimation và asymptotic inference.

### Prerequisites and earlier retrieval

Retrieve Day 2 proof discipline, Day 4 derivatives/integrals và Day 5 counting/units. Nếu không dựng được CDF, likelihood hoặc combinatorial count thì dừng và repair prerequisite trước estimator theorem.

### First principles and worked reconstruction

**Phân tầng trong 180 phút.** Core bắt buộc là ba chains M20/M21/M30 bên dưới; conditioning/Bayes và indicators được giữ như retrieval ngắn. Coupon collector, birthday collision, length bias và Fisher/CRLB ngoài boundary check là recognition map cho Review 1/ngày 8–10. Không giả hoàn thành nếu ba evaluator chưa có artifact.

**Theory.** Conditioning chia sample space theo thông tin. Bayes: posterior odds = prior odds × likelihood ratio. Coupon collector cộng waiting times hình học. Birthday collision dùng approximation từ số cặp. Indicator variables tuyến tính hóa expectation; zero covariance không suy ra independence. Sampling tại random time tạo length bias vì interval dài dễ bị gặp hơn.

Estimation nối data với parameter: MLE tối đa log-likelihood; Fisher information đo curvature; CRLB chỉ áp dưới conditions; order statistics có sampling distribution riêng; sufficiency/completeness hỗ trợ Rao–Blackwell và UMVU; likelihood-ratio inference cần tách exact claim khỏi Wilks asymptotic claim.

**Example mới.** Fraud rate 0.2% với detector tốt vẫn có thể cho precision thấp nếu false-positive rate lớn so với base rate.

**Worked quantitative reasoning.** Với 100.000 giao dịch, prevalence 0,2% cho 200 fraud. Nếu sensitivity 90% thì có 180 true positives; false-positive rate 1% trên 99.800 giao dịch tạo khoảng 998 false positives. Precision là `180/(180+998) ≈ 15,3%`. Units đều là giao dịch; kết quả nằm trong `[0,1]` và thấp là hợp lý vì false-positive base lớn hơn true-fraud base. Assumption nhạy nhất là false-positive rate.

#### Reconstruction checkpoints for the supporting mechanisms

- **Collection stages (M13).** With four equally likely coupon types, after `j` distinct types the next-new probability is `(4-j)/4`, so expected completion is `4/4+4/3+4/2+4/1=25/3`. Linearity applies to waiting stages even though they are not identically distributed. Unequal coupon probabilities destroy the harmonic shortcut and require state/conditioning or inclusion–exclusion.
- **Collision counting (M14).** For 23 uniform birthdays, exact no-collision probability is `∏_{i=0}^{22}(365-i)/365`; using `log(1-x)≈-x` gives collision probability about `1-exp(-253/365)≈0.500`. The approximation needs small pairwise occupancy relative to 365 and uniform/independent draws; skew or dependence changes the effective collision rate.
- **Poisson information (M15).** For counts `[2,0,1,3]`, `ℓ(λ)=6logλ-4λ-Σlog(x_i!)`, so `λ̂=6/4=1.5`. Since `E[λ̂]=λ`, it is unbiased; score variance/Fisher information is `4/λ`, giving CRLB `λ/4`, attained by the sample mean under regular Poisson assumptions. Overdispersion breaks the variance model, not merely the arithmetic.
- **Rare-base decision (M18).** The fraud table above is the worked chain: posterior precision comes from counts, and the action threshold must additionally compare false-positive and false-negative loss. Changing loss can reverse the decision without changing sensitivity/specificity.
- **Zero covariance is not independence (M26).** Let `X` be uniform on `{-1,0,1}` and `Y=X²`. Then `E[X]=0` and `E[XY]=E[X³]=0`, so covariance is zero, but observing `Y=0` determines `X=0`. Dependence is disproved/confirmed from the joint law, not a single moment.
- **Indicator decomposition (M27).** For three independent draws into `m` labels, let `I_ab` mark equality of pair `(a,b)`. Collision-pair count is `C=I_12+I_13+I_23`, hence `E[C]=3/m`. Variance requires covariance terms; pair indicators sharing an index happen to be pairwise independent under uniform draws, but that must be calculated and fails under skewed label probabilities.

- **Drill A:** Tính posterior với prevalence và rates mới.
- **Drill B:** Derive một MLE mới, kiểm tra bias/regularity và sufficient statistic.
- **Checkpoint:** ghi denominator, independence assumptions và phân biệt estimator/estimate/distribution.

### Phase 2 core chains — M20, M21, M30

Ba chuỗi này là core bắt buộc, không phải recognition map. Mỗi attempt dùng artifact riêng và được chấm bằng evaluator cùng ID trong `ASSESSMENTS.md`.

#### M20 — Maximum order statistic và endpoint estimation

- **Mechanism.** Nếu `X1,...,Xn` iid `Uniform(0, θ)` và `T=max Xi`, thì với `0≤t≤θ`, `P(T≤t)=ΠP(Xi≤t)=(t/θ)^n`. Vì `T≥0`, `E[T]=∫_0^θ P(T>t)dt=nθ/(n+1)`, nên `((n+1)/n)T` unbiased cho `θ`. Support phụ thuộc `θ`, vì vậy không được áp regular CRLB máy móc.
- **Worked example.** Với bốn cảm biến iid có ngưỡng bão hòa chưa biết `b` và readings uniform trên `[0,b]`, quan sát max `18`. `E[T]=4b/5`; estimate đã sửa bias là `5×18/4=22.5`. Estimate có thể vượt sample max vì max thường thiếu phần đuôi chưa quan sát.
- **Independent exercise.** Với `n=5`, tự dựng CDF/density của max, variance của estimator đã sửa bias và một khoảng xác suất một phía; không thay derivation bằng công thức nhớ.
- **Material transfer.** Cho family có CDF `F(x|θ)=(x/θ)^2`, `0≤x≤θ`. Derive lại max law và unbiased multiplier. Lời giải Uniform không dùng trực tiếp vì exponent của CDF và tail scarcity đã đổi.
- **Misconception correction.** Nếu viết `T` unbiased hoặc dùng CRLB thường, chỉ ra support đổi theo parameter và tính `E[T]` để bác bỏ.
- **Changed retry.** Làm lại với `F(x|θ)=(x/θ)^3` và `n=3`; artifact phải chứa support, CDF, expectation, bias correction và sanity check.
- **Delayed retrieval.** `P2-M20-R` tại Ngày 10: endpoint family do evaluator cung cấp, closed-book.

#### M21 — Discrete maximum, sufficiency, completeness và UMVU

- **Mechanism.** Giả định rõ: lấy uniformly một `k`-subset không hoàn lại từ `{1,...,N}`; thứ tự không mang thông tin. Với `T=max Xi`, likelihood là `1/C(N,k)` khi `N≥T`, nên factorization cho sufficiency. `P_N(T=t)=C(t-1,k-1)/C(N,k)`. Hockey-stick identity cho `E_N[T]=k(N+1)/(k+1)`, vì vậy `U=((k+1)/k)T-1` unbiased cho `N`.
- **Completeness proof.** Nếu `E_N[g(T)]=0` cho mọi `N≥k`, nhân với `C(N,k)` được `Σ_{t=k}^N g(t)C(t-1,k-1)=0`. Tại `N=k` suy ra `g(k)=0`; induction theo `N` suy ra mọi `g(N)=0`. Do `T` complete và sufficient, Lehmann–Scheffé cho `U` là UMVU — unbiased một mình chưa đủ.
- **Worked example.** Audit 3 serial IDs lấy không hoàn lại từ một lô đánh số `1..N`, quan sát max `11`. Estimate UMVU là `4×11/3-1=41/3`. Nếu cần quyết định nguyên phải nêu loss/rounding riêng.
- **Independent exercise.** Với `k=2`, derive distribution, expectation và variance của `T`, rồi chứng minh estimator đã sửa bias bằng tổng tổ hợp.
- **Material transfer.** Đổi sampling sang xác suất chọn subset tỉ lệ với tổng serial ID. Kiểm tra factorization và giải thích vì sao proof phía trên không còn dùng được nguyên xi.
- **Misconception correction.** Lời giải không nêu “uniform subset, không hoàn lại” hoặc nhảy từ unbiased sang UMVU phải bị trả về `FAIL`.
- **Changed retry.** Một scheme lấy mẫu mới do evaluator chỉ định; xác định statistic nào còn sufficient trước khi tìm estimator.
- **Delayed retrieval.** `P2-M21-R` tại Ngày 10, không dùng lại serial-lot story.

#### M30 — Wilks likelihood-ratio test

- **Mechanism.** Với regular nested models `H0⊂H1`, `D=2(ℓ(θ_hat_1)-ℓ(θ_hat_0))`; asymptotically dưới `H0`, `D→χ²_df`, với `df=dim(H1)-dim(H0)`. Cần identifiable parameters, true parameter ở interior và sample đủ lớn.
- **Worked example.** Hai landing pages có `(18/100)` và `(32/100)` conversions. `H0` dùng probability chung `p`; `H1` dùng `p1,p2`. Fit `p_hat=.25`, `p1_hat=.18`, `p2_hat=.32`; `D=2[ℓ(.18,.32)-ℓ(.25)]≈5.281`. Với threshold `χ²_1,0.95≈3.841`, reject equal-rate null ở mức 5%, nhưng đây là asymptotic evidence chứ không phải theorem exact cho mọi sample size.
- **Independent exercise.** So sánh Poisson rate chung với hai rates trên hai exposure durations khác nhau; derive cả hai MLE và `D`.
- **Material transfer.** Test variance component `τ²=0` với constraint `τ²≥0`. Null nằm trên boundary nên chuẩn `χ²_1` của Wilks không được viện dẫn tự động; đề xuất bootstrap hoặc reference law chuyên biệt.
- **Misconception correction.** Nếu thiếu factor 2, dùng full-model dimension làm df hoặc gọi kết quả exact, sửa bằng cách viết lại nested parameter spaces và theorem conditions.
- **Changed retry.** Một GLM nested comparison mới có một redundant/non-identifiable parameter; quyết định có được dùng Wilks hay không trước khi tính.
- **Delayed retrieval.** `P2-M30-R` tại Ngày 10, closed-book và đổi model family.

### Independent practice

- `P3-M13`: derive coupon-collection expectation bằng geometric waiting stages và bound scale.
- `P3-M14`: derive collision probability/approximation từ distinct pairs; state approximation regime.
- `P3-M15`: derive Poisson MLE, bias, Fisher information và CRLB conditions.
- `P3-M18`: solve a new rare-base-rate decision from counts, not formula substitution.
- `P2-M20`, `P2-M21`, `P3-M26`, `P3-M27`, `P2-M30`: complete ID-scoped artifacts; M26 distinguishes covariance from independence, while M27 derives expectation and variance through indicators.

### Material transfer and advanced variant

Change collection probabilities from uniform, collision draws from uniform to skewed, Poisson to overdispersed counts, diagnostic threshold to asymmetric loss, independent variables to dependent zero-covariance construction, and inspection time to nonuniform sampling. M20/M21/M30 use the changed-support/sampling/boundary variants already specified. Each change invalidates at least one original shortcut.

### Evaluator, feedback and retrieval

Use dedicated P2/P3 rubrics. Mandatory boundaries: iid/uniform assumptions, approximation error, likelihood support, base-rate denominator, covariance counterexample, length-bias weighting, completeness proof and Wilks regularity. Preserve original→misconception→changed retry. Retrieval: Day 7 diagnoses; Day 10 retests M20/M21/M30 and weakest remaining route.

### Done and evidence

Done only when all nine routes have evaluator evidence or honest `PARTIAL/FAIL`, plus one sampling-law notebook connecting the clusters. Evidence: `day-06/<ID>-attempt.md`, shared derivation map and separate retries.

## Ngày 7 — Review 1

### Outcome and learning tree

Đo retained reconstruction của Days 2–6 và sửa root cause; không first-teach capability mới.

### Prerequisites and earlier retrieval

Original artifacts Days 2–6 must be frozen. Close lesson/key before the 75-minute assessment.

### First principles and worked reconstruction

Sau khi khóa bài, chọn một lỗi và reconstruct từ theorem assumptions hoặc sampling law; không copy key. Worked material là before/after trace của chính learner.

### Independent practice

Không học topic mới. Làm assessment closed-book trước; sau khi lưu trạng thái kết thúc mới mở lesson/tài nguyên để phân loại lỗi và chọn recovery drill.

Retrieval bắt buộc sau assessment: chọn một trong coupon/birthday/length bias và một trong order statistics/sufficiency/Fisher–CRLB/LRT. Mỗi retrieval phải dùng worked quantitative template, có assumptions, derivation, units hoặc scale check và error repair; không cần làm toàn bộ enrichment trong cùng review.

### Material transfer and advanced variant

Changed retest phải đổi theorem condition, distribution hoặc representation. Advanced oral defense hỏi vì sao lời giải cũ hỏng dưới thay đổi đó.

### Evaluator, feedback and retrieval

Review 1 rubric 50 điểm; `PASS≥35`. Mọi lỗi có category, evidence line và recovery task. Recovery plan không thay PASS; failed retest remains FAIL.

### Done and evidence

Evidence `review-01.md` gồm original assessment, score, error taxonomy, corrected explanation và changed retest. Không đạt ngưỡng thì append đúng `FAIL/PARTIAL`.

## Ngày 8 — Inference và experiments

### Outcome and learning tree

Thiết kế experiment trả lời đúng estimand dưới noise, pairing và multiplicity. Core: M16,M17,M25,M29,M37.

### Prerequisites and earlier retrieval

Retrieve Day 6 sampling distributions, likelihood and base-rate reasoning; Day 4 algebra for variance/power.

### First principles and worked reconstruction

**Theory.** p-value là xác suất dữ liệu ít nhất cực đoan dưới null, không phải xác suất null đúng. Power phụ thuộc effect, noise, alpha và n. Paired comparison dùng covariance để giảm variance. Bonferroni kiểm soát FWER; BH kiểm soát expected FDR. Beta prior cộng successes/failures vào posterior; posterior comparison có thể tính tích phân hoặc Monte Carlo.

**Example mới.** So hai search models trên cùng queries; pairing dùng within-query difference thay vì hai sample độc lập.

**Worked reconstruction.** Trên 1,000 queries paired, old-only pass `b=40`, new-only pass `c=20`; 940 concordant pairs không cung cấp direction. McNemar statistic không continuity correction là `(b-c)²/(b+c)=400/60≈6.67`, so với `χ²_1` threshold 3.84 cho evidence hai models khác nhau. Effect estimate phải kèm paired difference `(c-b)/1000=-0.02` và CI; significance không tự nói decision cost hay practical value.

#### Reconstruction checkpoints across experiment decisions

- **Power and sample size (M16).** For an absolute lift `δ`, two-sided level `α` and power `1-β`, a planning approximation is `n≈2 p̄(1-p̄)(z_{1-α/2}+z_{1-β})²/δ²` per arm. At `p̄=.10`, `δ=.02`, `α=.05`, power `.8`, this is about `2·.09·(1.96+.84)²/.0004≈3528` per arm. Unequal allocation, clustering or paired outcomes require a different variance.
- **p-value semantics (M17).** A p-value `.03` means that under the specified null/procedure, outcomes at least as extreme occur with probability `.03`; it is neither `P(H0|data)` nor replication probability. Optional stopping changes the reference procedure unless a sequential design accounts for it.
- **Multiplicity (M25).** Testing 20 hypotheses at family α=.05 gives Bonferroni cutoff `.0025`. BH instead sorts p-values and compares `p_(i)≤i·.05/20`, controlling expected false discovery proportion under its dependence conditions. Choosing after seeing results invalidates the declared family/control claim.
- **Paired binary inference (M29).** The McNemar reconstruction above uses only discordant pairs and estimates the paired difference. Treating 2,000 marginal outcomes as independent discards covariance and gives the wrong standard error; a rare outcome also makes normal CI approximations fragile.
- **Posterior comparison (M37).** A `Beta(1,1)` prior plus 8/10 successes yields `Beta(9,3)`; 6/8 yields `Beta(7,3)`. `P(p_A>p_B)` is an integral or Monte Carlo frequency from paired posterior draws, not the comparison of posterior means alone. Nonconjugate hierarchical dependence changes the computation.

- **Drill A:** Derive n cho two-proportion lift với baseline mới.
- **Drill B:** Viết hai Beta posteriors và mô tả hai cách tính xác suất arm B tốt hơn.
- **Checkpoint:** effect là absolute hay relative; one/two-sided; paired quantity rõ.

### Independent practice

Complete `P3-M16` sample-size derivation, `P3-M17` p-value interpretation, `P3-M25` paired test/CI, `P3-M29` multiplicity policy and `P3-M37` Beta posterior comparison.

### Material transfer and advanced variant

Change independent to paired allocation, fixed horizon to sequential peeking, one metric to correlated metric family, balanced to rare outcome and conjugate to nonconjugate posterior approximation.

### Evaluator, feedback and retrieval

Rubrics require estimand, effect scale, alpha/power, sampling unit, test/CI, multiplicity family and posterior decision. Changed retry targets the failed assumption. Retrieval Day 14.

### Done and evidence

Five ID artifacts plus one preregistered experiment memo; each ≥8/10 or honest status. Evidence `day-08/<ID>-attempt.md` and immutable retry trail.

## Ngày 9 — Bounds, bootstrap và noisy evaluation

### Outcome and learning tree

Chọn uncertainty/evaluation method từ assumptions và reliability goal. Core: M19,M24,M91,M92,M97,P10.

### Prerequisites and earlier retrieval

Retrieve bounded variables, variance, binomial counts and paired comparison from Days 6–8.

### First principles and worked reconstruction

**Theory.** Chebyshev chỉ cần finite variance nhưng lỏng; Hoeffding cần independent bounded variables và cho exponential tail. Bootstrap mô phỏng empirical sampling distribution nhưng hỏng với dependence chưa block, extreme tails nhỏ mẫu hoặc non-smooth boundary. pass@k đo ít nhất một success; pass^k đo mọi trial cùng success và phù hợp reliability lặp lại. Estimator pass@k unbiased đếm xác suất chọn toàn failures không replacement. Flaky validators biến correct work thành false negatives và tạo over-editing. Noisy canary cần repeated/paired evidence và attribution strata trước khi gọi regression.

**Example mới.** Canary success 95% không thể bị coi regression từ một lần fail; cần repeated binomial evidence hoặc control chart.

**Worked reconstruction.** Với `n=10` independent attempts có `c=4` successes, chance ít nhất một success khi chọn `k=3` attempts không replacement là `1-C(6,3)/C(10,3)=1-20/120≈0.833`. Plug-in repeated reliability là `(4/10)^3=0.064`. Hai số trả lời hai câu khác nhau; dùng 0.833 làm SLO “ba lần đều thành công” là sai nghiêm trọng.

#### Reconstruction checkpoints across reliability evidence

- **Moment versus bounded tails (M19).** If `Var(X)=4`, Chebyshev gives `P(|X-μ|≥6)≤4/36=1/9`. For an average of 100 independent `[0,1]` variables, Hoeffding gives `P(|X̄-E X̄|≥.1)≤2e^{-2}`. The numerical comparison is meaningless unless event and assumptions match; unbounded heavy tails invalidate Hoeffding.
- **Bootstrap validity (M24).** Resampling iid observations estimates the smooth sample-mean distribution, but naive iid bootstrap destroys time dependence. A sample maximum at a finite endpoint is non-smooth/extreme and can have inconsistent bootstrap behavior because resamples cannot exceed the observed max; block or model-based alternatives need new assumptions.
- **Unbiased pass-at-k (M91).** The worked `1-C(n-c,k)/C(n,k)` chain counts all-failure subsets and is unbiased for sampling `k` from the evaluated `n` completions. Plugging `1-(1-c/n)^k` answers a with-replacement/model probability question instead.
- **Flake policy (M92).** If a correct run independently false-fails with probability `.1`, one retry makes all-fail probability `.1²=.01`; correlated environment failure does not square. Retrying until green biases evidence and can trigger harmful over-editing, so retry count, quarantine and diagnostic attribution must be fixed beforehand.
- **Canary attribution (M97).** In paired repeated runs, analyze model difference within the same environment stratum; if both candidate and control fall only in one browser/region, attribute environment before model regression. A single failure or an unpaired before/after mean cannot identify the cause.
- **Repeated-success SLO (P10).** For three required consecutive successes at target `.95`, per-trial reliability must satisfy `p³≥.95`, so `p≥.95^(1/3)≈.983`. This requires independence or an explicit joint reliability model; pass@3 cannot certify it.

- **Drill A:** Chọn bound cho latency unbounded và binary pass data.
- **Drill B:** Thiết kế retry/quarantine policy phân biệt flake với regression.
- **Checkpoint:** method choice đi kèm assumptions và failure case.

### Independent practice

Complete `P3-M19` bound comparison, `P3-M24` bootstrap validity, `P3-M91` pass-at-k estimator, `P3-M92` flaky evaluator policy, `P3-M97` repeated canary attribution and `P3-P10` pass@k versus pass^k threshold.

### Material transfer and advanced variant

Unbounded/heavy-tail data, dependent time series, non-smooth extreme statistic, limited retries without replacement, correlated flakes and crossed model/environment changes force different procedures.

### Evaluator, feedback and retrieval

No method name earns credit without conditions, decision quantity and failure mode. Preserve predicted→observed→discrepancy→revision→changed retest. Retrieval Days 14 and 25.

### Done and evidence

Six evaluator artifacts and one reliability policy, each ≥8/10 or honest status. Evidence `day-09/<ID>-attempt.md`.

## Ngày 10 — Statistical judgment

### Outcome and learning tree

Diagnose surprising metrics before making causal claims. Core: M22,M23,M28 plus delayed retrieval from Day 6.

### Prerequisites and earlier retrieval

Retrieve conditioning, selection, uncertainty and experiment semantics from Days 6–9.

### First principles and worked reconstruction

**Theory.** Simpson reversal xuất hiện khi group mix khác và group membership liên quan outcome. Selection và length bias xuất hiện khi xác suất được quan sát phụ thuộc chính duration/outcome; sampling một running job ưu tiên jobs dài. Metric incident phải kiểm tra definition, event emission, ingestion, dedup, timezone/window, population eligibility và late data trước causal stories. Khi chưa biết nguyên nhân, báo effect đã quan sát, checks đã chạy, uncertainty và next update.

**Example mới.** Cả mobile và desktop conversion tăng nhưng overall giảm vì traffic chuyển mạnh sang mobile có baseline thấp.

**Worked reconstruction.** Desktop: A=`90/100=90%`, B=`19/20=95%`; mobile: A=`1/20=5%`, B=`6/100=6%`. B tốt hơn trong từng stratum, nhưng aggregate A=`91/120≈75.8%`, B=`25/120≈20.8%` vì mix khác hẳn. Báo stratified effects và traffic mix; không kết luận B gây giảm trước khi thiết kế cùng assignment/estimand.

#### Reconstruction checkpoints for incident judgment

- **Simpson decomposition (M22).** The table above proves the aggregate reversal numerically and identifies mix as the weighting mechanism. A valid conclusion reports within-stratum effects and the target population weights; merely “segment the data” does not establish a causal estimand.
- **Measurement incident (M23).** If conversion drops exactly at midnight UTC, trace event definition → client emission → ingestion/dedup → timezone/window → eligibility → late-arrival reconciliation. Each hypothesis needs a confirming and killing query. Until separated, report observed magnitude/strata and next update, not a causal story.
- **Length-biased observation (M28).** Suppose intervals of length 5 and 15 occur equally often. Sampling an interval boundary gives each probability 1/2, but arriving at a random time observes them with probabilities `5/(5+15)=1/4` and `15/(5+15)=3/4`; expected observed length is `12.5`, not the ordinary mean `10`. Nonuniform arrival intensity changes the weighting again.

- **Drill A:** Tạo bảng số mới gây reversal.
- **Drill B:** Lập evidence-to-confirm/kill cho bốn measurement artifacts.
- **Checkpoint:** không dùng correlation để kết luận nguyên nhân.

### Independent practice

Complete `P3-M22` Simpson table, `P3-M23` measurement-incident investigation and `P3-M28` length-biased observation derivation; then closed-book `P2-M20-R/P2-M21-R/P2-M30-R`.

### Material transfer and advanced variant

Change group mix without within-group decline, change observation mechanism from random arrival to active-job inspection, and introduce simultaneous instrumentation plus real behavior change. Learner must identify what evidence separates explanations.

### Evaluator, feedback and retrieval

Rubrics require numerical decomposition, observation mechanism, evidence-to-kill and calibrated incident statement with next update. Failed Day 6 retrieval returns to misconception-specific changed retry. Retrieval Day 14.

### Done and evidence

Three new ID artifacts, three delayed retrievals and one incident memo. Evidence `day-10/<ID>-attempt.md`, `P2-*-R` files and error ledger.

## Ngày 11 — Predictive models và decision metrics

### Outcome and learning tree

Biến dự đoán thành quyết định có chi phí: phân rã generalization error, tách discrimination khỏi calibration, chọn metric/threshold theo prevalence và cost, rồi chọn count model từ support và dispersion. Routes: M31, M32, M40, M44.

### Prerequisites and earlier retrieval

Retrieve Day 8 estimand, uncertainty và decision threshold; retrieve Day 10 selection/artifact discipline. Nếu chưa phân biệt được observed score với decision utility, dừng và sửa trước khi chọn model.

### First principles and worked reconstruction

**Theory.** Squared error = noise + estimator variance + squared bias. Discrimination xếp hạng; calibration khớp predicted probability với empirical frequency. PR metrics phản ánh rare-positive utility tốt hơn ROC. Count GLM phải chọn distribution/link theo support; log link giữ mean dương, identity dễ diễn giải additive nhưng có thể dự đoán âm. Overdispersion gợi ý negative binomial/quasi-Poisson hoặc latent heterogeneity.

**Example mới.** Hai risk models cùng AUC nhưng model miscalibrated làm overspend intervention.

**Worked reconstruction.** Với 10,000 hồ sơ, prevalence 2%, can thiệp tốn 5 đơn vị và bỏ sót ca dương tốn 80. Threshold không được chọn từ accuracy: ở mỗi score band, hành động khi `80·P(Y=1|x) > 5·P(Y=0|x)`, tức xác suất hiệu chỉnh vượt `5/85≈0.0588`. Một model giữ nguyên ranking/AUC nhưng dự báo xác suất gấp đôi sẽ gây quyết định khác; vì vậy calibration là contract của hành động. Với count outcome có mean 4 và variance 20, Poisson `Var=mean` sai dispersion; negative-binomial hoặc mô hình heterogeneity phải được kiểm tra bằng residual/held-out likelihood.

#### Reconstruction checkpoints for predictive decisions

- **Bias–variance (M31).** At one input with true signal 10, three training sets produce predictions `[8,10,12]`; mean prediction is 10, squared bias is 0 and estimator variance is `(4+0+4)/3=8/3` under the population convention. If observed outcomes add noise variance 4, expected squared error is `0+8/3+4=20/3`. One train/test split cannot separately identify these components; repeated fits or a model of the data-generating process is required.
- **Calibration versus discrimination (M32).** The cost-derived `.0588` threshold above requires calibrated probabilities. Multiplying every score by two preserves ranking/AUC but changes actions and spend; reliability bins or proper scoring plus held-out recalibration diagnose/repair the probability scale. Recalibration under one prevalence may fail after prior shift.
- **Count GLM (M40).** With log link, `log μ=β0+β1x+log(exposure)`, so `exp(β1)` is a multiplicative rate ratio per unit `x`; the offset prevents longer exposure being mistaken for higher rate. Mean 4 and variance 20 reject the Poisson variance assumption; negative binomial models extra-Poisson heterogeneity, while excess structural zeros require a distinguishable zero process and held-out diagnostics.
- **Rare-event metrics (M44).** For 10,000 cases with 100 positives, `TP=70,FP=630,FN=30,TN=9270` gives recall `.70`, precision `.10`, accuracy `.934` and false-positive rate about `.064`. High accuracy/acceptable ROC positioning can coexist with unusable precision; PR and expected cost/capacity decide deployment. Changing prevalence changes precision even if conditional rates stay fixed.

### Independent practice

- **Drill A:** Chọn threshold/metric từ cost matrix.
- **Drill B:** Diễn giải coefficient dưới log link và chẩn đoán overdispersion.
- **Checkpoint:** metric nối trực tiếp với decision.

Hoàn thành `P3-M31`, `P3-M32`, `P3-M40`, `P3-M44` closed-book; mỗi artifact phải có estimand, support, phép tính hoặc diagnostic và quyết định.

### Material transfer and advanced variant

Đổi prevalence từ 2% sang 0.2%, thêm capacity cap chỉ xử lý được 50 hồ sơ/ngày và asymmetric subgroup cost. Sau đó chuyển count model sang zero-inflated demand có exposure khác nhau. Không được giữ nguyên threshold, metric hoặc likelihood mà không chứng minh assumptions còn đúng.

### Evaluator, feedback and retrieval

Chấm theo rubric từng ID; ranking đúng nhưng probability sai calibration, dùng ROC trong bài rare-event mà không nối cost, hoặc chọn Poisson bất chấp dispersion đều không PASS. Giữ original attempt, tag lỗi và retry với prevalence/link khác. Retrieval: Day 14 và Day 25.

### Done and evidence

Bốn evaluator đạt ≥8/10 hoặc được ghi trung thực `PARTIAL/FAIL`; có model card chứa threshold, calibration evidence, metric rationale và count-model diagnostic. Evidence: `day-11/model-card.md` cùng bốn attempt.

## Ngày 12 — Time, hidden state và censoring

### Outcome and learning tree

Phân biệt ba nguồn cấu trúc thường bị trộn lẫn: dependence theo thời gian, latent state và incomplete observation do censoring. Routes: M33, M34, M36.

### Prerequisites and earlier retrieval

Retrieve likelihood/support từ Day 11 và recursion discipline từ Days 2–4. Viết rõ timestamp, observation process và state semantics trước khi tính.

### First principles and worked reconstruction

**Theory.** AR(1) stationary khi shock effects decay; unit root làm variance không ổn định và naive growth misleading. HMM forward recursion gộp paths theo current hidden state, giảm exponential xuống polynomial; scaling/log-space tránh underflow. Right censoring vẫn cung cấp survival information; Kaplan–Meier nhân conditional survival factors, hazard là instantaneous event rate conditional on survival.

**Example mới.** Subscription cohort còn active không được bỏ khỏi lifetime analysis.

**Worked reconstruction.** AR(1) `X_t=0.6X_{t-1}+ε_t`, `Var(ε)=4` có stationary variance `4/(1-0.36)=6.25` và lag-2 correlation `0.6²=0.36`; tại coefficient 1 công thức hỏng vì shocks không decay. Với HMM hai state, forward update là `α_t(j)=p(y_t|j)Σ_i α_{t-1}(i)P_{ij}` rồi normalize và lưu scale factor; enumeration `2^T` paths không cần thiết. Với survival times có risk set 10 rồi 8 và lần lượt 1,2 events, KM là `(1-1/10)(1-2/8)=0.675`; người censored rời risk set sau thời điểm censor nhưng không bị ghi thành event.

#### Reconstruction checkpoints for time and observation

- **AR dynamics (M33).** The `.6` chain above derives variance and ACF from shock decay. At `φ=1`, `X_t=X_0+Σ_{i≤t}ε_i` has variance growing with `t`; inserting 1 into `σ²/(1-φ²)` is division by zero, evidence that stationarity—not arithmetic—failed. A deterministic trend and a stochastic unit root require different diagnostics.
- **Scaled HMM recursion (M34).** With prior `[.6,.4]`, transition `[[.8,.2],[.3,.7]]` and first-emission likelihood `[.5,.1]`, unnormalized forward message is `[.30,.04]`, scale `.34`, normalized `[.882,.118]`. The next step multiplies this vector by the transition then emission; total log-likelihood accumulates `Σ log c_t`. Normalizing without retaining `c_t` loses likelihood evidence, while enumerating paths is exponential rather than `O(TK²)`.
- **Censoring and survival (M36).** The KM chain above uses event-time risk sets and removes censoring only after its time. If survival remains above `.5`, the median is “not reached,” not the last observed duration. KM needs independent/non-informative censoring conditional on modeled covariates; high-risk users selectively disappearing biases survival upward and requires sensitivity/joint observation modeling.

### Independent practice

- **Drill A:** Derive AR variance/ACF với parameter mới.
- **Drill B:** Hand-trace HMM hai state ba observations và rescale.
- **Checkpoint:** censoring assumption và state semantics được nêu.

Hoàn thành `P3-M33`, `P3-M34`, `P3-M36`; survival trace là bắt buộc, không được thay bằng định nghĩa.

### Material transfer and advanced variant

Đổi AR sang local trend/unit-root candidate; đổi HMM sang emissions gần như không phân biệt và chuỗi dài; đổi right censoring sang informative dropout. Learner phải chỉ ra estimator/interpretation nào hỏng và cần dữ liệu hay sensitivity analysis nào.

### Evaluator, feedback and retrieval

Rubric yêu cầu recursion số, normalization/log-space, risk-set arithmetic và assumption boundary. Retry thay coefficient, transition matrix hoặc censoring mechanism. Retrieval: Day 14; HMM/temporal state trở lại trong Days 15 và 27.

### Done and evidence

Ba hand traces và ba evaluator đạt ngưỡng hoặc có trạng thái trung thực; error ledger phân loại dynamic, numerical hay observation-process error. Evidence: `day-12/temporal-latent-censoring.md`.

## Ngày 13 — Causality, leakage, ranking và preferences

### Outcome and learning tree

Thiết kế quyết định ranking/causal mà không biến correlation thành intervention effect hoặc offline score thành launch proof. Routes: M35, M38, M39, M41, M42, M43, M45.

### Prerequisites and earlier retrieval

Retrieve Day 8 identification/experiment assumptions, Day 10 selection bias và Day 11 calibration/decision cost. M39 và M42 giữ các chain đã xây; các route còn lại phải có evaluator riêng thay vì chỉ “recognition”.

### First principles and worked reconstruction

**Phân tầng trong 180 phút.** Core là prediction-time leakage cùng M39 cosine concentration và M42 cold start. DAG/estimand được giữ ở mức một trace; uplift, propensity/IV và Bradley–Terry là recognition map cho Review 2. Không giả hoàn thành nếu M39/M42 chưa có artifact và rubric result.

**Theory.** Prediction hỏi `Y`; causality hỏi contrast giữa potential outcomes. Observed association lẫn selection/confounding. Propensity methods cần conditional ignorability/positivity; IV cần relevance, exclusion và independence. Uplift dự đoán treatment effect, không phải churn risk, và phân nhóm persuadable, sure thing, lost cause, sleeping dog. Feature chỉ hợp lệ nếu tồn tại ở prediction time. Repeated tuning trên test set biến test thành training signal.

Ranking cần assumptions riêng: random-vector cosine phụ thuộc dimension; cold start cần prior/context và exploration; Bradley–Terry dùng logistic difference của latent qualities và cần identifiability constraint; pairwise preference có thể vi phạm transitivity/context independence.

**Example mới.** Retry count sau inference không thể dự đoán failure tại submission.

**Worked statistical/design reasoning.** Requirement là dự đoán failure tại thời điểm submit. `retry_count_after_inference` chưa tồn tại tại prediction time, nên vi phạm temporal availability dù tương quan cao. Flow hợp lệ chỉ dùng feature có timestamp không muộn hơn submit; offline split phải mô phỏng boundary đó. Failure mode là training–serving skew; monitor bằng feature-availability audit và online missing-rate. Bỏ feature có thể giảm AUC nhưng đổi lại estimate deployable và tránh leakage.

#### Reconstruction checkpoints for causal and preference claims

- **Causal estimand (M35).** Let motivation `U` affect both voluntary feature adoption `T` and retention `Y`; the DAG has `U→T`, `U→Y`, `T→Y`. Comparing adopters/non-adopters does not identify `E[Y(1)-Y(0)]`. Randomization blocks self-selection; covariate adjustment needs conditional exchangeability, positivity and consistency. A negative-control outcome or sensitivity bound probes residual confounding but does not magically prove absence.
- **Adaptive test overfitting (M38).** If 40 variants are selected on the same noisy test set, the maximum observed score includes selection noise even when all true qualities match. Lock a final holdout, log access, use validation for iteration, rotate/refresh capability tasks and run one predeclared confirmation. “Test score rose” after repeated exposure is training signal, not unbiased generalization evidence.
- **Prediction-time leakage (M41).** The timestamp reconstruction above establishes the deployable boundary: event-time alone is insufficient if availability/correction occurs after decision time. Offline joins must be as-of joins; online missing/latency distributions verify training-serving parity. High AUC from post-outcome data is evidence of leakage, not model quality.
- **Uplift decisions (M43).** In a randomized segment, treatment conversion `.30` versus control `.20` yields uplift `+.10`; another with `.30` versus `.40` yields `-.10` and is a sleeping-dog candidate. Sure things respond under both arms, lost causes under neither, persuadables only under treatment. A churn-risk score estimates `P(Y|X)`, not the treatment contrast, so it cannot rank incremental benefit without identification.
- **Bradley–Terry limits (M45).** For item qualities `q_i`, `P(i\succ j)=σ(q_i-q_j)` and log-likelihood sums winner log-probabilities. Adding a constant to all `q` changes nothing, so fix one quality or zero-sum constrain them. A disconnected comparison graph leaves relative components unidentified; rock–paper–scissors cycles or context-dependent preferences expose model misspecification rather than a numerical optimizer bug.

- **Drill A:** Audit 10 features bằng timestamp boundary.
- **Drill B:** Vẽ causal DAG, rồi viết Bradley–Terry likelihood cho ba items và đặt anchor.
- **Checkpoint:** estimand, identification và ranking identifiability rõ.

### Phase 2 core chains — M39, M42

#### M39 — High-dimensional cosine moments

- **Mechanism.** Với independent uniform unit vectors `u,v` trên sphere `S^{d-1}`, rotational symmetry cho phép cố định `u=e1`; cosine là `v1`. Đối xứng dấu cho `E[v1]=0`. Vì `Σv_i²=1` và các coordinates exchangeable, `dE[v1²]=1`, nên `Var(cosine)=1/d` và natural null scale là `1/√d`.
- **Worked example.** Trong `d=400`, cosine `0.15` tương đương `3` null standard deviations vì `0.15/(1/20)=3`; cùng cosine trong `d=25` chỉ là `0.75` SD. Đây là calibration dưới random-sphere null, không tự động mô tả learned embeddings.
- **Independent exercise.** Derive moments cho `d=64`, rồi so ý nghĩa của cosine `0.25` ở `d=16` và `d=256`.
- **Material transfer.** Embeddings có covariance anisotropic `Σ`. Thiết kế empirical null và whitening/stratification check; exchangeability của coordinates và variance `1/d` có thể hỏng.
- **Misconception correction.** Không gọi một cosine “cao” nếu chưa nêu dimension, null/reference distribution và dependence assumptions.
- **Changed retry.** So sánh hai embedding models khác dimension bằng standardized tail probability thay vì raw cosine.
- **Delayed retrieval.** `P2-M39-R` tại Ngày 18 với clustered, non-uniform embeddings.

#### M42 — Cold-start ranking

- **Mechanism.** New-item score bắt đầu từ content/context prior, không phải zero hoặc random-only. Exploration thu thập information nhưng phải bị giới hạn bởi UX/safety cost. Offline replay chỉ đánh giá actions có logged support; offline metric không chứng minh online causal lift.
- **Worked example.** Rank khóa học mới bằng topic embedding, author reliability, language/level match và freshness prior. Dành 5% eligible impressions cho uncertainty-aware exploration, không explore với users có safety restriction. Launch gate gồm content-quality floor, coverage theo cohort, calibrated uncertainty và randomized interleaving nhỏ.
- **Independent exercise.** Thiết kế feature schema, prior, exploration budget và offline/online gates cho marketplace freelancer mới; nêu logged propensities cần lưu.
- **Material transfer.** Chuyển sang cảnh báo y tế, nơi harmful exploration bị cấm. Thay online exploration bằng expert review, conservative prior và shadow evaluation; constraint mới làm policy cũ không dùng trực tiếp.
- **Misconception correction.** “Offline NDCG tăng” chỉ là evidence có điều kiện; phải audit exposure bias, support và novelty cohorts.
- **Changed retry.** Cold-start cho user mới nhưng items cũ; chỉ ra signals và exploration objective khác new-item case.
- **Delayed retrieval.** `P2-M42-R` tại Ngày 18 với catalog drift và capped exposure.

### Independent practice

Hoàn thành `P3-M35`, `P3-M38`, `P2-M39`, `P3-M41`, `P2-M42`, `P3-M43`, `P3-M45`. Tạo một causal DAG/estimand table và một ranking launch sheet; mỗi ID vẫn có attempt riêng để chấm được lỗi.

### Material transfer and advanced variant

Chuyển từ marketplace sang triage y tế: positivity yếu, exploration gây hại, preferences có context và feature availability đổi theo workflow. Phải thay identification/launch policy, không chỉ đổi danh từ. Advanced variant thêm non-transitive pairwise cycles và anisotropic embeddings.

### Evaluator, feedback and retrieval

Mỗi rubric có decisive checkpoint: leakage timestamp; causal estimand/identification; propensity support; IV exclusion; uplift action groups; cosine null; cold-start safety; Bradley–Terry anchor và nontransitivity boundary. Failed attempt được giữ nguyên và retry với graph/support/context khác. Retrieval: Day 14 và delayed M39/M42 ở Day 18.

### Done and evidence

Bảy route có evaluator result, một DAG/identification memo và một ranking launch design. Evidence: `day-13/causal-ranking-pack.md` cùng attempt files; thiếu bất kỳ route nào là `PARTIAL`.

## Ngày 14 — Review 2

### Outcome and learning tree

Đo retained transfer cho Days 8–13 và sửa root cause; không giới thiệu capability mới.

### Prerequisites and earlier retrieval

Không học topic mới. Làm assessment closed-book trước; sau khi lưu trạng thái kết thúc mới mở lesson/tài nguyên để phân loại lỗi và chọn recovery drill.

### First principles and worked reconstruction

Sau khi khóa bài, reconstruct đúng một lỗi bằng chuỗi estimand/data-generating process → assumptions → computation/design → decision → boundary. Reconstruction là feedback sau attempt, không được dùng để sửa bản gốc.

### Independent practice

Làm Review 2 locked form trong 75 phút, sau đó self-grade bằng rubric. Form phải lấy mẫu predictive decisions, temporal/latent/censoring và causal/ranking; không được báo PASS từ tổng điểm nếu một domain floor thất bại.

### Material transfer and advanced variant

Retrieval bắt buộc sau assessment: một task causal trong propensity/IV/uplift và một task ranking trong cosine/cold-start/Bradley–Terry. Artifact phải nêu estimand hoặc identifiability constraint, một failure assumption và error repair; hai task thay cho enrichment khác nếu chạm timebox.

### Evaluator, feedback and retrieval

Ghi score, domain floors, error taxonomy và changed retest. Failed route quay lại prerequisite cụ thể; recovery plan không đổi trạng thái assessment. Các lỗi chưa sửa được đưa vào Day 18 retrieval ledger.

### Done and evidence

Done khi locked attempt, rubric result, hai changed-transfer tasks và correction ledger đều tồn tại. Evidence: `review-02.md`; `PASS` chỉ khi tổng ≥70%, mọi floor đạt và không thiếu artifact bắt buộc.

## Ngày 15 — MDP và Bellman

### Outcome and learning tree
Formalize sequential decisions, solve a small process exactly, and prove why iterative value methods converge. Routes: M46, M47, M48, M56, M62.

### Prerequisites and earlier retrieval
Retrieve conditional expectation, geometric series and fixed-point reasoning. State must contain enough history before the Markov property is invoked.

### First principles and worked reconstruction

**Theory.** MDP gồm states, actions, transition, reward, discount/horizon. Markov giả định state tóm đủ lịch sử liên quan tương lai; screenshot thường không đủ nên computer-use gần POMDP. Bellman operator là gamma-contraction vì max và expectation không khuếch đại sup difference quá gamma; do đó fixed point duy nhất và value iteration hội tụ. Effective horizon xấp xỉ `1/(1-gamma)`.

**Example mới.** Solve support-agent MDP với states waiting/resolving/escalated.

**Worked reconstruction.** For a one-state continuing process with reward 2 and self-transition, `V=2+γV`, hence `V=2/(1-γ)`. With `γ=.8`, `V=10`; truncating after `k` Bellman iterations from zero leaves error at most `γ^k·10`. To make error ≤0.1 requires `k≥ceil(log(.01)/log(.8))=21`. This exposes reward timing, effective horizon and the contraction-derived iteration bound rather than memorizing a formula.

#### Reconstruction checkpoints for sequential foundations

- **MDP/POMDP objects (M46).** A support agent state must include ticket status, verified external effects and pending authorization; a screenshot omitting prior payment/approval is not Markov. Define `S,A,P,R,γ` and terminal semantics before writing Bellman equations. If relevant history cannot be summarized from observation, maintain a belief/history state and call the problem partially observed.
- **Bellman contraction (M47).** For optimality operators, `|max_a f_a-max_a g_a|≤max_a|f_a-g_a|`; transition expectation is non-expansive, so `||TV-TW||∞≤γ||V-W||∞`. With `γ<1`, Banach's theorem gives a unique fixed point and geometric convergence. Undiscounted continuing tasks need other conditions; setting `γ=1` invalidates this proof.
- **Exact value solve (M48).** Let terminal state's value be 4 and state A give reward 1 then transition half to A, half to terminal, with `γ=.9`. `V_A=1+.9(.5V_A+.5·4)`, hence `.55V_A=2.8` and `V_A≈5.091`; substitution verifies the result. Changing whether terminal reward is paid on entry changes the equation.
- **Effective horizon (M56).** Discounted mass after `H` is `γ^H`; the rough horizon `1/(1-γ)` is 5 for `.8` and 50 for `.98`. Larger γ values delayed outcomes more but amplify approximation error/variance and can conflict with product episode boundaries; horizon is chosen from consequences, not convention.
- **Iteration budget (M62).** The one-state example above solves `γ^kE_0≤ε`. Because `log γ<0`, dividing reverses the inequality, and `ceil` is required for an integer iteration count. A residual bound and a value-error bound are not interchangeable without the contraction conversion.

### Independent practice

- **Drill A:** Dựng Bellman equations cho MDP ba state.
- **Drill B:** Từ geometric error bound derive iteration count.
- **Checkpoint:** reward timing và terminal semantics rõ.

Complete `P3-M46`, `P3-M47`, `P3-M48`, `P3-M56`, `P3-M62` closed-book.

### Material transfer and advanced variant
Change the support process into partial observation with delayed rewards and `γ=.98`; determine which state representation, horizon and error budget must change. Advanced variant uses state aliasing that breaks the stated Markov model.

### Evaluator, feedback and retrieval
Rubrics require objects, equations, exact trace, contraction inequality and numerical bound. Preserve failed attempts and retry with changed transition/reward timing. Retrieval Days 19 and 21.

### Done and evidence
Five evaluator results plus one state diagram and derivation notebook; evidence `day-15/bellman-pack.md` and per-ID attempts.

## Ngày 16 — TD control và stability

### Outcome and learning tree
Explain control behavior from update targets and diagnose instability instead of relying on algorithm labels. Routes: M49, M55, M57.

### Prerequisites and earlier retrieval
Retrieve Day 15 Bellman/Q objects, behavior versus target policy and terminal timing.

### First principles and worked reconstruction

**Theory.** Q-learning target dùng greedy next action nên off-policy; SARSA dùng action thực sự lấy dưới behavior policy nên on-policy. Deadly triad là function approximation + bootstrapping + off-policy, có thể tạo self-amplifying extrapolation. Potential shaping `gamma Phi(s')-Phi(s)` telescopes nên giữ policy ordering dưới đúng boundary.

**Example mới.** Live automation gần destructive action ưu tiên behavior-aware learning thay vì giả định greedy future.

**Worked reconstruction.** On transition `(s,a,r=0,s')`, current `Q(s,a)=1`, step `.5`, greedy next value 6 but behavior chooses value 2. Q-learning becomes `1+.5(0+.9·6-1)=3.2`; SARSA becomes `1+.5(0+.9·2-1)=1.4`. The difference is the target policy, not whether exploration exists. Potential shaping adds `γΦ(s')-Φ(s)`; summing discounted terms telescopes to endpoints, so policy invariance needs consistent terminal potential/boundary.

#### Reconstruction checkpoints for TD behavior

- **Q-learning versus SARSA (M49).** The paired update above holds transition and step size fixed and changes only next-action target. Near an irreversible hazard, SARSA prices the exploratory behavior actually taken, while Q-learning evaluates a greedy continuation; neither label alone guarantees safety, which also depends on behavior policy and constraints.
- **Deadly-triad mechanism (M55).** Suppose an unsupported next action has approximated value 10 because shared features generalize from another state. Off-policy bootstrapping uses `r+γ·10` as its own target; the update raises shared weights, which can make the next unsupported target still larger. Function approximation + bootstrapping + off-policy distribution closes this positive feedback loop. Target networks, coverage constraints, on-policy data or conservative penalties mitigate specific links but do not prove universal stability.
- **Potential shaping (M57).** Discounted shaping sums `Σγ^t(γΦ(s_{t+1})-Φ(s_t))=-Φ(s_0)+lim γ^{T+1}Φ(s_{T+1})`. With zero/consistent terminal potential, policies differ only by a state-dependent constant; arbitrary terminal bonuses, time-dependent potential or wrong discount can change policy ordering.

### Independent practice

- **Drill A:** Hand-trace Q-learning và SARSA trên cùng transition sequence.
- **Drill B:** Chứng minh shaping return chỉ đổi bởi endpoint terms.
- **Checkpoint:** phân biệt algorithm target với exploration policy.

Complete `P3-M49`, `P3-M55`, `P3-M57` with numeric traces and a stability diagnosis.

### Material transfer and advanced variant
Move from a tabular safe grid to linear function approximation with off-policy replay and an irreversible action. Identify the deadly-triad mechanism and redesign exploration/shaping without claiming universal stability.

### Evaluator, feedback and retrieval
Rubrics require both update arithmetic, a causal instability chain and the shaping endpoint condition. Retry changes behavior action or terminal potential. Retrieval Day 21.

### Done and evidence
Three evaluator results, paired update table and failure analysis in `day-16/td-stability.md`.

## Ngày 17 — Policy gradients

### Outcome and learning tree
Derive stochastic policy gradients and reason about variance controls, clipping and entropy at extreme settings. Routes: M50, M51, M60, M63.

### Prerequisites and earlier retrieval
Retrieve trajectory probability, conditional expectation and Day 15 advantage/value definitions.

### First principles and worked reconstruction

**Theory.** Log-derivative biến gradient của trajectory probability thành sum `grad log pi`; nhân return cho REINFORCE. Baseline phụ thuộc state nhưng không action có expectation contribution zero. Advantage giảm variance; GAE trộn multi-step TD residuals bằng lambda. PPO ratio so new/old action probability và clipping hạn chế harmful large policy moves. Entropy khuyến khích spread nhưng quá cao phá reliability.

**Example mới.** Với negative advantage, tăng probability của action xấu phải bị giới hạn đúng phía objective.

**Worked reconstruction.** `∇J=E[R(τ)∇log pθ(τ)]` and environment dynamics vanish from the derivative, leaving `Σ_t∇logπθ(a_t|s_t)R`. A state-only baseline is unbiased because `Σ_a π(a|s)∇logπ(a|s)b(s)=b(s)∇Σ_aπ(a|s)=0`. For PPO ratio `r=1.3`, clip `.8–1.2`: positive advantage uses 1.2, while negative advantage takes the more pessimistic term 1.3; blindly clipping every ratio to 1.2 gets the sign case wrong.

#### Reconstruction checkpoints for gradient estimators

- **REINFORCE (M50).** The likelihood-ratio chain above differentiates only the policy factors; rewards/environment need not be differentiable. A state-only baseline integrates to zero, but an action-dependent baseline generally does not. Return-to-go removes rewards causally preceding an action and reduces variance without changing expectation under the same trajectory law.
- **GAE (M51).** With TD residuals `[2,-1,.5]`, `γ=.9`, GAE at the first step is `2+(γλ)(-1)+(γλ)²(.5)`. At `λ=0` it is 2 (one-step, more bootstrap bias); at `λ=1` it is `2-.9+.405=1.505` (Monte-Carlo-like longer credit, typically more variance). Truncation/value error can alter that textbook trade-off.
- **PPO clipping (M60).** The ratio/advantage example above uses `min(rA,clip(r)A)`. For `A>0`, ratios above 1.2 stop adding gain; for `A<0`, a ratio 1.3 remains the worse 1.3A term, while ratios below .8 are clipped. Clipping is a surrogate guard, not a hard KL or monotonic-improvement guarantee.
- **Entropy regularization (M63).** Adding `αH(π(.|s))` spreads action probability. `α=0` can collapse exploration prematurely; dominant α can keep destructive actions random despite reward evidence. Schedule α with entropy/KL and safety-action rate monitors, while hard authority constraints remain outside the soft entropy incentive.

### Independent practice

- **Drill A:** Derive baseline-unbiasedness bằng sum over actions.
- **Drill B:** So lambda 0/1 và phân tích bias–variance.
- **Checkpoint:** mọi symbol/objective direction được định nghĩa.

Complete `P3-M50`, `P3-M51`, `P3-M60`, `P3-M63`.

### Material transfer and advanced variant
Change from short episodes to long sparse rewards, compare GAE endpoints and vary entropy coefficient from zero to dominant. Advanced variant checks action-dependent baselines and support collapse.

### Evaluator, feedback and retrieval
Rubrics require unbiasedness derivation, bias–variance endpoints, both PPO advantage signs and entropy failure boundaries. Retry changes horizon/sign/coefficient. Retrieval Day 21.

### Done and evidence
Four evaluator results and derivation/trace artifact `day-17/policy-gradient-pack.md`.

## Ngày 18 — Bandits, OPE và offline RL

### Outcome and learning tree
Choose the correct sequential abstraction and make defensible decisions from logged data with explicit support and variance limits. Routes: M52, M53, M58, M59, M64.

### Prerequisites and earlier retrieval
Retrieve Hoeffding from Day 9, Bayes from Day 8 and trajectory/action probabilities from Day 17. Run delayed M39/M42 retrieval separately.

### First principles and worked reconstruction

**Theory.** UCB dùng confidence radius để optimistic selection và thu hẹp khi pulls tăng. Thompson sampling sample posterior rồi hành động như sample đó đúng. Bandit hợp khi action không ảnh hưởng future state; nếu có delayed state consequences cần RL. Importance sampling đổi measure bằng likelihood ratios nhưng variance nhân theo horizon. Offline Q-learning chọn unsupported actions; conservative methods hạ value ngoài data support.

**Example mới.** Homepage card là bandit; multi-step onboarding policy là RL.

**Worked reconstruction.** A Hoeffding radius `sqrt(log(2/δ)/(2n))` shrinks with pulls; with `δ=.05,n=200` it is about `.096`. For a two-step logged trajectory, behavior probabilities `.5,.25` and target `.75,.5` give ratio `( .75/.5 )(.5/.25)=3`; one unsupported target action makes the ratio undefined and no amount of reweighting recovers evidence. Conservative offline value therefore penalizes actions outside empirical support.

#### Reconstruction checkpoints for logged decisions

- **UCB from concentration (M52).** The radius above comes from bounding a fixed arm's empirical mean; simultaneous/time-uniform selection needs an adjusted confidence schedule such as a log-time term. Optimism chooses `mean+radius`, balancing reward and information. Nonstationary rewards break the stationary logarithmic-regret argument.
- **Thompson sampling (M53).** Starting `Beta(1,1)`, three successes and one failure yield `Beta(4,2)`. Sample one probability per arm and pick the largest; over repeated rounds, action probability matches posterior belief of optimality. Incorrect Bernoulli likelihood or nonstationarity makes this posterior confidence misleading.
- **Importance sampling (M58).** The two-step ratio 3 above changes measure only when every target action has positive behavior probability and propensities are correct. Products across horizon explode variance; per-decision weighting, clipping/self-normalization trade bias for variance but cannot repair zero support.
- **Bandit versus RL (M59).** A homepage card is contextual bandit only if today's choice does not materially change future state/information beyond observed reward. An onboarding action that changes skills, permissions or later options requires a sequential model. Delayed reporting alone does not make a bandit into an MDP; causal state consequence does.
- **Offline conservatism (M64).** Maximizing learned Q over unseen actions selects extrapolation error. Constrain policy divergence/support, penalize uncertain out-of-distribution actions or abstain to behavior/human review. A conservative lower bound can justify “do not deploy,” not infer counterfactual quality where logs contain no support.

### Independent practice

- **Drill A:** Derive một UCB radius từ Hoeffding với confidence mới.
- **Drill B:** Phân tích support mismatch cho logged policy gần deterministic.
- **Checkpoint:** regret/evaluation claim gắn với assumptions.

Complete `P3-M52`, `P3-M53`, `P3-M58`, `P3-M59`, `P3-M64`, plus locked `P2-M39-R/P2-M42-R`.

### Material transfer and advanced variant
Move from homepage selection to delayed onboarding with near-deterministic logs; compare bandit versus RL, per-decision versus trajectory IS and conservative abstention. Advanced variant adds posterior misspecification and horizon-driven weight explosion.

### Evaluator, feedback and retrieval
Rubrics require confidence/posterior mechanics, abstraction choice, ratios/support and a conservative boundary. Changed retries alter logging propensity or delayed state effects. Retrieval Day 21 and Day 25.

### Done and evidence
Five new routes and two delayed retrievals have immutable results; evidence `day-18/logged-decision-pack.md` and per-ID attempts.

## Ngày 19 — RLHF và reward integrity

### Outcome and learning tree
Specify rewards and evaluation so optimization cannot silently replace the real goal; formalize computer-use as partial observation. Routes: M54, M61, M65.

### Prerequisites and earlier retrieval
Retrieve Bradley–Terry likelihood from Day 13, KL/entropy intuition from Day 17 and support/shift limitations from Day 18.

### First principles and worked reconstruction

**Theory.** Reward model học pairwise preferences qua logistic loss. Policy optimization tối đa predicted reward nhưng bị KL penalty kéo về reference distribution. KL quá yếu cho phép exploit reward-model blind spots; quá mạnh ngăn improvement. Reward spec cần outcome, constraints và counter-metrics. Computer-use observation thường partial; evaluation phải dùng environment state/postconditions, không model self-report.

**Example mới.** Reward “tickets closed” có thể khuyến khích đóng nhầm; thêm verified resolution và reopen-rate guardrail.

**Worked reconstruction.** Pairwise reward loss uses `-log σ(r(x,y_w)-r(x,y_l))`; policy optimization maximizes predicted reward minus `β KL(π||π_ref)`. For ticket automation, primary evidence is verified resolution within 48h, while reopen rate, escalation harm and user complaint rate are constraints/counter-metrics. A screenshot omits hidden state and asynchronous effects, so a computer agent is a POMDP; grader checks environment postconditions and action log, never the model's “done” claim alone.

#### Reconstruction checkpoints for reward integrity

- **Preference reward and KL (M54).** Pairwise logistic loss identifies relative reward up to offsets and inherits rater/context bias. Small β permits policy search into reward-model blind spots; very large β freezes improvement near the reference. Evaluate true task/harm outcomes on held-out/adversarial distributions rather than treating predicted reward as ground truth.
- **Goodhart-resistant reward specification (M61).** “Tickets closed” is the proxy, verified resolution is the intended outcome, and reopen/harm/complaint rates are counter-metrics. State thresholds, audit sampling and stop/rollback actions before optimization. Adding many proxies without a causal exploit model can create another gameable weighted sum.
- **Computer-use POMDP (M65).** State includes page/backend/authorization/external-effect truth; observation is screenshot/DOM/tool feedback; actions change both UI and outside systems. Pre-deploy evaluation injects stale observations, hidden modals and ambiguous timeouts, then grades environment postconditions and forbidden-action constraints. Model self-report is not state evidence.

### Independent practice

- **Drill A:** Viết pairwise loss và KL-regularized objective.
- **Drill B:** Red-team ba proxy rewards và thiết kế detection.
- **Checkpoint:** proxy, true goal và residual risk tách biệt.

Complete `P3-M54`, `P3-M61`, `P3-M65` and red-team at least three reward exploits.

### Material transfer and advanced variant
Transfer from support tickets to medical scheduling where false completion has asymmetric harm, preference raters disagree and observation is stale. Redesign reward, KL boundary, abstention and pre-deploy evaluation.

### Evaluator, feedback and retrieval
Rubrics require preference objective, KL extremes, counter-metric set, POMDP objects and verified postconditions. Retry changes proxy or observation channel. Retrieval Day 21 and evaluation Days 25/29.

### Done and evidence
Three evaluator results, reward contract and adversarial evaluation matrix in `day-19/reward-integrity.md`.

## Ngày 20 — Correctness, queueing và overload

### Outcome and learning tree
Design a service that remains correct across races, crashes, retries and overload, then quantify its capacity. Routes: M67,M68,M69,M71,M73,M76,M83,M98,P12,P15.

### Prerequisites and earlier retrieval
Retrieve Day 5 units/cost, Day 9 reliability, Day 15 state transitions and Day 19 irreversible postconditions. Define the logical operation and state owner before choosing infrastructure.

### First principles and worked reconstruction

**Theory.** Idempotency gắn nhiều retries vào một logical operation. End-to-end reliability của independent sequential stages là product của stage reliabilities; retry chỉ cải thiện khi failure attempts thực sự independent và operation idempotent. Transactional outbox atomically ghi business state và message intent; worker publish/reconcile sau. Saga dùng local transactions và compensations khi không có 2PC. Nếu remote effect có thể committed trước crash, state là unknown chứ không phải failed; cần lookup bằng operation ID hoặc manual reconciliation. Locks/conditional update xử lý race nhưng phải nói isolation assumption.

Queueing nối correctness với capacity: `L=lambda W`; safe worker count cần target utilization. Khi rho gần 1, tail tăng phi tuyến. Admission control, bounded queue, backpressure, token bucket và fair scheduling ngăn overload biến thành stale work/retry storm.

**Example mới.** Debit subscription và enqueue export dùng ledger entry + outbox trong một DB transaction.

**Worked reconstruction.** At `λ=120 jobs/s`, mean service `.2s`, offered concurrency is `L=λW=24`; a 60% utilization target needs `ceil(24/.6)=40` workers before burst/tail margin. A debit and outbox intent share one transaction keyed by operation ID. If the vendor commits a payment but the response times out, state becomes `UNKNOWN`; blindly retrying can duplicate the charge. Reconcile by vendor operation ID, while admission control and jittered bounded retries prevent overload from multiplying traffic.

#### Reconstruction checkpoints for correctness under load

- **Atomic debit and enqueue (M67).** In one database transaction, conditionally insert operation ID, debit ledger entry and outbox intent. A crash before commit leaves neither; after commit leaves both and a relay may safely republish because consumers deduplicate the event ID. Writing the broker first or using two unrelated commits creates a missing-job or free-job window.
- **Mixed-duration scheduling (M69).** FIFO lets a 60-second GPU job block many 1-second jobs; pure shortest-job-first improves mean latency but can starve long work. Use bounded classes/deficit or fair queuing with admission and aging, then measure per-class p95 and utilization. Duration estimates and preemption cost are explicit assumptions.
- **Capacity and tails (M71).** The worked `L=λW=24` and 40-worker calculation uses mean service and a 60% target. It does not prove p99: burstiness/service variance require queue simulation or a stated queueing model plus headroom. Mixing seconds and milliseconds or setting utilization to 100% invalidates the design.
- **Saga boundaries (M73).** Reserve inventory → charge → arrange shipment can compensate reservation and perhaps refund charge, but a sent physical shipment/publication is a pivot with manual/forward recovery. Persist step state and compensation idempotency; “rollback the database” cannot undo the outside world.
- **Race interleaving (M76).** Two workers read balance 10, each subtract 7 and write 3: both appear successful although 14 was spent. A conditional update `balance>=7` with atomic decrement or serializable transaction makes one fail. A mutex in one process is insufficient across workers unless it owns the shared state.
- **Composed reliability (M83).** Three independent `.99` stages yield `.99³≈.9703`, not `.99`. One retry changes a stage success to `1-(1-p)²` only if attempts are independent and the effect is idempotent; a shared outage or retry storm preserves/correlates failure. Isolate retry budgets and recompute end-to-end SLO.
- **Overload control (M98).** At an 8× burst, bound admission and queue age, prioritize critical work, shed/degrade optional paths and return retry-after with jitter. Letting every timeout retry immediately increases offered load and stale work. The policy must name capacity signal, queue cap and recovery hysteresis.
- **Strict latency claims (P12).** “20% faster” can mean 500→400 ms yet still miss a 250 ms client TTFA SLO; an average can hide a mobile p99 regression. Report absolute endpoint-to-client strata and confidence, then evaluate the strict bound. Percentage improvement never proves universal latency.
- **Intent/result protocol (P15).** Persist `INTENT(op_id)` before a remote call, then `SUCCEEDED(result_ref)`, `FAILED(definitive)` or `UNKNOWN`. On timeout, lookup/reconcile by operation ID; if provider lacks lookup/idempotency, stop for manual review or compensating business policy. Retrying UNKNOWN as if failed is unsafe.

### Independent practice

- **Drill A:** Liệt kê mọi crash window và recovery.
- **Drill B:** Thiết kế fallback khi vendor không hỗ trợ idempotency/read-by-ID, rồi tính worker count và overload policy.
- **Checkpoint:** consistency, units, ordering, fairness và cancellation rõ.

### Phase 2 core chain — M68 lazy token bucket

#### M68 — Lazy token bucket

- **Mechanism/state.** Mỗi key giữ `(tokens,last_monotonic_time)`. Tại request cost `c`: `tokens=min(B, tokens+r×max(0,now-last))`; đặt `last=now`; nếu `tokens≥c` thì atomically debit và admit, ngược lại reject/defer. State là `O(1)`; cap `B` bảo toàn burst envelope.
- **Worked example.** `B=10`, `r=2 token/s`, ban đầu 10. Request costs tại `t=0,0,1.5,2` là `6,5,4,3`: admit 6 còn 4; reject 5 còn 4; refill đến 7 rồi admit 4 còn 3; refill đến 4 rồi admit 3 còn 1. Rejection không debit.
- **Independent exercise.** Viết pseudocode và trace `B=7,r=1.5/s` cho simultaneous costs `[4,4,1]`, nêu serialization order và expected admits.
- **Material transfer.** Hai workers cập nhật cùng key với delayed messages và wall clock lùi. Thiết kế compare-and-set/Lua transaction hoặc single owner, monotonic-time rule và race test; fixed-window reset không tương đương refill liên tục.
- **Misconception correction.** Nếu implementation lưu toàn bộ history, reset theo phút hoặc refill ngoài atomic section, chỉ ra vi phạm `O(1)`, boundary burst hoặc lost-update invariant.
- **Changed retry.** Weighted tokens cho jobs có costs khác nhau và cancellation refund; xác định invariant mới và abuse risk.
- **Delayed retrieval.** `P2-M68-R` tại Ngày 23: distributed limiter trace với stale retry.

Complete `P3-M67`, `P2-M68`, `P3-M69`, `P3-M71`, `P3-M73`, `P3-M76`, `P3-M83`, `P3-M98`, `P3-P12`, `P3-P15`.

### Material transfer and advanced variant
Transfer from exports to paid GPU generation with mixed durations, strict first-byte SLO, non-idempotent vendor effects and an 8× burst. Change isolation, scheduler, capacity and reconciliation; a noun/number swap is insufficient.

### Evaluator, feedback and retrieval
Each rubric requires an invariant owner, at least one explicit crash/race timeline and quantitative or postcondition evidence. Unknown is not failed; average latency is not a strict bound. Retry with changed crash point/load mix. Retrieval Days 21–24.

### Done and evidence
Ten routed results, crash matrix, capacity sheet and limiter trace in `day-20/correctness-overload-pack.md`; designed timebox is 240 minutes and overflow is `PARTIAL`.

## Ngày 21 — Review 3

### Outcome and learning tree
Measure retained RL/system transfer and repair weak mechanisms; introduce no new capability.

### Prerequisites and earlier retrieval

Không học topic mới. Làm assessment closed-book trước; sau khi lưu trạng thái kết thúc mới mở lesson/tài nguyên để phân loại lỗi và chọn recovery drill.

### First principles and worked reconstruction
After locking, reconstruct one failure as state → invariant → interleaving/transition → violated postcondition → smallest correction. Keep the original answer unchanged.

### Independent practice
Run the locked Review 3 form and oral defense across Bellman/control, logged evaluation, reward integrity and crash/overload design.

### Material transfer and advanced variant
Use a new domain that combines delayed reward, ambiguous external effect and burst load. At least one changed retry must cross from RL reasoning into system correctness.

### Evaluator, feedback and retrieval
Score total and domain floors, record error taxonomy and route each miss. Recovery cannot convert the locked result to PASS.

### Done and evidence
Locked attempt, score/floors, oral defense, changed retries and correction ledger exist in `review-03.md`; PASS requires ≥70% and every floor.

## Ngày 22 — Durable workflow engines

### Outcome and learning tree
Build a durable DAG/state-machine contract that survives worker loss, partial fan-out, definition changes and human delay. Routes: M70,M86,M87,M88,M89.

### Prerequisites and earlier retrieval
Retrieve Day 20 idempotency, leases/conditional writes, unknown outcomes and capacity limits. Separate durable orchestration state from disposable worker execution.

### First principles and worked reconstruction

**Theory.** Durable DB owns node/run states; workers claim bằng lease/compare-and-set. Completed node output được keyed bởi immutable workflow version + inputs + code/model version. Fan-out cần limits theo workers, provider quota, memory và cost. Cycle detection dùng DFS colors hoặc Kahn `O(V+E)`; supported loops cần exit condition/cap. Human waits là persisted state + durable timer, không held thread. In-flight runs pin version.

**Example mới.** Map 20k documents returns successes plus per-item errors và resume cursor.

**Worked reconstruction.** A run pins immutable workflow version `v7`. Worker A leases item 42 at fencing token 9; after expiry worker B obtains token 10 and commits. A's late write is rejected because 9<10. Completed outputs are keyed by run/version/node/input hash, so restart schedules only missing items. Editing node B invalidates B and descendants, not ancestors. A human approval persists `WAITING`, deadline and dedup key; no process/thread remains alive.

#### Reconstruction checkpoints for durable orchestration

- **Run/node state machine (M70).** Persist `PENDING→LEASED(token,deadline)→SUCCEEDED(output_ref)` or retryable/terminal/UNKNOWN states. Claims and dependency readiness are conditional writes; effects use the Day 20 intent protocol. Restart reads durable state and never infers completion from a dead worker.
- **Cycles and incremental recompute (M86).** Kahn's algorithm repeatedly removes zero-indegree nodes; remaining nodes prove a cycle in `O(V+E)`. On edit, compare node definition/input hashes and invalidate only the changed node plus reachable descendants. A supported loop is an explicit bounded state machine, not an accidental DAG cycle.
- **Bounded fan-out (M87).** For 20k items, store per-item result/error and limit concurrency by workers, provider quota, memory and total cost. A single cursor is unsafe with out-of-order completion; resume from durable item identities. Partial success policy states retry/skip/abort semantics and cost stop.
- **Immutable versions (M88).** A run pins workflow/model/schema/code versions and schedules choose a version at creation. Deleting/replacing a definition cannot make old outputs reproducible. Live migration needs a verified state mapping and compatibility proof; otherwise complete/abort under the pinned version.
- **Durable human wait (M89).** Persist approval request ID, subject/authority, state, deadline and timer. Duplicate or late clicks use compare-and-set/dedup and cannot re-trigger effects; timeout is an explicit transition. Holding a thread or relying on an in-memory timer loses the wait on restart.

### Independent practice

- **Drill A:** Vẽ transitions pending→leased→succeeded/failed/unknown.
- **Drill B:** Xác định descendants phải rerun sau node edit.
- **Checkpoint:** crash, duplicate click, lease expiry và partial result rõ.

Complete `P3-M70`, `P3-M86`, `P3-M87`, `P3-M88`, `P3-M89` with an executable transition table.

### Material transfer and advanced variant
Change fan-out to out-of-order shards with cost cap, edit a workflow while runs wait for approval and inject a stale worker plus duplicate late click. Specify schedule-version adoption and any prohibited live migration.

### Evaluator, feedback and retrieval
Rubrics require fenced claims, per-item results, cycle/invalidation logic, version pinning and timer/dedup semantics. Retry changes crash/edit timing. Retrieval Day 28 and capstone Day 29.

### Done and evidence
Five evaluator results plus state schema, DAG and three crash traces in `day-22/durable-workflow.md`.

## Ngày 23 — APIs, retrieval, dedup và cost

### Outcome and learning tree
Design stable serving and retrieval contracts whose latency, cache identity, evidence and cost can be tested independently. Routes: M66,M74,M82,M84.

### Prerequisites and earlier retrieval
Retrieve Day 5 scale/unit analysis, Day 9 evaluation uncertainty and Day 20 backpressure. Run `P2-M68-R` before opening its feedback.

### First principles and worked reconstruction

**Theory.** Stable API không trả hai schemas ngẫu nhiên; async creation thường trả job resource và polling/event stream. Streaming phải chọn transport, chunk boundary và backpressure policy; first-output latency phải đo từ request tới client-consumable byte, stratified theo payload/path. Cache key bao gồm normalized semantic input + model/voice/config version. Robust media fingerprints chịu encode/trim; LSH giảm candidate pairs từ all-pairs rồi graph/union-find clusters verified matches. Retrieval cần structure-aware chunks, BM25 cho exact terms, vectors cho semantics, reranker cho final order và citations bound tới source spans. Storage/egress/token estimates phải giữ units, growth và consumption multiplicity; cost levers phải tránh double-count savings.

**Example mới.** Knowledge search eval tạo queries từ held-out document sections rồi kiểm tra recall, answer support và citation precision.

**Worked reconstruction.** Async `POST /jobs` always returns `{job_id,status_url,event_url}` with 202; completion never swaps to an unrelated response shape. Streaming TTFA is request-to-client-consumable-byte and includes queue/admission. A semantic cache key hashes normalized input plus model, prompt, retrieval-index and policy versions. Retrieval ablation measures candidate recall before reranking and citation-span precision after generation; a higher answer score without grounded spans is not a win.

#### Reconstruction checkpoints for serving and evidence

- **Streaming pipeline (M66).** Admission → model/audio generation → semantic chunker → transport buffer → client acknowledgment needs bounded buffers and cancellation propagation. Text tokens are not always safe speech chunks; punctuation/prosody and codec frame boundaries matter. TTFA starts at request and ends at a client-decodable unit, not server token creation.
- **Semantic cache identity (M74).** Hash normalized semantic input together with tenant/data scope, model, prompt, voice/config, retrieval index and policy versions. Omitting any behavior-changing field returns stale or cross-tenant results; over-normalization can merge distinct intent. Measure hit rate and verify quality/invalidation during migration.
- **Stable API contract (M82).** `POST /jobs` returns the same job resource contract whether work finishes quickly or asynchronously; state evolves through polling/events. Define idempotency, error schema, cancellation and compatibility. Returning a final object sometimes and job handle otherwise forces timing-dependent clients and is not stable.
- **Grounded retrieval (M84).** Structure-aware chunks retain headings/tables; BM25 recovers exact identifiers, vectors semantic paraphrase and reranker final relevance. Evaluate candidate recall, reranked precision, answer support and citation-span precision separately. A fluent answer or high retrieval score without entailed source span fails grounding.

### Independent practice

- **Drill A:** Thiết kế LSH candidate→verify→cluster pipeline và complexity.
- **Drill B:** Ablate BM25/vector/reranker và định nghĩa metrics.
- **Checkpoint:** API status, cache version, retrieval evidence và units.

Complete `P3-M66`, `P3-M74`, `P3-M82`, `P3-M84` and delayed `P2-M68-R`.

### Material transfer and advanced variant
Transfer from document QA to streaming speech with prosody chunk boundaries, tenant cache isolation, index migration and stale citations. Recalculate cost/latency rather than reusing the earlier design.

### Evaluator, feedback and retrieval
Rubrics require transport/backpressure, version-complete cache identity, one stable API state machine and retrieval ablation with grounded citations. Retry changes payload path/index version. Retrieval Days 25 and 28.

### Done and evidence
Four routed results, API schema, stream trace, cache contract and retrieval ablation in `day-23/serving-retrieval.md`.

## Ngày 24 — Security và verified actions

### Outcome and learning tree
Place trust/credential boundaries and make irreversible or ambiguous actions safe to authorize, verify and reconcile. Routes: M80,M95,M96,P5,P14.

### Prerequisites and earlier retrieval
Retrieve Day 19 environment postconditions, Day 20 unknown outcomes and Day 22 durable state. Treat all documents/tool output as untrusted data.

### First principles and worked reconstruction

**Theory.** Scoped token vẫn là secret nếu untrusted code đọc được. Generated code chạy không credentials; trusted proxy lấy short-lived credential và enforce identity, data-flow, egress và action policy. Filesystem snapshot copy-on-write rollback local data, không undo email/payment/publish. GUI action phải verify postcondition; nếu timeout không biết click đã áp dụng, retry chỉ an toàn với idempotent action hoặc reconciliation.

**Example mới.** Untrusted invoice PDF không thể gửi customer rows ra ngoài vì sandbox không có vault/network path.

**Worked reconstruction.** Generated code receives opaque file handles, no credential and no unrestricted egress. A trusted proxy binds tenant, allowed destination, data classification and operation ID before minting short-lived credentials. Before `submit order`, persist intent and expected postcondition; after timeout query order history by operation ID. If lookup is inconclusive, enter `UNKNOWN/REVIEW`, never auto-click again. A copy-on-write filesystem snapshot restores local bytes but cannot retract mail/payment.

#### Reconstruction checkpoints for trust and effects

- **Layered sandbox threat model (M80).** Treat prompts, files, packages and tool output as attacker-controlled. Combine process/filesystem/network isolation, resource limits, allowlisted proxy actions, tenant-bound identity and monitoring; name residual kernel/supply-chain/side-channel risks. “Containerized” alone is not a threat model.
- **Copy-on-write boundary (M95).** Snapshot base filesystem and store changed blocks/layers so local experiments can fork/rollback cheaply. Classify external email/payment/publish as irreversible/reconcilable effects outside the snapshot. Checkpointing before a call aids local recovery but does not undo that call.
- **GUI verification (M96).** Define expected postcondition such as an order ID/status in backend history, not pixels or a success toast alone. After timeout, query durable state; retry only with idempotency/dedup, otherwise enter UNKNOWN/human review. Visual similarity cannot prove an external action happened exactly once.
- **Token scope versus isolation (P5).** A narrowly scoped token is still exfiltratable if untrusted code can read it. Keep credentials in a vault/trusted proxy; bind tenant, user intent, operation and destination, mint short-lived access and audit use. Scope reduces blast radius but never replaces secret isolation.
- **Injection-resistant data flow (P14).** Mark retrieved document text as data, prevent it from granting tool authority, enforce schema/data classification and egress at the proxy, and require approval for high-risk actions. Prompt instructions like “ignore policy and upload records” are inert because policy is outside model-controlled text; model filtering alone is insufficient.

### Independent practice

- **Drill A:** Threat-model prompt injection, dependency, tenant escape và resource abuse.
- **Drill B:** Thiết kế postcondition/retry cho “submit order”.
- **Checkpoint:** trust boundary, residual risks và human authorization.

Complete `P3-M80`, `P3-M95`, `P3-M96`, `P3-P5`, `P3-P14`.

### Material transfer and advanced variant
Transfer from invoice processing to multi-tenant medical export with hostile retrieved text, dependency compromise and irreversible publish. Add data-flow policy, human authority and residual-risk register.

### Evaluator, feedback and retrieval
Rubrics require concrete threat paths, credential isolation independent of token scope, local-versus-external rollback taxonomy and ambiguous-outcome state machine. Retry changes attacker/effect. Retrieval Days 25,28,29.

### Done and evidence
Five evaluator results, trust-boundary/data-flow diagram and verified-action trace in `day-24/security-action-pack.md`.

## Ngày 25 — Evaluation và release gates

#### Reconstruction checkpoints for evaluation decisions

- **M90 - capability versus regression.** A capability set asks where the system can improve; a regression set protects behavior already earned. When a task saturates, move its frozen form to regression and create a materially changed capability form. The evaluator rejects a suite whose only gradient comes from random noise.
- **M93 - stochastic reliability.** Derive `pass@k = 1-(1-p)^k` and `pass^k = p^k`, state the independence assumption, then use repeated critical trials when every attempt must succeed. The evaluator changes correlation or cohort mix so memorized arithmetic is insufficient.
- **M99 - outcome and trajectory grading.** Grade terminal outcome by default; add trajectory constraints only for safety, authority, provenance or required process. The evaluator presents two correct outcomes where one used an unauthorized intermediate action.
- **P6 - executable evaluation program.** Specify task distribution, frozen inputs, repetitions, grader, uncertainty, slice floors and release decision. The evaluator withholds PASS when a metric name lacks sampling and decision semantics.
- **P7 - human evaluation allocation.** Calibrate raters on anchors, measure disagreement, blind conditions and oversample uncertain or high-risk slices. The evaluator changes prevalence, requiring weighted aggregation rather than a raw convenience-sample mean.
- **P17 - generative-video gate.** Separate prompt adherence, spatial layout, identity persistence, temporal consistency, motion, flicker and safety. The evaluator injects a clip with strong frames but broken temporal identity; one aesthetic average cannot pass it.

### Outcome and learning tree
Build an evaluation program that measures capability, regressions, human quality and stochastic reliability without being gamed. Routes: M90,M93,M99,P6,P7,P17.

### Prerequisites and earlier retrieval
Retrieve Day 9 uncertainty/pass semantics, Day 19 reward gaming, Day 23 grounded evidence and Day 24 safety postconditions.

### First principles and worked reconstruction

**Theory.** Regression suite bảo vệ solved behavior; capability suite phải còn gradient và được retire/promote khi saturated. Grade end state trừ khi trajectory step là safety/control. pass@k đo “ít nhất một”; pass^k đo repeated reliability. Graders cần calibration và transcript sampling. Video gate tách spatial fidelity, prompt adherence, identity, temporal consistency, motion smoothness, flicker và safety; human budget tập trung uncertainty/disagreement. Release rule cần critical floors, non-regression và escape hatch.

**Example mới.** Canary degradation dùng repeated paired runs và environment attribution, không một failure.

**Worked reconstruction.** If per-run success is `.9`, three-success reliability is `.9^3=.729`, distinct from pass@3 `1-.1^3=.999`. A release gate therefore requires repeated critical-task floors, regression non-inferiority and calibrated human review—not one lucky success. A 100-task suite at 99% saturation is retired/promoted into regression while fresh adversarial capability tasks restore gradient; trajectory constraints are graded only where ordering/authority is part of correctness.

### Independent practice

- **Drill A:** Thiết kế capability/regression matrices và release rule.
- **Drill B:** Chọn automated vs human metrics và stratified sample.
- **Checkpoint:** average improvement không được che critical regression.

Complete `P3-M90`, `P3-M93`, `P3-M99`, `P3-P6`, `P3-P7`, `P3-P17`.

### Material transfer and advanced variant
Transfer from browser agents to generative video: separate spatial, temporal, identity, prompt and safety axes; allocate human samples by uncertainty/cohort. Add grader disagreement, suite leakage and noisy canary attribution.

### Evaluator, feedback and retrieval
Rubrics require executable task/grade/repetition definitions, anti-saturation policy, outcome/control boundary, human calibration and rollback. Retry changes stochasticity/cohort/failure axis. Retrieval Day 28/29.

### Done and evidence
Six routed results and a release scorecard with critical floors, uncertainty, sampling and escape hatch in `day-25/eval-release.md`.

## Ngày 26 — Product decision quality

#### Reconstruction checkpoints for product evidence

- **M75 - falsifiable product hypothesis.** Write mechanism, target population, measurable outcome, time horizon and evidence that kills the claim. The evaluator changes the population and requires the learner to explain whether evidence transports.
- **M78 - SLI, SLO and error budget.** Derive an outcome-facing indicator, target window and permitted bad-event budget; connect burn rate to an explicit operational action. The evaluator rejects infrastructure uptime used as a substitute for the user outcome.
- **M94 - Goodhart resistance.** For each optimized proxy, name the gaming path and an independently moving counter-metric or audit sample. The evaluator introduces higher completion with higher reopen or harm rate.
- **M100 - quantified decision memo.** Compare options using ranges, assumptions, causal status, reversibility, expected value and strongest counterargument. The evaluator changes one uncertain input and checks whether the decision threshold, not just prose, updates.
- **P8 - speed versus control.** Permit fast merge only when change size, reversibility, tests, observability, rollback and blast radius jointly support it. The evaluator transfers the policy to an irreversible regulated change where the same heuristic must reverse.

### Outcome and learning tree
Turn product claims into reversible, evidence-ranked decisions with compatibility and metric-governance contracts. Routes: M75,M77,M78,M94,M100,P8.

### Prerequisites and earlier retrieval
Retrieve Day 8 experiments, Day 13 causal identification, Day 20 reversibility and Day 25 release evidence.

### First principles and worked reconstruction

**Theory.** Hypothesis tốt có mechanism và evidence có thể kill. SLI đo user outcome; SLO đặt target và error budget điều khiển investment. Goodhart xuất hiện khi proxy thành target, nên cần counter-metrics. Observational lift không phải causal lift. Decision memo định lượng assumptions và reversal condition. Merge nhanh chỉ hợp khi changes nhỏ/reversible, tests mạnh, observability/rollback nhanh và blast radius thấp; regulated/irreversible domains cần gates mạnh hơn.

**Example mới.** Chọn reliability vs feature bằng expected impact ranges và cheap experiment, không chỉ point estimate.

**Worked reconstruction.** Option A reduces failure from 4% to 2% over 50k weekly tasks; expected recovered successes are 1,000 before uncertainty/cost. Option B claims +5% activation from observational users but selection remains uncontrolled. Rank A higher until a cheap randomized/shadow test resolves B. Define user-outcome SLI, SLO and error-budget trigger; add counter-metrics so optimizing “completed tasks” cannot hide reopens or harm. Merge velocity is permitted only for small reversible changes with strong tests, observability and rollback.

### Independent practice

- **Drill A:** Xếp hạng năm retention hypotheses với kill evidence.
- **Drill B:** Viết memo ba options có strongest counterargument.
- **Checkpoint:** causal status, uncertainty và guardrail rõ.

### Phase 2 core chain — M77 model-version and deprecation policy

#### M77 — Model-version and deprecation policy

- **Mechanism.** Compatibility là behavior customer quan sát, không chỉ schema. Existing workflows pin exact model/version; new customers nhận reviewed default. Migration cần comparison report, opt-in/canary, rollback và deadline. Retention window đổi safety/quality benefit lấy serving, security và support cost.
- **Worked example.** `summarize-v2` tăng average quality nhưng regress legal citations. Pin regulated tenants ở `v1`; chỉ default new non-regulated tenants sang `v2`; cung cấp paired replay report, 30-day opt-in canary và one-click rollback. Giữ `v1` 180 ngày, cảnh báo ngày 0/60/120; chỉ forced-retire sớm khi security risk vượt exception process.
- **Independent exercise.** Viết version matrix và migration plan cho speech model mới đổi punctuation/timestamps; gồm owner, telemetry, notice, rollback và support cost.
- **Material transfer.** Old model có critical vulnerability nhưng new model regress accessibility cohort. Thiết kế forced-retirement exception, compensating control và appeal path; silent replacement vẫn không hợp lệ.
- **Misconception correction.** Average win hoặc workflow version pin không đủ thành customer policy; cần cohort regressions, communication, migration tooling và end-of-support semantics.
- **Changed retry.** Deprecate embedding model có vector dimension không tương thích; plan dual-write/reindex và rollback mà không giả định output substitutability.
- **Delayed retrieval.** `P2-M77-R` tại Ngày 29: policy defense dưới cost cap và regulatory notice constraint.

Complete `P3-M75`, `P2-M77`, `P3-M78`, `P3-M94`, `P3-M100`, `P3-P8`.

### Material transfer and advanced variant
Move to a regulated product with cohort regression, forced security retirement and irreversible customer migration. Re-rank hypotheses and define reversal conditions under cost caps.

### Evaluator, feedback and retrieval
Rubrics require kill evidence, outcome SLO/error-budget action, Goodhart counter-metrics, causal status and compatibility/notice/rollback. Retry changes evidence quality or reversibility. Retrieval Days 28–29.

### Done and evidence
Six route results plus quantified decision/deprecation memo in `day-26/product-decision.md`.

## Ngày 27 — Context, tool topology và lifecycle

#### Reconstruction checkpoints for context, tools and lifecycle

- **M85 - cache arithmetic.** Partition each call into stable reusable prefix and uncached suffix, account for the first fill, and invalidate reuse when any early token changes. The evaluator moves a timestamp before the stable prefix and requires recomputation.
- **P1 - agent control loop.** Define observe -> decide -> act -> verify -> stop or escalate, including bounded iterations and terminal evidence. The evaluator injects an unchanged observation so an unbounded retry loop fails.
- **P2 - code-mode economics.** Separate model-visible tokens, sandbox execution, tool calls and operational overhead; code mode helps deterministic loops or joins but does not make execution free. The evaluator changes loop size and sandbox startup cost.
- **P3 - discovery versus masking.** Discovery decides which schemas enter context; masking preserves a stable loaded interface during a run. The evaluator loads every schema before masking and expects the learner to identify why schema-token cost remains.
- **P4 - direct tool versus sandbox.** Choose direct approval-gated tools for narrow or high-risk effects and sandbox code for compositional deterministic work; compare isolation, observability and latency. The evaluator changes an action from read-only aggregation to irreversible publish.
- **P9 - session versus context.** Session is durable history and artifacts; context is a bounded, versioned projection for one model call. The evaluator removes an item from context and checks that history is not deleted.
- **P13 - durable Goal contract.** Include objective, authority, constraints, budget, verification and terminal or blocked conditions; claim concurrent wake ownership with compare-and-set. The evaluator supplies two wakes and checks single-owner transition evidence.
- **P16 - total operational cost.** Sum model input, output and cache, tool or provider fees, sandbox compute, storage, network, retries, human review and failure recovery. The evaluator changes retry rate and review prevalence so a token-only estimate becomes invalid.

### Outcome and learning tree
Design the complete context/tool/session/Goal topology and quantify where tokens, cache, sandbox and operational costs actually arise. Routes: M85,P1,P2,P3,P4,P9,P13,P16.

### Prerequisites and earlier retrieval
Retrieve Day 5 total-cost accounting, Day 22 durable ownership, Day 24 authority boundaries and Day 25 evaluator evidence.

### First principles and worked reconstruction

**Theory.** Code mode giảm model-visible intermediate execution tokens; schema cost chỉ giảm nếu API surface được tìm/load có chọn lọc. Tool masking giữ stable interface/object positions trong run trong khi discovery quyết định detail nào vào attention. Stable append-only prefix tối đa KV reuse; timestamp sớm phá cache. Direct tools phù hợp simple/high-risk controls; code sandbox phù hợp deterministic loops/joins nhưng thêm isolation/ops cost.

Durable session giữ events/artifacts; context policy chọn bounded representation cho một call. Goal contract phải chứa outcome, verification, constraints, authority, budget và stop condition. External effect cần durable intent, operation ID, result/reconciliation; concurrent wake cần compare-and-set ownership.

**Example mới.** 600 operations được expose qua search/read API plus code executor, còn `publish` là direct approval-gated tool.

**Worked reconstruction.** A session stores append-only events/artifacts; a versioned context policy selects a bounded call view and never overwrites history. Tool discovery loads only needed schemas; masking alone preserves positions but does not erase schema cost already loaded. Stable prefix cost across 12 turns is computed as one uncached prefix plus incremental suffixes, while an early timestamp invalidates reuse. A Goal has authority, budget, evidence and terminal condition; concurrent wakes claim via compare-and-set and external effects use durable intent/result/reconciliation.

### Independent practice

- **Drill A:** Tính cached/uncached cost qua 12 turns với prefix mới.
- **Drill B:** Thiết kế topology, rồi trace crash trước/trong/sau external call và hai concurrent wake calls.
- **Checkpoint:** tách cost layers và chỉ đúng durable authority/source of truth.

Complete `P3-M85`, `P3-P1`, `P3-P2`, `P3-P3`, `P3-P4`, `P3-P9`, `P3-P13`, `P3-P16`.

### Material transfer and advanced variant
Transfer from 600 operations to multi-tenant regulated tooling with unstable schemas, cache-breaking policy updates, two concurrent wake events and an irreversible publish. Quantify new cost and authority boundaries.

### Evaluator, feedback and retrieval
Rubrics require control-loop termination, distinct execution/schema costs, transcript/recitation/session/context separation, cache arithmetic, tool topology and bounded Goal lifecycle. Retry changes topology/cache/concurrency. Retrieval Day 28/29.

### Done and evidence
Eight route results, topology diagram, quantitative cost sheet and lifecycle trace in `day-27/agent-lifecycle.md`; designed timebox 240 minutes, overflow `PARTIAL`.

## Ngày 28 — Review 4

### Outcome and learning tree
Measure retained systems/agent transfer and close prerequisites before synthesis; no new capability.

### Prerequisites and earlier retrieval

Không học topic mới. Làm assessment closed-book trước; sau khi lưu trạng thái kết thúc mới mở lesson/tài nguyên để phân loại lỗi và chọn recovery drill.

### First principles and worked reconstruction
After lock, reconstruct one architecture failure by authority/state owner → interface → failure timeline → observable postcondition → repair. Do not edit the original response.

### Independent practice
Run locked Review 4 across workflow, serving, security, evaluation, product and lifecycle; include an oral defense with competing constraints.

### Material transfer and advanced variant
Use an unfamiliar domain and inject stale state, hostile data, cache invalidation and a critical regression. Changed retry must alter at least two constraint dimensions.

### Evaluator, feedback and retrieval
Score total/domain floors and route every miss to Day 29 prerequisite or recovery. Recovery plan never changes the locked status.

### Done and evidence
Locked attempt, rubric, oral defense and correction ledger in `review-04.md`; PASS requires ≥70%, every floor and mandatory artifact.

## Ngày 29 — Managed-agent synthesis

#### Reconstruction checkpoint for whole-system synthesis

- **P18 - managed-agent architecture.** Start with requirements, SLOs and authority; assign exactly one durable owner for history, execution, artifacts, credentials, approvals and evaluation. Annotate every interface with schema, tenant identity, idempotency and failure semantics; trace crash-before, crash-during and crash-after an external effect, hostile input and cross-tenant access. Quantify a bottleneck, defend three design-created trade-offs and revise the design when one constraint changes. The evaluator fails diagrams that name components without state ownership, postconditions or reconciliation.

### Outcome and learning tree
Synthesize all prior mechanisms into one defensible managed-agent architecture under unfamiliar constraints. Route: P18; all other IDs are retrieved as dependencies, not re-taught.

### Prerequisites and earlier retrieval
Review 4 floors must be met or explicitly recovered. Run `P2-M77-R` closed-book. Use prior artifacts, not benchmark prompts.

### First principles and worked reconstruction

**Theory.** Architecture tốt là tập contracts: session owns history; workflow engine owns durable execution; sandbox owns disposable compute; proxy/vault owns credentials; approval service owns publish authority; eval plane owns release evidence. Context/tool policies là versioned strategies, không overwrite history. Mọi failure chuyển thành retry-safe, reconcilable, blocked hoặc escalated state.

**Example mới.** Multi-tenant media agent pin tenant identity xuyên proxy, workspace và audit events; sandbox không có cross-tenant route.

**Worked reconstruction.** Start from requirements/SLO/authority, then assign durable owners: session/history, workflow/run state, workspace/artifacts, vault/proxy credentials, approval authority and eval evidence. Each arrow receives schema, identity, idempotency and failure semantics. Trace happy path plus crash-before/during/after external effect, hostile document and tenant-isolation attempt; quantify one bottleneck and name three design-created trade-offs.

### Independent practice

- **Drill A:** Vẽ toàn hệ thống và annotate mọi arrow.
- **Drill B:** Chọn ba trade-offs lớn nhất do chính thiết kế tạo ra.
- **Checkpoint:** đáp án bao phủ state, interfaces, failures, security, goals, eval và entropy control.

Complete `P3-P18` as an architecture pack and oral defense; complete delayed `P2-M77-R` separately.

### Material transfer and advanced variant
Evaluator changes domain, scale, regulation, latency, budget and irreversible-effect mix. Defend the design against one removal request (“remove workflow engine/sandbox/human gate”) and revise only from explicit evidence.

### Evaluator, feedback and retrieval
P18 rubric requires full topology, contracts, state ownership, context/tools, security, failures, evaluation, Goal lifecycle, quantitative bottleneck and trade-offs. Day 30 may proceed only with missing prerequisites recorded, never hidden.

### Done and evidence
Architecture pack, threat/crash traces, quantitative model, defense notes and P18 result in `capstone-day-29.md`; missing mandatory dimension is `PARTIAL`.

## Ngày 30 — Verification, không học thêm

### Outcome and learning tree
Produce a comparable, sealed proof of transfer across foundations, statistics/modelling, RL, systems/product and agent architecture. No new concept is taught and public practice forms cannot establish “unseen” performance.

### Prerequisites and earlier retrieval
Day 29 synthesis exists; Review 4 failures are either recovered or disclosed. Before seeing any prompt, record evaluator-issued packet ID and SHA-256 outside the repository boundary; declare prior exposure and lock the timebox.

### First principles and worked reconstruction
No worked solution is shown before or during the assessment. After the original response and scores are immutable, reconstruct exactly one selected error using requirement → assumptions → mechanism/derivation → verification → boundary. This post-assessment reconstruction is feedback evidence, never part of the original score.

### Independent practice
Complete the 210-minute sealed parallel form closed-book. The evaluator samples all five domains with similar, difficult and advanced problems that change data, assumptions, failure timing and domain—not the 100 benchmark prompts. Also defend three randomly selected design decisions orally.

### Material transfer and advanced variant
The final packet must contain materially unfamiliar representations and at least one coupled failure per advanced design task. Exposure to a public form invalidates only the “unseen” claim for that form; it does not authorize substituting another public rehearsal.

### Evaluator, feedback and retrieval
Score /100 with five /20 domain scores using `PHASE1_ASSESSMENT_CONTRACT.md`. PASS requires total ≥80, every domain ≥14/20 and no mandatory hole in the 118-capability evidence ledger. Preserve `PARTIAL/FAIL`; tag errors and schedule changed retries after closure without altering the Day 30 result.

### Done and evidence
Evidence is `final-day-30.md`: packet ID/hash, exposure declaration, start/end, immutable response reference, per-domain rubric, capability-ledger audit, oral-defense result, error taxonomy and final verdict. Sealed prompt/key are never stored in lesson, payload or repository.

Làm `Final Mock` trong `ASSESSMENTS.md` trước khi mở `ASSESSMENT_KEYS.md`. Không sửa câu trả lời sau khi xem key. Phân loại lỗi theo concept, setup, derivation, arithmetic, architecture và communication; kết quả dưới finish line là evidence để ghi `PARTIAL/FAIL`, không phải lý do hạ chuẩn.
