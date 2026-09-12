import { read, result } from "./lib.mjs";

const out = result("phase3-foundations");
const ids = ["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12","M72","M79","M81","P11"];
const lessons = read("LESSONS.md");
const assessments = read("ASSESSMENTS.md");
const keys = read("ASSESSMENT_KEYS.md");
const coverage = read("COVERAGE_MAP.md");
const status = read("remediation/PHASE3_BATCH_STATUS.md");
const requiredSections = ["Outcome and learning tree", "First principles and worked reconstruction", "Independent practice", "Material transfer and advanced variant", "Evaluator, feedback and retrieval", "Done and evidence"];
const dayBlocks = new Map();
for (const day of [2,3,4,5]) {
  const start = lessons.search(new RegExp(`^## Ngày ${day} —`, "m"));
  const tail = start >= 0 ? lessons.slice(start) : "";
  const next = tail.slice(1).search(/^## Ngày \d+ —/m);
  const block = start >= 0 ? (next >= 0 ? tail.slice(0, next + 1) : tail) : "";
  dayBlocks.set(day, block);
  const missing = requiredSections.filter(name => !block.includes(`### ${name}`));
  missing.length ? out.fail(`daily-contract:${day}`, `Missing: ${missing.join(", ")}`) : out.pass(`daily-contract:${day}`, "Integrated day contract is complete");
}

for (const id of ids) {
  const day = ["M1","M5"].includes(id) ? 2 : ["M3","M4","M7","M11","M12"].includes(id) ? 3 : ["M2","M6","M8","M10"].includes(id) ? 4 : 5;
  const lessonPattern = new RegExp(`(?:P3-${id}|\\*\\*${id}(?:[: —]))`);
  lessonPattern.test(dayBlocks.get(day)) ? out.pass(`lesson:${id}`, "ID is integrated in the authoritative day section") : out.fail(`lesson:${id}`, "ID missing from authoritative day section");
  assessments.includes(`**P3-${id}:**`) ? out.pass(`evaluator:${id}`, "Dedicated evaluator present") : out.fail(`evaluator:${id}`, "Dedicated evaluator missing");
  keys.includes(`**P3-${id}:**`) ? out.pass(`rubric:${id}`, "Dedicated rubric present") : out.fail(`rubric:${id}`, "Dedicated rubric missing");
  coverage.includes(`| ${id} | Day`) ? out.pass(`coverage:${id}`, "Phase 3 ledger row present") : out.fail(`coverage:${id}`, "Phase 3 ledger row missing");
}
status.includes("| Foundations | M1,M2,M3,M4,M5,M6,M7,M8,M9,M10,M11,M12,M72,M79,M81,P11 | 2–5 |") && status.includes("| PASS |")
  ? out.pass("batch-review", "Foundations batch has an explicit semantic decision")
  : out.fail("batch-review", "Foundations semantic decision missing");
out.pending("learner-evidence", "No learner attempts or delayed retrieval results were evaluated");
out.finish();
