import { read, result } from "./lib.mjs";

const out = result("anti-memorization");
const benchmark = read("../de-luyen-tap.md");
const targets = ["LESSONS.md", "PLAN.md", "DAILY_APPLIED_ASSESSMENTS.md", "ASSESSMENTS.md"];
const normalize = value => value.toLowerCase().replace(/[`*_#>|()[\]{}.,:;!?“”"']/g, " ").replace(/\s+/g, " ").trim();
const words = value => new Set(normalize(value).split(" ").filter(word => word.length > 3));
const similarity = (a, b) => {
  const aa = words(a); const bb = words(b);
  if (aa.size < 12 || bb.size < 12) return 0;
  const intersection = [...aa].filter(word => bb.has(word)).length;
  return intersection / Math.min(aa.size, bb.size);
};

const questionMatches = [...benchmark.matchAll(/^### Question (\d+)\b[\s\S]*?(?=^### Question \d+\b|\s*$)/gm)];
const questions = questionMatches.map(match => ({ id: Number(match[1]), text: match[0] }));
if (questions.length !== 100) out.fail("benchmark-extraction", `Expected 100 questions; found ${questions.length}`);
else out.pass("benchmark-extraction", "Extracted 100 question blocks");

let exact = 0;
let warnings = 0;
for (const file of targets) {
  const source = read(file);
  const normalizedSource = normalize(source);
  for (const question of questions) {
    const body = normalize(question.text.replace(/^### Question \d+\b/, "")).slice(0, 180);
    if (body.length >= 80 && normalizedSource.includes(body)) {
      exact += 1;
      out.fail("exact-benchmark-reuse", `${file} contains a long exact normalized fragment from M${question.id}`);
    }
  }
  const blocks = source.split(/^##+ /m);
  for (const question of questions) {
    const best = Math.max(0, ...blocks.map(block => similarity(question.text, block)));
    if (best >= 0.72) {
      warnings += 1;
      out.warn("similarity-review", `${file} has a block with high token-overlap to M${question.id} (${best.toFixed(2)}); semantic adjudication required`);
    }
  }
}
if (!exact) out.pass("exact-benchmark-reuse", "No long exact normalized benchmark fragment found in public teaching/practice files");
if (!warnings) out.pass("similarity-review", "No high-overlap heuristic warning at threshold 0.72");
out.pending("material-transfer-review", "Numeric, noun, dimension, assumption, representation, evidence, loss, dependency, and failure-semantic changes require human classification; heuristics cannot certify transfer.");
out.finish();
