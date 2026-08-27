<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->

# Workflow audit giao diện và nội dung cho 3 challenge

## 1. Mục đích và ranh giới

Audit ba ứng dụng độc lập:

1. `challenge-ai-agent-system-design`
2. `challenge-data-structures-algorithms`
3. `challenge-english-technical-papers`

Audit trả lời hai câu hỏi tách biệt:

- **Nội dung:** lộ trình có thật sự dạy người mới đạt finish line, hay chỉ là checklist/tóm tắt?
- **Giao diện:** người học có biết hôm nay phải học gì, làm gì, nộp evidence ở đâu và mở ngày tiếp theo thế nào không?

Kiến trúc UI bắt buộc là hai tầng riêng biệt:

1. **Trang tổng quan 30 ngày:** chỉ dùng để xem roadmap, trạng thái và chọn ngày.
2. **Trang chi tiết ngày:** chỉ xuất hiện sau khi người học chọn một ngày; chứa toàn bộ lesson flow của ngày đó.

Không đặt danh sách 30 ngày và toàn bộ nội dung bài học dài cạnh nhau hoặc nối tiếp nhau trong cùng một màn hình như hiện tại.

Workflow này chỉ tạo bằng chứng và đề xuất. Không sửa nội dung nguồn, không đổi logic, không ghi đè progress và không redesign trong pha audit.

## 2. Deliverables

Mỗi challenge nhận hai báo cáo riêng:

- `<challenge>/AUDIT_CONTENT.md`
- `<challenge>/AUDIT_UI.md`

Sau ba audit, tạo một báo cáo tổng hợp:

- `AUDIT_CROSS_CHALLENGE.md`

Báo cáo tổng hợp chỉ ghi vấn đề dùng chung, khác biệt cần giữ và thứ tự sửa; không trộn tiêu chuẩn chuyên môn của ba challenge.

## 3. Quy tắc bằng chứng

Mỗi finding bắt buộc có:

- `ID`: mã ổn định, ví dụ `ENG-CONTENT-001`.
- `Severity`: `CRITICAL`, `MAJOR` hoặc `MINOR`.
- `Status`: `FAIL`, `PASS`, `PENDING` hoặc `BLOCKED`.
- `Where`: file và dòng, hoặc ngày + viewport + trạng thái ứng dụng.
- `Evidence`: nội dung/code quan sát được; không suy đoán ý định.
- `Impact`: người học bị ảnh hưởng thế nào.
- `Fix direction`: hướng sửa một câu, chưa triển khai.
- `Acceptance`: điều kiện kiểm tra lại có thể quan sát được.

Không nâng kiểm tra source tĩnh thành browser `PASS`. Không nâng browser local thành bằng chứng nội dung đúng. Hai nhánh UI và content chỉ hợp nhất ở báo cáo cuối.

## 4. Pha 0 — Freeze và inventory

Thực hiện cho từng thư mục trước khi chấm:

1. Ghi `git status`; phân biệt thay đổi có sẵn với thay đổi do audit.
2. Liệt kê toàn bộ file nguồn, file giao diện, payload nhúng, audio và assessment keys.
3. Xác định authority:
   - challenge contract;
   - daily plan;
   - lessons/exercises;
   - assessments/keys;
   - progress/evidence;
   - coverage map hoặc inventory bắt buộc.
4. Lập sơ đồ: `source markdown → payload → selector → rendered section`.
5. Kiểm tra payload có khớp byte-for-byte với file nguồn không.
6. Ghi các biến chưa đóng băng như baseline, ngôn ngữ code, thời lượng hoặc session type là `PENDING`; không tự điền.

**Gate 0:** chỉ tiếp tục khi biết file nào là authority và file nào chỉ là bản sao để hiển thị.

## 5. Pha 1 — Audit contract 30 ngày

Áp dụng chung:

- Có đúng một primary outcome và finish line đo được.
- Baseline phù hợp với trình độ đầu vào và so sánh được với final.
- Có progression, retrieval/application và review ít nhất mỗi 7 ngày.
- Workload tăng hợp lý; minimum là phiên phục hồi thật, không phải target trá hình.
- Mỗi ngày có đủ `Outcome`, `Minimum`, `Target`, `Done when`, `Evidence`, `Stretch`.
- `Done when` kiểm tra năng lực, không chỉ kiểm tra “đã đọc/đã xem”.
- Stretch không trở thành điều kiện PASS ẩn.
- Dependency hợp lệ: không yêu cầu kỹ năng trước khi kỹ năng nền đã được dạy.
- Assessment không làm lộ đáp án trước attempt và không tự nhận là bằng chứng độc lập.
- Không có ngày bị quá tải do cộng ngầm lesson, resource và assessment ngoài timebox.

