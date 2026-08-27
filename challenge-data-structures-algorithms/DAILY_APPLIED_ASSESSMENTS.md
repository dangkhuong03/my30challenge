# Daily Applied Assessments

Đây là `Stretch / diagnostic` tùy chọn, không thay thế assessment gốc, không phải điều kiện `PASS` và không cộng thêm ngoài workload đã khóa. Nếu làm, dùng nó thay cho Stretch hoặc một transfer drill trong `Target`. Mỗi ngày dùng input/test mới, không nhìn implementation mẫu khi code. Lưu code, hand-trace, test output, complexity và phần giải thích miệng/viết làm evidence.

Rubric chung: `Correctness`, `Reasoning`, `Transfer`, `Explanation`, mỗi tiêu chí 0–2. PASS khi đạt ít nhất 6/8, không tiêu chí nào bằng 0 và thỏa `Must-pass`. `2` = đúng, có invariant/evidence và xử lý edge cases; `1` = phần lớn đúng nhưng thiếu/lỗi nhỏ; `0` = sai bản chất, học thuộc không giải thích được hoặc không chạy test.

## Ngày 1 — Baseline calibration

- **Task:** Trước từng câu baseline, dự đoán pattern, complexity và confidence; sau khi làm, phân loại lỗi thành concept, recognition, implementation hoặc verification.
- **Deliverable:** answer gốc, prediction–actual table và recovery drill.
- **Must-pass:** không sửa answer gốc; ít nhất một drill nhắm đúng root cause thay vì “làm thêm bài”.

## Ngày 2 — Build an array contract

- **Task:** Tự implement dynamic array tối thiểu với get/set/append/pop/resize; hand-trace capacity và cost qua chuỗi 12 operations mới.
- **Deliverable:** code, tests, trace và amortized-cost explanation.
- **Must-pass:** xử lý empty/out-of-range; phân biệt worst-case append với amortized append và nêu RAM assumptions.

## Ngày 3 — Stack/Queue interchange test

- **Task:** Implement stack và queue từ primitive khác nhau; giải một stream-processing scenario rồi giải thích vì sao đổi LIFO↔FIFO làm sai behavior.
- **Deliverable:** code, operation trace và counterexample.
- **Must-pass:** operation order đúng trên duplicate/empty cases; complexity cho từng API chính xác.

## Ngày 4 — Choose hashing, not by habit

- **Task:** Với ba scenarios mới, chọn map/set/array/sort; implement một solution hashing và một alternative, so time/space/ordering.
- **Deliverable:** decision table, code và benchmark nhỏ.
- **Must-pass:** key/equality semantics rõ; không tuyên bố O(1) tuyệt đối mà thiếu average/worst-case condition.

## Ngày 5 — Hash table under collision

- **Task:** Implement chaining hoặc open addressing kèm resize; dùng adversarial keys tạo collisions, deletion và rehash.
- **Deliverable:** code, bucket/probe traces và load-factor tests.
- **Must-pass:** lookup còn đúng sau collision/delete/resize; giải thích termination và expected complexity.

## Ngày 6 — Pointer surgery

- **Task:** Implement insert/delete/reverse cho singly list và một operation cần doubly list; vẽ pointer state trước/sau trên empty, one-node và middle cases.
- **Deliverable:** code, diagrams và invariant list.
- **Must-pass:** không mất node/cycle ngoài ý muốn; head/tail/prev/next nhất quán sau mọi edge case.

## Ngày 7 — Foundation transfer

- **Task:** Giải một bài mới có thể dùng array, hash hoặc linked structure; viết hai candidates trước khi code và chọn bằng constraints.
- **Deliverable:** pattern decision, implementation, tests và 3-minute explanation.
- **Must-pass:** solution chạy đúng hidden-style edge cases; lựa chọn structure được bảo vệ bằng time/space và required operations.

## Ngày 8 — Opposite-pointer invariant

- **Task:** Giải một sorted-array pair/triple condition mới; viết invariant về vùng đã loại trước code và tạo counterexample cho greedy move sai.
- **Deliverable:** invariant, hand-trace, code và complexity.
- **Must-pass:** mỗi pointer move bảo toàn invariant; duplicates/no-solution được test.

