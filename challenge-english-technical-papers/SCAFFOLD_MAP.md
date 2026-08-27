# Daily Mission Map — 30 Days

File này đặt **performance mission** lên trước content. `LESSONS.md`, `EXERCISES.md`, audio và paper là input/practice để hoàn thành mission, không phải đích cuối. Mọi bước nằm trong timebox của `CHALLENGE.md`; không cộng thêm workload.

## Cách chạy một ngày

1. `Previous Recall` 3–5 phút: một chunk đến hạn + tối đa một error D+1/D+3.
2. `Input → Notice → Imitate`: dùng lesson/fixed exercise; key chỉ mở sau attempt.
3. `Recall`: đóng source/model và gọi lại target language.
4. `Produce → Interact`: tạo output độc lập rồi xử lý follow-up/misunderstanding.
5. `Feedback → Retry`: ưu tiên `CRITICAL → REPEATED → MINOR`; correction chưa xong cho tới khi produce lại.
6. Ghi evidence, support `S4/S3/S2/S1`, latency, turns và error due vào ledger.

Nếu không có partner, dùng AI/voice partner chỉ để phát prompt và follow-up; không cho AI viết answer. Nếu phải học solo, xáo trộn prompt, ghi recording uncut và đánh dấu interaction evidence là `SELF-SIMULATED`, không nâng thành independent listener evidence.

## Ngày 1 — Safety decision from English input

- **Mission / Why:** đọc một workflow ngắn để quyết định limits và hành động cần human approval; đây là việc cần khi đọc technical requirement.
- **Required ability + support:** reading only, `S4`; chọn/đánh dấu được phép, không speaking và không suy speaking score.
- **Input + Target language:** orientation + Reading Diagnostic A; notice `time limit`, `step limit`, `human approves`, `if ... unclear`.
- **Imitate / Controlled:** cùng một mẫu tiếng Việt, tập nối một English phrase với `limit / approval / unclear`.
- **Recall + Reuse:** đóng hướng dẫn, viết lại hai labels English đã nhận ra; chưa có chunk due.
- **Production:** tạo decision note: `Topic`, `Two limits`, `Needs approval`, `Unclear outcome action`.
- **Interaction:** không bắt buộc; Day 1 không dùng reading để suy speaking.
- **Feedback & Retry:** khóa Form A trước khi xem key; tag `MEANING/GRAMMAR/VOCAB`, sửa một decision item bằng source pointer.
- **Mission Challenge / PASS:** topic, hai limits và approval action phản ánh source; có score/error tags; answer gốc không bị sửa.
- **Evidence:** `baseline-day-01.md`; ghi support và blocker nếu instruction chưa hiểu.

## Ngày 2 — Explain what a workflow does

- **Mission / Why:** giải thích cho đồng đội một agent/tool đơn giản đang làm gì.
- **Required ability + support:** 8 câu ngắn, `S4→S3`; dùng frames, không full script ở take cuối.
- **Input + Target language:** Lesson/D02; chunks Group 1; notice finite verb và actor trong `X is/uses/causes/depends on Y`.
- **Imitate / Controlled:** parse 5 câu, substitute 4 frames và shadow một model ngắn.
- **Recall + Reuse:** đóng lesson, gọi lại 2 chunks; chưa có D-2/D-7.
- **Production:** nói 8 câu mới mô tả workflow.
- **Interaction:** partner hỏi hai câu `What does X do? / What does it use?`; trả lời không đọc.
- **Feedback & Retry:** sửa trước lỗi đổi actor/action; record lại 2 câu sai và answer follow-up.
- **Mission Challenge / PASS:** parse ≥12/15, ≥6/8 câu hiểu được, 2 answers đúng trọng tâm.
- **Evidence:** `day-02.md` + audio; ghi support, duration, latency và error ID nếu có.

## Ngày 3 — Describe the right component

- **Mission / Why:** mô tả một system/component đủ rõ để người nghe chọn đúng object.
- **Required ability + support:** 8–10 câu, `S3`; frames + noun-phrase card.
- **Input + Target language:** Lesson/D03; Group 2; notice head, modifier, article và number.
- **Imitate / Controlled:** phân tích 10 phrases, thay modifier trong ba model sentences.
- **Recall + Reuse:** Group 1 due nếu có; không nhìn source, reconstruct ba noun phrases.
- **Production:** mô tả hai components mà không nói tên trực tiếp.
- **Interaction:** partner chọn component rồi hỏi `Which one? / How many?`; learner xác nhận hoặc sửa description.
- **Feedback & Retry:** ưu tiên agreement/head ambiguity; produce lại phrase mới, không chỉ đọc correction.
- **Mission Challenge / PASS:** agreement ≥80%; listener chọn đúng; learner xử lý được question.
- **Evidence:** `day-03.md` + audio/note; log one repair.

