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

**Theory.** Một đáp án tốt bắt đầu từ loại claim: proof cần chuỗi suy luận; quantitative cần assumptions–formula–units–sanity; design cần invariants–state–interfaces–failures–verification. Component list hoặc numeric result không có justification chỉ là assertion.

**Example mới.** Với yêu cầu “email không gửi hai lần”, invariant là mỗi logical send có một operation ID và terminal outcome duy nhất; queue/database chỉ là phương tiện giữ invariant.

**Boundary.** Nói nhiều không đồng nghĩa đủ; mỗi câu phải ưu tiên constraint có điểm.

- **Drill A:** Viết outline 8 dòng cho hệ thống cấp coupon không cấp trùng.
- **Drill B:** Phản biện một đáp án chỉ nói “dùng Redis, Kafka, Kubernetes”.
- **Checkpoint:** có assumption, invariant, owner, failure và evidence.

## Ngày 2 — Proof toolkit

**Theory.** Direct proof biến assumptions thành claim. Contradiction giả sử phủ định claim rồi tạo điều bất khả. Contraposition chứng minh `not B → not A` thay cho `A → B`. Jensen chỉ dùng khi biết convex/concave và miền hợp lệ; strictness quyết định equality case.

**Example mới.** Để chứng minh tổng của một số hữu tỉ và một số vô tỉ là vô tỉ, giả sử tổng hữu tỉ rồi trừ số hữu tỉ để tạo mâu thuẫn.

**Boundary.** Một ví dụ không phải proof; induction phải có base, hypothesis và step.

- **Drill A:** Chứng minh bình phương của số lẻ có dạng `8k+1`.
- **Drill B:** Tạo counterexample khi bỏ điều kiện positivity khỏi một inequality.
- **Checkpoint:** từng theorem được dùng có conditions và equality/boundary case.

## Ngày 3 — Linear algebra geometry

**Theory.** Rank là dimension của image; nullity là dimension bị triệt tiêu. Projection thỏa `A²=A`, nên eigenvalues chỉ có thể là 0 hoặc 1. Matrix đối xứng trực giao-diagonalizable; singular values là căn eigenvalues của `AᵀA`. Outer product khác zero có image một chiều. L1 ball có corners nên affine constraint thường chạm tại sparse point; L2 ball trơn nên không ưu tiên coordinate zero.

**Example mới.** Ma trận chiếu lên đường `span(1,2)` có một eigenvalue 1 theo đường đó và một eigenvalue 0 theo trực giao.

- **Drill A:** Tìm rank, null space và spectrum của projection lên một plane trong R3.
- **Drill B:** Vẽ constraint line chạm L1/L2 balls và giải thích feature-selection consequence.
- **Checkpoint:** nối được algebraic fact, geometry và use case.

## Ngày 4 — Calculus, limits và convexity

**Theory.** Tổng `1/n Σf(k/n)` hội tụ về tích phân khi `f` Riemann-integrable. Với squared loss, chain rule cho gradient và Hessian; positive definiteness quyết định strict convexity/unique minimizer. Log-sum-exp có gradient softmax và Hessian dạng covariance nên PSD. Trừ `max(x)` trước exponentiation giữ output nhưng tránh overflow.

**Example mới.** Derive gradient của weighted least squares `1/2 ||W(Ax-b)||²`.

- **Drill A:** Đổi interval của một Riemann sum rồi dựng integral đúng.
- **Drill B:** Chứng minh log-sum-exp của hai biến convex bằng Hessian.
- **Checkpoint:** có dimensions, chain-rule step và uniqueness condition.

## Ngày 5 — Counting, asymptotics và estimation

**Theory.** Binary comparison tree sâu ít nhất `log2(number of outcomes)`. Elementary factorial bounds cho `log(n!)=Theta(n log n)`. All-pairs similarity là quadratic; robust fingerprint + LSH hash buckets giảm candidate generation trước exact verification/clustering, đổi compute lấy false-positive/false-negative trade-off. Estimation hệ thống phải viết throughput × size × replication/consumption, giữ units xuyên suốt. Cost break-even so tổng chi phí, không chỉ model tokens; sandbox/operations/security overhead vẫn phải tính.

**Example mới.** Ước lượng egress cho 200k podcast clips/ngày bằng seconds × bitrate, rồi nhân plays và đổi bit→byte.