## Ngày 9 — Same-direction or fast–slow

- **Task:** Giải một compaction/window problem bằng same-direction và một cycle problem bằng fast–slow; derive meeting/entry logic.
- **Deliverable:** hai traces, code và proof sketch.
- **Must-pass:** in-place boundary đúng; cycle/no-cycle/single-node đều pass và không dùng extra set cho fast–slow task.

## Ngày 10 — Prefix contract

- **Task:** Implement immutable 1D range-sum API với indexing convention tự chọn; trả lời batch queries và chứng minh formula.
- **Deliverable:** API, prefix table, tests và proof.
- **Must-pass:** empty/full/single-index ranges đúng; preprocessing/query time và space được phân tích riêng.

## Ngày 11 — Inclusion–exclusion transfer

- **Task:** Implement 2D range sum rồi giải subarray-target mới bằng prefix+hash; hand-trace negative values.
- **Deliverable:** 2D formula diagram, code và traces.
- **Must-pass:** không off-by-one ở borders; subarray solution không giả định nonnegative khi input cho phép âm.

## Ngày 12 — Fixed-window state

- **Task:** Giải fixed-window aggregate và sliding max/min; nêu state thêm/bớt khi cửa sổ dịch một bước.
- **Deliverable:** state-transition trace, code và deque invariant nếu dùng.
- **Must-pass:** mỗi element vào/ra đúng số lần theo analysis; k=1, k=n và invalid k được xử lý.

## Ngày 13 — Variable-window validity

- **Task:** Giải substring/subarray constraint mới; định nghĩa chính xác khi expand, khi shrink và vì sao bỏ left không mất optimum.
- **Deliverable:** invariant, trace, code và counterexample cho một rule sai.
- **Must-pass:** repeated characters/empty answer đúng; O(n) claim được chứng minh bằng monotonic pointer movement.

## Ngày 14 — Pattern discrimination

- **Task:** Với 8 problem statements ngắn mới, chọn two pointers/prefix/window/hash hoặc “none”; code hai bài dễ nhầm nhất.
- **Deliverable:** classification table, reasons, code và failed alternative.
- **Must-pass:** ít nhất 6/8 classification có reason hợp lệ; hai implementation pass edge tests.

## Ngày 15 — Recursion cost model

- **Task:** Implement factorial, naïve Fibonacci, memoized và iterative Fibonacci; vẽ call tree nhỏ và đo call counts.
- **Deliverable:** code, recurrence/call tree và stack-space analysis.
- **Must-pass:** base cases đúng; giải thích chính xác vì sao memoization đổi số subproblems nhưng recursion vẫn dùng stack.

## Ngày 16 — Stable divide-and-conquer

- **Task:** Implement insertion và merge sort không nhìn mẫu; test nearly-sorted, reverse, duplicates; đo comparisons nhỏ.
- **Deliverable:** code, merge trace, recurrence và stability evidence.
- **Must-pass:** cả hai sort đúng; merge sort recurrence/space đúng và stability được chứng minh bằng tagged duplicates.

## Ngày 17 — Partition and distribution assumptions

- **Task:** Implement quicksort partition và bucket/counting-style sort cho domain phù hợp; tạo input phá naïve pivot và input phá bucket assumption.
- **Deliverable:** code, partition invariant và decision table.
- **Must-pass:** partition terminate với duplicates; linear-time claim chỉ xuất hiện khi range/distribution assumptions rõ.

## Ngày 18 — Binary-search invariant

- **Task:** Implement exact search bằng half-open interval; trace 6 edge cases và viết predicate version.
- **Deliverable:** invariant, code, traces và termination argument.
- **Must-pass:** empty/one-element/not-found/boundaries đúng; interval giảm mỗi vòng và không overflow midpoint theo ngôn ngữ dùng.

## Ngày 19 — Search the boundary

- **Task:** Implement lower_bound, upper_bound và first/last occurrence từ một predicate template; áp dụng vào một answer-space problem mới.
- **Deliverable:** four functions/traces và monotonicity proof.
- **Must-pass:** duplicates/all-true/all-false đúng; predicate của answer-space thật sự monotone trong domain đã nêu.