## Ngày 4 — Give an honest status update

- **Mission / Why:** báo việc hệ thống làm, đã làm, có thể hoặc bắt buộc làm mà không làm claim quá mạnh.
- **Required ability + support:** 6–8 status lines, `S3`.
- **Input + Target language:** Lesson/D04; Group 3; notice tense versus certainty in `can/must/may/might/should`.
- **Imitate / Controlled:** label 8 phrases; đổi modal trong ba models và nói meaning change.
- **Recall + Reuse:** Group 1 D-2; một error due; reconstruct two status frames.
- **Production:** đưa status update gồm past action, current fact, requirement và uncertainty.
- **Interaction:** partner challenge hai statements: `Are you sure? / Did this already happen?`; learner correct/defend.
- **Feedback & Retry:** lỗi time/modality là critical nếu đổi meaning; nói lại full statement với marker đúng.
- **Mission Challenge / PASS:** time/certainty ≥80%; sửa được ít nhất một overclaim hoặc chứng minh không có.
- **Evidence:** `day-04.md` + audio/note; log latency và correction.

## Ngày 5 — Clarify before acting

- **Mission / Why:** làm rõ một technical requirement mơ hồ trước khi agent thực hiện action.
- **Required ability + support:** role-play 6 turns, `S3`.
- **Input + Target language:** Lesson/D05; Group 4; question forms + `Could you repeat...?`, `Do you mean that...?`, `What does X mean?`.
- **Imitate / Controlled:** chuyển 5 statements thành questions; substitution drill ba clarification frames.
- **Recall + Reuse:** Group 2 D-2; gọi lại một frame Day 2–4 trong answer.
- **Production:** learner mở conversation bằng summary của requirement và một clarification question.
- **Interaction:** partner giữ lại một detail, trả lời chưa rõ một lần và hỏi follow-up; learner phải adapt rồi chốt shared meaning.
- **Feedback & Retry:** ưu tiên wrong question meaning và failure to clarify; replay từ turn lỗi thay vì restart toàn bài.
- **Mission Challenge / PASS:** ≥10 question forms đúng; ≥2 clarification turns; cuối role-play hai bên thống nhất action/constraint.
- **Evidence:** `day-05.md` + audio uncut; ghi turns, latency, support và repair.

## Ngày 6 — Be understood, then repair

- **Mission / Why:** giải thích workflow 20–30 giây đủ hiểu và tiếp tục khi người nghe nghe sai.
- **Required ability + support:** snapshot `S3`; keywords + three frames, không full script.
- **Input + Target language:** D06 audio/A/B; Group 5; thought groups, content stress, final consonants.
- **Imitate / Controlled:** shadow D06-A; A/B one sentence before/after marking `/`.
- **Recall + Reuse:** Group 3 D-2; retrieve `X is/uses/needs Y` without looking.
- **Production:** keep original 20–30s take, then one improved take.
- **Interaction:** listener asks one content question or deliberately repeats one detail incorrectly; learner corrects with `What I mean is...`.
- **Feedback & Retry:** compare meaning loss, not accent; repair only critical sound/hesitation pattern, then retake.
- **Mission Challenge / PASS:** original retained; main idea understood; one follow-up answered and misunderstanding repaired or `none observed` logged.
- **Evidence:** audio Day 6 + listener/ASR/self-check label.

## Ngày 7 — Boss Fight 1: Basic technical conversation

- **Mission / Why:** hoàn thành một micro-conversation tích lũy về document workflow.
- **Required ability + support:** 20–30s brief + 2 unseen questions, `S3`; fixed frames allowed.
- **Input + Target language:** locked R1; Group 6 + D-2 Group 4; reuse one older chunk and one clarification frame.
- **Imitate / Controlled:** không luyện đúng assessment; warm-up bằng một different two-sentence workflow.
- **Recall + Reuse:** no notes: one Day 2 frame, one modal, one clarification; one error item due.
- **Production:** explain ordered workflow and why review/limit matters.
- **Interaction:** examiner selects two questions not disclosed before brief; one may be unclear and require clarification.
- **Feedback & Retry:** score first attempt, choose one critical/repeated error, model briefly, retry a new question.
- **Mission Challenge / PASS:** R1 meaning ≥70% hoặc recovery list; brief understandable; both turns completed without reading script.
- **Evidence:** `review-01.md` + uncut audio; record support, duration, latency, turns and retry.

