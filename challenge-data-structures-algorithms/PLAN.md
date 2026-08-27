# Daily Contract — 30 Days

Đọc `CHALLENGE.md` trước khi bắt đầu. Mỗi ngày phải tạo artifact trong thư mục evidence do người học chọn ở Ngày 1. “Đã xem/đã hiểu” không phải evidence.

`Target action` giả định 120 phút ngày thường. Baseline và review dùng tối đa 150 phút; final tối đa 180 phút. Ngày 25 là consolidation 100 phút và Ngày 29 là readiness review 120 phút. Mỗi problem attempt phải ghi: problem ID, pattern dự đoán trước khi code, hint level, result, complexity và lỗi chính.

Problem distribution để đạt finish line: Ngày 1–7 có ít nhất 1 Medium, Ngày 8–14 thêm ít nhất 4, Ngày 15–23 thêm ít nhất 4, Ngày 24–29 thêm ít nhất 4 và Day 30 có 1 unseen Medium. Tổng cộng tối thiểu 14 Medium attempts; cần ít nhất 8 independent Medium `PASS`. Một bài làm lại không được tính thành unique attempt mới.

| Ngày | Phase | Outcome | Minimum action | Target action | Done when | Evidence | Stretch |
|---:|---|---|---|---|---|---|---|
| 1 | Baseline | Có matched baseline và setup đã khóa | Làm A2 pattern quiz + một implementation | Matched Form A 140' + setup 10'; không học thêm sau bài | Có score /100, evidence khóa và toàn bộ setup fields được chốt | `baseline-day-01.md`, code, audio | Không có stretch trước khi khóa baseline |
| 2 | Foundation | Hiểu RAM, Static/Dynamic Array và Big O | Trace address/index và một lần resize | Model RAM/static array; implement dynamic access/append/insert/delete/resize + 1 Easy | Tests pass; giải thích worst O(n), amortized append O(1), time/space | `day-02.md`, tests | Growth factor trade-off |
| 3 | Foundation | Tự implement Stack và Queue | Implement một cấu trúc | Implement cả hai + 1 Easy; trace underflow/overflow concept | LIFO/FIFO đúng, edge tests pass, nêu use/non-use | `day-03.md`, tests | Queue bằng hai stacks |
| 4 | Foundation | Phân biệt Hash Map, Hash Set và Hash Usage | Map sáu operations sang map/set | Dùng hash giải 1 Easy + 1 Medium; trace key→index→bucket | Nêu đúng signal, collision risk và average/worst cost | `day-04.md`, solutions | Frequency-map interview talk |
| 5 | Implementation | Hiểu Hash Implementation | Vẽ table có collision | Implement hash table với collision + resize; làm lại 1 hash problem | CRUD và resize tests pass; giải thích load factor | `day-05.md`, tests | Open addressing comparison |
| 6 | Implementation | Tự implement Singly/Doubly Linked List | Singly insert/delete | Implement cả hai; reverse singly list; 1 Easy | Pointer invariants và empty/head/tail tests pass | `day-06.md`, tests | LRU node operations |
| 7 | Review 1 | Củng cố Array–Hash–List–Stack/Queue | Retrieval 20 câu | Reimplement 2 mục theo seed; 1 mixed problem; error review | ≥75% retrieval; code không nhìn note; recovery list nếu thiếu | `review-01.md`, code, audio | 20 phút mock explanation |
| 8 | Pattern | Nhận diện Left & Right / Opposite Direction | Trace 2 arrays | 1 Easy + 1 Medium; so sánh với nested loops | Chứng minh invariant vùng đã loại và complexity | `day-08.md`, solutions | Container-style problem |
| 9 | Pattern | Dùng Same Direction và Fast & Slow | Trace remove-duplicates | 1 array compaction + 1 linked-cycle problem | Nêu đúng pointer meaning ở mọi vòng lặp | `day-09.md`, solutions | Find cycle entry |
| 10 | Pattern | Implement 1D Prefix Sum và Range Sum Query | Tạo prefix cho 8 số | Implement helper + 2 range-query problems | Công thức boundary đúng; build/query cost đúng | `day-10.md`, tests | Difference array preview |
| 11 | Pattern | Dùng 2D Prefix Sum và Subarray Sum | Trace một rectangle | Implement 2D helper; 1 rectangle + 1 subarray-sum problem | Inclusion–exclusion và hash-prefix invariant đúng | `day-11.md`, tests | Count submatrices discussion |
| 12 | Pattern | Dùng Fixed Window cho Maximum / Minimum | Trace window size 3 | 1 Easy + 1 Medium fixed-window | Không recompute toàn window; invariant/cost đúng | `day-12.md`, solutions | Monotonic deque preview |
| 13 | Pattern | Dùng Variable Window cho Substring Problems | Trace expand/shrink | 1 Easy + 1 Medium substring | Nêu validity condition và lý do shrink an toàn | `day-13.md`, solutions | Minimum-window attempt |
| 14 | Review 2 | Phân biệt Hash / Pointers / Prefix / Window | Pattern quiz 8 scenarios | Quiz 12 scenarios; 2 mixed problems; reimplement prefix helper | ≥10/12 pattern hoặc có remediation cụ thể; mỗi lựa chọn có WHY/WHEN | `review-02.md`, solutions, audio | One unseen Medium 40' |
| 15 | Foundation | Hiểu Recursion qua Factorial/Fibonacci | Vẽ call stack factorial | Implement factorial, naive Fibonacci và memoized version; 1 problem | Có base/progress/return; phân tích stack và exponential tree | `day-15.md`, traces | Tail-recursion discussion |
| 16 | Implementation | Hiểu Insertion Sort và Merge Sort | Hand-trace cả hai | Implement cả hai từ blank; 1 sorting problem | Sorted/permutation tests pass; stability và cost đúng | `day-16.md`, tests | Bottom-up merge sort |
| 17 | Implementation | Hiểu Quick Sort và Bucket Sort | Partition trace | Implement cả hai; 1 sorting problem | Partition invariant đúng; nêu constraints của bucket sort | `day-17.md`, tests | Randomized pivot experiment |
| 18 | Problem Solving | Binary Search trên sorted array | Trace exact search | Implement closed và half-open template; 2 problems | Không off-by-one; termination và invariant đúng | `day-18.md`, tests | Rotated array |
| 19 | Problem Solving | Binary Search Search Range | Implement lower bound | Implement lower/upper bound; 2 Medium boundary problems | Trả đúng absent/duplicate edges; giải thích answer space | `day-19.md`, solutions, audio | Binary search on answer |
| 20 | Implementation | Binary Tree DFS / BFS | Traverse tree 7 nodes | Implement preorder/inorder/postorder + level order; 1 problem | Output đúng; recursive/iterative costs và queue/stack role đúng | `day-20.md`, tests | Serialize traversal output |
| 21 | Implementation | Binary Search Tree và BST Insert / Remove | Insert 6 keys | Implement search/insert/remove; 1 problem | Xử lý leaf/one child/two children; invariant BST giữ đúng | `day-21.md`, tests | Validate BST iteratively |
| 22 | Implementation | Heap Properties và Push / Pop | Trace sift-up/down | Implement binary min-heap + 1 problem | Heap/order/shape invariants và edge tests pass | `day-22.md`, tests | Heap sort comparison |
| 23 | Review 3 | Tích hợp Sorting–Search–Recursion–Tree–Heap | Reimplement 1 mục theo seed | Reimplement 2 scoped items; 1 mixed problem; oral review | ≥80% tests và complexity; xác định ba lỗi lặp lại | `review-03.md`, code, audio | 30-minute mock interview |
| 24 | Advanced | Hiểu Backtracking như decision tree; giải Tree Maze | Vẽ decision tree nhỏ | Implement maze path search; trace choose→explore→unchoose; 1 problem | State, choices, constraints, base case và undo đúng | `day-24.md`, tests | All paths instead of one |
| 25 | Consolidation | Củng cố Backtracking trước DP | Dry-run một branch | 100': retrieval Tree Maze + 1 Medium decision-tree problem + error repair | Không duplicate/skip state; nêu WHEN, pruning và exponential cost | `day-25.md`, solutions | Không có stretch nếu vượt 100' |
| 26 | Advanced | Hiểu Dynamic Programming 1 Dimension | Viết recurrence Fibonacci | Solve 1 bài 1D DP qua brute force→memo→tabulation + retrieval Fibonacci | State/transition/base/order đúng; nêu space optimization | `day-26.md`, solutions | Reconstruct solution path |
| 27 | Advanced | Hiểu Dynamic Programming 2 Dimension | Fill table nhỏ | Solve 1 bài 2D DP + cold retrieval state của bài 1D | Giải thích cell meaning trước code; table và cost đúng | `day-27.md`, solutions | Rolling-row optimization |
| 28 | Advanced | Graph Matrix DFS/BFS và Adjacency List | Trace 3×4 grid + build list nhỏ | Implement matrix DFS/BFS, adjacency-list builder và DFS/BFS; 1 matrix problem | Visited timing đúng; phân biệt O(RC) và O(V+E) | `day-28.md`, tests | Multi-source BFS |
| 29 | Readiness Review | Transfer toàn roadmap, không học topic mới | Cold DP state-selection + Graph trace | Trong 120': DP 1D/2D retrieval, matrix + adjacency traversal, rồi blocker repair từ ledger; các block này thay mixed tasks khác | Có error repair cho DP và visited/disconnected; ledger không còn mục thiếu lịch retrieval | `review-04.md`, tests, readiness | Không thêm bài nếu còn blocker |
| 30 | Mock Interview | Chứng minh finish line | Làm cold Easy + explanation | Mở `FINAL_ASSESSMENT.md`: 2 deterministic implementations, pattern quiz, cold Easy + Medium, explanation; index DP/Graph evidence đã sampled | Đạt hard gates; mục không được final sample giữ `UNVERIFIED`, không tự nâng PASS | `final-day-30.md`, code, tests, audio | Không có stretch trước khi khóa kết quả |

Day 30 timebox: 40 phút cho hai scoped reimplementations, 20 phút pattern quiz, 25 phút Easy, 45 phút Medium, 10 phút explanation và 40 phút chấm/evidence/debrief = 180 phút. Dừng đúng timebox; code hoàn thành sau giờ không thay đổi cold score.

## Review rubric

Mỗi review chấm 100: concept/WHY 15; WHEN/use-avoid/alternative 15; implementation correctness 20; pattern selection 15; correctness reasoning 15; complexity 10; communication 10.

## Interview explanation frame

1. Restate problem và constraints.
2. Nêu brute force và bottleneck.
3. Chỉ ra pattern signal.
4. Định nghĩa state/invariant.
5. Walk through example nhỏ.
6. Trình bày algorithm và correctness.
7. Phân tích time/space.
8. Nêu edge cases và tests.
