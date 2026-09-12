import { read, result } from "./lib.mjs";

const out = result("rebuild-days-15-19");
const lessons = read("LESSONS.md");
const plan = read("PLAN.md");
const assessments = read("ASSESSMENTS.md");
const keys = read("ASSESSMENT_KEYS.md");
const coverage = read("COVERAGE_MAP.md");
const ids = ["M46","M47","M48","M56","M62","M49","M55","M57","M50","M51","M60","M63","M52","M53","M58","M59","M64","M54","M61","M65"];
const functions = ["Outcome and learning tree","Prerequisites and earlier retrieval","First principles and worked reconstruction","Independent practice","Material transfer and advanced variant","Evaluator, feedback and retrieval","Done and evidence"];

function section(text, level, day) {
  const prefix = "#".repeat(level);
  const start = text.search(new RegExp(`^${prefix} [^\\r\\n]* ${day} [^\\r\\n]*$`, "m"));
  const tail = start >= 0 ? text.slice(start) : "";
  const next = tail.slice(1).search(new RegExp(`^${prefix} [^#\\r\\n]+$`, "m"));
  return next >= 0 ? tail.slice(0, next + 1) : tail;
}

for (const day of [15,16,17,18,19]) {
  const lesson = section(lessons, 2, day);
  const missing = functions.filter(name => !lesson.includes(`### ${name}`));
  missing.length ? out.fail(`day:${day}`, `Missing: ${missing.join(", ")}`) : out.pass(`day:${day}`, "Full daily surface present");
  const dayPlan = section(plan, 3, day);
  const fields = ["Outcome:","Minimum action","Target action","Done when:","Evidence:","Stretch:"];
  const missingPlan = fields.filter(field => !dayPlan.includes(field));
  missingPlan.length ? out.fail(`plan:${day}`, `Missing: ${missingPlan.join(", ")}`) : out.pass(`plan:${day}`, "Actionable daily plan present");
}

for (const id of ids) {
  const evaluator = `P3-${id}`;
  lessons.includes(id) ? out.pass(`lesson:${id}`, "Capability routed") : out.fail(`lesson:${id}`, "Lesson route missing");
  assessments.includes(`**${evaluator}:**`) ? out.pass(`evaluator:${id}`, evaluator) : out.fail(`evaluator:${id}`, `${evaluator} missing`);
  keys.includes(`**${evaluator}:**`) ? out.pass(`rubric:${id}`, evaluator) : out.fail(`rubric:${id}`, `${evaluator} rubric missing`);
  coverage.includes(`| ${id} | Day`) ? out.pass(`coverage:${id}`, "Ledger row present") : out.fail(`coverage:${id}`, "Ledger row missing");
}

out.pending("workload-pilot", "Designed timeboxes exist; no observed Days 15–19 workload pilot was evaluated");
out.pending("learner-evidence", "No learner attempts or retained-transfer results were evaluated");
out.finish();
