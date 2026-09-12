import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { challengeDir, exactSequence, result } from "./lib.mjs";

const out = result("audit-data");
const dataDir = path.join(challengeDir, "remediation", "audit-data");
const hash = value => crypto.createHash("sha256").update(value).digest("hex");
let manifest;
try { manifest = JSON.parse(fs.readFileSync(path.join(dataDir, "manifest.json"), "utf8")); }
catch (error) { out.fail("manifest", `Cannot read manifest: ${error.message}`); out.finish(); process.exit(); }

const reportBytes = fs.readFileSync(path.join(challengeDir, "AUDIT_REPORT.md"));
hash(reportBytes) === manifest.sourceSha256 ? out.pass("source-hash", "Audit data belongs to the current immutable report snapshot") : out.fail("source-hash", "AUDIT_REPORT.md changed; explicit reviewed regeneration is required");

const datasets = {};
for (const [name, metadata] of Object.entries(manifest.files || {})) {
  try {
    const bytes = fs.readFileSync(path.join(dataDir, name));
    hash(bytes) === metadata.sha256 ? out.pass(`hash:${name}`, "Generated dataset hash matches manifest") : out.fail(`hash:${name}`, "Generated dataset was edited or is stale");
    const parsed = JSON.parse(bytes.toString("utf8"));
    datasets[name] = parsed.records;
    parsed.schemaVersion === 1 ? out.pass(`schema:${name}`, "schemaVersion 1") : out.fail(`schema:${name}`, `Unsupported schema ${parsed.schemaVersion}`);
    parsed.records.length === metadata.records ? out.pass(`count:${name}`, `${parsed.records.length} records`) : out.fail(`count:${name}`, `Manifest declares ${metadata.records}, found ${parsed.records.length}`);
  } catch (error) { out.fail(`read:${name}`, error.message); }
}

const questionNumbers = (datasets["questions.json"] || []).map(item => Number(item.id?.slice(1)));
exactSequence(questionNumbers, 1, 100) ? out.pass("question-ids", "M1–M100 complete and unique") : out.fail("question-ids", "Question IDs are incomplete or duplicated");
const dayNumbers = (datasets["days.json"] || []).map(item => item.day);
exactSequence(dayNumbers, 1, 30) ? out.pass("day-ids", "Day 1–30 complete and unique") : out.fail("day-ids", "Day IDs are incomplete or duplicated");
const gapNumbers = (datasets["gaps.json"] || []).map(item => Number(item.id?.slice(1)));
exactSequence(gapNumbers, 1, 18) ? out.pass("gap-ids", "G01–G18 complete and unique") : out.fail("gap-ids", "Gap IDs are incomplete or duplicated");
const acceptanceNumbers = (datasets["acceptance.json"] || []).map(item => Number(item.id?.slice(2)));
exactSequence(acceptanceNumbers, 1, 9) ? out.pass("acceptance-ids", "AC01–AC09 complete and unique") : out.fail("acceptance-ids", "Acceptance IDs are incomplete or duplicated");

const allowedAudit = new Set(["PASS", "PARTIAL", "FAIL", "UNKNOWN"]);
for (const name of ["questions.json", "days.json", "gaps.json", "acceptance.json", "conflicts.json"]) {
  const invalid = (datasets[name] || []).filter(item => !allowedAudit.has(item.auditStatus)).map(item => item.id || item.day);
  invalid.length ? out.fail(`statuses:${name}`, `Invalid audit statuses: ${invalid.join(",")}`) : out.pass(`statuses:${name}`, "Audit statuses use the allowed vocabulary");
}
out.pending("semantic-integrity", "Hashes prove snapshot integrity, not correctness of the audit judgments. Semantic changes require re-audit, not hand-edited JSON.");
out.finish();
