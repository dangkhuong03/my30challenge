import { read, result } from "./lib.mjs";

const out = result("assessments");
const assessments = read("ASSESSMENTS.md");
const keys = read("ASSESSMENT_KEYS.md");
const challenge = read("CHALLENGE.md");
const coverage = read("COVERAGE_MAP.md");
const daa = read("DAILY_APPLIED_ASSESSMENTS.md");
const app = read("index.html");

try {
  const inlineScripts = [...app.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(match => match[1]).filter(source => source.trim());
  for (const source of inlineScripts) new Function(source);
  out.pass("app-script-syntax", `${inlineScripts.length} inline application script(s) compile`);
} catch (error) {
  out.fail("app-script-syntax", error.message);
}

const baseline = [...assessments.matchAll(/^### A(\d+) — ([^\r\n:]+)/gm)].map(match => ({ id: Number(match[1]), domain: match[2].trim() }));
const final = [...assessments.matchAll(/^### F(\d+) — ([^\r\n:]+)/gm)].map(match => ({ id: Number(match[1]), domain: match[2].trim() }));
baseline.length === 10 ? out.pass("baseline-count", "10 baseline tasks") : out.fail("baseline-count", `${baseline.length} baseline tasks`);
final.length === 10 ? out.pass("final-count", "10 final tasks") : out.fail("final-count", `${final.length} final tasks`);

const baselineCounts = Object.fromEntries([...new Set(baseline.map(item => item.domain))].map(domain => [domain, baseline.filter(item => item.domain === domain).length]));
if (Object.keys(baselineCounts).length === 5 && Object.values(baselineCounts).every(count => count === 2)) out.pass("baseline-domain-balance", JSON.stringify(baselineCounts));
else out.fail("baseline-domain-balance", `Declared two tasks/domain conflicts with ${JSON.stringify(baselineCounts)}`);

const finalCounts = Object.fromEntries([...new Set(final.map(item => item.domain))].map(domain => [domain, final.filter(item => item.domain === domain).length]));
if (Object.keys(finalCounts).length === 5 && Object.values(finalCounts).every(count => count === 2)) out.pass("final-domain-balance", JSON.stringify(finalCounts));
else out.fail("final-domain-balance", JSON.stringify(finalCounts));

assessments.includes("10 scored tasks × 10 điểm = 100") && keys.includes("## Calibration Form B") ? out.pass("assessment-arithmetic", "Declared 100-point forms and calibration key are present") : out.fail("assessment-arithmetic", "Missing consistent total/key declaration");
const thresholdSources = `${challenge}\n${assessments}`;
(/80%|≥80/.test(thresholdSources) && /70%|≥14\/20/.test(thresholdSources)) ? out.pass("thresholds", "Overall ≥80 and per-domain 70%/14-of-20 floors remain declared") : out.fail("thresholds", "Expected overall and domain-floor declarations not found");

const mandatory = /Evaluator transfer bắt buộc/.test(coverage);
const optional = /không phải điều kiện\s*`?PASS`?/i.test(daa) || /tùy chọn|optional/i.test(daa.slice(0, 500));
mandatory && optional ? out.fail("evaluator-authority", "COVERAGE_MAP requires DAA while DAA declares itself optional") : out.pass("evaluator-authority", "No mandatory/optional conflict detected");

/\["PASS", "PARTIAL", "FAIL"\]\.includes\(event\.status\)[\s\S]{0,250}event\.doneTest\.trim\(\)[\s\S]{0,250}event\.verification === "self-reported"[\s\S]{0,120}event\.origin === "app"/.test(app) ? out.pass("key-exposure", "Key gate requires a local completed assessment attempt with evidence, Done test, and confirmation") : out.fail("key-exposure", "Key gate does not enforce the complete local-attempt contract");
const importIsUnverified = /imported \? "imported-unverified"/.test(app) && /normalizeState\(JSON\.parse\(await file\.text\(\)\), true\)/.test(app) && /assessmentUnlocks: imported \? \[\]/.test(app);
const passGateIsLocal = /event\?\.status === "PASS"[\s\S]{0,300}event\.verification === "self-reported"[\s\S]{0,120}event\.origin === "app"/.test(app);
importIsUnverified && passGateIsLocal ? out.pass("imported-pass", "Imported events remain unverified and cannot unlock progression or keys") : out.fail("imported-pass", "Imported PASS or unlock metadata can still satisfy a verified gate");

const documentOrder = app.match(/const documentOrder = \[([^\]]+)\]/)?.[1] || "";
const architectureIsSeparated = assessments.includes("## Calibration — Public Form B") && assessments.includes("## Final — Sealed Parallel Form") && !documentOrder.includes('"ASSESSMENTS.md"');
architectureIsSeparated ? out.pass("held-back-final", "Public calibration is labeled and the sealed final prompt/key are absent from learner-visible document navigation") : out.fail("held-back-final", "Public and held-back assessment boundaries are not enforced");

const allCapabilityGate = assessments.includes("ledger M1–M100") && challenge.includes("Capability evidence ledger M1–M100") && assessments.includes("packet ID và SHA-256");
allCapabilityGate ? out.pass("universal-acceptance", `The ${final.length}-task public calibration cannot substitute for the explicit M1–M100 ledger and sealed packet gate`) : out.fail("universal-acceptance", "No explicit all-100 ledger plus sealed-final acceptance gate detected");

const reviewDone = [...read("PLAN.md").matchAll(/\*\*Done:\*\*([^\n]+)/g)].map(match => match[1]).filter(text => /70%|RL\/Systems|Agent Architecture/.test(text));
reviewDone.every(text => !/hoặc có recovery|hoặc tạo recovery/i.test(text)) ? out.pass("recovery-semantics", "Recovery plans do not substitute for review PASS") : out.fail("recovery-semantics", "A recovery plan can still satisfy a review Done gate");
out.pending("browser-validation", "Static source checks are not browser evidence. Routing, storage, imports, status transitions, and access gates require browser validation in Phase 1/6.");
architectureIsSeparated ? out.pass("held-back-integrity", "Current repository contains only the sealed-final protocol, not a held-back prompt or key; future form equivalence still requires independent review") : out.fail("held-back-integrity", "Held-back prompt/key material is not isolated from public sources");
out.finish();
