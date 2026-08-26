# Mẫu bài học và mẫu trả lời có khả năng chuyển giao

## Mẫu tạo một bài học

Mỗi bài học phải có đủ các phần sau:

1. **Problem class:** loại vấn đề tổng quát cần giải quyết.
2. **Motivation:** tại sao cách ngây thơ sai hoặc không đủ.
3. **Concept:** định nghĩa chính xác và assumptions.
4. **Mechanism:** từng bước biến input thành output.
5. **Invariant / key insight:** điều phải luôn đúng.
6. **Derivation hoặc causal chain:** không bỏ bước quyết định.
7. **Worked example mới:** khác domain và số liệu của đề nguồn.
8. **Boundary:** khi nào hai lời khuyên tưởng mâu thuẫn thực ra áp dụng ở hai layer khác nhau.
9. **Failure modes:** ít nhất hai cách áp dụng sai.
10. **Use / avoid:** tín hiệu chọn hoặc loại phương pháp.
11. **Transfer drills:** một bài đổi số/assumption, một bài đổi domain.
12. **Teach-back:** giải thích lại trong 90 giây không nhìn tài liệu.
13. **Evidence:** lời giải viết tay, diagram có contracts, bảng tính tay hoặc oral recording.

## Mẫu trả lời proof / derivation

```text
Given và assumptions:
Claim cần chứng minh:
Định lý/công cụ được phép dùng:
Chuỗi suy luận từng bước:
Điểm then chốt/invariant:
Kết luận:
Sanity check hoặc trường hợp biên:
```

Không bắt đầu bằng công thức nhớ được. Trước hết nói vì sao công cụ đó áp dụng. Nếu dùng kỳ vọng, matrix decomposition, likelihood, Bellman operator hoặc inequality, chỉ rõ điều kiện hợp lệ.

## Mẫu trả lời quantitative

```text
Variables + đơn vị:
Assumptions (độc lập, phân phối, stationarity...):
Formula tổng quát:
Thay số có đơn vị:
Kết quả và làm tròn:
Sanity/bounds check:
Điều kết quả chưa chứng minh:
```

## Mẫu short answer phân biệt khái niệm

```text
Định nghĩa một câu:
Cơ chế hai hoặc ba câu:
Boundary/điều kiện:
Ví dụ hoặc phản ví dụ mới:
Hệ quả thực tế:
```

## Mẫu system-design answer

```text
1. Goal, SLO và non-goals
2. Scale, assumptions và unknowns
3. Invariants bắt buộc
4. Component diagram; mọi arrow ghi protocol, payload, trust và retry contract
5. State ownership và source of truth
6. Happy path
7. Failure matrix: failure, detection, recovery, unknown outcome
8. Concurrency, ordering, idempotency và consistency guarantee
9. Security: identity, credentials, network, data flow, authorization
10. Observability và verification/release gate
11. Capacity/cost estimate
12. Trade-offs và phương án bị loại
```

Tên component không được tính là thiết kế nếu thiếu contract và failure semantics.

## Mẫu câu synthesis/trap

Khi hai nguồn có vẻ mâu thuẫn:

1. Viết lại chính xác hai claim, không làm mạnh hơn claim gốc.
2. Xác định chúng nói về layer nào, thời điểm nào và object nào.
3. Tìm invariant chung cần giữ.
4. Đề xuất thiết kế thỏa cả hai.
5. Nêu trường hợp thiết kế không còn hợp lệ.

## Mẫu decision memo

```text
Decision:
Objective và constraint:
Options:
Evidence: causal / observational / assumption
Expected-value hoặc order-of-magnitude model:
Choice và lý do:
Strongest counterargument:
Cheap test để giảm bất định:
Reversal condition — bằng chứng nào sẽ làm đổi quyết định:
```

## Rubric tự chấm mỗi câu (0–4)

- `0`: bỏ trống hoặc sai hướng.
- `1`: nhớ thuật ngữ nhưng không giải thích được cơ chế.
- `2`: đúng ý chính, thiếu assumptions/derivation/failure boundary.
- `3`: đúng và có lý giải; còn thiếu một phần kiểm chứng hoặc trade-off.
- `4`: chính xác, có cơ chế, boundary, sanity check và chuyển giao sang ví dụ mới.

