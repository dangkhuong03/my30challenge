# A Verification Checklist for Small Tool-Using Agents

*Original practice paper created for this challenge. It is not a published research claim.*

## Abstract

Tool-using agents can complete useful tasks, but they may also repeat actions, stop too early, or report success without checking the environment. This practice study examines whether a short verification checklist improves the reliability of a small document-processing agent. The checklist asks the agent to state the expected result before an action, inspect the observed result afterward, and classify the outcome as confirmed, failed, or unclear. We compare the checklist agent with a baseline agent on 120 synthetic tasks involving file creation, file renaming, and form submission. In the simulated evaluation, verified task success rises from 68 percent to 84 percent, while duplicate external actions fall from 11 cases to 3 cases. The checklist adds an average of 1.7 steps per task. These results suggest that explicit verification may improve reliability, although the synthetic environment does not represent all real websites or user workflows.

## 1. Introduction

An agent often works in a loop. It reads the current state, chooses an action, uses a tool, and observes what happens next. This loop appears simple, but an observation can be incomplete. A button may receive a click without submitting a form. A file operation may finish even when the interface does not refresh. If the agent treats every tool response as proof of success, it can build later decisions on a false state.

Many systems try to improve reliability by adding retries. Retries help when an action clearly fails, but they create a second problem when the result is unknown. Repeating a harmless read is usually safe. Repeating a payment, message, or publication may create a duplicate effect. Therefore, the agent needs to distinguish a confirmed failure from an unclear outcome.

This practice study evaluates a small verification checklist. The main question is whether a structured post-action check can increase confirmed task success without adding too much cost. The contribution is not a new learning algorithm. Instead, it is a simple control procedure that can be tested independently of the language model.

## 2. Method

We create 120 synthetic tasks in a local test environment. Forty tasks require the agent to create and verify a file. Forty tasks require it to rename a file while preserving its contents. The remaining forty tasks simulate form submission. Each form task produces one of three observations: a clear success message, a clear error message, or an ambiguous timeout.

The baseline agent reads the tool response and decides whether to continue. The checklist agent follows three additional steps. First, it writes an expected postcondition, such as “the target file exists with the new name.” Second, it performs a read-only check after the action. Third, it records one of three states: confirmed, failed, or unclear. A confirmed result allows the workflow to continue. A failed result may be retried if the action is safe. An unclear result must be reconciled before any risky retry.

Both agents receive the same task instructions and the same maximum budget of twenty steps. We run each agent once on every task. The primary metric is verified task success: the required end state must exist, and the agent must report it correctly. Secondary metrics are duplicate external actions, average steps, and unresolved tasks.

## 3. Results

The baseline agent achieves verified success on 82 of 120 tasks, or about 68 percent. The checklist agent succeeds on 101 tasks, or about 84 percent. The largest improvement appears in ambiguous form submissions. The baseline repeats 11 submissions that may already have succeeded, while the checklist agent repeats 3. The checklist also leaves 7 tasks unresolved instead of guessing a terminal result.

The additional checks increase the average trajectory from 8.4 to 10.1 steps. File tasks show a small latency increase because the agent performs an extra read. Form tasks show a larger increase when reconciliation is required. No claim about statistical significance is made because this teaching example uses one synthetic run per task.

## 4. Discussion

The simulated results support the use of explicit postconditions for tool actions. The checklist improves the match between the agent’s report and the environment’s final state. It also reduces duplicate submissions by treating an ambiguous timeout as an unknown outcome rather than a confirmed failure.

However, the procedure has costs and limitations. Extra checks consume time and tool calls. A weak postcondition can also confirm the wrong property. For example, checking that a file exists does not prove that its contents are correct. In addition, the task set is synthetic and small. Real interfaces change over time, and external services may not provide a reliable read-after-write operation.

Future work should compare different postcondition designs, repeat each task several times, and test real but isolated interfaces. Human reviewers should also examine whether the checklist creates unnecessary work on low-risk actions. The current evidence suggests a useful control pattern, but it does not prove that one checklist will work for every agent or environment.
