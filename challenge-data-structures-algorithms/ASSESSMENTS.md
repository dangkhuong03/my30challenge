# Locked Assessments

Không mở form trước ngày sử dụng và không mở `ASSESSMENT_KEYS.md` trước khi đã khóa code, answers, complexity analysis và audio. Nếu Final Form B đã bị xem trước, ghi `CONTAMINATED`; cold-final gate là `BLOCKED` cho tới khi một evaluator độc lập khóa replacement Form C cùng cấu trúc/rubric và keys riêng trước khi người học nhìn thấy.

## Matched-form protocol

Baseline Form A và Final Form B dùng cùng cấu trúc, timebox và rubric:

| Phần | Timebox | Điểm |
|---|---:|---:|
| Hai scoped implementations | 40 phút | 20 |
| 12 pattern scenarios | 20 phút | 24 |
| Một Easy | 25 phút | 14 |
| Một Medium | 45 phút | 24 |
| Complexity audit | chấm từ code/answers | 8 |
| Interview explanation | 10 phút | 10 |
| **Tổng** | **140 phút làm bài** | **100** |

Baseline có thêm tối đa 10 phút để khóa setup. Final dành tối đa 40 phút sau bài thi để chạy locked tests, chấm và ghi evidence; tổng Day 30 không vượt 180 phút.

Quy tắc chung:

- Editor trống; standard library cơ bản được dùng, nhưng không dùng built-in giải thay cấu trúc/algorithm đang được kiểm tra.
- Không autocomplete sinh cả hàm, không snippet, không note, không search và không chạy thử trước khi đã viết xong first attempt.
- Được chạy tests trong timebox. Mọi sửa lỗi sau khi hết giờ được lưu riêng và không thay đổi cold score.
- Mỗi solution phải ghi invariant hoặc state meaning, time complexity, auxiliary space và ít nhất ba edge cases.
- Interview explanation dùng tối đa tám keywords, không đọc script.

## Baseline Matched Form A — Ngày 1

### A1 — Scoped implementations, 40 phút

1. Implement array-backed `Stack` với `push`, `pop`, `peek`, `size`. `pop/peek` trên stack rỗng phải tạo một lỗi có chủ đích hoặc trả sentinel đã ghi rõ.
2. Implement `binary_search(a, target)` trả index của target trong sorted array hoặc `-1`. Phải tự chọn và ghi rõ closed hay half-open interval.

### A2 — Pattern recognition, 20 phút

Với mỗi scenario, ghi: signal → pattern → WHY → một alternative bị loại.

1. Tìm một cặp trong sorted array có tổng bằng target.
2. Xác định linked list có cycle hay không với O(1) extra space.
3. Trả lời nhiều truy vấn tổng đoạn trên immutable array.
4. Tìm tổng lớn nhất của subarray có đúng `k` phần tử.
5. Tìm độ dài substring dài nhất không lặp ký tự.
6. Kiểm tra nhanh phần tử đã xuất hiện và đếm tần suất.
7. Tìm target trong sorted array.
8. Duy trì phần tử lớn thứ `k` khi dữ liệu đến liên tục.
9. Liệt kê mọi đường hợp lệ trong một maze nhỏ.
10. Tìm chi phí nhỏ nhất trong grid khi nhiều đường dùng lại cùng subproblem.
11. Đếm số vùng đất liên thông trong matrix.
12. In binary tree theo từng level.

### A3 — Easy, 25 phút

Cho integer array `nums` và integer `target`, trả về hai index khác nhau có tổng bằng `target`; nếu không có, trả `[-1, -1]`. Nếu có nhiều đáp án, trả cặp được phát hiện đầu tiên khi quét từ trái sang phải. Không được dùng cùng phần tử hai lần.

### A4 — Medium, 45 phút

Cho string `s`, trả độ dài substring liên tiếp dài nhất không chứa ký tự lặp lại. String có thể rỗng và ký tự được so sánh chính xác theo code point/token mà ngôn ngữ chính sử dụng.

### A5 — Interview explanation, 10 phút

Chọn solution A3 hoặc A4. Trình bày: constraints, brute force, bottleneck, pattern signal, invariant, walkthrough, correctness, time/space và edge cases.

Final Form B nằm riêng trong `FINAL_ASSESSMENT.md`. Không mở file đó trước Ngày 30; tách file nhằm giảm nguy cơ vô tình nhìn thấy final khi làm Baseline.

## Deterministic implementation selection

Lấy baseline score nguyên `S` từ 0–100:

- ID thứ nhất: `I((S mod 10) + 1)`.
- ID thứ hai: `I(((S + 5) mod 10) + 1)`.

Hai ID luôn khác nhau. Nếu baseline bị `CONTAMINATED`, dùng `S = 0` và ghi rõ.

| ID | Scoped task |
|---|---|
| I1 | Dynamic Array: `append` có resize và `delete(index)` có shift |
| I2 | Circular Queue: `enqueue`, `dequeue`, wrap-around và empty/full state |
| I3 | Separate-chaining Hash Table: `put`, `get`, update existing key; chưa cần resize |
| I4 | `reverse_singly(head)` và `remove_doubly(node)` |
| I5 | Merge Sort hoàn chỉnh, không dùng built-in sort |
| I6 | 2D Prefix Sum: build table và rectangle query |
| I7 | `lower_bound` và `upper_bound` trên sorted array |
| I8 | BST `remove(key)` xử lý 0/1/2 children |
| I9 | Binary min-heap `push` và `pop` |
| I10 | Adjacency-list BFS trả distance từ source; unreachable là `-1` |

## Final gates

Overall `PASS` yêu cầu đồng thời:

- Tổng ít nhất 75/100.
- Implementations ít nhất 14/20 và locked tests pass cho các core operations.
- Pattern recognition ít nhất 20/24.
- Easy ít nhất 10/14.
- Medium ít nhất 18/24, `H0`, và code pass toàn bộ locked examples/tests.
- Complexity ít nhất 6/8.
- Interview explanation raw score ít nhất 16/20, sau đó scale thành 10 điểm.

Thiếu một gate thì final tối đa là `PARTIAL`, dù tổng điểm trên 75.
