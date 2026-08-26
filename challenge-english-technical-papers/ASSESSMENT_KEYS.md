# Locked Assessment Keys

Mở từng section sau khi khóa assessment tương ứng.

## Form A

- Topic/purpose: safe bounded tool-using agent behavior.
- S1: agent/receives/goal. S3: agent/does not continue. S6: agent/should not repeat/action.
- Unclear risky retry may duplicate/cause unexpected effect; verify first.
- Human approval: publishing information or spending money.
- Key details include goal→action/tool→observation, time/cost/step limits, verification, human approval.

## R1

- Process: check file → find topic/write → review → retry max two → store accepted result.
- Limit controls cost/time; human review catches fluent but factually wrong output.
- Modals: can/cannot/may/must. Summary must preserve order and two controls.

## R2

- Main idea: accepted response is not final proof; verify postconditions and reconcile unknown outcomes before risky retry.
- Logic: accepted **however** not available; may process/fail; **therefore** checks; unclear → wait/reconcile; important for non-repeatable effects.
- Limitation: existence alone does not verify contents, correctness or usability.

## R3

- B: timeout/retry problem. P: two-state labels duplicate effects. M: three states + operation-ID reconciliation on 200 orders. R: duplicates 14→2; unresolved 1→6; time +9%. C: suggests benefit with provider-support limitation.
- Do not claim proof, significance or universal applicability.

## R4

- Problem: repeated test reuse becomes development feedback/overfitting.
- Design: separate regression/capability, hidden final set, repeated runs, multiple reliability metrics and human grading.
- Limitation/cost: more expense and ownership/secrecy burden.
- Transfer claim: evidence is more honest beyond familiar tasks, not guaranteed perfect evaluation.

## Form B

- Topic/purpose: reliable recoverable workflow around tool/external actions.
- S1: workflow/receives/request. S3: workflow/does not trust/messages. S6: workflow/looks up/ID.
- Operation ID supports lookup/reconciliation and prevents blind duplicate retry.
- Human approval: messages and customer-data changes.
- Unknown means effect may or may not have happened; failure means confirmed not achieved.

## Stretch Form

- Problem: context-only storage loses durable decisions/evidence across pause/crash.
- Mechanism: session owns events/files/approvals/IDs/goal; context policy selects bounded representation; worker lease serializes continuation; intent/result records support reconciliation.
- Benefit: resume with less lost work/duplication.
- Trade-offs: storage, coordination, recovery costs; authority remains separate.
- Core boundary: durable session ≠ active context ≠ approval authority.
- Reject claims that larger context alone solves recovery or that restored context grants permission.

## Independent intelligibility protocol

Listener/ASR must not see the intended script before scoring. Fix microphone, room, distance and ASR model/config across baseline/final. Content-word accuracy = correctly recovered target content words divided by target content words. Self-transcript is diagnostic only.