## Ngày 8 — Unpack a technical noun stack

- **Mission / Why:** giải thích một compressed noun stack để đồng đội không thực hiện sai requirement.
- **Required ability + support:** six stacks, `S3`; annotation allowed before speaking.
- **Input + Target language:** Lesson/D08; Group 7; head noun, `of/for/that`, `The main problem is...`.
- **Imitate / Controlled:** expand three stacks and compare with model.
- **Recall + Reuse:** Group 5 D-2; one Group 1–4 error/phrase in a new stack.
- **Production:** explain six stacks in plain English and choose the better reading for two ambiguous cases.
- **Interaction:** partner proposes one wrong expansion; learner accept/correct and asks confirmation.
- **Feedback & Retry:** repair head/relation error on a new stack, not the memorized item.
- **Mission Challenge / PASS:** head 6/6; ≥5/6 relations correct; confirmation closes ambiguity.
- **Evidence:** `day-08.md` + audio/note.

## Ngày 9 — Handoff a passive procedure

- **Mission / Why:** explain a procedure while distinguishing known and unknown actors.
- **Required ability + support:** short handoff, `S3`.
- **Input + Target language:** Lesson/D09; Group 8; affected object, action, actor, focus.
- **Imitate / Controlled:** analyze five passives; convert only when actor exists.
- **Recall + Reuse:** Group 6 D-2 + Group 1 D-7; one clarification phrase.
- **Production:** narrate a four-step procedure from passive instructions.
- **Interaction:** partner asks `Who did this?` twice; if source is silent, learner must say unknown rather than invent.
- **Feedback & Retry:** invented actor is critical; replace with evidence-bounded answer and retry on new sentence.
- **Mission Challenge / PASS:** passive ≥7/8; procedure order clear; unknown actor handled honestly.
- **Evidence:** `day-09.md` + audio/note; source pointers.

## Ngày 10 — Explain an incident and adapt

- **Mission / Why:** explain why a workflow stopped/retried when conditions changed.
- **Required ability + support:** six-step retell, `S3`.
- **Input + Target language:** Lesson/D10 paragraph; Group 9; cause, contrast, result connectors.
- **Imitate / Controlled:** map one paragraph and substitute two connectors without changing relation.
- **Recall + Reuse:** Group 7 D-2 + Group 2 D-7; retrieve a modal from Day 4.
- **Production:** retell incident in six logical steps.
- **Interaction:** partner changes one condition (`the file existed / timeout did not end`) and asks what changes; learner adapts answer.
- **Feedback & Retry:** prioritize broken cause/contrast; redraw arrow and answer changed condition again.
- **Mission Challenge / PASS:** original relations ≥80%; adapted answer preserves new condition and causal logic.
- **Evidence:** `day-10.md` + audio/note + logic map.

## Ngày 11 — Explain a long claim plainly

- **Mission / Why:** turn a long technical claim into short speech a teammate can follow.
- **Required ability + support:** four explanations, `S3`.
- **Input + Target language:** Lesson/D11; Group 10; main/relative/complement clauses and modality.
- **Imitate / Controlled:** bracket five sentences; imitate one 3-sentence paraphrase.
- **Recall + Reuse:** Group 8 D-2 + Group 3 D-7; retrieve connector from Day 10.
- **Production:** explain four long sentences in 2–3 short sentences each.
- **Interaction:** partner asks what changes if one subordinate clause is removed; learner states lost meaning.
- **Feedback & Retry:** actor, negation and modality are protected; retry on a new sentence after correction.
- **Mission Challenge / PASS:** main clause correct ≥5/6; four explanations preserve protected meaning.
- **Evidence:** `day-11.md` + audio/note.

## Ngày 12 — Use the right form in a work update

