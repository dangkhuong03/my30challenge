# Progress Log

Không sửa kết quả cũ; thêm một dòng sau mỗi buổi.

| Buổi | Ngày | Status | Phút | Reading score | Speaking score | Active chunks | Recognition | Listener/ASR | Evidence | Lỗi chính | Next action |
|---:|---|---|---:|---:|---:|---:|---:|---|---|---|---|
| 1 | — | NOT_STARTED | — | — | — | 0 | — | — | — | — | Làm orientation + reading diagnostic |

Status hợp lệ: `IN_PROGRESS`, `PASS`, `PARTIAL`, `SKIPPED`, `BLOCKED`.

## Mission performance log

Ghi một dòng sau `Mission Challenge`. Đây là thước đo hành vi quan sát được; không suy speaking từ reading và không suy năng lực từ việc đã mở bài.

| Day | Mission result | Output duration | Response latency | Support | Interaction turns | Repair result | Meaning score | Evidence |
|---:|---|---:|---:|---|---:|---|---:|---|
| — | NOT_STARTED | — | — | — | — | — | — | — |

- `Mission result`: `PASS`, `PARTIAL` hoặc `RETRY` theo tiêu chí ngày trong `SCAFFOLD_MAP.md`.
- `Output duration`: thời lượng phần nói độc lập; để `N/A` ở ngày chỉ kiểm tra reading.
- `Response latency`: số giây từ lúc nhận câu hỏi đến khi bắt đầu câu trả lời; không tính thời gian người nghe nói.
- `Support`: `S4` full model, `S3` frame + word bank, `S2` keyword notes, `S1` independent.
- `Interaction turns`: số lượt hỏi–đáp có liên quan đến nhiệm vụ, không tính lời chào.
- `Repair result`: `N/A`, `FAILED`, `REPAIRED_WITH_PROMPT` hoặc `REPAIRED_INDEPENDENTLY`.
- `Meaning score`: phần trăm ý bắt buộc được truyền đúng theo PASS criteria của ngày.

Một ngày chỉ được ghi `PASS` khi Mission result đạt chuẩn của ngày và evidence tồn tại. Fluency không bù cho sai meaning; lỗi critical phải đi vào `ERROR_LEDGER.md` và được retry.

## Daily error tags

- `WORD`: thiếu vocabulary/chunk.
- `PARSE`: sai subject/verb/clause.
- `LOGIC`: sai contrast/cause/condition.
- `CLAIM`: làm mạnh hoặc đổi nghĩa source.
- `SPEAK`: thiếu từ hoặc mất structure khi nói.
- `SOUND`: pronunciation làm người nghe/transcript hiểu sai.

## Review template

```text
Review day:
Reading / Speaking / Intelligibility scores:
Active chunks đã dùng được:
Ba lỗi lặp lại:
Root cause:
Keep / Reduce / Add cho ngày tương lai:
Finish line còn khả thi? Evidence:
```

## Boss Fight comparison

| Boss Fight | Mission PASS | Meaning % | Support | Latency | Turns | Independent repair | Recycled errors passed | Evidence |
|---:|---|---:|---|---:|---:|---|---:|---|
| 7 | — | — | — | — | — | — | — | — |
| 14 | — | — | — | — | — | — | — | — |
| 21 | — | — | — | — | — | — | — | — |
| 28 | — | — | — | — | — | — | — | — |
| 30 | — | — | — | — | — | — | — | — |
