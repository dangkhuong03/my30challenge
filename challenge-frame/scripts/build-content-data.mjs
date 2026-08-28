import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDirectory, "../..");
const sourcePath = resolve(projectRoot, "challenge-content/ENGLISH_30_DAY_CONTENT.md");
const outputPath = resolve(projectRoot, "challenge-frame/data/english-30-day-content.js");
const source = await readFile(sourcePath, "utf8");

const clean = (value = "") => value.replace(/\*\*/g, "").replace(/\r/g, "").trim();
const field = (block, label) => clean(block.match(new RegExp(`\\*\\*${label}(?: — [^:]+)?:\\*\\*\\s*(.*?)(?=\\s+\\*\\*[^*]+:\\*\\*|\\r?$)`, "m"))?.[1]);

const resources = {};
for (const match of source.matchAll(/^- \*\*(R\d+) — (.+?):\*\* <(https:\/\/[^>]+)>$/gm)) {
  resources[match[1]] = {
    id: match[1], title: clean(match[2]),
    provider: match[2].includes("British Council") ? "British Council" : match[2].includes("IDP") ? "IDP IELTS" : "IELTS",
    url: match[3], access: "Free/public surface audited on 28 August 2026; conditions apply"
  };
}

function splitEvidence(value) {
  const match = value.match(/^(.*?)(?:;\s*|\.\s+)(Pass when |At least |No |Revision |Position |Save |Each |This |Otherwise |Without |Task |Award |With )(.+)$/i);
  return match
    ? { requirement: clean(match[1]), passCriteria: clean(`${match[2]}${match[3]}`) }
    : { requirement: value, passCriteria: value };
}

function parsePractice(value) {
  return value.split(/;\s*/).map(clean).filter(Boolean).map((part, index) => {
    const level = part.match(/^(I[0-4](?:\/I[0-4])?)/)?.[1] || `Step ${index + 1}`;
    return { level, instruction: clean(part.replace(/^(I[0-4](?:\/I[0-4])?)\s*/, "")) };
  });
}

function buildAiSupportPrompt(day) {
  const shared = [
    `You are my patient English tutor for Day ${day.number}: ${day.title}.`,
    `My current level is approximately IELTS Band 1 / Pre-A1. Teach in short, clear English. You may add a brief Vietnamese explanation when I say I do not understand, but return to English practice immediately.`,
    `Today's required outcome: ${day.objective}`,
    `Teaching rules:`,
    `1. Start by asking what I can already do and whether I have the required resource.`,
    `2. Teach one small step at a time. Do not complete the final task for me.`,
    `3. Explain important words with a simple meaning, one changed example, and one quick check question.`,
    `4. When I ask how to read or say a word, show syllable breaks, the stressed syllable in CAPITALS, a simple sound hint, and one sentence. Use IPA only if I request it.`,
    `5. Correct at most two high-impact problems at a time. Explain why, then ask me to retry with changed content.`,
    `6. Never invent an IELTS band, answer key, source, or scoring conversion.`,
    `7. End each teaching turn with exactly one next action for me.`,
    `When I submit work, evaluate it against today's evidence and pass condition. Return: RESULT (PASS / RETRY / DIAGNOSTIC), evidence observed, two corrections maximum, a changed retry task, and what I must save.`
  ];

  if (day.kind === "assessment") {
    return [...shared,
      `This is an assessment day: ${day.assessmentType}`,
      `Validity conditions: ${day.validity}`,
      `Before I write ANSWERS LOCKED, act only as an invigilator: explain procedure, timing, permitted support, and technical setup. Do not teach tested vocabulary, interpret questions, suggest ideas, correct work, or reveal answers.`,
      `After I write ANSWERS LOCKED, switch to reviewer mode. Ask for the prompt or task ID, my complete response, timing, support level, answer key or evaluator, and scoring method.`,
      `Assessment components: ${day.components.map((component) => `${component.name}: ${component.instruction}`).join(" | ")}`,
      `Evidence required: ${day.evidenceRequirement}`,
      `Scoring boundary: ${day.score}`,
      `Review/remediation rule: ${day.review}`,
      `An AI-only Writing or Speaking estimate is diagnostic and cannot award IELTS 4.0 READY. Begin by asking whether I am BEFORE THE ATTEMPT or ANSWERS LOCKED.`
    ].join("\n\n");
  }

  return [...shared,
    `Primary skill: ${day.primarySkill}`,
    `Maintenance skill: ${day.maintenanceSkill}`,
    `Lesson sequence: Recall — ${day.recall} | Input — ${day.input} | Language — ${day.language} | Practice — ${day.practice.map((step) => `${step.level}: ${step.instruction}`).join("; ")} | Mission — ${day.mission}`,
    `Resources: ${day.resourcesInstruction}`,
    `Evidence required: ${day.evidenceRequirement}`,
    `Pass condition: ${day.passCriteria}`,
    `Feedback and changed retry: ${day.feedback}`,
    `Daily score record: ${day.dailyScore}`,
    `Next retrieval: ${day.nextRetrieval}`,
    `Begin with the Recall step. Ask me to answer without notes; wait for my answer before teaching the Input step.`
  ].join("\n\n");
}

