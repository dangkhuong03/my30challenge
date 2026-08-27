# Error Recycling Ledger

Chỉ ghi lỗi `CRITICAL` hoặc `REPEATED`; không biến mọi lỗi nhỏ thành backlog. Một lỗi chỉ được `CLOSED` sau immediate retry và hai delayed retrieval trong input/tình huống mới.

## Severity

- `CRITICAL`: đổi meaning, làm người nghe hiểu sai hoặc khiến interaction dừng.
- `REPEATED`: cùng pattern xuất hiện ít nhất hai lần.
- `MINOR`: không ảnh hưởng lớn; sửa nhanh nhưng không bắt buộc đưa vào ledger.

## Recycling rule

`FAIL → DIAGNOSE → MODEL → IMMEDIATE RETRY → D+1 → D+3 → NEXT BOSS FIGHT`

- D+1 dùng câu/prompt mới, không đọc lại answer cũ.
- D+3 dùng cùng function trong tình huống khác.
- Boss Fight lấy tối đa một error item đến hạn để tránh overload.
- Nếu delayed retrieval fail, tạo model ngắn hơn và lên lịch lại; không sửa evidence cũ.

| Error ID | First day | Severity | Category | Original evidence | Correct model | Immediate retry | D+1 | D+3 | Boss Fight | Status |
|---|---:|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — | — | NOT_STARTED |

Category gợi ý: `MEANING`, `GRAMMAR`, `CHUNK`, `SOUND`, `HESITATION`, `COMPREHENSION`, `INTERACTION`, `REPAIR`.

## Daily due check

Trước Mission mới, lấy tối đa:

1. một error `D+1`;
2. một error `D+3`;
3. một chunk retrieval đến hạn.

Tổng block recall 3–5 phút và nằm trong Target; không cộng workload.
