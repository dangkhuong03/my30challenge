# Bài học nội bộ theo ngày

Các capsule này đặt trước tài nguyên ngoài để người mới có một mental model ngắn. Chúng không thay thế contract trong `PLAN.md`, không thêm topic ngoài Coverage Map và không tạo thêm workload.

## Lab anatomy bắt buộc cho mọi topic

Mỗi bullet `WHY/WHEN/HOW/PROVE` bên dưới được chạy theo cùng một lab, nằm **bên trong Target**:

1. **Intuition/representation:** vẽ state nhỏ nhất và gọi tên từng field/index/pointer.
2. **Invariant:** viết một câu phải đúng trước và sau mỗi operation.
3. **Hand trace:** chạy 4–8 bước trên input nhỏ, ghi state trước → operation → state sau.
4. **Complexity:** đếm operation theo input; nêu worst/average/amortized khi phù hợp và lý do, không chỉ ghi Big O.
5. **Guided implementation:** điền signature, invariant comment và một operation từ trace; chạy happy path + empty/boundary.
6. **Blank-editor transfer:** đóng mẫu, đổi input/constraint, tự implement và giải thích WHEN/use-avoid.
7. **Error repair:** phân loại lỗi `MODEL`, `INVARIANT`, `BOUNDARY`, `CODE`, `COMPLEXITY`; sửa trace trước rồi mới sửa code.

Nếu chưa trace đúng thì dừng ở guided attempt; không dùng việc chép code để thay blank-editor evidence.

## Worked trace bank theo 15 nhóm

- **Array:** `size=3, capacity=4, [2,5,7,_]`; append `9` không resize, append tiếp buộc cấp 8 ô và copy 4 phần tử. Một resize là O(n), tổng nhiều append cho amortized O(1).
- **Stack & Queue:** với input `A,B,C`, stack pop `C,B,A`; queue dequeue `A,B,C`. Trace front/back chứng minh không shift array.
- **Hashing:** keys `2,7,12` vào capacity 5 cùng bucket; lookup phải so key trong chain/probe, resize phải rehash theo capacity mới.
- **Two Pointers:** sorted `[1,3,4,7]`, target 8; tổng nhỏ thì tăng left, lớn thì giảm right vì order loại được cả vùng candidate.
- **Prefix Sum:** `[2,-1,3]` tạo `[0,2,1,4]`; sum `[1,3)` là `4-2=2`. Prefix `0` loại special case ở biên trái.
- **Sorting:** insertion giữ prefix sorted; merge luôn lấy head nhỏ hơn; quick partition ghi rõ vùng `< pivot`, `unknown`, `>= pivot`; bucket chỉ tuyến tính khi range phù hợp.
- **Linked List:** trước xóa `B` trong `A↔B↔C`, lưu neighbors rồi nối `A.next=C`, `C.prev=A`; test head/tail/one-node để không mất chain.
- **Sliding Window:** fixed window cập nhật bằng add-right/remove-left; variable window chỉ co khi validity monotone. Trace mỗi phần tử vào/ra tối đa một lần.
- **Binary Search:** trên `[1,3,3,7]` dùng interval `[lo,hi)`; mỗi bước giữ transition target trong interval và chứng minh interval giảm.
- **Tree:** DFS stack/recursion giữ path/subtree state; BFS queue giữ frontier theo level. Trace node được enqueue/visit đúng một lần.
- **Recursion:** `factorial(3)` mở `3→2→1` rồi trả `1→2→6`; Fibonacci call tree cho thấy overlap dẫn tới DP.
- **Heap:** min-heap `[2,5,4,9]`, push `1` rồi sift-up; pop đổi root với last rồi sift-down. Shape và order invariant đều phải giữ.
- **Backtracking:** tại mỗi maze cell: choose move → mark → explore → unmark; visited sai scope làm mất branch hợp lệ, thiếu unmark làm state rò.
- **Dynamic Programming:** trước code viết `state, transition, base, order, answer`; `fib` cho 1D, grid paths cho 2D. Mỗi cell chỉ dùng dependency đã tính.
- **Graph:** matrix/grid trace neighbor theo coordinate; adjacency list trace frontier/visited. Mark visited khi enqueue để tránh duplicate; outer loop xử lý disconnected components.

## Ngày 1 — Baseline

Làm đề khóa trước khi học. Mục tiêu là đo cách bạn nhận diện pattern, implement, phân tích complexity và giải thích; không dùng tài liệu để làm đẹp điểm đầu vào.