const assessmentDays = new Set([7, 14, 21, 28, 30]);
const headers = [...source.matchAll(/^### Day (\d+) — (.+)$/gm)];
const days = headers.map((header, index) => {
  const number = Number(header[1]);
  const start = header.index;
  const end = headers[index + 1]?.index ?? source.indexOf("## Completion Record", start);
  const block = source.slice(start, end > start ? end : source.length);
  const isAssessment = assessmentDays.has(number);
  const resourceIds = [...new Set([...field(block, "Resources").matchAll(/\bR\d+\b/g)].map((match) => match[0]))];
  const base = {
    id: `day-${String(number).padStart(2, "0")}`, number, label: `Day ${number}`,
    title: clean(header[2]), objective: field(block, "Today I must be able to"),
    estimatedMinutes: 180, kind: isAssessment ? "assessment" : "lesson",
    dailyScore: field(block, "Daily score record"), nextRetrieval: field(block, "Next retrieval schedule"), resources: resourceIds
  };
  if (isAssessment) {
    return {
      ...base, assessmentType: field(block, "Assessment type"), validity: field(block, "Validity conditions"),
      briefing: field(block, "Briefing"),
      components: ["Listening", "Reading", "Writing", "Speaking"].map((name) => ({ name, instruction: field(block, name) })),
      evidenceRequirement: field(block, "Evidence"), score: field(block, "Score"), review: field(block, "Review and remediation")
    };
  }
  const evidence = splitEvidence(field(block, "Evidence and pass"));
  return {
    ...base, primarySkill: field(block, "Primary skill"), maintenanceSkill: field(block, "Maintenance skill"),
    recall: field(block, "Recall"), input: field(block, "Input"), language: field(block, "Language"),
    resourcesInstruction: field(block, "Resources"), practice: parsePractice(field(block, "Practice ladder")),
    mission: field(block, "Mission"), evidenceRequirement: evidence.requirement, passCriteria: evidence.passCriteria,
    feedback: field(block, "Feedback and changed retry")
  };
});

if (days.length !== 30 || days.some((day, index) => day.number !== index + 1)) throw new Error("Content must contain Days 1–30 in order.");
for (const day of days) {
  const required = day.kind === "assessment"
    ? ["objective", "assessmentType", "validity", "briefing", "evidenceRequirement", "score", "review", "dailyScore", "nextRetrieval"]
    : ["objective", "primarySkill", "maintenanceSkill", "recall", "input", "language", "resourcesInstruction", "mission", "evidenceRequirement", "passCriteria", "feedback", "dailyScore", "nextRetrieval"];
  const missing = required.filter((key) => !day[key]);
  if (day.kind === "lesson" && day.practice.length < 2) missing.push("practice");
  if (day.kind === "assessment" && day.components.some((component) => !component.instruction)) missing.push("components");
  if (missing.length) throw new Error(`Day ${day.number} missing: ${missing.join(", ")}`);
  day.aiSupportPrompt = buildAiSupportPrompt(day);
}

const payload = { generatedFrom: "challenge-content/ENGLISH_30_DAY_CONTENT.md", contentVersion: "2.0", resourceAuditDate: "2026-08-28", resources, days };
const output = `/* Generated from approved Phase 2 V2 content. Do not edit directly. */\n(function () {\n  "use strict";\n  window.ENGLISH_CHALLENGE_CONTENT = ${JSON.stringify(payload, null, 2)};\n})();\n`;
await writeFile(outputPath, output, "utf8");
console.log(`Generated ${days.length} days (${days.filter((day) => day.kind === "assessment").length} assessments) and ${Object.keys(resources).length} resources.`);
