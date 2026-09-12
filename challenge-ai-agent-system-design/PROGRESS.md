# Progress log

Không sửa kết quả cũ. Mỗi buổi thêm một dòng và liên kết evidence.

| Buổi | Ngày | Trạng thái | Thời gian | Score/Done test | Evidence | Lỗi chính | Next action |
|---:|---|---|---:|---|---|---|---|
| 1 | — | NOT_STARTED | — | Baseline chưa làm | — | — | Làm baseline closed-book |

Trạng thái hợp lệ: `IN_PROGRESS`, `PASS`, `PARTIAL`, `FAIL`, `SKIPPED`, `BLOCKED`. Imported events được giữ append-only nhưng mang verification `imported-unverified`; chỉ event xác minh mới tại chỗ mới có thể mở progression hoặc assessment key.

## Weekly review template

```text
Review số:
Các buổi đã PASS / PARTIAL / SKIPPED / BLOCKED:
Score theo nhóm:
Thay đổi so với baseline:
Ba lỗi lặp lại và root cause:
Giữ / giảm / bỏ / dời:
Finish line còn khả thi? Vì sao:
Điều chỉnh chỉ áp dụng cho các buổi tương lai:
```

## Day 30 final evidence template

Append a new section when the final is actually attempted; never replace the table or prior reviews.

```text
Day 30 status: IN_PROGRESS | PASS | PARTIAL | FAIL | BLOCKED
Evaluator-issued packet ID:
Packet SHA-256 recorded before start:
Prior-exposure declaration:
Start/end and actual minutes:
Immutable original-response reference:
Foundations score /20:
Statistics and modelling score /20:
Reinforcement learning score /20:
Systems and product score /20:
Agent architecture score /20:
Total /100:
M1–M100/P1–P18 mandatory-evidence holes:
Random oral-defense result:
Error taxonomy:
Verdict and exact unmet condition:
Post-closure changed-retry route:
```

Curriculum readiness never pre-populates these fields. Only the learner/evaluator may append observed evidence to `final-day-30.md`; the sealed prompt and key remain outside the repository and browser payload.
