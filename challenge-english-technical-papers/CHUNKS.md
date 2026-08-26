# Active Chunk Bank

Chunk chỉ được tính `ACTIVE` sau khi được dùng đúng trong một câu viết hoặc recording và retrieval ở `D+2` và `D+7`. Chunks 1–80 là production bank; chunks 81–160 là recognition bank. Finish line yêu cầu 80 active và nhận ra đúng ít nhất 140/160.

## Describing a topic

1. `This text is about ...`
2. `The paper focuses on ...`
3. `The main topic is ...`
4. `The authors study ...`
5. `This section describes ...`
6. `The goal of the study is ...`
7. `The system is designed to ...`
8. `The key idea is ...`
9. `In this context, ...`
10. `The paper addresses ...`

## Problem and motivation

11. `The main problem is ...`
12. `A major challenge is ...`
13. `Existing methods cannot ...`
14. `This is important because ...`
15. `There is a need for ...`
16. `However, little is known about ...`
17. `The current approach is limited by ...`
18. `This may lead to ...`
19. `The authors aim to improve ...`
20. `The question is whether ...`

## Methods and process

21. `The authors use ...`
22. `The model is trained on ...`
23. `The data are collected from ...`
24. `The process has three steps.`
25. `First, the system ...`
26. `Next, it ...`
27. `Finally, it ...`
28. `The output is compared with ...`
29. `The method depends on ...`
30. `The experiment measures ...`

## Results and comparison

31. `The results show that ...`
32. `The main finding is ...`
33. `X performs better than Y.`
34. `There is no clear difference between ...`
35. `The value increases from ... to ...`
36. `The value decreases by ...`
37. `Compared with the baseline, ...`
38. `The improvement is small but consistent.`
39. `The evidence supports ...`
40. `The result does not prove ...`

## Logic and evidence strength

41. `This happens because ...`
42. `As a result, ...`
43. `In contrast, ...`
44. `Although X, Y ...`
45. `For example, ...`
46. `This suggests that ...`
47. `This may indicate ...`
48. `The claim is based on ...`
49. `The evidence is not sufficient to ...`
50. `Under this assumption, ...`

## Limitations and uncertainty

51. `One limitation is ...`
52. `The study does not consider ...`
53. `The result may not generalize to ...`
54. `It is unclear whether ...`
55. `More evidence is needed.`
56. `The sample is too small to ...`
57. `This depends on the assumption that ...`
58. `The outcome may be affected by ...`
59. `The authors do not report ...`
60. `This question remains open.`

## Speaking and clarification

61. `Let me explain the main idea.`
62. `In simple terms, ...`
63. `What I mean is ...`
64. `Could you repeat the question?`
65. `Could you speak more slowly?`
66. `What does X mean in this context?`
67. `Do you mean that ...?`
68. `I am not sure, but ...`
69. `Based on the text, ...`
70. `I need to check that point.`

## Summary and evaluation

71. `To summarize, ...`
72. `The problem is ...`
73. `The proposed method ...`
74. `The main result is ...`
75. `This matters because ...`
76. `The strongest evidence is ...`
77. `The method works when ...`
78. `The method may fail when ...`
79. `A useful next step is ...`
80. `My main question is ...`

## Recognition bank — 81–160

81. `according to the paper`
82. `in the first experiment`
83. `for each task`
84. `on average`
85. `in most cases`
86. `at the same time`
87. `in addition to`
88. `rather than`
89. `such as`
90. `as shown in`
91. `the purpose of`
92. `the effect of`
93. `the number of`
94. `the difference between`
95. `the relationship between`
96. `the probability of`
97. `the ability to`
98. `the decision to`
99. `the use of`
100. `the risk of`
101. `is based on`
102. `is related to`
103. `is different from`
104. `is similar to`
105. `is responsible for`
106. `is required for`
107. `is limited to`
108. `is measured by`
109. `is stored in`
110. `is compared with`
111. `can be used to`
112. `may result in`
113. `must be checked`
114. `should be reported`
115. `cannot be assumed`
116. `does not necessarily mean`
117. `has been shown to`
118. `was designed to`
119. `was evaluated on`
120. `was caused by`
121. `a clear end state`
122. `an expected result`
123. `a confirmed outcome`
124. `an unknown outcome`
125. `a failed operation`
126. `a risky external action`
127. `a durable session`
128. `an active context`
129. `a hidden test set`
130. `a human reviewer`
131. `task success rate`
132. `average completion time`
133. `additional tool calls`
134. `available evidence`
135. `observed result`
136. `final system state`
137. `synthetic task set`
138. `real-world environment`
139. `primary metric`
140. `secondary metric`
141. `before the action`
142. `after the action`
143. `during the experiment`
144. `across all tasks`
145. `under the same conditions`
146. `with human approval`
147. `without verification`
148. `because of the cost`
149. `despite the improvement`
150. `if the result is unclear`
151. `when the system restarts`
152. `while the task is running`
153. `whether the action succeeded`
154. `why the method works`
155. `how the result was measured`
156. `what the evidence supports`
157. `where the method may fail`
158. `which assumption is required`
159. `who owns the final decision`
160. `how strong the claim is`

## Activation schedule

| Introduce | Chunks | Retrieval 1 | Retrieval 2 |
|---:|---:|---:|---:|
| 2 | 1–4 | 4 | 9 |
| 3 | 5–8 | 5 | 10 |
| 4 | 9–12 | 6 | 11 |
| 5 | 13–16 | 7 | 12 |
| 6 | 17–20 | 8 | 13 |
| 7 | 21–24 | 9 | 14 |
| 8 | 25–28 | 10 | 15 |
| 9 | 29–32 | 11 | 16 |
| 10 | 33–36 | 12 | 17 |
| 11 | 37–40 | 13 | 18 |
| 12 | 41–44 | 14 | 19 |
| 13 | 45–48 | 15 | 20 |
| 14 | 49–52 | 16 | 21 |
| 15 | 53–56 | 17 | 22 |
| 16 | 57–60 | 18 | 23 |
| 17 | 61–64 | 19 | 24 |
| 18 | 65–68 | 20 | 25 |
| 19 | 69–72 | 21 | 26 |
| 20 | 73–76 | 22 | 27 |
| 21 | 77–80 | 23 | 28 |

Ngày 22–28 chạy recognition sets 81–160 theo blocks 12/12/12/12/12/10/10 và ghi số đúng, không tự tính là `ACTIVE`.

## Daily activation rule

```text
Chunk:
Meaning in Vietnamese:
Source sentence:
My new sentence:
Spoken recording timestamp:
Retrieval date 1:
Retrieval date 2:
Status: SEEN / USED / ACTIVE
```
