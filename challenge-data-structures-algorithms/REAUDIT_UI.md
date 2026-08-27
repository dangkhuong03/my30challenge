<!-- Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 -->

# Re-audit UI — Data Structures & Algorithms

## Kết luận

`PASS` cho Phase 4 — DSA đã có hai màn hình độc lập và visual language riêng theo **Catalogue overview → Component Playground detail**. Bằng chứng browser nằm tại `../audit-evidence/update/data-structures-algorithms/`.

| Finding | Status | Evidence | Acceptance |
|---|---|---|---|
| `DSA-UI-001` | `PASS` | Overview chỉ render catalogue 30 ngày; `#day/02` chỉ render detail và action bar, không render day grid. | Overview/detail không còn chung canvas. |
| `DSA-UI-002` | `PASS` | `#day/NN`, refresh, Back/Forward và draft Day 2 đều giữ đúng context; locked `#day/10` quay về `#overview` kèm lý do. | Route và unlock guard hoạt động trong browser. |
| `DSA-UI-003` | `PASS` | Bốn setup value đã khóa trong authority và được hiển thị trên overview: Python 3, LeetCode public, 30 completed sessions, 120 phút. | Day 1 chỉ chạy với cấu hình đã RESOLVED. |
| `DSA-UI-004` | `PASS` | Overview dùng execution catalogue; detail ưu tiên `RUN NOW`, contract, lesson/code/trace và evidence. | DSA khác AI Agent bằng macrostructure, không chỉ token/màu. |
| `DSA-UI-005` | `PASS` | Assessment gate dùng border trạng thái toàn phần; không còn side-stripe decoration. | Gate không dựa vào stripe để tạo hierarchy. |
| `DSA-UI-006` | `PASS` | Action bar chỉ hiện trong day detail; locked days vẫn focus/click được để đọc điều kiện mở nhưng không mở lesson. | Overview không có action bar; lock reason truy cập được. |

## Browser matrix

| Kiểm tra | Kết quả |
|---|---|
| Fresh `320`, `375`, `414`, `768`, `1280×720`, `1440×900` | `PASS`: 30 ngày, 29 locked, 16 phase, không horizontal overflow, action bar ẩn. |
| First actionable day trên mobile | `PASS`: Ngày 01 bắt đầu ở y≈659 trên viewport `320×800`. |
| Click Day 2, refresh, draft, Back/Forward | `PASS`: giữ `#day/02`, title và draft. |
| Locked deep-link | `PASS`: `#day/10` được chặn và giải thích điều kiện mở. |
| 29 ngày PASS → Day 30 | `PASS`: `#day/30`, detail riêng, grid ẩn, action bar hiện. |
| Gate 7 final matrix | `PASS 33/33`: keyboard focus, five statuses, append-only, export-clear-import, invalid import, localStorage failure, reload idempotence, reduced motion và 6 viewport. |

Browser evidence: [`browser-results.json`](../audit-evidence/update/data-structures-algorithms/browser-results.json).

Final evidence: [`phase7/browser-results.json`](../audit-evidence/update/data-structures-algorithms/phase7/browser-results.json). `RETRIEVAL_LEDGER.md` cũng xuất hiện trong Authority rail.