- **Mission / Why:** choose word forms from context and produce a short technical status update.
- **Required ability + support:** 5–6 lines, `S3`.
- **Input + Target language:** Lesson/D12; Group 11; form follows sentence slot, not suffix guess alone.
- **Imitate / Controlled:** complete ten families; substitute noun/verb/adjective in three model lines.
- **Recall + Reuse:** Group 9 D-2 + Group 4 D-7; retrieve one clarification question.
- **Production:** write then say a status update using at least five target forms.
- **Interaction:** partner points to one unclear form and asks for correction/meaning; learner self-corrects or defends.
- **Feedback & Retry:** repeated form error enters ledger; produce a new sentence with same family.
- **Mission Challenge / PASS:** forms ≥80%; update understandable; correction turn completed.
- **Evidence:** `day-12.md` + audio/note.

## Ngày 13 — Brief a service note

- **Mission / Why:** read a short technical note strategically and brief its main claim to a teammate.
- **Required ability + support:** three sentences + one answer, `S3`; maximum 6 keywords.
- **Input + Target language:** Lesson/D13 passage; Group 12; claim/evidence/contrast + lookup rule.
- **Imitate / Controlled:** guided first pass 80 words; model one claim–reason sentence.
- **Recall + Reuse:** Group 10 D-2 + Group 5 D-7; one prior error item.
- **Production:** close source and deliver three-sentence English brief.
- **Interaction:** partner asks one clarification about postcondition/unclear outcome; learner answers or says source does not state it.
- **Feedback & Retry:** compare summary v1/source, correct one meaning error, repeat brief without adding details.
- **Mission Challenge / PASS:** ≤8 lookups; summary meaning correct; follow-up source-bound.
- **Evidence:** `day-13.md` + audio/note + lookup log.

## Ngày 14 — Boss Fight 2: Explain a technical incident

- **Mission / Why:** decode an unfamiliar passage and keep explaining after interruption.
- **Required ability + support:** 45–60s + 2 turns, `S3`; six keywords + frames.
- **Input + Target language:** locked R2; Group 13 + D-2 Group 11 + D-7 Group 6.
- **Imitate / Controlled:** warm-up on a different 40-word note; no rehearsal of R2 answer.
- **Recall + Reuse:** noun stack, passive, connector and one error item without notes.
- **Production:** explain main idea, mechanism and one limitation.
- **Interaction:** examiner interrupts once (`Could you explain X?`) and asks two unseen questions.
- **Feedback & Retry:** score first performance; repair one meaning/interaction error with a new follow-up.
- **Mission Challenge / PASS:** reading ≥70%; 45–60s meaning intact; clarify/respond across both turns.
- **Evidence:** `review-02.md` + uncut audio + support/latency log.

## Ngày 15 — Route questions to paper evidence

- **Mission / Why:** guide a teammate to the paper section that can answer a practical question.
- **Required ability + support:** six section decisions, `S3→S2`.
- **Input + Target language:** Lesson/D15 + practice paper; Group 14; section function language.
- **Imitate / Controlled:** label abstract and one paragraph with reason.
- **Recall + Reuse:** Group 12 D-2 + Group 7 D-7; retrieve `Based on the text...`.
- **Production:** give a one-sentence function for each main section.
- **Interaction:** partner asks six questions such as `Where is the procedure/result/limitation?`; learner routes and explains why.
- **Feedback & Retry:** confusing Result/Discussion is critical; retry with a new question.
- **Mission Challenge / PASS:** ≥5/6 routes correct with evidence boundary.
- **Evidence:** `day-15.md` + audio/note.

## Ngày 16 — Brief an abstract without filling gaps

- **Mission / Why:** brief an abstract and state honestly what the abstract does not say.
- **Required ability + support:** 60s, `S3→S2`; B–P–M–R–C card then maximum 6 keywords.
- **Input + Target language:** Lesson/D16 + abstract audio; Group 15; move frames and missing-information language.
- **Imitate / Controlled:** shadow one five-move model and micro-paraphrase each move.
- **Recall + Reuse:** Group 13 D-2 + Group 8 D-7; retrieve one clarification chunk.
- **Production:** close abstract and deliver 60s brief.
- **Interaction:** partner asks about one missing/mờ move; learner answers `not stated/unclear` with source pointer.
- **Feedback & Retry:** invented method/result is critical; hedge/remove and repeat affected move.
- **Mission Challenge / PASS:** move map evidence complete; brief covers stated moves; no fabricated missing move.
- **Evidence:** `day-16.md` + audio.

## Ngày 17 — Pitch the gap, not a result

