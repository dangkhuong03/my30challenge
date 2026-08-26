# Assessment Keys — Do Not Open Before Locking Evidence

File này dùng để chấm sau khi code, answers, complexity analysis và audio đã được khóa.

## Rubric 100

### Implementations — 20

Mỗi task 10 điểm: API/contract 2; core correctness 4; edge cases 2; code clarity/invariant 1; complexity 1. Core tests fail thì task tối đa 5/10.

### Pattern scenarios — 24

Mỗi scenario 2 điểm: đúng pattern 1; signal/WHY/WHEN hợp lý và alternative bị loại 1. Chỉ ghi tên pattern không giải thích được tối đa 1 điểm.

### Easy — 14

Correct approach 3; code correctness 6; edge cases/tests 2; complexity 2; clarity 1. Không chạy đúng locked examples thì tối đa 8/14.

### Medium — 24

State/invariant và approach 7; code correctness 9; edge cases/tests 3; complexity 3; explanation 2. Không chạy đúng locked tests hoặc dùng `H1+` thì không đạt final Medium gate.

### Complexity — 8

Chấm trên hai implementations, Easy và Medium: mỗi artifact 2 điểm cho time + auxiliary space đúng và có lý do. Chỉ nêu Big O không giải thích được tối đa 1/2.

### Interview explanation — raw 20, scale về 10

Restate/constraints 2; brute force/bottleneck 2; pattern + WHEN 3; invariant/state 3; walkthrough 2; correctness 3; complexity 2; edge cases/tests 2; clarity 1. Final cần raw ≥16/20.

## Form A keys

### A1 tests

Stack: empty behavior có chủ đích; push `1,2,3`; peek `3`; pop lần lượt `3,2,1`; size thay đổi đúng; empty sau cùng.

Binary search:

- `[], 3 → -1`
- `[5], 5 → 0`; `[5], 4 → -1`
- `[1,3,5,7], 1 → 0`; target `7 → 3`; target `4 → -1`
- Với duplicate, bất kỳ matching index hợp lệ được chấp nhận vì contract không yêu cầu first/last.
- Expected: O(log n) time, O(1) auxiliary space với iterative implementation.

### A2 patterns

1. Opposite-direction two pointers.
2. Fast & slow pointers.
3. 1D prefix sum / range sum query.
4. Fixed sliding window.
5. Variable sliding window + set/map.
6. Hash set/map usage.
7. Binary search exact match.
8. Heap.
9. Backtracking decision tree.
10. 2D dynamic programming.
11. Matrix DFS hoặc BFS.
12. Binary-tree BFS với queue.

### A3 tests and complexity

- `[2,7,11,15], 9 → [0,1]`
- `[3,2,4], 6 → [1,2]`
- `[3,3], 6 → [0,1]`
- `[1,2], 8 → [-1,-1]`

Expected optimal approach: one-pass hash map, O(n) expected time, O(n) space. O(n²) correct code được điểm correctness nhưng mất approach/complexity points.

### A4 tests and complexity

- `"" → 0`
- `"abcabcbb" → 3`
- `"bbbbb" → 1`
- `"pwwkew" → 3`
- `"abba" → 2`

Expected: variable sliding window with set or last-seen map, O(n) time and O(min(n, alphabet)) space.

Final keys và locked implementation tests nằm riêng trong `FINAL_ASSESSMENT_KEYS.md`. Không mở file đó khi chấm Baseline.