## Ngày 2 — RAM, Array và Big O

- **WHY:** array đổi địa chỉ liên tiếp thành truy cập theo index nhanh.
- **WHEN:** dùng khi cần random access; tránh insert/delete giữa mảng thường xuyên.
- **HOW:** theo dõi `size`, `capacity`, địa chỉ và invariant phần tử hợp lệ nằm trong `[0, size)`; resize sao chép sang vùng lớn hơn.
- **PROVE/COST:** access O(1), insert giữa O(n), append amortized O(1); đừng nhầm amortized với worst-case của một lần resize.

## Ngày 3 — Stack và Queue

- **WHY:** giới hạn thứ tự lấy phần tử giúp biểu diễn undo/call stack hoặc hàng chờ.
- **WHEN:** Stack cho LIFO, Queue cho FIFO; chọn theo phần tử nào phải được xử lý tiếp.
- **HOW:** invariant của Stack nằm ở `top`; Queue cần `front/back` và không dịch toàn bộ mảng sau mỗi pop.
- **PROVE/COST:** push/pop hoặc enqueue/dequeue O(1) với representation phù hợp; luôn test empty.

## Ngày 4 — Hash Map, Hash Set và Usage

- **WHY:** đổi key thành bucket để lookup trung bình nhanh.
- **WHEN:** Map khi cần key→value/frequency; Set khi chỉ cần membership/uniqueness.
- **HOW:** signal thường là lookup, đếm hoặc phát hiện duplicate; collision vẫn có thể xảy ra.
- **PROVE/COST:** average O(1), worst O(n); không tuyên bố O(1) nếu bỏ qua hash quality/load factor.

## Ngày 5 — Hash Implementation

- **WHY:** hiểu collision và resize giải thích vì sao API hash nhanh nhưng không miễn phí.
- **WHEN:** implement để học contract; trong bài thực tế thường dùng thư viện chuẩn.
- **HOW:** `index = hash(key) mod capacity`, xử lý collision, duy trì load factor và rehash khi resize.
- **PROVE/COST:** sau mọi mutation, mỗi key phải tìm lại được đúng bucket-chain/probe path.

## Ngày 6 — Linked List

- **WHY:** node liên kết cho phép nối/cắt cục bộ mà không dịch các phần tử sau nó.
- **WHEN:** hợp khi đã có node/reference và mutation nhiều; không hợp cho random access.
- **HOW:** Singly giữ `next`; Doubly giữ cả `prev/next`; cập nhật pointer theo thứ tự không làm mất phần còn lại.
- **PROVE/COST:** kiểm tra empty, head, tail, one-node; access O(n), local insert/delete O(1) khi có reference.

## Ngày 7 — Review Foundation

Không học topic mới. Retrieve WHY/WHEN/invariant/cost, reimplement theo seed và dùng lỗi lặp lại để chọn recovery drill.

## Ngày 8 — Opposite Two Pointers

- **WHY:** sorted order hoặc quan hệ hai đầu cho phép loại cả một vùng ứng viên mỗi bước.
- **WHEN:** pair/sum/partition trên dữ liệu có order; không dùng nếu move pointer không loại được vùng nào.
- **HOW:** định nghĩa vùng chưa xét `[left, right]` và lý do di chuyển một đầu là an toàn.
- **PROVE/COST:** mỗi pointer đi tối đa n bước, thường O(n) time và O(1) extra space.

## Ngày 9 — Same Direction và Fast–Slow

- **WHY:** hai tốc độ/vai trò tách vùng đọc–ghi hoặc phát hiện chu kỳ mà không cần hash set.
- **WHEN:** compaction, remove duplicates, linked-cycle.
- **HOW:** nói rõ mỗi pointer đại diện cho gì; đừng chỉ gọi tên `slow/fast`.
- **PROVE/COST:** invariant vùng trước write đã hợp lệ; với cycle, khoảng cách modulo chu kỳ thay đổi có quy luật.

## Ngày 10 — Prefix Sum 1D

- **WHY:** trả nhiều range-sum query bằng cách trả trước chi phí build.
- **WHEN:** dữ liệu chủ yếu tĩnh và có nhiều query tổng đoạn.
- **HOW:** dùng convention `prefix[0]=0`, `prefix[i+1]=prefix[i]+a[i]`; sum `[l,r)` là `prefix[r]-prefix[l]`.
- **PROVE/COST:** build O(n), query O(1), space O(n); giữ nhất quán inclusive/half-open.

