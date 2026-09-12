import { exactSequence, exists, read, result, splitTableRow, uniqueNumbers } from "./lib.mjs";

const out = result("structure");
const required = ["audit-musk.md", "AUDIT_REPORT.md", "CHALLENGE.md", "PLAN.md", "LESSONS.md", "LESSON_TEMPLATE.md", "ASSESSMENTS.md", "ASSESSMENT_KEYS.md", "DAILY_APPLIED_ASSESSMENTS.md", "COVERAGE_MAP.md", "PROGRESS.md", "content-data.js", "supplemental-data.js", "index.html", "run-harness.ps1", "remediation/WORKFLOW.md", "remediation/REBUILD_WORKFLOW.md", "remediation/FULL_REBUILD_CONTRACT.md", "remediation/AUTHORITY_MAP.md", "remediation/GAP_TRACKER.md", "remediation/PHASE_STATUS.md", "remediation/PHASE1_ASSESSMENT_CONTRACT.md", "remediation/PHASE2_SEMANTIC_REVIEW.md", "remediation/PHASE3_BATCH_STATUS.md", "remediation/CURRENT_REAUDIT.md", "remediation/BROWSER_REVIEW.md", "remediation/FINAL_REBUILD_REPORT.md", "remediation/audit-data/manifest.json", "remediation/audit-data/questions.json", "remediation/audit-data/days.json", "remediation/audit-data/gaps.json", "remediation/audit-data/acceptance.json", "remediation/audit-data/conflicts.json", "validation/generate-payloads.mjs", "validation/generate-current-reaudit.mjs", "validation/validate-rebuild-contract.mjs", "validation/validate-current-reaudit.mjs", "validation/validate-final-output.mjs", "validation/validate-application-static.mjs", "validation/validate-progression-workload.mjs"];
const missing = required.filter(file => !exists(file));
missing.length ? out.fail("required-files", `Missing: ${missing.join(", ")}`) : out.pass("required-files", `${required.length} required files exist`);

for (const [file, pattern] of [["PLAN.md", /^### Ngày (\d+)\b/gm], ["LESSONS.md", /^## Ngày (\d+)\b/gm], ["DAILY_APPLIED_ASSESSMENTS.md", /^## Ngày (\d+)\b/gm]]) {
  const ids = [...read(file).matchAll(pattern)].map(match => Number(match[1]));
  exactSequence(ids, 1, 30) ? out.pass(`days:${file}`, "Days 1–30 are unique and complete") : out.fail(`days:${file}`, `Found ${ids.length} headings; unique IDs: ${uniqueNumbers(ids).join(",")}`);
}

const planRows = read("PLAN.md").split(/\r?\n/).filter(line => /^\|\s*\d+\s*\|/.test(line)).map(splitTableRow);
if (planRows.length === 30 && planRows.every(row => row.length === 7 && row.slice(1).every(Boolean))) out.pass("daily-contract-matrix", "30 complete seven-field daily contract rows");
else out.fail("daily-contract-matrix", `Expected 30 complete seven-field rows; found ${planRows.length}`);

const coverageManifest = read("COVERAGE_MAP.md").split("## Evaluator và evidence mapping hai chiều")[0];
const coverageIds = [...coverageManifest.matchAll(/^\| M(\d+)\s*\|/gm)].map(match => Number(match[1]));
exactSequence(coverageIds, 1, 100) ? out.pass("benchmark-ids", "M1–M100 are unique and complete in the manifest") : out.fail("benchmark-ids", `Invalid M accounting: ${coverageIds.length} rows`);

const benchmarkIds = [...read("../de-luyen-tap.md").matchAll(/^### Question (\d+)\b/gm)].map(match => Number(match[1]));
exactSequence(benchmarkIds, 1, 100) ? out.pass("source-questions", "Question 1–100 are unique and complete") : out.fail("source-questions", `Invalid source accounting: ${benchmarkIds.length}`);

const gapIds = [...read("remediation/GAP_TRACKER.md").matchAll(/^\| G(\d+)\s*\|/gm)].map(match => Number(match[1]));
exactSequence(gapIds, 1, 18) ? out.pass("gap-ids", "G01–G18 are unique and complete") : out.fail("gap-ids", `Invalid gap accounting: ${gapIds.length}`);

const phases = [...read("remediation/WORKFLOW.md").matchAll(/^### Phase (\d+)\b/gm)].map(match => Number(match[1]));
exactSequence(phases, 0, 7) ? out.pass("phases", "Phase 0–7 are ordered and complete") : out.fail("phases", `Invalid phases: ${phases.join(",")}`);

const allowed = new Set(["PENDING", "IN_PROGRESS", "PASS", "PARTIAL", "FAIL", "BLOCKED"]);
const trackerRows = read("remediation/GAP_TRACKER.md").split(/\r?\n/).filter(line => /^\| G\d+/.test(line)).map(splitTableRow);
const invalid = trackerRows.filter(row => !allowed.has(row.at(-1))).map(row => `${row[0]}:${row.at(-1)}`);
invalid.length ? out.fail("workflow-statuses", `Invalid: ${invalid.join(", ")}`) : out.pass("workflow-statuses", "All gap workflow statuses use the allowed vocabulary");

out.pending("semantic-fields", "Daily structural fields do not prove that explanations, examples, transfer, feedback, or evidence are semantically adequate");
out.finish();
