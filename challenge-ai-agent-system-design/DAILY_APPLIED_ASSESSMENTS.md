# Daily Applied Assessments

Đây là `Stretch / diagnostic` tùy chọn, không thay thế assessment gốc, không phải điều kiện `PASS` và không cộng thêm ngoài workload đã khóa. Nếu làm, dùng nó thay cho Stretch hoặc một transfer drill trong `Target`. Mỗi ngày dùng một tình huống hoặc input mới chưa xuất hiện trong bài học. Lưu assumptions, reasoning, output và self-check làm evidence.

Rubric chung: `Correctness`, `Reasoning`, `Transfer`, `Explanation`, mỗi tiêu chí 0–2. PASS khi đạt ít nhất 6/8, không tiêu chí nào bằng 0 và thỏa `Must-pass`. `2` = đúng, có lý do/evidence và kiểm tra phản ví dụ; `1` = phần lớn đúng nhưng thiếu hoặc có lỗi nhỏ; `0` = sai bản chất, không làm hoặc không kiểm chứng được.

## Ngày 1 — Kiến trúc một câu trả lời mới

- **Task:** Với một yêu cầu thiết kế chưa học (ví dụ agent xử lý hoàn tiền), viết answer skeleton gồm goal, assumptions, invariants, owner, failure modes, evidence và trade-offs; chỉ rõ chỗ chưa đủ dữ kiện.
- **Deliverable:** memo tối đa 500 từ và một sơ đồ boundary.
- **Must-pass:** có ít nhất 3 failure modes gắn với owner/control/evidence; không biến assumption thành fact.

## Ngày 2 — Chọn và bảo vệ proof strategy

- **Task:** Tự chọn hai mệnh đề mới, một đúng và một sai; với mỗi mệnh đề chọn direct/contrapositive/contradiction/induction hoặc counterexample và giải thích vì sao cách khác kém phù hợp.
- **Deliverable:** hai proof traces và một phản biện cho mỗi trace.
- **Must-pass:** proof đúng logic, quantifier rõ; mệnh đề sai bị bác bằng counterexample hợp lệ.

## Ngày 3 — Geometry under a changed representation

- **Task:** Tạo ma trận nhỏ biểu diễn 4 items bằng 3 features; tính rank/nullspace hoặc projection, sau đó thay scale một feature và phân tích cosine/L1/L2 thay đổi ra sao.
- **Deliverable:** phép tính, hình phác và kết luận về metric choice.
- **Must-pass:** phép tính tái lập được; kết luận nêu rõ invariant và điều không invariant.

## Ngày 4 — Stable objective audit

- **Task:** Derive gradient và Hessian cho một loss mới có regularization; đưa một input cực trị làm phép tính naïve overflow/underflow rồi viết stable form.
- **Deliverable:** derivation, numerical counterexample và pseudocode ổn định.
- **Must-pass:** dimensions khớp, Hessian/convexity claim có điều kiện; stable form cho kết quả hữu hạn trên test cực trị.

## Ngày 5 — Estimate before optimize

- **Task:** Ước lượng compute, memory và cost cho pipeline dedup 10 triệu records dưới hai strategy; ghi unit, upper/lower bound và assumption nhạy nhất.
- **Deliverable:** estimation sheet và recommendation có break-even point.
- **Must-pass:** mọi số có đơn vị; thay đổi assumption nhạy nhất làm lại kết luận hoặc giải thích vì sao không.

## Ngày 6 — Probability model selection

- **Task:** Mô hình hóa một hệ thống retries/collision mới bằng conditional probability và indicator variables; tính expected count rồi kiểm tra bằng simulation nhỏ.
- **Deliverable:** sample space, derivation, simulation result và discrepancy note.
- **Must-pass:** conditioning đúng; simulated estimate nằm trong khoảng hợp lý hoặc discrepancy được chẩn đoán.

## Ngày 7 — Review 1 error transfer

- **Task:** Sau khi khóa Review 1, chọn root cause có điểm thấp nhất và tạo một biến thể mới để làm lại closed-book.
- **Deliverable:** error classification, recovery drill và before/after reasoning.
- **Must-pass:** không sửa bài review gốc; drill nhắm đúng root cause và có tiêu chí kiểm chứng.

## Ngày 8 — Experiment decision memo

- **Task:** Thiết kế A/B test cho một product change với primary metric, power drivers, stopping rule và multiple-testing policy; thêm một confounder thực tế.
- **Deliverable:** pre-analysis memo và decision table cho 3 possible outcomes.
- **Must-pass:** metric khớp hypothesis; không kết luận “không khác biệt” chỉ từ p > threshold; multiplicity có xử lý.

