import { read, result } from "./lib.mjs";

const out = result("rebuild-days-06-10");
const lessons = read("LESSONS.md");
const assessments = read("ASSESSMENTS.md");
const keys = read("ASSESSMENT_KEYS.md");
const coverage = read("COVERAGE_MAP.md");
const ids = ["M13","M14","M15","M18","M20","M21","M26","M27","M30","M16","M17","M25","M29","M37","M19","M24","M91","M92","M97","P10","M22","M23","M28"];
const p2 = new Set(["M20","M21","M30"]);
const functions = ["Outcome and learning tree","Prerequisites and earlier retrieval","First principles and worked reconstruction","Independent practice","Material transfer and advanced variant","Evaluator, feedback and retrieval","Done and evidence"];

for (const day of [6,7,8,9,10]) {
  const start = lessons.search(new RegExp(`^## Ngày ${day} —`, "m"));
  const tail = start >= 0 ? lessons.slice(start) : "";
  const next = tail.slice(1).search(/^## Ngày \d+ —/m);
  const block = next >= 0 ? tail.slice(0, next + 1) : tail;
  const missing = functions.filter(name => !block.includes(`### ${name}`));
  missing.length ? out.fail(`day:${day}`, `Missing: ${missing.join(", ")}`) : out.pass(`day:${day}`, "Full daily surface present");
}

for (const id of ids) {
  const evaluator = `${p2.has(id) ? "P2" : "P3"}-${id}`;
  lessons.includes(id) ? out.pass(`lesson:${id}`, "Capability routed in lesson batch") : out.fail(`lesson:${id}`, "Lesson route missing");
  assessments.includes(`**${evaluator}:**`) || assessments.includes(`### ${evaluator} —`) ? out.pass(`evaluator:${id}`, evaluator) : out.fail(`evaluator:${id}`, `${evaluator} missing`);
  keys.includes(`**${evaluator}:**`) ? out.pass(`rubric:${id}`, evaluator) : out.fail(`rubric:${id}`, `${evaluator} rubric missing`);
  coverage.includes(`| ${id} | Day`) || coverage.includes(`| ${id} | Lesson Day`) ? out.pass(`coverage:${id}`, "Ledger row present") : out.fail(`coverage:${id}`, "Ledger row missing");
}

out.pending("workload-pilot", "Day 6 has an explicit 240-minute design budget but no observed pilot");
out.pending("learner-evidence", "No learner attempts or retained-transfer results were evaluated");
out.finish();