- **Mission / Why:** explain why a study is needed and what it contributes without pretending the contribution already worked.
- **Required ability + support:** 60s pitch, `S2`; 6 keywords.
- **Input + Target language:** Lesson/D17; Group 16; background/gap/contribution and evidence boundary.
- **Imitate / Controlled:** map one paragraph and imitate a `known → gap → approach` chain.
- **Recall + Reuse:** Group 14 D-2 + Group 9 D-7; one Day 10 connector.
- **Production:** deliver research-gap pitch with sentence pointers.
- **Interaction:** partner challenges `Does this prove the method works?`; learner corrects scope.
- **Feedback & Retry:** gap/contribution merge or result overclaim enters ledger; retry final two sentences.
- **Mission Challenge / PASS:** nodes distinct, pointers present, overclaim rejected/explained.
- **Evidence:** `day-17.md` + audio/note.

## Ngày 18 — Handoff a reproducible procedure

- **Mission / Why:** explain a Methods flow so another person can identify what is executable and what is missing.
- **Required ability + support:** flow handoff, `S2`; diagram + keywords, no prose script.
- **Input + Target language:** Lesson/D18; Group 17; process sequencing and dependency language.
- **Imitate / Controlled:** convert five sentences to arrows and explain one model step.
- **Recall + Reuse:** Group 15 D-2 + Group 10 D-7; retrieve passive/unknown actor rule.
- **Production:** explain input → steps → output → evaluation.
- **Interaction:** listener flags one impossible/missing step; learner checks source, distinguishes omission from unstated detail and gives flow v2.
- **Feedback & Retry:** invented parameter is critical; remove/label unknown and repeat handoff segment.
- **Mission Challenge / PASS:** flow complete where source permits; one gap handled without invention.
- **Evidence:** `day-18.md` + flow v1/v2 + audio/note.

## Ngày 19 — Brief a result and resist causal overclaim

- **Mission / Why:** report a result to a stakeholder with correct baseline, magnitude and uncertainty.
- **Required ability + support:** 45–60s, `S2`.
- **Input + Target language:** Lesson/D19; Group 18; result/comparison language and numbers.
- **Imitate / Controlled:** read one table/paragraph and model direction + magnitude + boundary.
- **Recall + Reuse:** Group 16 D-2 + Group 11 D-7; retrieve a hedge from Day 4/17.
- **Production:** deliver three result statements and one non-conclusion.
- **Interaction:** partner asks `Did X cause Y? / Is the improvement important?`; learner answer from evidence.
- **Feedback & Retry:** wrong number/baseline/causality is critical; correct and repeat full claim.
- **Mission Challenge / PASS:** numbers and comparison correct; causal challenge handled without overclaim.
- **Evidence:** `day-19.md` + audio/note.

## Ngày 20 — Correct an overclaim in conversation

- **Mission / Why:** weaken a claim to the strongest wording the evidence actually supports.
- **Required ability + support:** claim repair + limitation answer, `S2`.
- **Input + Target language:** Lesson/D20; Group 19; strength ladder, hedge and limitation frames.
- **Imitate / Controlled:** rank claims, substitute `shows/suggests/may indicate` and explain effect.
- **Recall + Reuse:** Group 17 D-2 + Group 12 D-7; one error due.
- **Production:** present three evidence-bounded claims.
- **Interaction:** partner states an overclaim and asks learner to correct/justify; follow-up asks where result may fail.
- **Feedback & Retry:** any stronger-than-source wording is critical; re-answer with scope and evidence.
- **Mission Challenge / PASS:** selected claim no stronger than source; limitation names context/population/method/evidence boundary.
- **Evidence:** `day-20.md` + audio/note.

## Ngày 21 — Boss Fight 3: Research briefing and defense

- **Mission / Why:** brief an unfamiliar abstract and defend evidence boundaries under questions.
- **Required ability + support:** up to 90s + 3 randomized questions, `S2`; 6 keywords.
- **Input + Target language:** locked R3; Group 20 + D-2 Group 18 + D-7 Group 13.
- **Imitate / Controlled:** warm-up with a different abstract move, not R3 content.
- **Recall + Reuse:** B–P–M–R–C, one number phrase, one limitation, one error item.
- **Production:** deliver problem–method–result–limitation briefing.
- **Interaction:** examiner selects clarify, justify and extrapolate questions; at least one requires `source says / my inference` distinction.
- **Feedback & Retry:** score first attempt, diagnose one critical/repeated issue, answer a new question after correction.
- **Mission Challenge / PASS:** map ≥70%; all three turns completed; no invented evidence; one repair demonstrated.
- **Evidence:** `review-03.md` + uncut audio + support/latency/turn log.

