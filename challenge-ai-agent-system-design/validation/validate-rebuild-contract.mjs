import { exactSequence, read, result } from "./lib.mjs";

const out = result("full-rebuild-contract");
const contract = read("remediation/FULL_REBUILD_CONTRACT.md");
const workflow = read("remediation/REBUILD_WORKFLOW.md");
const lessons = read("LESSONS.md");
const coverage = read("COVERAGE_MAP.md");
const html = read("index.html");
const requiredFunctions = [
  "Outcome and learning tree",
  "Prerequisites and earlier retrieval",
  "First principles and worked reconstruction",
  "Independent practice",
  "Material transfer and advanced variant",
  "Evaluator, feedback and retrieval",
  "Done and evidence"
];

for (const phrase of ["every Day 1–30", "M1–M100", "P1–P18", "coherent learning journey", "Curriculum readiness", "learner mastery"]) {
  contract.includes(phrase) ? out.pass(`contract:${phrase}`, "Required rebuild authority present") : out.fail(`contract:${phrase}`, "Missing rebuild authority");
}

const gates = [...workflow.matchAll(/^## Gate (\d+)\b/gm)].map(match => Number(match[1]));
exactSequence(gates, 0, 7) ? out.pass("workflow-gates", "Rebuild gates 0–7 are complete") : out.fail("workflow-gates", `Invalid gates: ${gates.join(",")}`);

let compliantDays = 0;
for (let day = 1; day <= 30; day += 1) {
  const start = lessons.search(new RegExp(`^## Ngày ${day} —`, "m"));
  if (start < 0) { out.fail(`day:${day}`, "Authoritative day section missing"); continue; }
  const tail = lessons.slice(start);
  const next = tail.slice(1).search(/^## Ngày \d+ —/m);
  const block = next >= 0 ? tail.slice(0, next + 1) : tail;
  const missing = requiredFunctions.filter(name => !block.includes(`### ${name}`));
  if (missing.length) out.fail(`day:${day}`, `Missing daily functions: ${missing.join(", ")}`);
  else { compliantDays += 1; out.pass(`day:${day}`, "Integrated daily learning surface present"); }
}
compliantDays === 30 ? out.pass("thirty-day-rebuild", "30/30 days meet the rebuild surface contract") : out.fail("thirty-day-rebuild", `${compliantDays}/30 days currently meet the rebuild surface contract`);

const m = [...coverage.matchAll(/^\| M(\d+)\s*\|/gm)].map(x => Number(x[1])).slice(0, 100);
const p = [...coverage.matchAll(/^\| P(\d+)\s*\|/gm)].map(x => Number(x[1])).slice(0, 18);
exactSequence(m, 1, 100) && exactSequence(p, 1, 18) ? out.pass("capability-inventory", "M1–M100 and P1–P18 inventories are complete") : out.fail("capability-inventory", "118-capability inventory is incomplete");

/content-data\.js\?v=/.test(html) ? out.pass("payload-cache-version", "HTML references a versioned generated payload") : out.fail("payload-cache-version", "HTML payload reference is not versioned");
/^## Archived Day /m.test(lessons) ? out.fail("detached-legacy", "Archived legacy day sections remain in the authoritative lesson document") : out.pass("detached-legacy", "No detached legacy day sections remain");
out.pending("semantic-review", "Automation cannot certify correctness, coherence, transfer materiality or workload feasibility");
out.pending("browser-review", "Rendered behavior requires browser validation");
out.pending("learner-evidence", "No learner mastery is inferred from curriculum files");
out.finish();
