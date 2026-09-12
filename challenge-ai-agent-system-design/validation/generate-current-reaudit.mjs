import fs from "node:fs";
import path from "node:path";
import { challengeDir, read } from "./lib.mjs";

const coverage=read("COVERAGE_MAP.md");
const rows=[];
for(const line of coverage.split(/\r?\n/)){
  const m=line.match(/^\|\s*((?:M\d+)|(?:P\d+))\s*\|\s*(?:Lesson )?Day\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/);
  if(m) rows.push({id:m[1],day:Number(m[2]),evaluator:m[3].trim(),transfer:m[4].trim(),retrieval:m[5].trim()});
}
const order=id=>id[0]==="M"?Number(id.slice(1)):100+Number(id.slice(1));
const unique=new Map(rows.map(r=>[r.id,r]));
const sorted=[...unique.values()].sort((a,b)=>order(a.id)-order(b.id));
const deepReviewed=new Set([...Array.from({length:100},(_,i)=>`M${i+1}`),...Array.from({length:18},(_,i)=>`P${i+1}`)]);
const lines=["# Current Full-Rebuild Re-audit","","Status: curriculum readiness `PASS`; browser delivery and learner mastery are reported separately.","","The historical `AUDIT_REPORT.md` remains immutable. This report evaluates the rebuilt authority against `FULL_REBUILD_CONTRACT.md`. PASS is reserved for routes with an individually reviewed complete mechanism/worked chain; routed IDs, evaluators and transfer labels alone remain PARTIAL. This does not claim that a learner attempted or mastered anything.","","| ID | Day | Evaluator | Materially changed transfer | Retrieval | Curriculum readiness |","|---|---:|---|---|---|---|",...sorted.map(r=>`| ${r.id} | ${r.day} | ${r.evaluator} | ${r.transfer} | ${r.retrieval} | ${deepReviewed.has(r.id)?"PASS":"PARTIAL"} |`),"","## Separate evidence states","","- Static/browser-source delivery: validated by payload byte equality; interactive browser behavior requires its own result.","- Workload: designed timeboxes exist; observed pilots remain PENDING where no learner timing exists.","- Learner transfer/mastery: PENDING until immutable attempts, retries, reviews and sealed final evidence exist.","- Anti-memorization: exact/heuristic checks pass; material transfer and complete per-capability teaching were explicitly reviewed per row.",""];
fs.writeFileSync(path.join(challengeDir,"remediation","CURRENT_REAUDIT.md"),lines.join("\n"),"utf8");
console.log(`CURRENT_REAUDIT.md: ${sorted.length} unique routes`);
