import fs from "node:fs";
import path from "node:path";
import { challengeDir, validationDir } from "./lib.mjs";

const validators = ["validate-structure.mjs", "validate-audit-data.mjs", "validate-rebuild-contract.mjs", "validate-architecture.mjs", "validate-progression-workload.mjs", "validate-current-reaudit.mjs", "validate-anti-memorization.mjs", "validate-assessments.mjs", "validate-phase2.mjs", "validate-phase3-foundations.mjs", "validate-batch-06-10.mjs", "validate-batch-11-14.mjs", "validate-batch-15-19.mjs", "validate-batch-20-24.mjs", "validate-batch-25-29.mjs", "validate-final-output.mjs", "validate-day-schema.mjs", "validate-application-static.mjs", "validate-math-rendering.mjs", "validate-payload.mjs"];
globalThis.__VALIDATION_COLLECT__ = [];
for (const file of validators) await import(`${new URL(file, import.meta.url).href}?aggregate=${Date.now()}-${file}`);
const collected = globalThis.__VALIDATION_COLLECT__;
delete globalThis.__VALIDATION_COLLECT__;
const runs = validators.map((file, index) => ({ file, exitCode: collected[index]?.counts?.FAIL ? 1 : 0, ...(collected[index] || { name: file, status: "FAIL", counts: { PASS: 0, FAIL: 1, PENDING: 0, WARNING: 0 }, items: [{ status: "FAIL", code: "runner", message: "Validator did not return a result" }] }) }));

const totals = { PASS: 0, FAIL: 0, PENDING: 0, WARNING: 0 };
for (const run of runs) for (const key of Object.keys(totals)) totals[key] += run.counts?.[key] || 0;
const overall = totals.FAIL ? "FAIL" : totals.PENDING ? "PENDING" : "PASS";
const now = new Date().toISOString();
const lines = [
  "# Latest Validation Result", "", `- Timestamp: ${now}`, "- Scope: local static workflow/harness validation", `- Overall curriculum gate: \`${overall}\``, `- Checks: ${totals.PASS} PASS, ${totals.FAIL} FAIL, ${totals.PENDING} PENDING, ${totals.WARNING} WARNING`, "",
  "## Validator summary", "", "| Validator | Exit | Status | PASS | FAIL | PENDING | WARNING |", "|---|---:|---|---:|---:|---:|---:|",
  ...runs.map(run => `| ${run.file} | ${run.exitCode ?? "?"} | ${run.status} | ${run.counts?.PASS || 0} | ${run.counts?.FAIL || 0} | ${run.counts?.PENDING || 0} | ${run.counts?.WARNING || 0} |`), "",
  "## Failed invariants and warnings", ""
];
for (const run of runs) {
  const findings = (run.items || []).filter(item => ["FAIL", "WARNING"].includes(item.status));
  if (!findings.length) continue;
  lines.push(`### ${run.file}`, "", ...findings.map(item => `- **${item.status} ${item.code}:** ${item.message}`), "");
}
lines.push("## Unverified gates", "", "- Semantic adequacy and material transfer: human review required.", "- Browser behavior and localStorage state: not tested by this static harness.", "- External resource availability/completion: not tested.", "- Workload feasibility: requires recorded pilots.", "- Learner performance, transfer, and retention: no learner evidence evaluated.", "", "A successful infrastructure run must not be interpreted as curriculum or learner mastery acceptance.", "");
const resultsDir = path.join(challengeDir, "validation-results");
fs.mkdirSync(resultsDir, { recursive: true });
fs.writeFileSync(path.join(resultsDir, "latest-result.md"), lines.join("\n"), "utf8");
console.log(JSON.stringify({ name: "all", status: overall, totals, validators: runs.map(({ file, exitCode, status, counts }) => ({ file, exitCode, status, counts })), result: "validation-results/latest-result.md" }, null, 2));
process.exitCode = totals.FAIL ? 1 : 0;
