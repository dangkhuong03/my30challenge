# 30-Day Challenge: AI Agent System Design Foundations

Status: `DRAFT` — cần làm baseline Ngày 1 để đóng băng mức xuất phát.

Authority files:

- `COVERAGE_MAP.md`: semantic requirements cho 118 câu.
- `LESSONS.md`: theory, mechanisms, examples và transfer drills.
- `PLAN.md`: daily contracts.
- `ASSESSMENTS.md` và `ASSESSMENT_KEYS.md`: verification surfaces tách đề/đáp án.
- `PROGRESS.md`: append-only execution evidence.

## Kết quả chính

Sau 30 buổi, có thể giải thích, tính toán, chứng minh và thiết kế độc lập trước các bài mới cùng họ năng lực với hai đề nguồn, thay vì ghi nhớ đáp án của 118 câu.

## Giả định có thể thay đổi

- Lịch mặc định: 30 buổi hoàn thành, 120 phút cho ngày thường; review 150 phút, capstone 180 phút, baseline/final 210 phút.
- Phiên năng lượng thấp: minimum 45 phút.
- Không dùng AI, internet hay tài liệu trong baseline, các bài kiểm tra tuần và final mock; được dùng tài liệu trong giai đoạn học.
- Nếu bạn chỉ có 60–90 phút/ngày, giữ nguyên thứ tự nhưng giảm bài stretch, không bỏ core drill.

## Finish line ngày 30

Challenge đạt `PASS` khi đồng thời thỏa:

1. Làm một đề tổng hợp mới trong điều kiện đóng, đạt ít nhất 80%.
2. Không nhóm nào dưới 70%: toán–thống kê, statistical modelling, RL, product/system engineering, agent architecture.
3. Mọi câu định lượng có công thức, đơn vị, phép tính và sanity check.
4. Mọi câu thiết kế nêu rõ assumption, state owner, interface, invariant, failure behavior, security boundary, verification và trade-off phù hợp.
5. Có thể phân biệt những khái niệm dễ lẫn bằng cơ chế và boundary, không chỉ bằng khẩu hiệu.
6. Giải được ít nhất hai transfer drills cho mỗi module trong bối cảnh chưa xuất hiện trong đề nguồn.

“Module” ở đây là mỗi lesson capsule Ngày 2–29 trong `LESSONS.md`. Mỗi capsule đã có đúng hai transfer drills; mastery yêu cầu tự làm trước khi xem checkpoint.

Không thể cam kết trước rằng việc học đủ 30 ngày tự động bảo đảm trả lời hoàn hảo. Bằng chứng final mock mới quyết định `PASS`, `PARTIAL` hay `FAIL`.

## Baseline routing và tính khả thi

Chấm `Baseline Form A` trong `ASSESSMENTS.md` trước khi đóng băng lịch:

- `≥70`: dùng track chuẩn 120 phút/buổi.
- `50–69`: dùng 150 phút/buổi hoặc giữ 120 phút nhưng chấp nhận finish line có rủi ro cao; thêm recovery drills từ error log.
- `<50`: 60 giờ không đủ bằng chứng để hứa mastery toàn bộ phạm vi. Vẫn chạy 30 buổi như foundation cycle, nhưng kết quả mục tiêu tạm là `PARTIAL`; chỉ nâng lại finish line sau Review 2 nếu mọi domain đạt ngưỡng.

Việc routing chỉ thay workload tương lai, không sửa điểm baseline.

## Phạm vi năng lực

- Proof, calculus, linear algebra, convexity, combinatorics và estimation.
- Probability, inference, experiments, resampling và statistical judgment.
- Predictive, time-series, latent-state, survival, causal và ranking models.
- MDP, dynamic programming, TD, policy gradient, bandit, offline RL và RLHF.
- Distributed workflows, queues, APIs, storage, reliability, security và evaluation.
- Long-running agents: context, tools, sessions, goals, recovery, authority và managed-agent architecture.

## Quy tắc chống học tủ

- Ví dụ giảng dạy phải đổi domain, con số hoặc failure mode so với đề nguồn.
- Mỗi concept phải trả lời được: vì sao cần, hoạt động thế nào, invariant nào giữ đúng, khi nào hỏng, dùng/không dùng khi nào.
- Sau mỗi lời giải có một biến thể đổi assumption và một câu yêu cầu phản biện.
- Không chép lại câu hỏi nguồn thành “bài học”. Câu hỏi nguồn chỉ dùng trong coverage audit và kiểm tra cuối.
- Không xem đáp án mẫu trước khi tự giải và tự chấm lần một.

## Nhịp một buổi

1. Retrieval không tài liệu — 10 phút.
2. Học concept và tự dựng lại derivation — 35 phút.
3. Worked example mới — 20 phút.
4. Hai bài transfer — 35 phút.
5. Error log + flash summary — 10 phút.
6. Stretch hoặc oral defense — 10 phút.

## Recovery

Không học bù gấp đôi. Nếu bỏ lỡ, tiếp tục ở buổi kế tiếp; chỉ gộp phần review trùng lặp. Lịch này tính theo 30 buổi hoàn thành. Kết quả cũ không được sửa hoặc nâng thành `PASS` khi chưa có evidence.