## Ngày 22 — Make a long sentence understandable

- **Mission / Why:** explain a long paper sentence so listener can restate the same meaning.
- **Required ability + support:** five explanations, `S2`; annotation then keywords only.
- **Input + Target language:** Lesson/D22; D+2 Group 19, D+7 Group 14; recognition 41–52.
- **Imitate / Controlled:** run surgery on three sentences and imitate one plain-English model.
- **Recall + Reuse:** one clause pattern + one claim-strength error; no new chunk activation.
- **Production:** explain five long sentences as 2–3 short sentences.
- **Interaction:** listener restates one meaning with a deliberate mismatch; learner identifies and repairs it.
- **Feedback & Retry:** protect negation, modality, comparison and causality; retry on new sentence.
- **Mission Challenge / PASS:** ≥4/5 main claims correct and listener restatement becomes accurate after repair.
- **Evidence:** `day-22.md` + audio/note + recognition score.

## Ngày 23 — Defend a paragraph's argument flow

- **Mission / Why:** explain how a paragraph builds a claim and why its sentence order matters.
- **Required ability + support:** four maps + one defense, `S2`.
- **Input + Target language:** Lesson/D23; D+2 Group 20, D+7 Group 15; recognition 53–64.
- **Imitate / Controlled:** map one paragraph and model a claim–evidence relation.
- **Recall + Reuse:** retrieve connector/function labels and one error due.
- **Production:** give short summaries for four paragraphs.
- **Interaction:** partner scrambles two sentences and challenges the order; learner explains cohesion and restores it.
- **Feedback & Retry:** list-like summary without relation is repeated error; rebuild one summary then retry new paragraph.
- **Mission Challenge / PASS:** each summary has main claim + evidence relation; restored order has signal-based reasoning.
- **Evidence:** `day-23.md` + audio/note + recognition score.

## Ngày 24 — Send a faithful brief without copying

- **Mission / Why:** create a practical short brief from source while preserving claim strength and numbers.
- **Required ability + support:** 80–100 words, `S2`; source closed after keyword notes.
- **Input + Target language:** Lesson/D24; D+7 Group 16; recognition 65–76.
- **Imitate / Controlled:** compare one paraphrase/model using actor–modality–number–baseline–causality check.
- **Recall + Reuse:** one Day 20 hedge + one Day 19 number frame.
- **Production:** write brief from maximum 8 keywords, then read it aloud once without source.
- **Interaction:** partner asks one scope question or points to a possible overclaim; learner revise/defend with source.
- **Feedback & Retry:** six-word copy chain or meaning drift requires rewrite of affected sentence.
- **Mission Challenge / PASS:** no six-content-word copy chain; five integrity fields preserved; scope answer accurate.
- **Evidence:** `day-24.md` + before/after sentence + recognition score.

## Ngày 25 — Switch audience without changing facts

- **Mission / Why:** brief the same paper to a beginner and a technical peer.
- **Required ability + support:** two 90s takes + one follow-up, `S2`; PREML card and 8 keywords.
- **Input + Target language:** Lesson/D25; D+7 Group 17; recognition 77–88.
- **Imitate / Controlled:** 60s PREML model; substitute jargon/background for audience.
- **Recall + Reuse:** problem/result/limitation chunks and one prior interaction repair.
- **Production:** record beginner and peer versions.
- **Interaction:** partner chooses one version and asks why a detail was included/removed.
- **Feedback & Retry:** factual inconsistency is critical; repair affected move in both versions.
- **Mission Challenge / PASS:** both takes cover five moves, facts align, two audience choices explained, follow-up answered.
- **Evidence:** audio Day 25 + comparison note + recognition score.

## Ngày 26 — Make contrast audible and repair it

- **Mission / Why:** use thought groups/stress so listener hears the intended result or contrast.
- **Required ability + support:** three takes + repair, `S2`.
- **Input + Target language:** Lesson/D26 audio; D+7 Group 18; recognition 89–100.
- **Imitate / Controlled:** shadow D26-A, mark `/` and content stress, A/B one contrast sentence.
- **Recall + Reuse:** one result number + one hedge without notes.
- **Production:** slow accuracy, natural chunks, final 8-keyword take.
- **Interaction:** listener states contrast heard; if wrong, learner changes stress/phrasing and repeats.
- **Feedback & Retry:** prioritize content-word loss and wrong contrast, not accent; retake only affected unit then final line.
- **Mission Challenge / PASS:** same listener/ASR ≥75% content words; intended contrast understood ≥3/4; mismatch repaired.
- **Evidence:** audio Day 26 + marked script + listener/ASR + recognition score.

