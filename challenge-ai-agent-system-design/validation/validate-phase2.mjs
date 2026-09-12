import { read, result, splitTableRow } from "./lib.mjs";

const out = result("phase2-seven-chains");
const ids = ["M20", "M21", "M30", "M39", "M42", "M68", "M77"];
const lessons = read("LESSONS.md");
const assessments = read("ASSESSMENTS.md");
const keys = read("ASSESSMENT_KEYS.md");
const plan = read("PLAN.md");
const coverage = read("COVERAGE_MAP.md");
const review = read("remediation/PHASE2_SEMANTIC_REVIEW.md");
const chainLabels = ["Mechanism", "Worked example", "Independent exercise", "Material transfer", "Misconception correction", "Changed retry", "Delayed retrieval"];

for (const id of ids) {
  const start = lessons.indexOf(`#### ${id} —`);
  const tail = start >= 0 ? lessons.slice(start) : "";
  const next = tail.slice(4).search(/\n#### M\d+|\n## Ngày/);
  const block = start >= 0 ? (next >= 0 ? tail.slice(0, next + 4) : tail) : "";
  if (start < 0) out.fail(`lesson:${id}`, "Missing dedicated lesson chain");
  else {
    const missing = chainLabels.filter(label => !block.includes(`**${label}`));
    missing.length ? out.fail(`chain:${id}`, `Missing: ${missing.join(", ")}`) : out.pass(`chain:${id}`, "Seven lesson links present");
  }
  assessments.includes(`### P2-${id} —`) ? out.pass(`evaluator:${id}`, "Dedicated evaluator present") : out.fail(`evaluator:${id}`, "Dedicated evaluator missing");
  keys.includes(`**P2-${id}:**`) ? out.pass(`rubric:${id}`, "Dedicated rubric present") : out.fail(`rubric:${id}`, "Dedicated rubric missing");
  plan.includes(`P2-${id}-R`) ? out.pass(`retrieval:${id}`, "Delayed retrieval routed in plan") : out.fail(`retrieval:${id}`, "Delayed retrieval missing from plan");
  coverage.includes(`| ${id} | Lesson Day`) ? out.pass(`coverage:${id}`, "Eight-link index row present") : out.fail(`coverage:${id}`, "Coverage index row missing");
}

const rows = review.split(/\r?\n/).filter(line => /^\| M(?:20|21|30|39|42|68|77)\s*\|/.test(line)).map(splitTableRow);
const malformed = rows.filter(row => row.length !== 10 || row.slice(1).some(cell => cell !== "PASS"));
rows.length === 7 && !malformed.length ? out.pass("semantic-review", "Seven rows have eight-link PASS decisions") : out.fail("semantic-review", `Expected 7 complete PASS rows; found ${rows.length}, malformed ${malformed.length}`);
out.pending("learner-evidence", "Curriculum path readiness does not prove learner attempts, retries or retained mastery");
out.finish();