- **Drill A:** Lower-bound comparisons rồi so naive all-pairs với LSH candidate pipeline cho 1 triệu items.
- **Drill B:** Estimate monthly storage và token-vs-sandbox break-even với inputs mới.
- **Checkpoint:** bound trước, formula tổng quát, units và sensitivity.

## Ngày 6 — Probability và estimation foundations

**Phân tầng trong 120 phút.** Core hôm nay chỉ gồm conditioning/Bayes, indicators, covariance-vs-independence và một MLE có bias/regularity check. Coupon collector, birthday collision, length bias, order statistics, sufficiency/completeness, Fisher/CRLB và LRT được đọc như recognition map; chúng chỉ trở thành independent retrieval trong Review 1 và các ngày 8–10. Không cộng thêm bài ngoài timebox.

**Theory.** Conditioning chia sample space theo thông tin. Bayes: posterior odds = prior odds × likelihood ratio. Coupon collector cộng waiting times hình học. Birthday collision dùng approximation từ số cặp. Indicator variables tuyến tính hóa expectation; zero covariance không suy ra independence. Sampling tại random time tạo length bias vì interval dài dễ bị gặp hơn.

Estimation nối data với parameter: MLE tối đa log-likelihood; Fisher information đo curvature; CRLB chỉ áp dưới conditions; order statistics có sampling distribution riêng; sufficiency/completeness hỗ trợ Rao–Blackwell và UMVU; likelihood-ratio inference cần tách exact claim khỏi Wilks asymptotic claim.

**Example mới.** Fraud rate 0.2% với detector tốt vẫn có thể cho precision thấp nếu false-positive rate lớn so với base rate.

**Worked quantitative reasoning.** Với 100.000 giao dịch, prevalence 0,2% cho 200 fraud. Nếu sensitivity 90% thì có 180 true positives; false-positive rate 1% trên 99.800 giao dịch tạo khoảng 998 false positives. Precision là `180/(180+998) ≈ 15,3%`. Units đều là giao dịch; kết quả nằm trong `[0,1]` và thấp là hợp lý vì false-positive base lớn hơn true-fraud base. Assumption nhạy nhất là false-positive rate.

- **Drill A:** Tính posterior với prevalence và rates mới.
- **Drill B:** Derive một MLE mới, kiểm tra bias/regularity và sufficient statistic.
- **Checkpoint:** ghi denominator, independence assumptions và phân biệt estimator/estimate/distribution.

## Ngày 7 — Review 1

Không học topic mới. Làm assessment closed-book trước; sau khi lưu trạng thái kết thúc mới mở lesson/tài nguyên để phân loại lỗi và chọn recovery drill.

Retrieval bắt buộc sau assessment: chọn một trong coupon/birthday/length bias và một trong order statistics/sufficiency/Fisher–CRLB/LRT. Mỗi retrieval phải dùng worked quantitative template, có assumptions, derivation, units hoặc scale check và error repair; không cần làm toàn bộ enrichment trong cùng review.

## Ngày 8 — Inference và experiments

**Theory.** p-value là xác suất dữ liệu ít nhất cực đoan dưới null, không phải xác suất null đúng. Power phụ thuộc effect, noise, alpha và n. Paired comparison dùng covariance để giảm variance. Bonferroni kiểm soát FWER; BH kiểm soát expected FDR. Beta prior cộng successes/failures vào posterior; posterior comparison có thể tính tích phân hoặc Monte Carlo.

**Example mới.** So hai search models trên cùng queries; pairing dùng within-query difference thay vì hai sample độc lập.

- **Drill A:** Derive n cho two-proportion lift với baseline mới.
- **Drill B:** Viết hai Beta posteriors và mô tả hai cách tính xác suất arm B tốt hơn.
- **Checkpoint:** effect là absolute hay relative; one/two-sided; paired quantity rõ.

## Ngày 9 — Bounds, bootstrap và noisy evaluation

**Theory.** Chebyshev chỉ cần finite variance nhưng lỏng; Hoeffding cần independent bounded variables và cho exponential tail. Bootstrap mô phỏng empirical sampling distribution nhưng hỏng với dependence chưa block, extreme tails nhỏ mẫu hoặc non-smooth boundary. pass@k đo ít nhất một success; pass^k đo mọi trial cùng success và phù hợp reliability lặp lại. Estimator pass@k unbiased đếm xác suất chọn toàn failures không replacement. Flaky validators biến correct work thành false negatives và tạo over-editing. Noisy canary cần repeated/paired evidence và attribution strata trước khi gọi regression.

