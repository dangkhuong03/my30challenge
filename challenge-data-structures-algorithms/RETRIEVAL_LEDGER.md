# Operational Retrieval Ledger — exact 44-topic inventory

File này sao chép **đúng thứ tự và text** của Coverage Map trong `CHALLENGE.md`; không phải completion evidence. Mỗi artifact phải ở ngày khác nhau, có source pointer tới trace/code/test/explanation thật. Chỉ đổi status thành `VERIFIED` khi First-learn và cả hai retrieval artifact đều tồn tại; không điền dự kiến như evidence.

| Nhóm | Mục bắt buộc | First-learn day | Retrieval 1 day | Artifact 1 | Retrieval 2 day | Artifact 2 | Status |
|---|---|---:|---:|---|---:|---|---|
| Array | RAM | 2 | 3 | — | 7 | — | UNSEEN |
| Array | Static Array | 2 | 3 | — | 7 | — | UNSEEN |
| Array | Dynamic Array | 2 | 7 | — | 14 | — | UNSEEN |
| Array | Big O | 2 | 7 | — | 30 | — | UNSEEN |
| Stack & Queue | Stack | 3 | 7 | — | 20 | — | UNSEEN |
| Stack & Queue | Queue | 3 | 7 | — | 20 | — | UNSEEN |
| Hashing | Hash Map | 4 | 5 | — | 11 | — | UNSEEN |
| Hashing | Hash Set | 4 | 5 | — | 13 | — | UNSEEN |
| Hashing | Hash Usage | 4 | 5 | — | 11 | — | UNSEEN |
| Hashing | Hash Implementation | 5 | 7 | — | 23 | — | UNSEEN |
| Two Pointers | Left & Right Pointers | 8 | 14 | — | 29 | — | UNSEEN |
| Two Pointers | Fast & Slow Pointers | 9 | 14 | — | 21 | — | UNSEEN |
| Two Pointers | Same Direction | 9 | 14 | — | 29 | — | UNSEEN |
| Two Pointers | Opposite Direction | 8 | 14 | — | 29 | — | UNSEEN |
| Prefix Sum | 1D Prefix Sum | 10 | 11 | — | 14 | — | UNSEEN |
| Prefix Sum | 2D Prefix Sum | 11 | 14 | — | 27 | — | UNSEEN |
| Prefix Sum | Range Sum Query | 10 | 14 | — | 27 | — | UNSEEN |
| Prefix Sum | Subarray Sum | 11 | 14 | — | 26 | — | UNSEEN |
| Sorting | Insertion Sort | 16 | 17 | — | 23 | — | UNSEEN |
| Sorting | Merge Sort | 16 | 17 | — | 23 | — | UNSEEN |
| Sorting | Quick Sort | 17 | 23 | — | 30 | — | UNSEEN |
| Sorting | Bucket Sort | 17 | 23 | — | 29 | — | UNSEEN |
| Linked List | Singly Linked List | 6 | 9 | — | 21 | — | UNSEEN |
| Linked List | Doubly Linked List | 6 | 7 | — | 23 | — | UNSEEN |
| Sliding Window | Fixed Window | 12 | 14 | — | 29 | — | UNSEEN |
| Sliding Window | Variable Window | 13 | 14 | — | 29 | — | UNSEEN |
| Sliding Window | Maximum / Minimum | 12 | 14 | — | 29 | — | UNSEEN |
| Sliding Window | Substring Problems | 13 | 14 | — | 29 | — | UNSEEN |
| Binary Search | Search Array | 18 | 19 | — | 23 | — | UNSEEN |
| Binary Search | Search Range | 19 | 23 | — | 29 | — | UNSEEN |
| Tree | Binary Tree | 20 | 21 | — | 23 | — | UNSEEN |
| Tree | Binary Search Tree | 21 | 23 | — | 29 | — | UNSEEN |
| Tree | BST Insert / Remove | 21 | 23 | — | 30 | — | UNSEEN |
| Tree | DFS / BFS | 20 | 21 | — | 23 | — | UNSEEN |
| Recursion | Factorial | 15 | 16 | — | 20 | — | UNSEEN |
| Recursion | Fibonacci | 15 | 16 | — | 23 | — | UNSEEN |
| Heap | Heap Properties | 22 | 23 | — | 29 | — | UNSEEN |
| Heap | Push / Pop | 22 | 23 | — | 29 | — | UNSEEN |
| Backtracking | Tree Maze | 24 | 25 | — | 29 | — | UNSEEN |
| Dynamic Programming | 1 Dimension | 26 | 27 | — | 29 | — | UNSEEN |
| Dynamic Programming | 2 Dimension | 27 | 29 | — | 30 | — | UNSEEN |
| Graph | Matrix DFS | 28 | 29 | — | 30 | — | UNSEEN |
| Graph | Matrix BFS | 28 | 29 | — | 30 | — | UNSEEN |
| Graph | Adjacency List | 28 | 29 | — | 30 | — | UNSEEN |

## Audit rule

- `UNSEEN`: chưa có first-learn evidence; `LEARNED`: có first-learn; `RETRIEVED_ONCE`: có một cold artifact; `VERIFIED`: đủ hai cold artifacts ở hai ngày khác nhau.
- Artifact đọc full solution hoặc dùng `H3` không tính cold cho tới khi làm lại sau ít nhất 48 giờ.
- Ngày 29 ưu tiên mọi hàng chưa đủ lịch/evidence, đặc biệt DP và Graph; Ngày 30 chỉ index phần thật sự được Form B sample.
- Báo cáo finish line phải đếm 44/44 hàng từ file này và liệt kê hàng còn thiếu; không suy PASS từ kế hoạch.
