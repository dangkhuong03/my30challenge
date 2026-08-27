<!-- Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 -->

# Re-audit UI — English Technical Papers

## Kết luận

`PASS` cho Phase 5 — English đã tách thành **Editorial Calendar overview → Guided Reading detail**, giữ Playful + Editorial và không dùng macrostructure của AI Agent hoặc DSA. Bằng chứng browser nằm tại `../audit-evidence/update/english-technical-papers/`.

| Finding | Status | Evidence | Acceptance |
|---|---|---|---|
| `ENG-UI-001` | `PASS` | `#overview` chỉ có phase/chunk/calendar; `#day/NN` chỉ có một reading desk, lesson flow và evidence. | Overview không render lesson dài/full grid trong detail. |
| `ENG-UI-002` | `PASS` | Day 2 giữ đúng route, title và draft qua refresh, Back và Forward. | Deep-link và context ngày ổn định. |
| `ENG-UI-003` | `PASS` | Fresh `#day/01` render `LESSONS.md` orientation trước `ASSESSMENTS.md`; hai outline entries cùng hiện; key vẫn qua protected-doc rule. | Beginner đọc orientation trước diagnostic, không lộ key. |
| `ENG-UI-004` | `PASS` | Calendar dùng title từng ngày; detail là reading column có “Bắt đầu nhẹ”, chunk due, outline, source rhythm và audio checkpoint. | Blind structure khác DSA catalogue/component và AI reasoning workbench. |
| `ENG-UI-005` | `PASS` | Gate là checkpoint border đầy đủ với prerequisite bằng text; side-stripe không còn là signal chính. | Sequence có thể đọc được bằng text/DOM. |
| `ENG-UI-006` | `PASS` | Header overview được compact; hàng ngày đầu tiên xuất hiện trong first viewport ở 320/375/414 và 1280/1440; action bar chỉ hiện ở detail. | Overview ưu tiên calendar, detail có safe bottom padding. |
| `ENG-UI-007` | `PASS` | Locked day vẫn focus/click được để đọc điều kiện mở; deep-link locked bị guard. | Lock reason truy cập được nhưng lesson không mở. |

## Browser matrix

| Kiểm tra | Kết quả |
|---|---|
| Fresh tại 6 viewport | `PASS`: 30 days, 29 locked, 4 phases, không horizontal overflow, overview/detail tách đúng. |
| Day 1 sequence | `PASS`: orientation → diagnostic; outline có 2 entries; post-assessment content vẫn khóa. |
| Click Day 2, refresh, draft, Back/Forward | `PASS`: giữ `#day/02` và draft. |
| Locked `#day/10` | `PASS`: quay về overview và có lý do mở khóa. |
| Day 30 sau 29 PASS | `PASS`: detail riêng, grid ẩn, action bar hiện. |
| Audio Day 6/16/26 | `PASS`: source load `readyState=4`; click control chuyển sang playing rồi click lần hai pause; target/script đúng ngày hiện trong lesson/exercise. |
| Gate 7 final matrix | `PASS 36/36`: keyboard focus, five statuses, append-only, export-clear-import, invalid import, localStorage failure, reload idempotence, reduced motion và 6 viewport. |

Browser evidence: [`browser-results.json`](../audit-evidence/update/english-technical-papers/browser-results.json).

Final evidence: [`phase7/browser-results.json`](../audit-evidence/update/english-technical-papers/phase7/browser-results.json). Audio Day 6/16/26 đều chuyển playing rồi pause; scaffold mới render đúng trong day flow.
