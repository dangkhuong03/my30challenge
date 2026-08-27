# 30-Day Data Structures & Algorithms Challenge

Status: `READY` — roadmap, assessments, finish line và setup đã khóa; Day 1 có thể bắt đầu khi người học chủ động mở challenge.

Authority files: `CHALLENGE.md`, `PLAN.md`, `ASSESSMENTS.md`, `ASSESSMENT_KEYS.md`, `FINAL_ASSESSMENT.md`, `FINAL_ASSESSMENT_KEYS.md`, `PROGRESS.md`.

Assessment gate: `RESOLVED` — Form A và Form B cùng keys đã được tách để chấm Baseline mà không làm lộ Final.

Setup gate: `RESOLVED` — `LANGUAGE = Python 3`, `PROBLEM_SOURCE = LeetCode public`, `SESSION_TYPE = 30 completed sessions`, `NORMAL_MINUTES = 120`.

## Primary outcome

Sau 30 buổi, người học có thể nhận diện pattern, chọn cấu trúc dữ liệu/thuật toán phù hợp, tự triển khai các thành phần cốt lõi từ editor trống, phân tích time/space complexity và giải thích một lời giải Easy–Medium theo phong cách phỏng vấn. Challenge ưu tiên **WHY → WHEN → HOW → PROVE**, không dùng việc nhớ tên hoặc chép code làm bằng chứng hiểu bài.

## Phạm vi đã khóa

Roadmap bắt buộc gồm đúng 15 nhóm và 44 mục trong Coverage Map. Có thể dùng bài toán phụ để luyện chuyển giao, nhưng không được thay thế hoặc bỏ bất kỳ mục bắt buộc nào.

Không nằm trong finish line của vòng 30 ngày này: advanced graph algorithms, trie, union-find, segment tree, Fenwick tree, balanced BST, advanced DP optimization và competitive programming tricks.

## Các biến phải đóng băng ở Ngày 1

- `LANGUAGE`: Python 3 dùng cho toàn bộ implementation và mock interview.
- `PROBLEM_SOURCE`: LeetCode public; nếu đổi nguồn phải khóa lại trước Baseline.
- `BASELINE`: điểm từ bài baseline trong `PLAN.md`.
- `SESSION_TYPE`: 30 buổi hoàn thành; ngày nghỉ không được ghi như một buổi đã hoàn thành.
- `NORMAL_MINUTES`: 120 phút học thực/buổi.

Challenge dùng 120 phút/buổi thường, review 150 phút, Day 30 tối đa 180 phút và minimum recovery 40 phút.

## Learning loop bắt buộc

Mỗi chủ đề đi qua bảy thao tác:

1. **WHY:** vấn đề nào khiến kỹ thuật này tồn tại?
2. **WHEN:** ghi signal, use case, non-use case và một alternative bị loại.
3. **MODEL:** vẽ trạng thái bộ nhớ, invariant, decision tree hoặc traversal frontier.
4. **HOW:** tự implement từ editor trống; không dùng snippet/autocomplete tạo cả hàm.
5. **PROVE:** giải thích correctness bằng invariant, induction hoặc case analysis phù hợp.
6. **COST:** ghi time và space complexity kèm lý do, gồm average/worst/amortized khi cần.
7. **TRANSFER:** giải bài mới và nói rõ dấu hiệu nào kích hoạt pattern.

Một video đã xem hoặc lời giải đã đọc không hoàn thành loop.

## Workload mặc định

- 20 phút: retrieval kiến thức cũ, không nhìn note.
- 30 phút: concept, trace và invariant.
- 35 phút: implementation từ editor trống + tests.
- 35 phút: problem solving + verbal explanation.
- Nghỉ 10–15 phút giữa các block dài; thời gian nghỉ không ghi vào `PROGRESS.md`.
- Minimum recovery 40 phút: 10 phút retrieval, 15 phút trace, 15 phút một implementation/problem nhỏ.
- Không học bù gấp đôi. Stretch không trở thành điều kiện `PASS`.

## Implementation bank bắt buộc

Mỗi artifact phải có tests cho empty, one element, normal case và ít nhất một edge case liên quan:

