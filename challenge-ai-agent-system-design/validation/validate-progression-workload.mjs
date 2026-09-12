import { read, result } from "./lib.mjs";
const out=result("progression-and-workload"),architecture=read("remediation/THIRTY_DAY_ARCHITECTURE.md"),workload=read("remediation/WORKLOAD_BUDGET.md"),lessons=read("LESSONS.md"),plan=read("PLAN.md");
for(const day of [7,14,21,28]){
  const row=architecture.split(/\r?\n/).find(line=>new RegExp(`^\\| ${day} \\|`).test(line))||"";
  row.includes("—")?out.pass(`review-route:${day}`,"No new capability route"):out.fail(`review-route:${day}`,"Review introduces a route");
  const start=lessons.search(new RegExp(`^## [^\\r\\n]* ${day} [^\\r\\n]*$`,"m")),tail=start>=0?lessons.slice(start):"",next=tail.slice(1).search(/^## [^#\r\n]+$/m),block=next>=0?tail.slice(0,next+1):tail;
  (/không học topic mới|no new capability/i.test(block))?out.pass(`review-content:${day}`,"Review-only contract"):out.fail(`review-content:${day}`,"Review-only statement missing");
}
for(const [day,budget] of [[6,240],[20,240],[27,240]]){
  const row=architecture.split(/\r?\n/).find(line=>new RegExp(`^\\| ${day} \\|`).test(line))||"";
  row.includes(`${budget}m`)&&plan.includes(`### Ngày ${day}`)&&plan.includes(`Target action (${budget} phút)`)?out.pass(`dense:${day}`,`${budget}m aligned`):out.fail(`dense:${day}`,"Dense-day budget mismatch");
}
for(const token of ["S3","S2","S1","S0","Minimum sessions","mandatory evaluators","redistribution"])(architecture.includes(token)||workload.includes(token))?out.pass(`policy:${token}`,"Present"):out.fail(`policy:${token}`,"Missing");
for(const day of [7,14,18,21,23,25,28,29]) lessons.includes(`Day ${day}`)||lessons.includes(`Ngày ${day}`)?out.pass(`retrieval:${day}`,"Retrieval route referenced"):out.fail(`retrieval:${day}`,"Retrieval route missing");
out.pending("observed-workload","Designed workload passes; learner-timed pilots for dense days are unavailable");out.finish();
