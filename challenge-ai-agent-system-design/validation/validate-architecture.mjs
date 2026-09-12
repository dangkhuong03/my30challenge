import { exactSequence, read, result, splitTableRow } from "./lib.mjs";

const out = result("thirty-day-architecture");
const text = read("remediation/THIRTY_DAY_ARCHITECTURE.md");
const plan = read("PLAN.md");
const review = read("remediation/ARCHITECTURE_REVIEW.md");
const workload = read("remediation/WORKLOAD_BUDGET.md");
const rows = text.split(/\r?\n/).filter(line => /^\|\s*\d+\s*\|/.test(line)).map(splitTableRow);
const days = rows.map(row => Number(row[0]));
exactSequence(days, 1, 30) ? out.pass("days", "Days 1–30 are unique and ordered") : out.fail("days", `Found ${days.length} rows: ${days.join(",")}`);
rows.every(row => row.length === 7 && row.slice(1).every(Boolean)) ? out.pass("fields", "All architecture rows have seven complete fields") : out.fail("fields", "Architecture row is incomplete");

const routeCells = rows.map(row => row[3]).join(",");
const m = [...routeCells.matchAll(/\bM(\d+)\b/g)].map(x => Number(x[1]));
const p = [...routeCells.matchAll(/\bP(\d+)\b/g)].map(x => Number(x[1]));
exactSequence(m, 1, 100) ? out.pass("M-routes", "M1–M100 are first-routed exactly once") : out.fail("M-routes", `M routes count ${m.length}`);
exactSequence(p, 1, 18) ? out.pass("P-routes", "P1–P18 are first-routed exactly once") : out.fail("P-routes", `P routes count ${p.length}`);

for (const token of ["S3", "S2", "S1", "S0", "changed retest", "Review days introduce no hidden mandatory concepts", "timebox overflow yields `PARTIAL`"]) {
  text.includes(token) ? out.pass(`invariant:${token}`, "Architecture invariant present") : out.fail(`invariant:${token}`, "Architecture invariant missing");
}
review.includes("Prerequisite ordering: `PASS`") && review.includes("Workload feasibility by design: `PASS`")
  ? out.pass("semantic-sequencing", "Blueprint prerequisite, coherence and designed-workload review passed")
  : out.fail("semantic-sequencing", "Gate 1 semantic review is incomplete");
for (const day of [6,20,27]) {
  plan.includes(`| ${day} |`) && plan.match(new RegExp(`\\| ${day} \\|[^\\n]*240'`))
    ? out.pass(`dense-day:${day}`, "PLAN declares 240-minute target")
    : out.fail(`dense-day:${day}`, "PLAN is not aligned to dense-day budget");
}
workload.includes("requires pilot") ? out.pending("observed-workload", "Designed feasibility is accepted for Gate 1; observed pilots remain a Gate 4 requirement") : out.fail("observed-workload", "Workload pilot boundary missing");
out.finish();