1. Dynamic Array: access, append, insert, delete, resize.
2. Stack và Queue.
3. Hash Table hỗ trợ map/set usage, collision handling và resize/load factor.
4. Singly Linked List và Doubly Linked List.
5. Insertion Sort, Merge Sort, Quick Sort và Bucket Sort.
6. Prefix Sum 1D/2D và range-query helpers.
7. Binary Search exact match, lower bound và upper bound/search range.
8. Binary Tree DFS/BFS và BST insert/remove.
9. Binary Heap push/pop.
10. Matrix DFS/BFS và adjacency-list DFS/BFS.

Recursion, two pointers, sliding window, backtracking và DP được chứng minh qua problem artifacts thay vì ép thành class/library giả tạo.

## Finish line Ngày 30

Challenge đạt `PASS` chỉ khi đồng thời đạt tất cả gate:

1. **Coverage:** 44/44 mục roadmap có first-learn artifact chứa WHY/WHEN/HOW/COST và hai retrieval artifacts ở hai ngày khác nhau.
2. **Implementation:** toàn bộ implementation bank đã từng được viết từ editor trống và test; trong final, hai mục được chọn theo deterministic protocol phải được viết lại không nhìn lời giải, tests pass.
3. **Pattern recognition:** đúng ít nhất 10/12 scenario; mỗi câu phải nêu signal, lựa chọn, lý do và một alternative bị loại.
4. **Problem solving:** có tối thiểu 36 unique problem attempts, ít nhất 14 Medium attempts, 28 independent `PASS` tổng cộng và ít nhất 8 independent Medium `PASS`. Hint phải được log; retry cùng bài không tăng unique count.
5. **Cold final:** dùng Matched Form B trong `FINAL_ASSESSMENT.md`; tổng ít nhất 75/100 và đạt mọi sub-gate. Medium bắt buộc `H0`, code pass locked tests và đạt ít nhất 18/24; `PARTIAL` Medium không thể tạo overall `PASS`.
6. **Complexity:** phân tích đúng time/space có lý do cho ít nhất 90% implementation và mọi independent problem `PASS`; phân biệt được worst, average và amortized khi áp dụng.
7. **Interview explanation:** trong 8 phút trình bày problem, brute force, pattern signal, invariant, algorithm, correctness, complexity và edge cases; đạt ít nhất 16/20 rubric.

Kết quả cuối là `PASS`, `PARTIAL` hoặc `FAIL` dựa trên evidence, không dựa trên số giờ hay cảm giác.

## Baseline và routing

Baseline Ngày 1 dùng Matched Form A trong `ASSESSMENTS.md`; cùng cấu trúc và rubric với Final Form B. Không mở `ASSESSMENT_KEYS.md` trước khi khóa code, answers, complexity và audio.

- `≥70`: giữ workload, tăng tỷ lệ Medium và giảm scaffolding.
- `40–69`: track chuẩn.
- `<40`: giữ roadmap và tổng thời gian nhưng dùng input nhỏ, trace bằng tay và starter tests trong 10 ngày đầu; không đưa code skeleton của algorithm.

Baseline chỉ điều chỉnh scaffolding và độ khó bài, không được xóa topic hoặc tự động đánh dấu topic đã biết.

## Problem-selection protocol

- Assessment problems được khóa trong `ASSESSMENTS.md`; không thay bằng bài quen hoặc bài dễ hơn.
- Với daily problems, trước khi đọc statement phải ghi source, problem ID, difficulty do platform công bố và topic pool của ngày.
- Candidate pool gồm toàn bộ bài public, chưa giải, khớp topic tag của ngày và difficulty quota tại `PROBLEM_SOURCE`. Sắp theo problem ID tăng dần rồi chọn zero-based index `((baseline_score + day_number) mod candidate_count)`. Trước khi giải, lưu filter, ordered candidate IDs, candidate count và index vào evidence để lựa chọn có thể replay dù platform thay đổi.
- Bài đã từng submit, đọc editorial hoặc xem solution trong sáu tháng gần nhất không được gọi là unseen; có thể dùng làm retrieval nhưng không tính unique cold attempt.
- Difficulty tự gán không được tính vào Medium gate. Nếu platform không công bố difficulty, bài vẫn được tính unique attempt nhưng difficulty là `UNVERIFIED`.
- Không đổi bài sau khi gặp khó. Chỉ được đổi khi statement lỗi, yêu cầu paid access hoặc phụ thuộc kiến thức ngoài roadmap; ghi `SELECTION_EXCEPTION` và lý do.