**Example mới.** Canary success 95% không thể bị coi regression từ một lần fail; cần repeated binomial evidence hoặc control chart.

- **Drill A:** Chọn bound cho latency unbounded và binary pass data.
- **Drill B:** Thiết kế retry/quarantine policy phân biệt flake với regression.
- **Checkpoint:** method choice đi kèm assumptions và failure case.

## Ngày 10 — Statistical judgment

**Theory.** Simpson reversal xuất hiện khi group mix khác và group membership liên quan outcome. Selection và length bias xuất hiện khi xác suất được quan sát phụ thuộc chính duration/outcome; sampling một running job ưu tiên jobs dài. Metric incident phải kiểm tra definition, event emission, ingestion, dedup, timezone/window, population eligibility và late data trước causal stories. Khi chưa biết nguyên nhân, báo effect đã quan sát, checks đã chạy, uncertainty và next update.

**Example mới.** Cả mobile và desktop conversion tăng nhưng overall giảm vì traffic chuyển mạnh sang mobile có baseline thấp.

- **Drill A:** Tạo bảng số mới gây reversal.
- **Drill B:** Lập evidence-to-confirm/kill cho bốn measurement artifacts.
- **Checkpoint:** không dùng correlation để kết luận nguyên nhân.

## Ngày 11 — Predictive models và decision metrics

**Theory.** Squared error = noise + estimator variance + squared bias. Discrimination xếp hạng; calibration khớp predicted probability với empirical frequency. PR metrics phản ánh rare-positive utility tốt hơn ROC. Count GLM phải chọn distribution/link theo support; log link giữ mean dương, identity dễ diễn giải additive nhưng có thể dự đoán âm. Overdispersion gợi ý negative binomial/quasi-Poisson hoặc latent heterogeneity.

**Example mới.** Hai risk models cùng AUC nhưng model miscalibrated làm overspend intervention.

- **Drill A:** Chọn threshold/metric từ cost matrix.
- **Drill B:** Diễn giải coefficient dưới log link và chẩn đoán overdispersion.
- **Checkpoint:** metric nối trực tiếp với decision.

## Ngày 12 — Time, hidden state và censoring

**Theory.** AR(1) stationary khi shock effects decay; unit root làm variance không ổn định và naive growth misleading. HMM forward recursion gộp paths theo current hidden state, giảm exponential xuống polynomial; scaling/log-space tránh underflow. Right censoring vẫn cung cấp survival information; Kaplan–Meier nhân conditional survival factors, hazard là instantaneous event rate conditional on survival.

**Example mới.** Subscription cohort còn active không được bỏ khỏi lifetime analysis.

- **Drill A:** Derive AR variance/ACF với parameter mới.
- **Drill B:** Hand-trace HMM hai state ba observations và rescale.
- **Checkpoint:** censoring assumption và state semantics được nêu.

## Ngày 13 — Causality, leakage, ranking và preferences

**Phân tầng trong 120 phút.** Core là prediction-vs-causality, prediction-time leakage và một DAG/estimand. Uplift, propensity/IV, cosine concentration, cold start và Bradley–Terry là recognition map; Review 2 chọn đúng một causal extension và một ranking extension để retrieve. Không yêu cầu fit tất cả mô hình trong ngày này.

**Theory.** Prediction hỏi `Y`; causality hỏi contrast giữa potential outcomes. Observed association lẫn selection/confounding. Propensity methods cần conditional ignorability/positivity; IV cần relevance, exclusion và independence. Uplift dự đoán treatment effect, không phải churn risk, và phân nhóm persuadable, sure thing, lost cause, sleeping dog. Feature chỉ hợp lệ nếu tồn tại ở prediction time. Repeated tuning trên test set biến test thành training signal.

Ranking cần assumptions riêng: random-vector cosine phụ thuộc dimension; cold start cần prior/context và exploration; Bradley–Terry dùng logistic difference của latent qualities và cần identifiability constraint; pairwise preference có thể vi phạm transitivity/context independence.

**Example mới.** Retry count sau inference không thể dự đoán failure tại submission.

**Worked statistical/design reasoning.** Requirement là dự đoán failure tại thời điểm submit. `retry_count_after_inference` chưa tồn tại tại prediction time, nên vi phạm temporal availability dù tương quan cao. Flow hợp lệ chỉ dùng feature có timestamp không muộn hơn submit; offline split phải mô phỏng boundary đó. Failure mode là training–serving skew; monitor bằng feature-availability audit và online missing-rate. Bỏ feature có thể giảm AUC nhưng đổi lại estimate deployable và tránh leakage.

