import { read, result } from "./lib.mjs";

const out = result("academic-math-rendering");
const html = read("index.html");
const mathjax = read("vendor/mathjax/tex-svg.js");
const documents = ["LESSONS.md", "ASSESSMENTS.md", "DAILY_APPLIED_ASSESSMENTS.md"].map(file => read(file));
const inlineValues = documents.flatMap(document => [...document.matchAll(/`([^`]+)`/g)].map(match => match[1]));
const representative = {
  fraction: inlineValues.some(value => /\d+\s*\/\s*\d+/.test(value)),
  exponent: inlineValues.some(value => /[²³^]/.test(value)),
  matrix: inlineValues.some(value => /^\[\[.+\]\]$/.test(value)),
  norm: inlineValues.some(value => /\|\|.+\|\|/.test(value)),
  multilineCandidate: inlineValues.some(value => value.length > 34 && /[=≤≥≈]/.test(value)),
  greek: inlineValues.some(value => /[α-ωΑ-Ωℓχ]/.test(value))
};

inlineValues.length >= 150 ? out.pass("source-inventory", `${inlineValues.length} inline source spans audited`) : out.fail("source-inventory", `Only ${inlineValues.length} inline spans found`);
for (const [kind, present] of Object.entries(representative)) present ? out.pass(kind, `${kind} source represented`) : out.fail(kind, `${kind} source missing`);
for (const marker of ["function isMathematicalCode", "function toLatexMath", "math-display-source", "typesetMath", "mathjax-ready"]) html.includes(marker) ? out.pass(`renderer-${marker}`, marker) : out.fail(`renderer-${marker}`, `${marker} missing`);
for (const marker of ["enableSpeech: false", "enableBraille: false", "enableExplorer: false", "speech: false", "braille: false", "attachSpeech: []", "explorable: []"]) html.includes(marker) ? out.pass(`offline-${marker}`, marker) : out.fail(`offline-${marker}`, `${marker} missing; MathJax may request an unavailable file:// accessibility worker`);
mathjax.length > 1000000 ? out.pass("offline-bundle", "Local MathJax 4 SVG bundle present") : out.fail("offline-bundle", "Local MathJax bundle incomplete");
out.pending("browser-render", "Rendered SVG equations require interactive browser confirmation");
out.finish();
