import { read, result } from "./lib.mjs";
const out=result("application-static-delivery"),html=read("index.html"),payload=read("content-data.js"),lessons=read("LESSONS.md"),plan=read("PLAN.md"),mathjax=read("vendor/mathjax/tex-svg.js");
try {
  const inlineScripts=[...html.matchAll(/<script(?![^>]+\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(match=>match[1]);
  inlineScripts.forEach(source=>new Function(source));
  out.pass("inline-script-syntax",`${inlineScripts.length} inline scripts parse successfully`);
} catch(error) {
  out.fail("inline-script-syntax",error.message);
}
for(const [code,text] of [["payload","content-data.js?v=full-rebuild-v1"],["day-schema","day-data.js?v=day-schema-v1"],["structured-route","window.CHALLENGE_DAYS"],["progress","localStorage"],["append-events","events:"],["gating","assessmentLocked"],["status","validStatuses"],["learn-build","id=\"learnBuildBlock\""],["practice-verify","id=\"practiceVerifyBlock\""],["evidence-continue","id=\"evidenceContinueBlock\""],["mathjax-loader","vendor/mathjax/tex-svg.js"],["latex-normalizer","function toLatexMath"],["dynamic-typeset","function typesetMath"],["display-math","math-display-source"]]) html.includes(text)?out.pass(code,text):out.fail(code,`${text} missing`);
(!/innerHTML\s*=\s*assessmentLocked\s*\?\s*["']{2}/.test(html))?out.pass("no-destructive-assessment-render","Assessment state never replaces lesson content with an empty string"):out.fail("no-destructive-assessment-render","Assessment state can erase rendered lesson content");
(!/learnBuildBlock\.hidden\s*=\s*assessmentLocked/.test(html))?out.pass("lesson-block-remains-available","Learn & Build is not removed from the page by assessment state"):out.fail("lesson-block-remains-available","Assessment state hides the complete Learn & Build block");
(!html.includes("typesetClear"))?out.pass("math-preserves-rendered-content","Math typesetting cannot clear freshly rendered lesson containers"):out.fail("math-preserves-rendered-content","Math typesetting still clears lesson containers after content insertion");
const blockOrder=["learnBuildBlock","practiceVerifyBlock","evidenceContinueBlock"].map(id=>html.indexOf(`id="${id}"`));
(blockOrder.every(index=>index>=0)&&blockOrder[0]<blockOrder[1]&&blockOrder[1]<blockOrder[2])?out.pass("learning-flow-order","Learn -> Practice -> Evidence"):out.fail("learning-flow-order","Three-block order mismatch");
(["learnBuildBlock","practiceVerifyBlock","evidenceContinueBlock"].every(id=>new RegExp(`<details[^>]+id="${id}"`).test(html)))?out.pass("major-disclosures","All three learning blocks are collapsible details"):out.fail("major-disclosures","One or more learning blocks are not collapsible");
(!html.includes("data-source-panel="))?out.pass("no-fragmented-source-cards","Five fragmented source accordions are not used"):out.fail("no-fragmented-source-cards","Fragmented source accordions remain");
(mathjax.length>1000000)?out.pass("local-mathjax","Self-hosted MathJax bundle present"):out.fail("local-mathjax","Self-hosted MathJax bundle missing or incomplete");
(payload.includes("LESSONS.md")&&payload.includes("PLAN.md"))?out.pass("payload-docs","Core documents embedded"):out.fail("payload-docs","Core documents missing");
(!lessons.includes("## Archived Day")&&[...lessons.matchAll(/^## [^\r\n]* (\d+) [^\r\n]*$/gm)].filter(m=>Number(m[1])>=1&&Number(m[1])<=30).length===30)?out.pass("thirty-days","30 nonlegacy lesson sections"):out.fail("thirty-days","Lesson inventory mismatch");
const rows=plan.split(/\r?\n/).filter(line=>/^\|\s*\d+\s*\|/.test(line));rows.length===30?out.pass("contract-rows","30 browser contracts"):out.fail("contract-rows",`${rows.length} contracts`);
out.pending("browser-runtime","Integrated browser runtime was unavailable in this session; DOM interaction is not claimed PASS");out.finish();