## Ngày 9 — Noisy evaluator stress test

- **Task:** Tạo 20 kết quả giả lập từ evaluator flaky; so sánh point estimate, bootstrap interval và pass@k/pass^k; làm một canary validator.
- **Deliverable:** calculation notebook/table và release recommendation.
- **Must-pass:** phân biệt probability “ít nhất một lần pass” với “mọi lần đều pass”; recommendation phản ánh uncertainty.

## Ngày 10 — Statistical incident review

- **Task:** Nhận một dashboard có aggregate tăng nhưng hai segment giảm; dựng ít nhất hai causal stories và yêu cầu dữ liệu phân biệt chúng.
- **Deliverable:** incident memo gồm observed facts, hypotheses, tests và stop condition.
- **Must-pass:** không suy causal từ aggregate; Simpson/selection/length bias được kiểm tra bằng phép phân rã cụ thể.

## Ngày 11 — Metric under asymmetric cost

- **Task:** Với confusion matrix và cost matrix mới, chọn threshold/metric; kiểm tra calibration trên 3 bins và giải thích khi PR hữu ích hơn ROC.
- **Deliverable:** calculations và decision note cho stakeholder.
- **Must-pass:** decision dựa trên expected cost chứ không chỉ accuracy; calibration và discrimination không bị đồng nhất.

## Ngày 12 — Hidden-state inference

- **Task:** Xây HMM 2-state/3-observation mới, chạy forward có scaling cho 5 observations; đồng thời giải thích vì sao censored duration không được xem là completed duration.
- **Deliverable:** forward table, likelihood và survival-risk note.
- **Must-pass:** probabilities normalize đúng; censoring được đưa vào risk set đúng nghĩa.

## Ngày 13 — Leakage and causal boundary

- **Task:** Audit feature list của một churn/uplift model mới; gắn timestamp/availability, loại leakage, vẽ DAG tối thiểu và đề xuất split/evaluation.
- **Deliverable:** feature audit table, DAG và evaluation plan.
- **Must-pass:** outcome-derived/post-treatment feature không lọt vào model; prediction claim không bị quảng thành causal claim.

## Ngày 14 — Review 2 error transfer

- **Task:** Sau khi khóa Review 2, chọn lỗi modelling lớn nhất và tạo một unseen variant giữ nguyên skill nhưng đổi surface details.
- **Deliverable:** error classification, transfer answer và self-check.
- **Must-pass:** không sửa bài review gốc; answer mới nêu assumptions và evidence có thể bác bỏ kết luận.

## Ngày 15 — Bellman contract

- **Task:** Định nghĩa MDP mới gồm state/action/reward/transition/terminal; tính hai Bellman updates và phân tích gamma thay đổi effective horizon.
- **Deliverable:** MDP table, calculations và boundary note nếu observation không Markov.
- **Must-pass:** transition probabilities hợp lệ; reward/terminal không mâu thuẫn; POMDP risk được nhận diện nếu có.

## Ngày 16 — Control stability comparison

- **Task:** Trên cùng trajectory mới, tính một update SARSA và Q-learning; sau đó thiết kế failure test cho deadly triad hoặc reward shaping.
- **Deliverable:** update trace và stability test plan.
- **Must-pass:** on-policy/off-policy target đúng; shaping claim nêu điều kiện bảo toàn policy.

## Ngày 17 — Policy-gradient diagnostics

- **Task:** Derive Monte Carlo policy-gradient estimate cho trajectory mới; so variance khi có/không baseline, rồi chọn PPO diagnostics và stop rule.
- **Deliverable:** calculations và training dashboard specification.
- **Must-pass:** baseline không làm bias gradient trong lập luận; clip/KL/entropy được dùng đúng vai trò.

## Ngày 18 — Offline decision under support gaps

- **Task:** Với logged bandit data mới, ước lượng một target policy bằng IS; chỉ ra weight instability/support gaps và quyết định ship, collect hay abstain.
- **Deliverable:** weights, ESS/diagnostics và decision memo.
- **Must-pass:** không đưa recommendation ngoài support mà không cảnh báo; uncertainty ảnh hưởng trực tiếp quyết định.

## Ngày 19 — Reward-integrity threat model

