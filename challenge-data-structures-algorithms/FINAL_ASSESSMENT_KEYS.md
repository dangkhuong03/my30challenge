# Final Assessment Keys — Do Not Open Before Final Evidence Is Locked

Chỉ mở sau khi toàn bộ Form B code, answers, complexity analysis và audio đã được khóa. Dùng rubric chung trong `ASSESSMENT_KEYS.md`.

## B2 patterns

1. Same-direction two pointers.
2. Fast & slow pointers.
3. 2D prefix sum.
4. Variable sliding window; positivity makes shrinking monotonic.
5. Hash map frequency counting.
6. Binary search lower/upper bounds.
7. Bucket/counting sort.
8. Tree DFS with lower/upper bounds.
9. Backtracking.
10. 1D dynamic programming.
11. Matrix BFS.
12. Adjacency list + DFS/BFS.

## B3 tests and complexity

- `"" → true`
- `"()[]{}" → true`
- `"([{}])" → true`
- `"(]" → false`
- `"([)]" → false`
- `"]" → false`

Expected: stack, O(n) time, O(n) worst-case space.

## B4 tests and complexity

- `[1,1,1], 2 → 2`
- `[1,2,3], 3 → 2`
- `[1,-1,0], 0 → 3`
- `[], 0 → 0`
- `[0,0,0], 0 → 6`
- `[-1,-1,1], 0 → 1`

Expected: prefix sum frequency map initialized with `{0: 1}`; for each running sum `p`, add count of `p-k`, then increment `p`. O(n) expected time, O(n) space.

## I1–I10 locked test requirements

- I1: initial capacity 1; append across at least two resizes; delete first/middle/last; invalid index behavior explicit.
- I2: capacity 3; fill; reject/handle full; dequeue; wrap-around enqueue; drain; empty behavior explicit.
- I3: two keys forced into one bucket; retrieve both; update one; missing key behavior explicit.
- I4: reverse empty/one/three nodes; remove head/middle/tail with previous/next links preserved.
- I5: empty, one, sorted, reverse, duplicate and negative values; result sorted and input multiset preserved.
- I6: empty policy explicit; 1×1; 2×3 matrix; full rectangle, one cell and interior rectangle.
- I7: empty; all smaller/larger; duplicate block; verify half-open return range `[lower, upper)`.
- I8: remove missing, leaf, one child, two children and root; inorder remains sorted.
- I9: empty behavior; push duplicate/negative values; pop returns nondecreasing order until empty.
- I10: isolated source; chain; cycle; disconnected nodes; source distance 0 and unreachable `-1`.