## Ngày 27 — Handle randomized paper Q&A

- **Mission / Why:** respond, adapt and continue instead of reciting prepared answers.
- **Required ability + support:** 6 random questions, `S2→S1`; 8 keywords, no answer script.
- **Input + Target language:** Lesson/D27 fixed bank; D+7 Group 19; recognition 101–110.
- **Imitate / Controlled:** practice five answer/clarification frames on unrelated examples.
- **Recall + Reuse:** retrieve one result, limitation and clarification chunk; one error due.
- **Production:** 45–60s opening paper summary.
- **Interaction:** partner randomly selects 6/10 questions and changes one condition; include one unclear question and one insufficient-evidence case.
- **Feedback & Retry:** answer relevance/source boundary before grammar; retry a different question of same type.
- **Mission Challenge / PASS:** ≥5/6 relevant; ≥1 clarification; ≥1 honest insufficient-evidence answer; conversation continues.
- **Evidence:** `day-27.md` + uncut audio + turn/latency/support log.

## Ngày 28 — Boss Fight 4: Cold research briefing

- **Mission / Why:** perform the full read→brief→Q&A cycle on unfamiliar input with minimal support.
- **Required ability + support:** 2–3min + 5 new questions, `S1`; maximum 8 keywords.
- **Input + Target language:** locked R4; D+7 Group 20; recognition 111–120; no new chunks.
- **Imitate / Controlled:** none on test content; one 20-second warm-up from older material only.
- **Recall + Reuse:** one chunk from each phase + one Boss Fight error, without notes.
- **Production:** cold read, paper map and no-script briefing.
- **Interaction:** five unseen questions include clarify, justify, extrapolate and one deliberate misunderstanding.
- **Feedback & Retry:** score first performance, repair highest-priority error, answer a new follow-up.
- **Mission Challenge / PASS:** every subscore ≥70%; five turns; repair successful; latency/support logged honestly.
- **Evidence:** `review-04.md` + uncut audio + rubric/recognition/calibration.

## Ngày 29 — Give a traceable paper briefing

- **Mission / Why:** brief a paper so every important spoken claim can be checked.
- **Required ability + support:** 3min + 2 unseen questions, `S1`; 8 keywords only.
- **Input + Target language:** Lesson/D29 + practice/new paper; only ACTIVE chunks.
- **Imitate / Controlled:** no full model; verify one claim ledger example only.
- **Recall + Reuse:** retrieve problem–method–result–limitation and one unresolved error.
- **Production:** create paper map, claim ledger and 3-minute briefing.
- **Interaction:** partner asks two unseen questions, one changing audience/condition; learner adapt or mark inference.
- **Feedback & Retry:** untraceable claim is removed/hedged; retry affected section without adding script.
- **Mission Challenge / PASS:** 100% important claims have pointer or inference label; two answers source-bound.
- **Evidence:** `day-29.md` + uncut audio + claim ledger.

## Ngày 30 — Final independent performance

- **Mission / Why:** prove the learner can use English on unfamiliar technical material without relying on the course.
- **Required ability + support:** integrated reading, 2–3min talk, 5 follow-ups, `S1`; no script/translation/subtitles/AI answer hints during attempt.
- **Input + Target language:** Reading Anchor B + Final Integrated Form; only ACTIVE chunks.
- **Imitate / Controlled:** none before locked attempt; do not rehearse exact content.
- **Recall + Reuse:** no cramming; record support used and retrieve only through the task.
- **Production:** annotated reading, five paraphrases, 8-keyword PREML talk.
- **Interaction:** five follow-ups include one clarification need, one deliberate misunderstanding to repair, one justify and one extrapolate question.
- **Feedback & Retry:** score locked first attempt before correction; after scoring, repair one critical/repeated item on a new short prompt for future learning evidence.
- **Mission Challenge / PASS:** meet `CHALLENGE.md` finish line, complete all turns, repair misunderstanding and log latency/support; result may be PASS/PARTIAL/FAIL only from evidence.
- **Evidence:** `final-day-30.md`, original answers, notes, uncut audio, listener/ASR and final measurement row.
