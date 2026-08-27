<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->

# Audit nội dung — Data Structures & Algorithms

## Phạm vi và authority

- Contract và inventory khóa: `CHALLENGE.md`.
- Lịch: `PLAN.md`.
- Bài học: `LESSONS.md`.
- Đánh giá: `ASSESSMENTS.md`, `ASSESSMENT_KEYS.md`, `FINAL_ASSESSMENT.md`, `FINAL_ASSESSMENT_KEYS.md`.
- Progress/evidence: `PROGRESS.md` và các form.
- Payload hiển thị: `content-data.js`; kiểm tra tĩnh hiện tại khớp 8/8 nguồn và 3/3 file bổ trợ.

## Kết luận

`FAIL` — inventory và các gate cuối kỳ được định nghĩa tốt, nhưng lesson hiện chủ yếu là capsule bốn dòng. Nó chưa đủ để dạy beginner tự trace và implement, còn graph/DP bị dồn vào cuối lịch. Setup gate vẫn `PENDING`, nên challenge chưa được phép bắt đầu theo chính contract.

## Dependency/coverage snapshot

| Nhóm | First learn | Retrieval/review | Kết luận |
|---|---:|---:|---|
| Array → Hash/Linked/Stack/Queue | 2–6 | 7, 23, 29–30 | Hợp lý nhưng lesson mỏng |
| Patterns/Prefix/Window | 8–14 | 14, 23, 29–30 | Có progression |
| Recursion/Sort/Binary Search | 15–19 | 23, 29–30 | Binary Search có 2 ngày |
| Tree/BST/Heap/Backtracking | 20–25 | 23, 25, 29–30 | Có consolidation |
| DP 1D/2D | 26–27 | 27, 29–30 | Chỉ hai ngày first-learn |
| Graph | 28 | 29–30 | Quá nén: 4 implementation trong một ngày |

## Findings

### DSA-CONTENT-001 — Lesson capsule chưa đủ dạy beginner implement độc lập

- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `LESSONS.md:9-42,50-88,96-127,129-184`.
- **Evidence:** Mỗi topic chủ yếu có bốn bullet WHY/WHEN/HOW/PROVE; không có representation diagram, hand trace hoàn chỉnh, pseudocode/code scaffold, guided attempt, feedback hoặc error repair ngay trong lesson.
- **Impact:** Người học phải tự lấp khoảng trống từ khái niệm sang code; blank-editor test dễ trở thành kiểm tra trí nhớ hoặc phụ thuộc tài liệu ngoài.
- **Fix direction:** Mở rộng anatomy theo `WHY → intuition → invariant → operations → hand trace → complexity → implementation → transfer`, vẫn giữ nguyên 44 mục.
- **Acceptance:** Một beginner có thể dùng riêng lesson để trace ví dụ nhỏ, viết operation cốt lõi và giải thích invariant/complexity trước bài độc lập.

### DSA-CONTENT-002 — Graph bị dồn quá mức vào Day 28

- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `PLAN.md:38`; `LESSONS.md:179-184`.
- **Evidence:** Một buổi yêu cầu matrix DFS, matrix BFS, adjacency-list builder, adjacency-list DFS/BFS và một matrix problem; đây đồng thời là first-learn duy nhất trước review/final.
- **Impact:** Beginner thiếu vòng learn–trace–implement–repair riêng cho representation và traversal, dù Graph thuộc nhóm khó cần nhiều thời gian hơn.
- **Fix direction:** Phân bổ lại các ngày consolidation/review để có ít nhất hai vòng graph mà không thêm topic hoặc vượt 30 ngày.
- **Acceptance:** Matrix và adjacency list đều có first-learn, cold retrieval và transfer attempt ở các phiên tách biệt; lỗi visited/disconnected được sửa trước final.

### DSA-CONTENT-003 — DP có progression danh nghĩa nhưng thiếu lượt sửa lỗi

- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `PLAN.md:36-37`; `LESSONS.md:165-177`.
- **Evidence:** 1D DP và 2D DP xuất hiện liên tiếp ở Days 26–27; Day 27 chỉ retrieval state của 1D, sau đó chuyển ngay sang Graph và readiness review.
- **Impact:** Người mới chưa có khoảng cách retrieval và mixed selection đủ để phân biệt recursion, memoization, tabulation và 2D state.
- **Fix direction:** Dùng review/mixed practice để chèn delayed retrieval và bài không gắn nhãn pattern trước Day 30.
- **Acceptance:** Có ít nhất một cold mixed problem sau khoảng cách học, người học phải tự chọn DP, nêu state/transition/base/order và sửa lỗi từ evidence.

### DSA-CONTENT-004 — Finish line hai retrieval cho 44 mục chưa được lịch bảo đảm

- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `CHALLENGE.md:72-76,115,117-164`; `PLAN.md:39-40`.
- **Evidence:** Finish line yêu cầu mỗi mục có hai retrieval artifacts ở hai ngày khác nhau. Coverage table gán retrieval days, nhưng Day 29 chọn blocker và Day 30 chỉ lấy mẫu khóa; không có operational ledger bảo đảm mọi mục thực sự được retrieve hai lần.
- **Impact:** Người học có thể hoàn thành lịch và final sample nhưng vẫn thiếu evidence cho một số mục, khiến finish line không kiểm chứng được.
- **Fix direction:** Tạo ledger/scheduler xác định retrieval còn thiếu và dùng review để đóng từng requirement.
- **Acceptance:** Trước Day 30, báo cáo máy/ người kiểm được hiển thị 44/44, mỗi mục có first-learn + hai artifact ở hai ngày khác nhau.

### DSA-CONTENT-005 — Setup gate chưa khóa

- **Severity:** `CRITICAL`
- **Status:** `PENDING`
- **Where:** `CHALLENGE.md:3,9,23-27`.
- **Evidence:** Contract ghi `READY_FOR_SETUP` và yêu cầu khóa `LANGUAGE`, `PROBLEM_SOURCE`, `SESSION_TYPE`, `NORMAL_MINUTES` trước Day 1.
- **Impact:** Problem selection, code rubric, workload và lịch không thể chấm PASS nhất quán.
- **Fix direction:** Người học xác nhận bốn biến; không tự suy đoán trong audit.
- **Acceptance:** Bốn giá trị được ghi trong authority progress/setup và app không cho bắt đầu Day 1 trước khi hợp lệ.

## Verified gates

| Gate | Status | Evidence |
|---|---|---|
| Đủ 15 nhóm/44 mục trong coverage table | `PASS` | `CHALLENGE.md:117-164` |
| Baseline/final matched protocol | `PASS` | `ASSESSMENTS.md:7-19,29-65` |
| Review có retrieval và mixed problems | `PASS` | `PLAN.md:17,24,33,39` |
| Language/source/session/minutes | `PENDING` | `CHALLENGE.md:9,23-27` |