- **Drill A:** Audit 10 features bằng timestamp boundary.
- **Drill B:** Vẽ causal DAG, rồi viết Bradley–Terry likelihood cho ba items và đặt anchor.
- **Checkpoint:** estimand, identification và ranking identifiability rõ.

## Ngày 14 — Review 2

Không học topic mới. Làm assessment closed-book trước; sau khi lưu trạng thái kết thúc mới mở lesson/tài nguyên để phân loại lỗi và chọn recovery drill.

Retrieval bắt buộc sau assessment: một task causal trong propensity/IV/uplift và một task ranking trong cosine/cold-start/Bradley–Terry. Artifact phải nêu estimand hoặc identifiability constraint, một failure assumption và error repair; hai task thay cho enrichment khác nếu chạm timebox.

## Ngày 15 — MDP và Bellman

**Theory.** MDP gồm states, actions, transition, reward, discount/horizon. Markov giả định state tóm đủ lịch sử liên quan tương lai; screenshot thường không đủ nên computer-use gần POMDP. Bellman operator là gamma-contraction vì max và expectation không khuếch đại sup difference quá gamma; do đó fixed point duy nhất và value iteration hội tụ. Effective horizon xấp xỉ `1/(1-gamma)`.

**Example mới.** Solve support-agent MDP với states waiting/resolving/escalated.

- **Drill A:** Dựng Bellman equations cho MDP ba state.
- **Drill B:** Từ geometric error bound derive iteration count.
- **Checkpoint:** reward timing và terminal semantics rõ.

## Ngày 16 — TD control và stability

**Theory.** Q-learning target dùng greedy next action nên off-policy; SARSA dùng action thực sự lấy dưới behavior policy nên on-policy. Deadly triad là function approximation + bootstrapping + off-policy, có thể tạo self-amplifying extrapolation. Potential shaping `gamma Phi(s')-Phi(s)` telescopes nên giữ policy ordering dưới đúng boundary.

**Example mới.** Live automation gần destructive action ưu tiên behavior-aware learning thay vì giả định greedy future.

- **Drill A:** Hand-trace Q-learning và SARSA trên cùng transition sequence.
- **Drill B:** Chứng minh shaping return chỉ đổi bởi endpoint terms.
- **Checkpoint:** phân biệt algorithm target với exploration policy.

## Ngày 17 — Policy gradients

**Theory.** Log-derivative biến gradient của trajectory probability thành sum `grad log pi`; nhân return cho REINFORCE. Baseline phụ thuộc state nhưng không action có expectation contribution zero. Advantage giảm variance; GAE trộn multi-step TD residuals bằng lambda. PPO ratio so new/old action probability và clipping hạn chế harmful large policy moves. Entropy khuyến khích spread nhưng quá cao phá reliability.

**Example mới.** Với negative advantage, tăng probability của action xấu phải bị giới hạn đúng phía objective.

- **Drill A:** Derive baseline-unbiasedness bằng sum over actions.
- **Drill B:** So lambda 0/1 và phân tích bias–variance.
- **Checkpoint:** mọi symbol/objective direction được định nghĩa.

## Ngày 18 — Bandits, OPE và offline RL

**Theory.** UCB dùng confidence radius để optimistic selection và thu hẹp khi pulls tăng. Thompson sampling sample posterior rồi hành động như sample đó đúng. Bandit hợp khi action không ảnh hưởng future state; nếu có delayed state consequences cần RL. Importance sampling đổi measure bằng likelihood ratios nhưng variance nhân theo horizon. Offline Q-learning chọn unsupported actions; conservative methods hạ value ngoài data support.

**Example mới.** Homepage card là bandit; multi-step onboarding policy là RL.

- **Drill A:** Derive một UCB radius từ Hoeffding với confidence mới.
- **Drill B:** Phân tích support mismatch cho logged policy gần deterministic.
- **Checkpoint:** regret/evaluation claim gắn với assumptions.

## Ngày 19 — RLHF và reward integrity

**Theory.** Reward model học pairwise preferences qua logistic loss. Policy optimization tối đa predicted reward nhưng bị KL penalty kéo về reference distribution. KL quá yếu cho phép exploit reward-model blind spots; quá mạnh ngăn improvement. Reward spec cần outcome, constraints và counter-metrics. Computer-use observation thường partial; evaluation phải dùng environment state/postconditions, không model self-report.