**Gate 1:** lập dependency map 30 ngày và danh sách các ngày `overloaded`, `under-taught`, `premature` hoặc `unmeasurable`.

## 6. Pha 2 — Audit nội dung theo từng challenge

### 6.1 AI Agent System Design

Authority đặc thù: `COVERAGE_MAP.md`, `LESSONS.md`, `PLAN.md`, `ASSESSMENTS.md`, `ASSESSMENT_KEYS.md`.

Tiêu chuẩn riêng:

- Bao phủ đủ semantic requirements của 118 câu, không chỉ khớp số lượng hoặc từ khóa.
- Bài học đi theo chuỗi: **concept → mechanism → assumptions → trade-offs/failure modes → worked reasoning → transfer task**.
- Câu định lượng có derivation, unit/scale check và sanity check.
- Câu thiết kế buộc nêu requirement, constraints, architecture, data/control flow, observability, safety, evaluation và trade-off.
- Phân biệt rõ fact, heuristic, design choice và assumption.
- Bài tập dùng tình huống mới cùng họ năng lực; không dán cứng vào đề nguồn.
- Assessment kiểm tra giải thích, tính toán, chứng minh và thiết kế; không chỉ recall.
- Coverage map nối được hai chiều: requirement → lesson/day và day → assessment evidence.

### 6.2 Data Structures & Algorithms

Authority đặc thù: roadmap khóa trong `CHALLENGE.md`, `PLAN.md`, `LESSONS.md`, assessments và final forms.

Tiêu chuẩn riêng:

- Giữ đúng 15 nhóm và 44 mục bắt buộc; kiểm tra tên, thứ tự và độ sâu, không chỉ đếm.
- Mỗi topic dạy theo **WHY → intuition → representation/invariant → operations → hand trace → complexity → WHEN → implementation → transfer problem**.
- Implementation quan trọng có blank-editor test, không dựa vào việc chép code.
- Complexity gồm worst/average/amortized khi phù hợp và giải thích vì sao.
- Pattern practice bắt người học chọn kỹ thuật từ dấu hiệu bài toán, không gắn sẵn nhãn pattern.
- Bài luyện có progression Easy → Medium và có bài mixed practice không báo trước chủ đề.
- Tree, binary search, backtracking, DP và graph nhận nhiều vòng học–luyện–review hơn topic nền.
- Interview explanation kiểm tra clarification, brute force, optimized approach, invariant, complexity và edge cases.
- Không chấm PASS khi chưa khóa `LANGUAGE`, `PROBLEM_SOURCE`, `SESSION_TYPE` và `NORMAL_MINUTES`.

### 6.3 English Technical Papers

Authority đặc thù: `LESSONS.md`, `EXERCISES.md`, `CHUNKS.md`, `PRACTICE_PAPER.md`, assessments và audio.

Tiêu chuẩn riêng:

- Thiết kế thật sự dành cho mức tự báo cáo band 1.0; không giả định đã hiểu thuật ngữ ngữ pháp bằng tiếng Anh.
- Lesson đi theo **mục tiêu nhỏ → giải thích tiếng Việt → mẫu ngắn → noticing → guided practice → independent attempt → feedback/error repair → evidence**.
- Reading và speaking được scaffold riêng trước khi tích hợp; không suy điểm speaking từ reading.
- Speaking tăng từ sentence frames và thời lượng rất ngắn lên 2–3 phút; không nhảy cấp.
- Passage tăng dần về độ dài, mật độ từ và cấu trúc; lượng từ mới không vượt quá khả năng xử lý của beginner.
- Chunk bank tách production, recognition và backlog; có retrieval D-2/D-7 thật sự.
- Audio tồn tại, phát được, có transcript/target rõ và khớp đúng ngày.
- Bài tập kiểm tra meaning, paraphrase, paper moves và intelligibility; không biến thành bài IELTS giả lập.
- Day 30 so sánh được với reading anchor đầu kỳ và đo thêm integrated outcome mà không đánh tráo baseline.

**Gate 2:** mỗi challenge có coverage/dependency table và finding nội dung riêng; không dùng kết luận của challenge này cho challenge khác.

## 7. Pha 3 — Audit kiến trúc hai trang và lesson flow

### 7.1 Trang tổng quan 30 ngày

Trang tổng quan phải:

- Hiển thị đủ 30 ngày và trạng thái của từng ngày.
- Cho biết ngày hiện tại, tổng tiến độ và phase đang học.
- Phân biệt rõ `LOCKED`, `AVAILABLE`, `IN_PROGRESS`, `PARTIAL`, `BLOCKED`, `SKIPPED` và `PASS`.
- Cho phép mở ngày hiện tại và các ngày đã mở khóa.
- Không render lesson, exercise, assessment, resource hoặc form evidence đầy đủ trên trang này.
- Không yêu cầu người học cuộn qua hero dài mới thấy danh sách ngày.
- Giữ roadmap dễ quét trên mobile; không tạo nested scroll cho day grid.

### 7.2 Điều hướng từ tổng quan sang chi tiết ngày

Khi click một ngày hợp lệ:

- Chuyển sang một **page/view chi tiết riêng**, không chỉ cuộn xuống section bên dưới.
- URL hoặc hash phải phản ánh ngày đang mở, ví dụ `#day/06`, để refresh và nút Back không làm mất ngữ cảnh.
- Ngày bị khóa không được mở; giao diện giải thích ngắn gọn điều kiện mở khóa.
- Progress và draft đã nhập phải được giữ nguyên khi đi–về giữa hai trang.
- Nút Back/“Tất cả ngày” phải đưa người học về đúng vị trí và trạng thái của trang tổng quan.

Việc triển khai có thể vẫn dùng một `index.html` với hai application views, nhưng acceptance yêu cầu hai màn hình và hai trạng thái điều hướng tách biệt. Chỉ ẩn day grid bằng CSS khi cuộn xuống không được tính là đạt.

### 7.3 Trang chi tiết ngày

Trang chi tiết chỉ hiển thị ngữ cảnh của ngày đã chọn:

1. Breadcrumb hoặc nút quay lại trang 30 ngày.
2. Ngày, phase, trạng thái và timebox.
3. Việc cần làm ngay bây giờ.
4. Lesson.
5. Guided/independent practice.
6. Assessment hoặc done test.
7. Resource bổ trợ đúng vai trò.
8. Form evidence/progress.
9. Nút ngày trước/ngày tiếp theo theo rule mở khóa.

Không lặp toàn bộ day grid trong trang chi tiết. Có thể hiển thị số ngày hiện tại và điều hướng trước/sau dạng compact.

### 7.4 Kiểm tra lesson flow

Với từng ngày đại diện `1, 2, 7, 14, 21, 28, 30`, kiểm tra thứ tự hiển thị:

1. Người học có thấy ngay **việc cần làm bây giờ** không?
2. Contract có lấn át phần giảng dạy không?
3. Lesson, exercise, resource, assessment và progress có được phân vai rõ không?
4. Assessment gate có giải thích rõ thứ tự và vẫn cho phép truy cập nội dung hợp lệ không?
5. Có một đường đi liền mạch: `30-day overview → Day detail → Learn → Practice → Check → Record → Next day/Overview` không?
6. Nội dung dài có mục lục, anchor hoặc progressive disclosure phù hợp không?
7. Đáp án bị khóa đúng lúc nhưng không tạo dead end không?

Ghi riêng lỗi **navigation architecture**, **content architecture** và **visual styling**; không dùng màu sắc để che một flow sai.

## 8. Pha 4 — Audit giao diện tĩnh

Tiêu chuẩn chung:

- Hierarchy, typography, line length, spacing và density hỗ trợ đọc lâu.
- Fixed/sticky elements không che heading, form, footer hoặc nút chuyển ngày.
- Chỉ một scroll owner chính trên mobile; nested scroll phải có lý do rõ.
- Không horizontal scroll, clipping hoặc vùng không thể chạm tới.
- Tabs, day grid, form, tables, code blocks và audio có trạng thái focus/disabled/error/success rõ.
- Contrast, semantic headings, labels, landmarks và keyboard order hợp lệ.
- Không có các dấu hiệu AI-template: card-in-card vô nghĩa, centered-everything, eyebrow lặp lại, icon-tile rập khuôn, token ngẫu hứng, clickable text xuống hai dòng hoặc ba trang chỉ là đổi màu cùng một template.
- Trang tổng quan và trang chi tiết phải có hierarchy khác nhau theo nhiệm vụ; không được là cùng một canvas chỉ bật/tắt vài section.
- Fixed action bar trên trang chi tiết không được che nội dung; trang tổng quan không cần action bar “Ngày tiếp theo” khi chưa chọn ngày.

Định hướng phải giữ:

- **English:** Playful + Editorial, ấm và dễ tiếp cận nhưng vẫn đọc được tài liệu dài.
- **AI Agent:** Technical, ưu tiên reasoning map, evidence và system relationships.
- **DSA:** Technical, ưu tiên execution flow, code/trace/complexity; phải khác cấu trúc AI Agent chứ không chỉ khác màu.

## 9. Pha 5 — Browser và interaction matrix

