import { read, result } from "./lib.mjs";

const out = result("rebuild-days-11-14");
const lessons = read("LESSONS.md");
const plan = read("PLAN.md");
const assessments = read("ASSESSMENTS.md");
const keys = read("ASSESSMENT_KEYS.md");
const coverage = read("COVERAGE_MAP.md");
const ids = ["M31","M32","M40","M44","M33","M34","M36","M35","M38","M39","M41","M42","M43","M45"];
const p2 = new Set(["M39","M42"]);
const functions = ["Outcome and learning tree","Prerequisites and earlier retrieval","First principles and worked reconstruction","Independent practice","Material transfer and advanced variant","Evaluator, feedback and retrieval","Done and evidence"];

for (const day of [11,12,13,14]) {
  const marker = new RegExp(`^## [^\\r\\n]* ${day} [^\\r\\n]*$`, "m");
  const start = lessons.search(marker);
  const tail = start >= 0 ? lessons.slice(start) : "";
  const next = tail.slice(1).search(/^## [^#\r\n]+$/m);
  const block = next >= 0 ? tail.slice(0, next + 1) : tail;
  const missing = functions.filter(name => !block.includes(`### ${name}`));
  missing.length ? out.fail(`day:${day}`, `Missing: ${missing.join(", ")}`) : out.pass(`day:${day}`, "Full daily surface present");
  const planStart = plan.search(new RegExp(`^### [^\\r\\n]* ${day} [^\\r\\n]*$`, "m"));
  const planTail = planStart >= 0 ? plan.slice(planStart) : "";
  const planNext = planTail.slice(1).search(/^### [^#\r\n]+$/m);
  const planBlock = planNext >= 0 ? planTail.slice(0, planNext + 1) : planTail;
  const planFields = ["Outcome:", "Minimum action", "Target action", "Done when:", "Evidence:", "Stretch:"];
  const missingPlan = planFields.filter(field => !planBlock.includes(field));
  missingPlan.length ? out.fail(`plan:${day}`, `Missing: ${missingPlan.join(", ")}`) : out.pass(`plan:${day}`, "Actionable daily plan present");
}

for (const id of ids) {
  const evaluator = `${p2.has(id) ? "P2" : "P3"}-${id}`;
  lessons.includes(id) ? out.pass(`lesson:${id}`, "Capability routed") : out.fail(`lesson:${id}`, "Lesson route missing");
  assessments.includes(evaluator) ? out.pass(`evaluator:${id}`, evaluator) : out.fail(`evaluator:${id}`, `${evaluator} missing`);
  keys.includes(`**${evaluator}:**`) ? out.pass(`rubric:${id}`, evaluator) : out.fail(`rubric:${id}`, `${evaluator} rubric missing`);
  coverage.includes(`| ${id} | Day`) ? out.pass(`coverage:${id}`, "Ledger row present") : out.fail(`coverage:${id}`, "Ledger row missing");
}

out.pending("workload-pilot", "Designed timeboxes exist; no observed Days 11–14 workload pilot was evaluated");
out.pending("learner-evidence", "No learner attempts or retained-transfer results were evaluated");
out.finish();