**Example mới.** Reward “tickets closed” có thể khuyến khích đóng nhầm; thêm verified resolution và reopen-rate guardrail.

- **Drill A:** Viết pairwise loss và KL-regularized objective.
- **Drill B:** Red-team ba proxy rewards và thiết kế detection.
- **Checkpoint:** proxy, true goal và residual risk tách biệt.

## Ngày 20 — Correctness, queueing và overload

**Theory.** Idempotency gắn nhiều retries vào một logical operation. End-to-end reliability của independent sequential stages là product của stage reliabilities; retry chỉ cải thiện khi failure attempts thực sự independent và operation idempotent. Transactional outbox atomically ghi business state và message intent; worker publish/reconcile sau. Saga dùng local transactions và compensations khi không có 2PC. Nếu remote effect có thể committed trước crash, state là unknown chứ không phải failed; cần lookup bằng operation ID hoặc manual reconciliation. Locks/conditional update xử lý race nhưng phải nói isolation assumption.

Queueing nối correctness với capacity: `L=lambda W`; safe worker count cần target utilization. Khi rho gần 1, tail tăng phi tuyến. Admission control, bounded queue, backpressure, token bucket và fair scheduling ngăn overload biến thành stale work/retry storm.

**Example mới.** Debit subscription và enqueue export dùng ledger entry + outbox trong một DB transaction.

- **Drill A:** Liệt kê mọi crash window và recovery.
- **Drill B:** Thiết kế fallback khi vendor không hỗ trợ idempotency/read-by-ID, rồi tính worker count và overload policy.
- **Checkpoint:** consistency, units, ordering, fairness và cancellation rõ.

## Ngày 21 — Review 3

Không học topic mới. Làm assessment closed-book trước; sau khi lưu trạng thái kết thúc mới mở lesson/tài nguyên để phân loại lỗi và chọn recovery drill.

## Ngày 22 — Durable workflow engines

**Theory.** Durable DB owns node/run states; workers claim bằng lease/compare-and-set. Completed node output được keyed bởi immutable workflow version + inputs + code/model version. Fan-out cần limits theo workers, provider quota, memory và cost. Cycle detection dùng DFS colors hoặc Kahn `O(V+E)`; supported loops cần exit condition/cap. Human waits là persisted state + durable timer, không held thread. In-flight runs pin version.

**Example mới.** Map 20k documents returns successes plus per-item errors và resume cursor.

- **Drill A:** Vẽ transitions pending→leased→succeeded/failed/unknown.
- **Drill B:** Xác định descendants phải rerun sau node edit.
- **Checkpoint:** crash, duplicate click, lease expiry và partial result rõ.

## Ngày 23 — APIs, retrieval, dedup và cost

**Theory.** Stable API không trả hai schemas ngẫu nhiên; async creation thường trả job resource và polling/event stream. Streaming phải chọn transport, chunk boundary và backpressure policy; first-output latency phải đo từ request tới client-consumable byte, stratified theo payload/path. Cache key bao gồm normalized semantic input + model/voice/config version. Robust media fingerprints chịu encode/trim; LSH giảm candidate pairs từ all-pairs rồi graph/union-find clusters verified matches. Retrieval cần structure-aware chunks, BM25 cho exact terms, vectors cho semantics, reranker cho final order và citations bound tới source spans. Storage/egress/token estimates phải giữ units, growth và consumption multiplicity; cost levers phải tránh double-count savings.

**Example mới.** Knowledge search eval tạo queries từ held-out document sections rồi kiểm tra recall, answer support và citation precision.

- **Drill A:** Thiết kế LSH candidate→verify→cluster pipeline và complexity.
- **Drill B:** Ablate BM25/vector/reranker và định nghĩa metrics.
- **Checkpoint:** API status, cache version, retrieval evidence và units.

## Ngày 24 — Security và verified actions

**Theory.** Scoped token vẫn là secret nếu untrusted code đọc được. Generated code chạy không credentials; trusted proxy lấy short-lived credential và enforce identity, data-flow, egress và action policy. Filesystem snapshot copy-on-write rollback local data, không undo email/payment/publish. GUI action phải verify postcondition; nếu timeout không biết click đã áp dụng, retry chỉ an toàn với idempotent action hoặc reconciliation.

**Example mới.** Untrusted invoice PDF không thể gửi customer rows ra ngoài vì sandbox không có vault/network path.

- **Drill A:** Threat-model prompt injection, dependency, tenant escape và resource abuse.
- **Drill B:** Thiết kế postcondition/retry cho “submit order”.
- **Checkpoint:** trust boundary, residual risks và human authorization.

