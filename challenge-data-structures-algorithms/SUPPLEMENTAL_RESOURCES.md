# Tài nguyên bổ trợ theo ngày

Các nguồn dưới đây bổ trợ cho roadmap gốc, không thay thế nội dung hay assessment hiện có. Tất cả liên kết miễn phí và được kiểm tra ngày 2026-08-26. Chỉ mở khi đã xác định một lỗ hổng cụ thể, tối đa 15 phút và tính bên trong `Target`; không cộng thêm workload. Với mỗi ngày, chỉ học mục được chỉ ra rồi quay lại implement và giải bài.

## Ngày 1 — Matched baseline và setup

- [MIT 6.006 Syllabus](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/syllabus/): xem prerequisites, learning goals và cách course đo implementation lẫn analysis.
- [How to Solve an Algorithms Problem — MIT 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/477c78e0af2df61fa205bcc6cb613ceb_MIT6_006S20_lec1.pdf): dùng problem-model-output-cost model cho baseline.

## Ngày 2 — RAM, Array và Big O

- [MIT 6.006 Lecture 1](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/477c78e0af2df61fa205bcc6cb613ceb_MIT6_006S20_lec1.pdf): học Word-RAM, static array và running-time analysis.
- [Analysis of Algorithms — Princeton](https://algs4.cs.princeton.edu/14analysis/): tập phân biệt mathematical model, order of growth và empirical observation.

## Ngày 3 — Stack và Queue

- [Bags, Queues, and Stacks — Princeton](https://algs4.cs.princeton.edu/13stacks/): xem API, array/list implementation và amortized resizing.
- [VisuAlgo: Linked List, Stack, Queue](https://visualgo.net/en/list): trace từng push/pop/enqueue/dequeue trước khi tự code.

## Ngày 4 — Hash Map, Hash Set và usage

- [MIT 6.006 Lecture 4: Hashing](https://live.ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/ce9e94705b914598ce78a00a70a1f734_MIT6_006S20_lec4.pdf): học direct access, hash function, collision và load factor.
- [Hash Tables — Princeton](https://algs4.cs.princeton.edu/34hash/): so separate chaining với linear probing.

## Ngày 5 — Hash implementation

- [MIT 6.006 Readings: Hashing Unit](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/readings/): theo lectures hashing, table doubling và open addressing.
- [VisuAlgo: Hash Table](https://visualgo.net/en/hashtable): tạo collision cases rồi dự đoán probe/chain trước animation.

## Ngày 6 — Singly và Doubly Linked List

- [MIT 6.006 Lecture 2: Data Structures](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/mit6_006s20_lec2/): học pointer operations, sequence interface và dynamic array/list trade-off.
- [VisuAlgo: Linked List](https://visualgo.net/en/list): trace edge cases head, tail, empty và single node.

## Ngày 7 — Review Foundation

- [MIT 6.006 Problem Sets](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/assignments/): chọn bài mới về interfaces, hashing hoặc sequences để transfer.
- [Princeton Algorithms Exercises](https://algs4.cs.princeton.edu/13stacks/): dùng creative problems thay vì đọc lại implementation.

## Ngày 8 — Two Pointers: Opposite Direction

- [Two Pointers — USACO Guide](https://usaco.guide/silver/two-pointers): học invariant và điều kiện di chuyển pointer trên sorted input.
- [Binary Search — Princeton](https://algs4.cs.princeton.edu/11model/BinarySearch.java.html): đối chiếu boundary/invariant của pointer interval.

## Ngày 9 — Same Direction và Fast–Slow

- [Floyd’s Cycle Detection — CP-Algorithms](https://cp-algorithms.com/others/tortoise_and_hare.html): đọc proof vì sao fast/slow gặp nhau và tìm cycle entry.
- [Two Pointers — USACO Guide](https://usaco.guide/silver/two-pointers): tập same-direction invariant trên subarray/string.

## Ngày 10 — Prefix Sum 1D và Range Query

- [Prefix Sums — USACO Guide](https://usaco.guide/silver/prefix-sums): derive công thức từ invariant tích lũy và làm range queries.
- [More on Prefix Sums — USACO Guide](https://usaco.guide/silver/more-prefix-sums): dùng phần mở đầu để đối chiếu prefix-difference, indexing và range boundaries.

## Ngày 11 — Prefix Sum 2D và Subarray Sum

- [2D Prefix Sums — USACO Guide](https://usaco.guide/silver/more-prefix-sums): học inclusion–exclusion và coordinate boundaries.
- [Prefix Sums — USACO Guide](https://usaco.guide/silver/prefix-sums): nối prefix-difference với hashmap để xử lý subarray target.

## Ngày 12 — Fixed Sliding Window

- [Sliding Window — USACO Guide](https://usaco.guide/gold/sliding-window): học fixed window, deque và max/min invariant.
- [Stacks and Queues — CP-Algorithms](https://cp-algorithms.com/data_structures/stack_queue_modification.html): xem queue modification cho minimum query.

## Ngày 13 — Variable Window và Substring

- [Two Pointers — USACO Guide](https://usaco.guide/silver/two-pointers): học điều kiện expand/shrink và proof mỗi pointer chỉ đi một chiều.
- [Substring Search — Princeton](https://algs4.cs.princeton.edu/53substring/): phân biệt window constraint với exact pattern matching.

## Ngày 14 — Review Patterns

- [MIT 6.006 Problem Sets](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/assignments/): chọn input mới và bắt buộc viết invariant trước code.
- [VisuAlgo](https://visualgo.net/en): dùng animation chỉ sau khi tự trace để kiểm chứng pointer/state transitions.

## Ngày 15 — Recursion, Factorial và Fibonacci

- [Recursion & Recursive Backtracking — Stanford CS106B](https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1214/sections/section4/): học base case, recursive decomposition và call stack trên bài tập có kiểm thử.
- [Dynamic Programming Unit — MIT 6.006 Readings](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/readings/): dùng Fibonacci để nối recursion, memoization và bottom-up.

## Ngày 16 — Insertion Sort và Merge Sort

- [MIT 6.006 Readings: Sorting](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/readings/): học insertion sort, merge sort và recurrence.
- [Mergesort — Princeton](https://algs4.cs.princeton.edu/22mergesort/): xem top-down/bottom-up, stability và auxiliary space.

## Ngày 17 — Quick Sort và Bucket Sort

- [Quicksort — Princeton](https://algs4.cs.princeton.edu/23quicksort/): học partition invariant, randomization và worst case.
- [Linear-Time Sorting — MIT 6.006 Readings](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/readings/): dùng counting/radix conditions để hiểu khi bucket-style sorting hợp lệ.

## Ngày 18 — Binary Search trên sorted array

- [Binary Search — CP-Algorithms](https://cp-algorithms.com/num_methods/binary_search.html): học loop invariant, half-open intervals và predicate search.
- [Binary Search — Princeton](https://algs4.cs.princeton.edu/11model/BinarySearch.java.html): trace rank implementation và boundary cases.

## Ngày 19 — Lower/Upper Bound và Search Range

- [Binary Search — CP-Algorithms](https://cp-algorithms.com/num_methods/binary_search.html): đọc search on arbitrary predicate và transition point.
- [Binary Search Tree vs Sorted Array — MIT 6.006 Readings](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/readings/): so static search với dynamic ordered set.

## Ngày 20 — Binary Tree DFS và BFS

- [Binary Trees, Part 1 — MIT 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-6-binary-trees-part-1/): học tree terminology, navigation và recursive structure.
- [VisuAlgo: Binary Search Tree](https://visualgo.net/en/bst): trace DFS/BFS order và height/shape effects.

## Ngày 21 — BST Insert và Remove

- [Binary Search Trees — Princeton](https://algs4.cs.princeton.edu/32bst/): học ordered-symbol-table invariant, insertion và deletion.
- [MIT 6.006 Readings: BST](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/readings/): xem BST sort và effect của height.

## Ngày 22 — Heap Push và Pop

- [Priority Queues — Princeton](https://algs4.cs.princeton.edu/24pq/): học binary-heap representation, swim và sink.
- [MIT 6.006 Readings: Heaps](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/readings/): nối heap operations với heap sort và complexity.

## Ngày 23 — Review Sorting, Search, Tree và Heap

- [MIT 6.006 Final Exam with Solutions](https://live.ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/e882f34a3f46aa9862953616f6de1c57_MIT6_006S20_final_sol.pdf): làm câu chọn structure/algorithm trước khi xem solution.
- [Algorithms, 4th Edition — Princeton](https://algs4.cs.princeton.edu/home/): dùng chapter map để so API, invariant và complexity giữa các cấu trúc.

## Ngày 24 — Backtracking Tree Maze

- [Backtracking 1 — Stanford CS106B](https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1206/lectures/backtracking1/): học choose–explore–unchoose, base case và search tree.
- [Recursion and Backtracking — VisuAlgo](https://visualgo.net/en/recursion): trace state restoration và pruning.

## Ngày 25 — Backtracking Consolidation

- [Recursive Backtracking — Stanford CS106B](https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1258/assignments/4-backtracking/): dùng learning goals và problem set để tập pruning, constraint checking và solution enumeration.
- [MIT Mathematics for CS](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/): dùng counting để ước lượng search-space trước khi tối ưu.

## Ngày 26 — Dynamic Programming 1D

- [MIT 6.006 Dynamic Programming Unit](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/readings/): học subproblem, recurrence, dependency order và parent pointers.
- [Dynamic Programming — CP-Algorithms](https://cp-algorithms.com/dynamic_programming/intro-to-dp.html): so top-down, bottom-up và memory optimization.

## Ngày 27 — Dynamic Programming 2D

- [MIT 6.006 Dynamic Programming Unit](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/readings/): đọc string subproblems, edit distance và knapsack.
- [Dynamic Programming Subproblems — MIT 6.006 Lecture 16](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/28461a74f81101874a13d9679a40584d_MIT6_006S20_lec16.pdf): dùng subproblem constraints và dependency grid để kiểm tra state 2D.

## Ngày 28 — Graph Matrix DFS/BFS và Adjacency List

- [Undirected Graphs — Princeton](https://algs4.cs.princeton.edu/41graph/): học adjacency-list API, DFS/BFS và O(V+E).
- [MIT 6.006 Readings: Graph Search](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/readings/): đọc BFS, DFS và representation assumptions.

## Ngày 29 — Readiness Review và Roadmap Transfer

- [MIT 6.006 Course Review](https://live.ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/aa4f264093faf990054cc4820553bb46_MIT6_006S20_lec20.pdf): dùng checklist để retrieve và định vị blocker, không học topic mới.
- [VisuAlgo](https://visualgo.net/en): chỉ mở animation của topic đã học sau khi tự trace để kiểm chứng lỗi trong readiness audit.

## Ngày 30 — Final Mock

- [MIT 6.006 Final Exam with Solutions](https://live.ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/e882f34a3f46aa9862953616f6de1c57_MIT6_006S20_final_sol.pdf): chọn câu chưa làm, bấm giờ, chỉ mở solution sau khi khóa answer.
- [MIT 6.006 Course Review](https://live.ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/aa4f264093faf990054cc4820553bb46_MIT6_006S20_lec20.pdf): audit pattern selection và giới hạn roadmap, không học thêm topic mới.
