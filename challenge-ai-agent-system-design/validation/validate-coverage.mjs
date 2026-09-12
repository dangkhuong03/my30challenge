import { exactSequence, read, result } from "./lib.mjs";

const out = result("semantic-coverage");
const dataset = JSON.parse(read("remediation/audit-data/questions.json"));
const allRows = dataset.records || [];
const args = process.argv.slice(2);
const option = name => { const index = args.indexOf(name); return index >= 0 ? args[index + 1] : null; };
const id = option("--id")?.toUpperCase();
const from = Number(option("--from")?.replace(/^M/i, "")) || null;
const to = Number(option("--to")?.replace(/^M/i, "")) || null;
const day = Number(option("--day")) || null;
const wantedStatus = option("--status")?.toUpperCase();
const gap = option("--gap")?.toUpperCase();
let rows = allRows;
if (id) rows = rows.filter(row => row.id === id);
if (from) rows = rows.filter(row => Number(row.id.slice(1)) >= from);
if (to) rows = rows.filter(row => Number(row.id.slice(1)) <= to);
if (day) rows = rows.filter(row => row.dayIds.includes(day));
if (wantedStatus) rows = rows.filter(row => row.auditStatus === wantedStatus);
if (gap) rows = rows.filter(row => row.gapIds.includes(gap));

const allIds = allRows.map(row => Number(row.id.slice(1)));
exactSequence(allIds, 1, 100) ? out.pass("matrix-ids", "Audit dataset contains M1–M100 exactly once") : out.fail("matrix-ids", `Expected 100 unique rows; found ${allRows.length}`);
rows.length ? out.pass("selection", `Selected ${rows.length} record(s): ${rows.map(row => row.id).join(",")}`) : out.fail("selection", "No records match the requested filters");

const requiredFields = ["id", "capability", "principle", "prerequisite", "reasoningAssumptionsTradeoffs", "misconception", "difficulty", "relevantDays", "lessonEvidence", "workedExample", "independentExercise", "materialTransfer", "advancedVariant", "evaluator", "retrieval", "auditStatus", "rationale", "gapIds"];
const malformed = rows.filter(row => requiredFields.some(field => row[field] === undefined || row[field] === null || row[field] === "")).map(row => row.id);
malformed.length ? out.fail("matrix-fields", `Missing required fields: ${malformed.join(", ")}`) : out.pass("matrix-fields", `All selected rows have ${requiredFields.length} fields`);

const allowed = new Set(["PASS", "PARTIAL", "FAIL", "UNKNOWN"]);
const counts = { PASS: 0, PARTIAL: 0, FAIL: 0, UNKNOWN: 0 };
for (const row of rows) {
  const status = row.auditStatus;
  if (allowed.has(status)) counts[status] += 1;
  else out.fail("matrix-status", `${row.id} has invalid status ${status}`);
}
out.pass("matrix-status-counts", JSON.stringify(counts));
if (!rows.length) out.fail("semantic-acceptance", "No selected records can be accepted");
else if (counts.PARTIAL || counts.FAIL || counts.UNKNOWN) out.fail("semantic-acceptance", `Not acceptable: ${counts.PARTIAL} PARTIAL, ${counts.FAIL} FAIL, ${counts.UNKNOWN} UNKNOWN`);
else out.pass("semantic-acceptance", "All capability rows are semantically accepted");

const gapTracker = read("remediation/GAP_TRACKER.md");
for (let n = 1; n <= 18; n += 1) {
  const id = `G${String(n).padStart(2, "0")}`;
  if (!gapTracker.includes(`| ${id} |`)) out.fail("gap-routing", `${id} is not routed`);
}
out.pending("human-semantic-review", "Automation validates ledger shape and references only. Material transfer, explanation quality, correctness, and mastery require human review.");
out.finish();
