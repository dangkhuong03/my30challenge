import { exists, read, result, parsePayload } from "./lib.mjs";

const out = result("payload");
const groups = [["content-data.js", "CHALLENGE_CONTENT"], ["supplemental-data.js", "CHALLENGE_SUPPLEMENTAL"]];
let total = 0;
for (const [file, globalName] of groups) {
  try {
    const entries = parsePayload(file, globalName);
    const names = entries.map(entry => entry.name);
    const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
    duplicates.length ? out.fail(`duplicates:${file}`, [...new Set(duplicates)].join(", ")) : out.pass(`duplicates:${file}`, `${entries.length} unique payload entries`);
    for (const entry of entries) {
      total += 1;
      let decoded;
      try { decoded = Buffer.from(entry.base64, "base64").toString("utf8"); }
      catch { out.fail(`decode:${entry.name}`, "Invalid base64"); continue; }
      let source;
      try { source = read(entry.name); }
      catch { out.fail(`source:${entry.name}`, "Authoritative source is missing"); continue; }
      decoded === source ? out.pass(`match:${entry.name}`, "Payload matches authoritative UTF-8 source byte-for-text") : out.fail(`match:${entry.name}`, `Stale payload in ${file}`);
    }
  } catch (error) {
    out.fail(`parse:${file}`, error.message);
  }
}
out.pass("payload-total", `${total} embedded documents inspected`);
exists("validation/generate-payloads.mjs") ? out.pass("generator", "Explicit deterministic generator exists; validation remains read-only") : out.fail("generator", "No authoritative payload generation command exists");
out.finish();