Chạy từng challenge ở trạng thái sạch và các trạng thái có kiểm soát:

### Viewports

- Mobile: `320`, `375`, `414` px.
- Tablet: `768` px.
- Desktop: `1280×720`, `1440×900`.
- Kiểm tra cả màn hình thấp và trang rất dài, không chỉ thay đổi width.

### States

- Fresh localStorage.
- Trang tổng quan 30 ngày ở trạng thái fresh.
- Mở một ngày hợp lệ rồi dùng Back để quay lại tổng quan.
- Refresh trực tiếp tại URL/hash của trang chi tiết ngày.
- Thử mở trực tiếp URL/hash của một ngày đang bị khóa.
- Day 1 chưa bắt đầu.
- Assessment day chưa mở khóa.
- `IN_PROGRESS`, `PARTIAL`, `BLOCKED`, `SKIPPED` và `PASS`.
- 29 ngày PASS, đang ở Day 30.
- Dữ liệu form dài, evidence dài và tiêu đề dài.
- Refresh, đóng/mở lại, export/import và localStorage lỗi nếu có thể mô phỏng an toàn.

### Interactions

- Chọn ngày từ trang tổng quan và xác minh đã chuyển sang view chi tiết riêng.
- Quay lại trang tổng quan, giữ nguyên vị trí, trạng thái và draft.
- Dùng browser Back/Forward và refresh mà không mất day context.
- Điều hướng ngày trước/ngày tiếp theo trong trang chi tiết.
- Chuyển tab, mở tài liệu và quay về đúng bài học/ngày đang xem.
- Assessment gate và protected keys.
- Ghi log, validation PASS và append-only history.
- Mở ngày kế tiếp và trạng thái disabled.
- Audio play/pause trên browser hỗ trợ.
- Keyboard-only, focus-visible và reduced motion.

Mỗi lỗi browser phải kèm viewport, state, thao tác tái hiện và screenshot.

## 10. Pha 6 — Cross-challenge consistency

Chỉ chuẩn hóa những phần mang cùng ý nghĩa:

- Status và màu trạng thái.
- Quy tắc PASS/evidence.
- LocalStorage, export/import và recovery.
- Cách mở ngày tiếp theo.
- Accessibility và responsive baseline.
- Hợp đồng điều hướng `Overview ↔ Day detail` và cách khôi phục day context.

Không chuẩn hóa cưỡng ép:

- Lesson anatomy chuyên môn.
- Visual rhythm và macrostructure.
- Loại evidence.
- Assessment format.
- Density của code, paper hoặc system diagrams.

**Gate 6:** ba ứng dụng phải cùng dễ sử dụng nhưng không được trông như một template đổi màu.

Mỗi challenge có thể thiết kế trang tổng quan và trang chi tiết theo visual language riêng, nhưng cả ba đều phải giữ ranh giới rõ: **overview để chọn ngày; detail để học một ngày**.

## 11. Pha 7 — Xếp hạng và quyết định sửa

Thứ tự ưu tiên:

1. `CRITICAL`: nội dung không truy cập được, mất progress, gate deadlock, assessment invalid, dependency sai làm người mới không thể học.
2. `MAJOR`: lesson chỉ là tóm tắt, flow khó hiểu, overload, responsive/accessibility lỗi hoặc giao diện rõ dấu AI-template.
3. `MINOR`: polish, wording UI, spacing hoặc taste issue không chặn học.

Sau audit, lập remediation backlog theo dependency và effort, nhưng chưa sửa. Người dùng duyệt riêng:

- sửa content architecture;
- sửa nội dung chuyên môn;
- sửa UI/layout;
- hoặc redesign có giới hạn.

Mỗi lần sửa chỉ thay file đã được liệt kê trước, giữ nguyên progress và chạy lại đúng acceptance test của finding.

## 12. Definition of done cho toàn bộ audit

Audit hoàn tất khi:

- Có sáu báo cáo riêng: UI + content cho ba challenge.
- Mỗi finding có evidence và acceptance test.
- Đã kiểm tra đủ ngày đại diện, viewport và application states.
- Đã xác minh trang tổng quan không chứa lesson dài và click ngày mở một view chi tiết riêng.
- Browser Back/Forward, refresh và deep-link ngày không làm mất context hoặc mở sai ngày bị khóa.
- Payload/source integrity có kết luận rõ.
- Không có finding chuyên môn bị trộn giữa các challenge.
- Báo cáo tổng hợp xác định thứ tự sửa nhưng chưa tự ý triển khai.
- Mọi điểm chưa thể xác minh được ghi `PENDING` hoặc `BLOCKED`, không ghi `PASS`.