## Ngày 11 — Prefix Sum 2D và Subarray Sum

- **WHY:** inclusion–exclusion loại phần đếm thừa; hash-prefix biến tìm subarray thành tìm prefix trước đó.
- **WHEN:** rectangle sum hoặc subarray sum target; không áp sliding window khi số âm phá monotonicity.
- **HOW:** vẽ bốn vùng của công thức 2D; với target `k`, tìm prefix cũ bằng `current-k`.
- **PROVE/COST:** giải thích mỗi cell/rectangle được cộng trừ đúng một lần.

## Ngày 12 — Fixed Sliding Window

- **WHY:** tái sử dụng trạng thái của hai cửa sổ kề nhau thay vì tính lại toàn bộ.
- **WHEN:** độ dài cửa sổ cố định và metric cập nhật được khi add/remove.
- **HOW:** invariant cửa sổ luôn có đúng `k` phần tử trước khi cập nhật đáp án.
- **PROVE/COST:** mỗi phần tử vào và ra một lần, O(n); tránh O(nk) do recompute.

## Ngày 13 — Variable Sliding Window

- **WHY:** co/mở cửa sổ tìm đoạn tối ưu khi validity thay đổi có hướng.
- **WHEN:** substring/subarray với điều kiện monotone khi mở/co; nếu không monotone, cân nhắc kỹ thuật khác.
- **HOW:** mở `right`, cập nhật state, rồi co `left` theo condition chính xác.
- **PROVE/COST:** chứng minh co không bỏ mất candidate hợp lệ tốt hơn.

## Ngày 14 — Review Patterns

Không học topic mới. Với mỗi statement, ghi signal, pattern, invariant và một alternative bị loại trước khi code.

## Ngày 15 — Recursion

- **WHY:** bài toán tự chứa bản nhỏ hơn của chính nó có thể được mô tả trực tiếp.
- **WHEN:** tree/divide-and-conquer/backtracking; tránh nếu không có base case hoặc progress rõ.
- **HOW:** xác định base, lời gọi nhỏ hơn và return contract; trace Factorial rồi cây gọi Fibonacci.
- **PROVE/COST:** dùng induction theo input; time phụ thuộc số node trong call tree, space phụ thuộc chiều sâu stack.

## Ngày 16 — Insertion Sort và Merge Sort

- **WHY:** Insertion duy trì prefix đã sort; Merge chia bài rồi hợp hai dãy sort.
- **WHEN:** Insertion tốt cho input nhỏ/gần sort; Merge cho guarantee O(n log n) và stability.
- **HOW:** recursion của Merge nay dựa trên contract Ngày 15; invariant merge là output chứa phần nhỏ nhất đã tiêu thụ.
- **PROVE/COST:** Insertion O(n²), Merge O(n log n) time và thường O(n) extra space.

## Ngày 17 — Quick Sort và Bucket Sort

- **WHY:** Quick partition in-place; Bucket khai thác domain/range của key.
- **WHEN:** Quick cần pivot strategy; Bucket chỉ hợp khi assumptions về range/distribution cho phép.
- **HOW:** partition invariant phải nói vùng `<`, `=`, `>`; recursive subproblem nhỏ hơn nhờ Ngày 15.
- **PROVE/COST:** Quick average O(n log n), worst O(n²); không gọi Bucket tuyến tính nếu range không bị chặn phù hợp.

## Ngày 18 — Binary Search Exact

- **WHY:** sorted order cho phép bỏ một nửa candidate mỗi bước.
- **WHEN:** exact search trên sorted data hoặc monotone predicate.
- **HOW:** chọn một interval convention và giữ invariant target nếu tồn tại vẫn nằm trong interval.
- **PROVE/COST:** interval giảm nghiêm ngặt nên terminate; O(log n) time.

## Ngày 19 — Binary Search Range

- **WHY:** tìm boundary biến duplicate/range thành một transition point.
- **WHEN:** first/last occurrence, lower/upper bound, answer-space monotone.
- **HOW:** viết predicate và chứng minh false→true hoặc true→false trước code.
- **PROVE/COST:** test empty, absent, all-equal, boundary; complexity O(log n).

## Ngày 20 — Binary Tree DFS và BFS

