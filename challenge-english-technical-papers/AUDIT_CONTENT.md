<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->

# Audit nội dung — English Technical Papers

## Phạm vi và authority

- Contract/workload: `CHALLENGE.md`, `PLAN.md`.
- Bài học và bài tập: `LESSONS.md`, `EXERCISES.md`.
- Chunk system: `CHUNKS.md`, `CHUNK_LEDGER.md`.
- Paper/audio: `PRACTICE_PAPER.md`, thư mục `audio/`.
- Đánh giá: `ASSESSMENTS.md`, `ASSESSMENT_KEYS.md`.
- Payload hiển thị: `content-data.js`; kiểm tra tĩnh hiện tại khớp 12/12 nguồn và 3/3 file bổ trợ.

## Kết luận

`FAIL` — progression reading/speaking đã phù hợp beginner hơn trước: Day 1 chỉ reading diagnostic, speaking bắt đầu sau scaffold và tăng dần. Tuy nhiên lesson vẫn quá cô đọng so với lượng bài tập, thiếu guided practice và feedback/error-repair; quy tắc D-2/D-7 còn là routine ẩn, chưa thành evidence hằng ngày.

## Dependency/coverage snapshot

| Giai đoạn | Reading | Speaking | Kết luận |
|---|---|---|---|
| Days 1–7 | diagnostic → sentence/phrase basics | frames → 20–30 giây | Progression phù hợp |
| Days 8–14 | sentence decoding/two-pass | micro output | Lesson scaffold còn mỏng |
| Days 15–21 | paper moves/results/limits | 5 phút micro-output trong Target | Hợp lý |
| Days 22–28 | paragraph/paraphrase/PREML | tăng tới 2–3 phút | Có integration |
| Days 29–30 | synthesis/final | integrated response | Anchor và final tách vai trò |

## Findings

### ENG-CONTENT-001 — Lesson chưa có đủ guided practice và feedback loop cho band 1.0

- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `LESSONS.md:9-40,47-93,97-139,143-183`; đối chiếu `EXERCISES.md:5-23` và các block D02–D30.
- **Evidence:** Lesson thường là vài bullet giải thích/quy trình rồi chuyển sang exercise; không có chuỗi mẫu ngắn → noticing có đáp án → guided attempt → independent attempt → error repair rõ cho mỗi ngày.
- **Impact:** Beginner phải làm số lượng lớn parse/speaking khi chưa thấy đủ mẫu có phản hồi, dễ luyện sai hoặc chỉ chép frame.
- **Fix direction:** Giữ nguyên mục tiêu/ngữ liệu, nhưng tổ chức lại mỗi lesson theo scaffold beginner và đặt feedback trước independent evidence.
- **Acceptance:** Mỗi ngày mới có ít nhất một mẫu tiếng Việt giải thích, một noticing task có feedback, một guided attempt và một independent attempt kèm rule sửa lỗi.

### ENG-CONTENT-002 — Routine D-2/D-7 chưa được cụ thể hóa trong daily evidence

- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `PLAN.md:9-11`; `CHUNKS.md:3,217`; daily rows trong `PLAN.md:15-44`.
- **Evidence:** Global rule yêu cầu retrieve nhóm D-2/D-7 và chunk chỉ ACTIVE sau D+2/D+7, nhưng từng daily contract không chỉ định chunk nào đến hạn, kết quả nào phải ghi hoặc cách xử lý backlog.
- **Impact:** Người học có thể đánh dấu ngày hoàn thành mà không biết đã đóng retrieval obligation hay chưa; 40 ACTIVE không audit được từ lesson flow.
- **Fix direction:** Sinh daily due-list từ ledger và gắn outcome/evidence quan sát được vào mỗi ngày.
- **Acceptance:** Mỗi Day 2–28 hiển thị due chunks D+2/D+7, kết quả production/recognition và backlog; ACTIVE chỉ đổi khi đủ hai evidence đúng hạn.

### ENG-CONTENT-003 — Mật độ bài tập đầu kỳ chưa được nối với minimum recovery

- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `LESSONS.md:9-14`; `EXERCISES.md:5-23`; workload `PLAN.md:5`.
- **Evidence:** Day 2 giới thiệu sentence skeleton trong capsule ngắn rồi yêu cầu một tập nhiều câu; lesson không chỉ ra subset minimum, thứ tự guided/independent hoặc stop rule khi lỗi lặp lại.
- **Impact:** Người mới có thể tiêu hết timebox vào phân tích cơ học mà không đạt khả năng đọc/nói độc lập.
- **Fix direction:** Chia bài cố định thành core/guided/independent/stretch bằng chính ngữ liệu hiện có, không tăng workload.
- **Acceptance:** Trong timebox 75 phút, beginner hoàn thành core evidence; phần còn lại không trở thành PASS gate ẩn và lỗi lặp có recovery drill xác định.

## Verified/Pending gates

| Gate | Status | Evidence |
|---|---|---|
| Day 1 chỉ reading diagnostic, không suy speaking | `PASS` | `LESSONS.md:5-7`; `ASSESSMENTS.md:9` |
| Speaking tăng từ 20–30 giây tới 2–3 phút | `PASS` | `LESSONS.md:35-44`; `PLAN.md:20-21,42` |
| Production/recognition/backlog tách riêng | `PASS` | `CHUNKS.md:3,217` |
| Reading Form A/B comparable và final integrated riêng | `PASS` | `ASSESSMENTS.md:9-62` |
| Audio tồn tại và được map đúng Day 6/16/26 | `PASS` (static) | Inventory `audio/` và cấu hình `index.html`; playback browser chưa được nâng thành PASS |
| Audio play/pause, transcript/target trên browser | `PENDING` | Chưa hoàn tất interaction test trong audit này |

