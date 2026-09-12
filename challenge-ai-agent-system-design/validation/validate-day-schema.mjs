import vm from "node:vm";
import { read, result } from "./lib.mjs";

const out=result("day-schema");
const sandbox={window:{}};
try { vm.runInNewContext(read("day-data.js"),sandbox); }
catch(error) { out.fail("parse",error.message); out.finish(); }
const days=sandbox.window.CHALLENGE_DAYS || [];
days.length===30?out.pass("count","30 structured day records"):out.fail("count",`${days.length} day records`);
const required=["lesson","plan","resources","practice"];
for(let expected=1;expected<=30;expected++){
  const day=days[expected-1];
  if(!day || day.day!==expected){out.fail(`day-${expected}`,"Missing or out-of-order day record");continue;}
  const missing=required.filter(field=>!day.content?.[field]?.markdown?.trim()||!day.content?.[field]?.blocks?.length);
  if(!day.phase||!day.title||!day.outcome||!day.minimum||!day.target||!day.done||!day.evidence) missing.push("contract metadata");
  missing.length?out.fail(`day-${expected}`,`Missing: ${missing.join(", ")}`):out.pass(`day-${expected}`,required.map(field=>`${field}:${day.content[field].blocks.length} blocks`).join(" "));
}
out.finish();