- **WHY:** tree tạo cấu trúc đệ quy; DFS đi sâu bằng stack, BFS đi theo tầng bằng queue.
- **WHEN:** DFS cho subtree/path; BFS cho level/shortest edge-count trong tree.
- **HOW:** state là node/frontier; xác định traversal order trước khi implement.
- **PROVE/COST:** mỗi node thăm một lần O(n); extra space gắn với height hoặc maximum width.

## Ngày 21 — Binary Search Tree

- **WHY:** invariant trái < node < phải hỗ trợ search và ordered operations.
- **WHEN:** dữ liệu động cần order; tree không cân bằng có thể suy biến.
- **HOW:** insert/search theo comparison; remove tách leaf, one child, two children.
- **PROVE/COST:** inorder vẫn sorted sau mutation; O(h), worst O(n).

## Ngày 22 — Heap

- **WHY:** chỉ duy trì phần tử ưu tiên nhất thay vì sort toàn bộ.
- **WHEN:** priority queue, top-k, scheduler; không dùng để search arbitrary item nhanh.
- **HOW:** complete tree trong array, parent/child index, sift-up/down khôi phục heap property.
- **PROVE/COST:** push/pop O(log n), peek O(1); shape và order đều phải giữ.

## Ngày 23 — Review Structures

Không học topic mới. So sánh operation cost và invariant của sorting, binary search, recursion, tree và heap rồi reimplement theo seed.

## Ngày 24 — Backtracking Tree Maze

- **WHY:** duyệt decision tree khi cần thử lựa chọn và hoàn nguyên.
- **WHEN:** enumerate/path/constraint problems; cần pruning để giảm search khi có điều kiện an toàn.
- **HOW:** choose → explore → unchoose; state và visited phải thuộc đúng scope của branch.
- **PROVE/COST:** mọi solution hợp lệ thuộc một branch và không branch hợp lệ bị loại; worst thường exponential.

## Ngày 25 — Backtracking Consolidation

Không thêm topic. Tập chứng minh pruning an toàn, đếm search space và sửa lỗi state không được hoàn nguyên.

## Ngày 26 — Dynamic Programming 1D

- **WHY:** lưu kết quả subproblem trùng để tránh tính lại như naïve Fibonacci.
- **WHEN:** optimal/counting problem có state nhỏ và overlapping subproblems.
- **HOW:** viết state, transition, base, dependency order và answer trước code.
- **PROVE/COST:** induction theo order; time bằng số state × work/state.

## Ngày 27 — Dynamic Programming 2D

- **WHY:** thêm một dimension khi một biến chưa đủ mô tả subproblem.
- **WHEN:** grid/string/two-index state; tránh dimension không cần thiết.
- **HOW:** nói nghĩa của `dp[i][j]`, boundary row/column và parent nếu cần reconstruct.
- **PROVE/COST:** mỗi cell đúng từ dependencies đã đúng; space có thể tối ưu chỉ khi không cần dữ liệu cũ/reconstruction.

## Ngày 28 — Graph

- **WHY:** graph biểu diễn quan hệ tổng quát; representation quyết định cách duyệt và cost.
- **WHEN:** matrix cho grid, adjacency list cho graph thưa; DFS/BFS theo mục tiêu traversal/shortest unweighted path.
- **HOW:** mark visited đúng thời điểm, xử lý disconnected components; implement matrix DFS/BFS và adjacency-list DFS/BFS trong ngày này.
- **PROVE/COST:** grid O(RC), adjacency list O(V+E); không áp O(V+E) mù cho adjacency matrix.

## Ngày 29 — Readiness Review

Không học topic mới. Bắt buộc đóng hai delayed-retrieval gaps trước khi chọn blocker: (1) cold state-selection cho 1D-vs-2D DP, implement một variant và repair `state/transition/base/order`; (2) reimplement một matrix traversal và một adjacency-list traversal trên inputs mới, repair `visited/disconnected`. Hai block này thay cho mixed tasks khác, không cộng workload. Sau đó dùng `RETRIEVAL_LEDGER.md` chọn blocker còn thiếu.

## Ngày 30 — Final Mock

Làm assessment khóa trước mọi tài liệu. Giữ submission đầu, tuân timebox và chỉ debrief sau khi đã lưu trạng thái kết thúc. Trong phần pattern/explanation sẵn có, gắn ít nhất một artifact DP và một artifact Graph vào `RETRIEVAL_LEDGER.md`; nếu Form B không sample một mục thì mục đó giữ `UNVERIFIED`, không tự nâng PASS.