## Ngày 25 — Evaluation và release gates

**Theory.** Regression suite bảo vệ solved behavior; capability suite phải còn gradient và được retire/promote khi saturated. Grade end state trừ khi trajectory step là safety/control. pass@k đo “ít nhất một”; pass^k đo repeated reliability. Graders cần calibration và transcript sampling. Video gate tách spatial fidelity, prompt adherence, identity, temporal consistency, motion smoothness, flicker và safety; human budget tập trung uncertainty/disagreement. Release rule cần critical floors, non-regression và escape hatch.

**Example mới.** Canary degradation dùng repeated paired runs và environment attribution, không một failure.

- **Drill A:** Thiết kế capability/regression matrices và release rule.
- **Drill B:** Chọn automated vs human metrics và stratified sample.
- **Checkpoint:** average improvement không được che critical regression.

## Ngày 26 — Product decision quality

**Theory.** Hypothesis tốt có mechanism và evidence có thể kill. SLI đo user outcome; SLO đặt target và error budget điều khiển investment. Goodhart xuất hiện khi proxy thành target, nên cần counter-metrics. Observational lift không phải causal lift. Decision memo định lượng assumptions và reversal condition. Merge nhanh chỉ hợp khi changes nhỏ/reversible, tests mạnh, observability/rollback nhanh và blast radius thấp; regulated/irreversible domains cần gates mạnh hơn.

**Example mới.** Chọn reliability vs feature bằng expected impact ranges và cheap experiment, không chỉ point estimate.

- **Drill A:** Xếp hạng năm retention hypotheses với kill evidence.
- **Drill B:** Viết memo ba options có strongest counterargument.
- **Checkpoint:** causal status, uncertainty và guardrail rõ.

## Ngày 27 — Context, tool topology và lifecycle

**Theory.** Code mode giảm model-visible intermediate execution tokens; schema cost chỉ giảm nếu API surface được tìm/load có chọn lọc. Tool masking giữ stable interface/object positions trong run trong khi discovery quyết định detail nào vào attention. Stable append-only prefix tối đa KV reuse; timestamp sớm phá cache. Direct tools phù hợp simple/high-risk controls; code sandbox phù hợp deterministic loops/joins nhưng thêm isolation/ops cost.

Durable session giữ events/artifacts; context policy chọn bounded representation cho một call. Goal contract phải chứa outcome, verification, constraints, authority, budget và stop condition. External effect cần durable intent, operation ID, result/reconciliation; concurrent wake cần compare-and-set ownership.

**Example mới.** 600 operations được expose qua search/read API plus code executor, còn `publish` là direct approval-gated tool.

- **Drill A:** Tính cached/uncached cost qua 12 turns với prefix mới.
- **Drill B:** Thiết kế topology, rồi trace crash trước/trong/sau external call và hai concurrent wake calls.
- **Checkpoint:** tách cost layers và chỉ đúng durable authority/source of truth.

## Ngày 28 — Review 4

Không học topic mới. Làm assessment closed-book trước; sau khi lưu trạng thái kết thúc mới mở lesson/tài nguyên để phân loại lỗi và chọn recovery drill.

## Ngày 29 — Managed-agent synthesis

**Theory.** Architecture tốt là tập contracts: session owns history; workflow engine owns durable execution; sandbox owns disposable compute; proxy/vault owns credentials; approval service owns publish authority; eval plane owns release evidence. Context/tool policies là versioned strategies, không overwrite history. Mọi failure chuyển thành retry-safe, reconcilable, blocked hoặc escalated state.

**Example mới.** Multi-tenant media agent pin tenant identity xuyên proxy, workspace và audit events; sandbox không có cross-tenant route.

- **Drill A:** Vẽ toàn hệ thống và annotate mọi arrow.
- **Drill B:** Chọn ba trade-offs lớn nhất do chính thiết kế tạo ra.
- **Checkpoint:** đáp án bao phủ state, interfaces, failures, security, goals, eval và entropy control.

## Ngày 30 — Verification, không học thêm

Làm `Final Mock` trong `ASSESSMENTS.md` trước khi mở `ASSESSMENT_KEYS.md`. Không sửa câu trả lời sau khi xem key. Phân loại lỗi theo concept, setup, derivation, arithmetic, architecture và communication; kết quả dưới finish line là evidence để ghi `PARTIAL/FAIL`, không phải lý do hạ chuẩn.