- **Task:** Thiết kế preference/reward loop cho một agent mới; red-team 5 proxy-gaming paths và gắn mỗi path với detection/control/human escalation.
- **Deliverable:** threat-control matrix và one rollback rule.
- **Must-pass:** có environmental verification độc lập reward model; ít nhất một control ngăn chứ không chỉ phát hiện.

## Ngày 20 — Unknown-outcome recovery

- **Task:** Thiết kế API ghi side effect khi client timeout sau commit; thêm idempotency key, outbox/reconciliation và state machine cho retry.
- **Deliverable:** sequence diagram, state table và 4 failure-injection tests.
- **Must-pass:** duplicate request không tạo duplicate effect; `unknown` không bị coi là failed/success khi chưa reconcile.

## Ngày 21 — Review 3 error transfer

- **Task:** Sau khi khóa Review 3, chuyển lỗi RL/Systems lớn nhất sang một failure scenario mới và bảo vệ recovery decision.
- **Deliverable:** root-cause note, new scenario, design/derivation và verification.
- **Must-pass:** không sửa bài review gốc; scenario mới buộc dùng invariant/contract thay vì nhớ đáp án.

## Ngày 22 — Durable workflow model

- **Task:** Mô hình hóa workflow fan-out có human wait, lease expiry và versioned output; thêm crash tại ba điểm rồi trace recovery.
- **Deliverable:** durable state schema, transitions và crash-recovery traces.
- **Must-pass:** state nguồn bền vững tách khỏi process memory; late worker không ghi đè output mới.

## Ngày 23 — API and retrieval contract

- **Task:** Thiết kế async retrieval API với stable identifiers, pagination/streaming, backpressure, cache key, dedup và cost budget.
- **Deliverable:** endpoint contract, retrieval stages và 5 contract tests.
- **Must-pass:** retry semantics rõ; citation/provenance đi cùng result; cost limit có enforcement point.

## Ngày 24 — Verified external action

- **Task:** Threat-model agent có thể đọc email và tạo payment; phân ranh trusted/untrusted data, permission, sandbox, confirmation và postcondition.
- **Deliverable:** trust-boundary diagram, permission matrix và attack tests.
- **Must-pass:** content không thể tự nâng quyền; irreversible action cần authorization và verification độc lập.

## Ngày 25 — Release gate design

- **Task:** Tạo evaluation suite cho agent mới gồm deterministic regression, capability, adversarial, flaky-run và canary signals; định nghĩa floor/rollback.
- **Deliverable:** test matrix và release policy.
- **Must-pass:** critical failure không bị average score che; gate có owner, evidence và rollback trigger.

## Ngày 26 — Decision quality under Goodhart

- **Task:** Viết product hypothesis và SLI/SLO cho một feature agent; tạo cách metric bị game, causal check và reversible rollout.
- **Deliverable:** one-page decision memo và pre-mortem.
- **Must-pass:** success metric nối user outcome; error budget dẫn tới quyết định cụ thể, không chỉ dashboard.

## Ngày 27 — Tool-topology budget

- **Task:** Với 12 tools và context budget cố định, so direct schema, discovery và sandbox/code mode; thiết kế capability masking và cache policy.
- **Deliverable:** topology diagram, token/cost estimate và security analysis.
- **Must-pass:** model chỉ thấy capability cần thiết; lựa chọn có trade-off latency/cost/attack surface định lượng hoặc kiểm chứng được.

## Ngày 28 — Review 4 error transfer

- **Task:** Sau khi khóa Review 4, chọn architecture gap lớn nhất và tạo một variant đổi scale/failure boundary để giải lại.
- **Deliverable:** root-cause note, architecture delta và verification plan.
- **Must-pass:** không sửa bài review gốc; mọi arrow mới có owner/contract và failure evidence.

## Ngày 29 — Full managed-agent design

- **Task:** Thiết kế một managed agent mới từ tenant boundary đến tool execution, memory, workflow, eval, security và operations; budget một bottleneck.
- **Deliverable:** architecture memo, diagrams, capacity estimate và failure table.
- **Must-pass:** mọi critical component có contract/owner/failure/evidence; trade-off được so với ít nhất một alternative.

## Ngày 30 — Verification transfer

- **Task:** Làm một prompt mới không lấy từ bộ câu hỏi; sau đó audit câu trả lời bằng checklist assumptions, correctness, failure, security, capacity, evidence và communication.
- **Deliverable:** timed answer gốc, audit độc lập và correction patch.
- **Must-pass:** không sửa ngầm answer gốc; mọi correction trỏ tới lỗi/evidence cụ thể và còn ít nhất một residual risk được khai báo.