## Hint policy

- 0–15 phút: tự phân tích examples, constraints và brute force.
- Sau 15 phút: được xem Hint 1 chỉ nêu pattern family.
- Sau 25 phút: được xem Hint 2 nêu invariant/state, không có pseudocode hoàn chỉnh.
- Sau 40 phút: được đọc approach, đóng lại, nghỉ 10 phút rồi tự code từ đầu.
- Mọi hint/solution đã dùng phải ghi vào evidence. Bài đọc full solution không tính là independent `PASS` cho tới khi làm lại cold sau ít nhất 48 giờ.

## Review và recovery

Ngày 7/14/23/29 là review có retrieval, reimplementation và mixed problems. Chỉ sửa kế hoạch tương lai; không sửa evidence cũ. Nếu bỏ lỡ một buổi, tiếp tục buổi kế tiếp theo thứ tự, dùng minimum recovery và chuyển stretch vào backlog; không ghép hai ngày khó thành một buổi.

## Coverage Map — exact roadmap

| Nhóm | Mục bắt buộc | Ngày học chính | Retrieval / transfer |
|---|---|---:|---:|
| Array | RAM | 2 | 3, 7, 30 |
| Array | Static Array | 2 | 3, 7, 30 |
| Array | Dynamic Array | 2 | 7, 14, 30 |
| Array | Big O | 2 | Mọi ngày, 7, 30 |
| Stack & Queue | Stack | 3 | 7, 20, 30 |
| Stack & Queue | Queue | 3 | 7, 20, 28, 30 |
| Hashing | Hash Map | 4 | 5, 11, 29 |
| Hashing | Hash Set | 4 | 5, 13, 29 |
| Hashing | Hash Usage | 4 | 5, 11, 14, 29 |
| Hashing | Hash Implementation | 5 | 7, 23, 30 |
| Two Pointers | Left & Right Pointers | 8 | 14, 29 |
| Two Pointers | Fast & Slow Pointers | 9 | 14, 21, 29 |
| Two Pointers | Same Direction | 9 | 14, 29 |
| Two Pointers | Opposite Direction | 8 | 14, 29 |
| Prefix Sum | 1D Prefix Sum | 10 | 11, 14, 27 |
| Prefix Sum | 2D Prefix Sum | 11 | 14, 27, 29 |
| Prefix Sum | Range Sum Query | 10 | 14, 27 |
| Prefix Sum | Subarray Sum | 11 | 14, 26, 29 |
| Sorting | Insertion Sort | 16 | 17, 23 |
| Sorting | Merge Sort | 16 | 17, 23, 30 |
| Sorting | Quick Sort | 17 | 23, 30 |
| Sorting | Bucket Sort | 17 | 23, 29 |
| Linked List | Singly Linked List | 6 | 9, 21, 23 |
| Linked List | Doubly Linked List | 6 | 7, 23, 30 |
| Sliding Window | Fixed Window | 12 | 14, 29 |
| Sliding Window | Variable Window | 13 | 14, 29, 30 |
| Sliding Window | Maximum / Minimum | 12 | 14, 29 |
| Sliding Window | Substring Problems | 13 | 14, 29, 30 |
| Binary Search | Search Array | 18 | 19, 23, 30 |
| Binary Search | Search Range | 19 | 23, 29, 30 |
| Tree | Binary Tree | 20 | 21, 23, 30 |
| Tree | Binary Search Tree | 21 | 23, 29, 30 |
| Tree | BST Insert / Remove | 21 | 23, 30 |
| Tree | DFS / BFS | 20 | 21, 23, 28, 30 |
| Recursion | Factorial | 15 | 16, 20, 23 |
| Recursion | Fibonacci | 15 | 16, 23, 26, 30 |
| Heap | Heap Properties | 22 | 23, 29 |
| Heap | Push / Pop | 22 | 23, 29, 30 |
| Backtracking | Tree Maze | 24 | 25, 29, 30 |
| Dynamic Programming | 1 Dimension | 26 | 27, 29, 30 |
| Dynamic Programming | 2 Dimension | 27 | 29, 30 |
| Graph | Matrix DFS | 28 | 29, 30 |
| Graph | Matrix BFS | 28 | 29, 30 |
| Graph | Adjacency List | 28 | 29, 30 |
