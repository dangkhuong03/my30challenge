import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { challengeDir, read, splitTableRow } from "./lib.mjs";

const force = process.argv.includes("--force");
const outputDir = path.join(challengeDir, "remediation", "audit-data");
const manifestPath = path.join(outputDir, "manifest.json");
const report = read("AUDIT_REPORT.md");
const sha256 = value => crypto.createHash("sha256").update(value).digest("hex");
const sourceSha256 = sha256(Buffer.from(report, "utf8"));

if (fs.existsSync(manifestPath)) {
  const previous = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  if (previous.sourceSha256 !== sourceSha256 && !force) {
    console.error("BLOCKED: AUDIT_REPORT.md changed. Review the diff and rerun with --force only after explicit approval.");
    process.exit(2);
  }
}

const reportSection = (start, end) => {
  const startIndex = report.indexOf(start);
  if (startIndex < 0) throw new Error(`Missing section: ${start}`);
  const endIndex = end ? report.indexOf(end, startIndex + start.length) : report.length;
  return report.slice(startIndex, endIndex < 0 ? report.length : endIndex);
};
const links = value => [...value.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(match => match[1]);
const allM = Array.from({ length: 100 }, (_, i) => `M${i + 1}`);
const allDays = Array.from({ length: 30 }, (_, i) => i + 1);
const expand = (value, prefix, max) => {
  if ((prefix === "M" && /All 100|All M/i.test(value)) || (prefix === "D" && /all days/i.test(value))) return prefix === "M" ? allM : allDays;
  const values = new Set();
  const pattern = new RegExp(`${prefix}([0-9,–-]+)`, "g");
  for (const match of value.matchAll(pattern)) {
    for (const part of match[1].split(",")) {
      const range = part.match(/^(\d+)[–-](\d+)$/);
      if (range) {
        for (let n = Number(range[1]); n <= Number(range[2]); n += 1) if (n <= max) values.add(n);
      } else if (/^\d+$/.test(part) && Number(part) <= max) {
        values.add(Number(part));
      }
    }
  }
  const sorted = [...values].sort((a, b) => a - b);
  return prefix === "M" ? sorted.map(n => `M${n}`) : sorted;
};

const questionFields = ["sourceReference", "capability", "principle", "prerequisite", "reasoningAssumptionsTradeoffs", "misconception", "difficulty", "relevantDays", "lessonEvidence", "workedExample", "independentExercise", "materialTransfer", "advancedVariant", "evaluator", "retrieval", "auditStatus", "rationale"];
const questionRows = reportSection("## 4. Complete 100-question semantic coverage matrix", "## 5. Daily audit").split(/\r?\n/).filter(line => /^\| \[M\d+ \/ source:/.test(line)).map(splitTableRow);
const questions = questionRows.map(row => {
  const record = Object.fromEntries(questionFields.map((field, index) => [field, row[index]]));
  record.id = `M${Number(row[0].match(/M(\d+)/)[1])}`;
  record.dayIds = [...row[7].matchAll(/D(\d+)/g)].map(match => Number(match[1]));
  record.evidenceReferences = [...new Set(links(row.join(" | ")))];
  return record;
});

const gapRows = reportSection("## 8. Gap register", "## 9. Final acceptance checklist").split(/\r?\n/).filter(line => /^\| G\d+/.test(line)).map(splitTableRow);
const gaps = gapRows.map(row => ({
  id: row[0], severity: row[1], auditStatus: row[2], affectedScope: row[3], rootCauseAndEvidence: row[4], consequence: row[5], recommendation: row[6],
  affectedQuestionIds: expand(row[3], "M", 100), affectedDayIds: expand(row[3], "D", 30), evidenceReferences: [...new Set(links(row.join(" | ")))]
}));
for (const question of questions) question.gapIds = gaps.filter(gap => gap.affectedQuestionIds.includes(question.id)).map(gap => gap.id);

const dailySection = reportSection("## 5. Daily audit, Days 1–30", "## 6. Transfer and anti-memorization audit");
const dayMatches = [...dailySection.matchAll(/^### Day (\d+) — (PASS|PARTIAL|FAIL|UNKNOWN)\s*$/gm)];
const days = dayMatches.map((match, index) => {
  const rawMarkdown = dailySection.slice(match.index, dayMatches[index + 1]?.index ?? dailySection.length).trim();
  const day = Number(match[1]);
  return { day, auditStatus: match[2], questionIds: questions.filter(q => q.dayIds.includes(day)).map(q => q.id), gapIds: gaps.filter(g => g.affectedDayIds.includes(day)).map(g => g.id), evidenceReferences: [...new Set(links(rawMarkdown))], rawMarkdown };
});

const acceptanceRows = reportSection("## 9. Final acceptance checklist", "### 9.1 Validation and scope preservation").split(/\r?\n/).filter(line => /^\| \d+\./.test(line)).map(splitTableRow);
const acceptance = acceptanceRows.map((row, index) => ({ id: `AC${String(index + 1).padStart(2, "0")}`, requirement: row[0], auditStatus: row[1], evidenceAndConclusion: row[2], evidenceReferences: [...new Set(links(row.join(" | ")))] }));

const conflictRows = reportSection("### 2.3 Conflicts, ambiguities and limits", "Benchmark quality also affects the objective").split(/\r?\n/).filter(line => line.startsWith("| ") && !/^\|(?:---| Source observation)/.test(line)).map(splitTableRow).filter(row => row.length === 3);
const conflicts = conflictRows.map((row, index) => ({ id: `C${String(index + 1).padStart(2, "0")}`, observation: row[0], auditStatus: row[1], consequence: row[2], evidenceReferences: [...new Set(links(row.join(" | ")))] }));

const expected = { questions: 100, days: 30, gaps: 18, acceptance: 9 };
const actual = { questions: questions.length, days: days.length, gaps: gaps.length, acceptance: acceptance.length };
for (const key of Object.keys(expected)) if (actual[key] !== expected[key]) throw new Error(`Extraction refused: ${key} expected ${expected[key]}, found ${actual[key]}`);

fs.mkdirSync(outputDir, { recursive: true });
const datasets = { "questions.json": questions, "days.json": days, "gaps.json": gaps, "acceptance.json": acceptance, "conflicts.json": conflicts };
const fileEntries = {};
for (const [name, data] of Object.entries(datasets)) {
  const content = `${JSON.stringify({ schemaVersion: 1, source: "AUDIT_REPORT.md", records: data }, null, 2)}\n`;
  fs.writeFileSync(path.join(outputDir, name), content, "utf8");
  fileEntries[name] = { sha256: sha256(Buffer.from(content, "utf8")), records: data.length };
}
const auditDate = report.match(/^Audit date:\s*([^.]*)\./m)?.[1] || null;
const manifest = { schemaVersion: 1, source: "../../AUDIT_REPORT.md", sourceSha256, auditDate, extraction: "deterministic; generated files must not be hand-edited", files: fileEntries };
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ status: "PASS", sourceSha256, files: fileEntries }, null, 2));