## Ngày 20 — Tree traversal semantics

- **Task:** Tự dựng binary tree không cân bằng; implement preorder/inorder/postorder/BFS và giải một property bằng DFS lẫn BFS.
- **Deliverable:** code, expected orders và comparison.
- **Must-pass:** empty/skewed tree đúng; time O(n), auxiliary space được gắn với height/width chứ không nói chung chung.

## Ngày 21 — BST mutation

- **Task:** Implement insert/search/remove cho BST; bắt buộc test delete leaf, one-child, two-child và root.
- **Deliverable:** code, before/after trees và invariant checks.
- **Must-pass:** inorder vẫn sorted sau mọi mutation; complexity phụ thuộc height và worst case được nêu.

## Ngày 22 — Heap mechanics

- **Task:** Implement binary min-heap push/pop/peek từ array; trace swim/sink và dùng heap giải top-k stream.
- **Deliverable:** code, index math, traces và top-k explanation.
- **Must-pass:** heap property đúng sau từng operation; empty/duplicate values đúng và top-k space là O(k).

## Ngày 23 — Structure selection under constraints

- **Task:** Với 10 operation workloads mới, chọn sorted array/BST/heap/hash; code hai workloads có trade-off trái ngược.
- **Deliverable:** operation-cost matrix, code và interview explanation.
- **Must-pass:** ít nhất 8/10 lựa chọn hợp lý; average/worst/amortized không bị trộn.

## Ngày 24 — Backtracking state machine

- **Task:** Giải maze/tree-search mới bằng choose–explore–unchoose; vẽ recursion tree và visited/state restoration.
- **Deliverable:** code, search tree và pruning rule.
- **Must-pass:** không loop; state được hoàn nguyên đúng giữa branches và một valid path/không-path case đều pass.

## Ngày 25 — Prune without losing solutions

- **Task:** Giải một constraint-generation problem mới; so brute force với hai pruning rules và chứng minh một rule safe.
- **Deliverable:** code variants, node counts và proof/counterexample.
- **Must-pass:** output set đầy đủ không duplicate; pruning safe không loại solution hợp lệ.

## Ngày 26 — DP 1D from recurrence

- **Task:** Với một optimization/counting problem mới, viết state, transition, base, order và answer trước code; implement top-down và bottom-up.
- **Deliverable:** recurrence sheet, two implementations và table trace.
- **Must-pass:** subproblem đủ thông tin; dependency order đúng và hai versions cho cùng output trên randomized small tests.

## Ngày 27 — DP 2D and reconstruction

- **Task:** Giải grid/string DP mới và reconstruct một optimal solution bằng parent pointers hoặc backtracking table.
- **Deliverable:** state grid, code, reconstructed answer và complexity.
- **Must-pass:** boundary row/column đúng; returned path/sequence đạt đúng optimal score chứ không chỉ tính score.

## Ngày 28 — Representation-aware graph search

- **Task:** Implement DFS/BFS cho matrix grid và adjacency list; chạy cùng reachability idea, so visited timing và complexity.
- **Deliverable:** code, traversal traces và representation table.
- **Must-pass:** mark-visited tránh duplicate work; O(V+E) chỉ dùng cho adjacency list, matrix/grid analysis ghi đúng dimensions.

## Ngày 29 — Readiness transfer

- **Task:** Từ blocker ledger, dùng deterministic seed chọn một implementation đã học để viết lại; sau đó phân loại một mixed Medium và lập final readiness memo.
- **Deliverable:** seeded selection, code/tests, pattern decision và blocker/recovery note.
- **Must-pass:** không học topic mới; implementation pass edge tests và mọi mục còn yếu có recovery action cụ thể trước Final.

## Ngày 30 — Unseen mock and correction

- **Task:** Làm timed mock gồm một Easy và một Medium mới; nói aloud pattern, invariant, complexity, test cases trước code; giữ nguyên submission đầu rồi sửa sau review.
- **Deliverable:** recording/notes, original code, test evidence, error taxonomy và correction patch.
- **Must-pass:** ít nhất một bài chạy đúng; bài còn lại có root-cause analysis cụ thể, correction pass tests và explanation không dựa vào lời giải thuộc lòng.
