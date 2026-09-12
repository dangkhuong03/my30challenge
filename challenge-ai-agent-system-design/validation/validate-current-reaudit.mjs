import { exactSequence, read, result, uniqueNumbers } from "./lib.mjs";
const out=result("current-full-rebuild-reaudit"),report=read("remediation/CURRENT_REAUDIT.md"),lessons=read("LESSONS.md"),assessments=read("ASSESSMENTS.md"),keys=read("ASSESSMENT_KEYS.md");
const rows=[...report.matchAll(/^\| ((?:M|P)\d+) \| (\d+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \| (PASS|PARTIAL|FAIL|PENDING) \|$/gm)].map(m=>({id:m[1],day:Number(m[2]),evaluator:m[3].trim(),transfer:m[4].trim(),retrieval:m[5].trim(),status:m[6]}));
const mIds=rows.filter(r=>r.id.startsWith("M")).map(r=>Number(r.id.slice(1))),pIds=rows.filter(r=>r.id.startsWith("P")).map(r=>Number(r.id.slice(1)));
exactSequence(mIds,1,100)?out.pass("M-inventory","M1–M100 exactly once"):out.fail("M-inventory",`Invalid: ${uniqueNumbers(mIds).join(",")}`);
exactSequence(pIds,1,18)?out.pass("P-inventory","P1–P18 exactly once"):out.fail("P-inventory",`Invalid: ${uniqueNumbers(pIds).join(",")}`);
for(const r of rows){
  r.status==="PASS"?out.pass(`status:${r.id}`,`Day ${r.day}`):out.fail(`status:${r.id}`,r.status);
  lessons.includes(r.id)?out.pass(`lesson:${r.id}`,"Route referenced"):out.fail(`lesson:${r.id}`,"Missing route");
  assessments.includes(r.evaluator)&&keys.includes(`**${r.evaluator}:**`)?out.pass(`eval:${r.id}`,r.evaluator):out.fail(`eval:${r.id}`,`Evaluator/rubric missing: ${r.evaluator}`);
  r.transfer.length>=12?out.pass(`transfer:${r.id}`,r.transfer):out.fail(`transfer:${r.id}`,"Transfer description too weak");
}
report.includes("learner mastery")&&report.includes("PENDING")?out.pass("separation","Curriculum and learner evidence separated"):out.fail("separation","Evidence separation missing");
out.pending("learner-evidence","No learner attempts or sealed final result were evaluated");out.finish();
