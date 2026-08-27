<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->

# Audit nội dung — AI Agent System Design

## Phạm vi và authority

- Contract và lịch: `CHALLENGE.md`, `PLAN.md`.
- Bài học: `LESSONS.md`, `LESSON_TEMPLATE.md`.
- Đánh giá: `ASSESSMENTS.md`, `ASSESSMENT_KEYS.md`.
- Coverage: `COVERAGE_MAP.md`.
- Progress/evidence: `PROGRESS.md`.
- Payload hiển thị: `content-data.js`; kiểm tra tĩnh hiện tại khớp 8/8 file nguồn và 3/3 file bổ trợ. Đây chỉ là integrity tĩnh, không chứng minh nội dung đúng.

## Kết luận

`FAIL` — coverage theo ID khá chặt và baseline/final có cấu trúc đối xứng, nhưng contract thời lượng đang tự mâu thuẫn. Một số ngày ghép quá nhiều năng lực và coverage map chưa nối tới assessment evidence, nên chưa thể chứng minh finish line một cách hai chiều.

## Dependency/coverage snapshot

| Phạm vi | First learn | Retrieval/review | Kết luận |
|---|---:|---:|---|
| M1–M12 | Ngày 2–5 | Ngày 7 và các mock | Có manifest; cần evidence mapping |
| M13–M30 | Ngày 6, 8–13 | Ngày 7/14 | Ngày 6 và 13 quá dày |
| M31–M65 | Ngày 11–19 | Ngày 14/21 | Có progression, nhưng worked reasoning mỏng |
| M66–M100 | Ngày 20–26 | Ngày 21/28 | Có transfer design |
| P1–P18 | Ngày 20–29 | Ngày 28/30 | Có đủ ID; chưa nối evaluator cụ thể |

## Findings

### AI-CONTENT-001 — Contract thời lượng có xung đột chặn workload freeze

- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `PLAN.md:7,11,17,40,47`; `ASSESSMENTS.md:13,55,63,71,79,87`.
- **Evidence:** Ma trận ghi Day 1 và Day 30 là 210 phút, nhưng phần chi tiết Day 1 ghi Target 120 phút. Review trong ma trận ghi Day 7 là 120 phút và cho phép review 150 phút, trong khi assessment lần lượt là 75/90/90/105 phút.
- **Impact:** Người học không biết timebox authority nào phải tuân theo; kiểm tra overload và compliance không thể đóng băng.
- **Fix direction:** Chọn một authority thời lượng, ghi rõ assessment nằm trong hay ngoài Target, rồi đồng bộ mọi bảng/heading liên quan.
- **Acceptance:** Mỗi ngày có đúng một tổng Target quan sát được; tổng lesson + drills + assessment không vượt Target và mọi file cho cùng một giá trị.

### AI-CONTENT-002 — Ngày 6 và 13 ghép quá nhiều dependency mới

- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `PLAN.md:82-87,131`; `LESSONS.md:59-69,125-135`.
- **Evidence:** Day 6 gom conditioning, Bayes, coupon collector, birthday collision, indicators, covariance/independence, length bias, MLE, sufficiency, Fisher information, CRLB, order statistics và LRT. Day 13 gom causal inference, propensity/IV, uplift, leakage, ranking và Bradley–Terry.
- **Impact:** Người mới có thể nhận diện thuật ngữ nhưng thiếu lượt trace, derivation và error repair để áp dụng sang bài mới.
- **Fix direction:** Tách năng lực cốt lõi khỏi enrichment hoặc chuyển một phần sang retrieval có điều kiện mà không tăng tổng workload.
- **Acceptance:** Mỗi concept mới có prerequisite rõ, ít nhất một worked reasoning và một attempt độc lập trong timebox; thử bài transfer không cần đoán công thức.

### AI-CONTENT-003 — Example mới chưa phải worked reasoning hoàn chỉnh

- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `LESSONS.md:7-13,19-25,31-37,41-47,51-57` và cùng pattern ở các ngày sau.
- **Evidence:** Mỗi capsule có Theory, Mechanism, Boundary, một câu “Example mới” và drills; nhiều example chỉ nêu đề bài hoặc kết luận một câu, không trình bày assumptions → bước suy luận → unit/sanity check hoặc trade-off decision.
- **Impact:** Người học thiếu model nội tâm về cách dựng lời giải, dù checklist concept đầy đủ.
- **Fix direction:** Bổ sung một worked example ngắn theo đúng loại claim trước independent transfer task.
- **Acceptance:** Mẫu định lượng có derivation + units + sanity; mẫu thiết kế có requirement, flow, failure, observability và trade-off; mẫu proof có assumptions và chuỗi suy luận.

### AI-CONTENT-004 — Coverage map chưa nối requirement tới assessment evidence

- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `COVERAGE_MAP.md:3,7-153,157-159`.
- **Evidence:** Bảng chỉ có ID, năng lực và ngày; phần validation yêu cầu “evaluator tương ứng” nhưng không có cột assessment item, rubric gate hoặc evidence artifact.
- **Impact:** Có thể chứng minh topic đã được nhắc tới nhưng không chứng minh người học đã thể hiện mastery cho từng requirement.
- **Fix direction:** Thêm mapping hai chiều `requirement → lesson/day → assessment item → evidence` và audit ngược từ từng ngày.
- **Acceptance:** Mỗi M1–M100 và P1–P18 trỏ tới ít nhất một evaluator/evidence cụ thể; mọi evaluator trỏ ngược tới requirement nó đo.

## Verified/Pending gates

| Gate | Status | Evidence |
|---|---|---|
| Manifest M1–M100 và P1–P18 có ID riêng | `PASS` | `COVERAGE_MAP.md:7-153` |
| Baseline/final cùng 10 task, 5 domain | `PASS` | `ASSESSMENTS.md:7-13,87` |
| Review ít nhất mỗi 7 ngày | `PASS` | `PLAN.md:17,24,31,38` |
| Baseline thực tế của người học | `PENDING` | Chưa có execution evidence trong audit này |
| Mastery semantic cho đủ 118 requirement | `PENDING` | Thiếu evaluator/evidence mapping hai chiều |

