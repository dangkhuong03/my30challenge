import fs from "node:fs";
import path from "node:path";
import { challengeDir } from "./lib.mjs";

const groups = [
  { target: "content-data.js", globalName: "CHALLENGE_CONTENT", sources: ["ASSESSMENT_KEYS.md", "ASSESSMENTS.md", "CHALLENGE.md", "COVERAGE_MAP.md", "LESSON_TEMPLATE.md", "LESSONS.md", "PLAN.md", "PROGRESS.md"] },
  { target: "supplemental-data.js", globalName: "CHALLENGE_SUPPLEMENTAL", sources: ["SUPPLEMENTAL_RESOURCES.md", "DAILY_APPLIED_ASSESSMENTS.md", "RESEARCH_LEDGER.md"] }
];

for (const group of groups) {
  const entries = group.sources.map(name => ({ name, base64: fs.readFileSync(path.join(challengeDir, name)).toString("base64") }));
  fs.writeFileSync(path.join(challengeDir, group.target), `window.${group.globalName} = ${JSON.stringify(entries)};\n`, "utf8");
  console.log(`${group.target}: ${entries.length} sources`);
}

const readSource = name => fs.readFileSync(path.join(challengeDir, name), "utf8");
const extractSection = (markdown, level, headingText) => {
  const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
  const marker = `${"#".repeat(level)} `;
  const start = lines.findIndex(line => line.startsWith(marker) && line.includes(headingText));
  if (start < 0) return "";
  let end = start + 1;
  const boundary = new RegExp(`^#{1,${level}}\\s`);
  while (end < lines.length && !boundary.test(lines[end])) end += 1;
  return lines.slice(start, end).join("\n").trim();
};
const markdownBlocks = markdown => {
  const lines=String(markdown||"").replace(/\r\n/g,"\n").split("\n");
  const blocks=[];
  let index=0;
  while(index<lines.length){
    const line=lines[index];
    if(!line.trim()){index+=1;continue;}
    const fence=line.match(/^```(.*)$/);
    if(fence){const body=[];const language=fence[1].trim()||"text";index+=1;while(index<lines.length&&!/^```/.test(lines[index]))body.push(lines[index++]);if(index<lines.length)index+=1;blocks.push({type:"code",language,source:body.join("\n")});continue;}
    const heading=line.match(/^(#{1,6})\s+(.*)$/);
    if(heading){blocks.push({type:"heading",level:heading[1].length,text:heading[2]});index+=1;continue;}
    if(/^\s*(---+|\*\*\*+)\s*$/.test(line)){blocks.push({type:"rule"});index+=1;continue;}
    if(line.includes("|")&&/^\s*\|?\s*:?-{3,}/.test(lines[index+1]||"")){const cells=value=>value.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(cell=>cell.trim());const header=cells(line);index+=2;const rows=[];while(index<lines.length&&lines[index].includes("|")&&lines[index].trim())rows.push(cells(lines[index++]));blocks.push({type:"table",header,rows});continue;}
    if(/^\s*[-*+]\s+/.test(line)){const items=[];while(index<lines.length&&/^\s*[-*+]\s+/.test(lines[index]))items.push(lines[index++].replace(/^\s*[-*+]\s+/,""));blocks.push({type:"list",ordered:false,items});continue;}
    if(/^\s*\d+\.\s+/.test(line)){const items=[];while(index<lines.length&&/^\s*\d+\.\s+/.test(lines[index]))items.push(lines[index++].replace(/^\s*\d+\.\s+/,""));blocks.push({type:"list",ordered:true,items});continue;}
    if(/^>\s?/.test(line)){const body=[];while(index<lines.length&&/^>\s?/.test(lines[index]))body.push(lines[index++].replace(/^>\s?/,""));blocks.push({type:"quote",text:body.join(" ")});continue;}
    const body=[line.trim()];index+=1;
    while(index<lines.length&&lines[index].trim()&&!/^#{1,6}\s|^```|^\s*[-*+]\s+|^\s*\d+\.\s+|^>\s?|^\s*(---+|\*\*\*+)\s*$/.test(lines[index]))body.push(lines[index++].trim());
    blocks.push({type:"paragraph",text:body.join(" ")});
  }
  return blocks;
};
const typedContent = markdown => ({ markdown, blocks: markdownBlocks(markdown) });
const plan = readSource("PLAN.md");
const lessons = readSource("LESSONS.md");
const resources = readSource("SUPPLEMENTAL_RESOURCES.md");
const practice = readSource("DAILY_APPLIED_ASSESSMENTS.md");
const assessments = readSource("ASSESSMENTS.md");
const planLines = plan.replace(/\r\n/g, "\n").split("\n");
const headings = new Map();
let phase = "";
for (const line of planLines) {
  if (line.startsWith("## Phase ")) phase = line.slice(3).trim();
  const match = line.match(/^### Ngày (\d+) — (.+)$/);
  if (match) headings.set(Number(match[1]), { phase, title: match[2].trim() });
}
const cleanCell = value => value.trim().replace(/^`([^`]*)`$/, "$1");
const rows = planLines.filter(line => /^\|\s*\d+\s*\|/.test(line)).map(line => line.trim().slice(1, -1).split("|").map(cleanCell));
const daySchema = rows.map(cells => {
  const day = Number(cells[0]);
  const heading = headings.get(day) || { phase: "", title: "" };
  const lesson = extractSection(lessons, 2, `Ngày ${day} —`);
  const namedHeading = assessments.split(/\r?\n/).find(line => line.startsWith("## ") && new RegExp(`Ngày ${day}(?!\\d)`).test(line));
  const namedAssessment = namedHeading ? extractSection(assessments, 2, namedHeading.slice(3).trim()) : "";
  const capabilityIds = [...new Set(lesson.match(/\b(?:M(?:[1-9]|[1-9]\d|100)|P(?:[1-9]|1[0-8]))\b/g) || [])];
  const evaluators = capabilityIds.map(id => {
    const evaluator = assessments.includes(`P2-${id}`) ? `P2-${id}` : assessments.includes(`P3-${id}`) ? `P3-${id}` : "";
    if (!evaluator) return "";
    const section = extractSection(assessments, 3, evaluator);
    if (section) return section;
    const line = assessments.split(/\r?\n/).find(item => item.includes(`**${evaluator}:**`));
    return line ? `### ${evaluator}\n\n${line.replace(/^\s*-\s*\*\*[^*]+:\*\*\s*/, "")}` : "";
  }).filter(Boolean).join("\n\n");
  return {
    schemaVersion: 1, day, phase: heading.phase, title: heading.title,
    outcome: cells[1], minimum: cells[2], target: cells[3], done: cells[4], evidence: cells[5], stretch: cells[6],
    content: {
      lesson: typedContent(lesson),
      plan: typedContent(extractSection(plan, 3, `Ngày ${day} —`)),
      resources: typedContent(extractSection(resources, 2, `Ngày ${day} —`)),
      practice: typedContent(extractSection(practice, 2, `Ngày ${day} —`)),
      assessment: typedContent([namedAssessment, evaluators].filter(Boolean).join("\n\n"))
    },
    assessmentFirst: [1, 7, 14, 21, 28, 30].includes(day)
  };
});
if (daySchema.length !== 30 || daySchema.some((entry, index) => entry.day !== index + 1 || !entry.title || Object.values(entry.content).slice(0, 4).some(value => !value.markdown || !value.blocks.length))) {
  throw new Error("Unable to generate complete 30-day browser schema");
}
fs.writeFileSync(path.join(challengeDir, "day-data.js"), `window.CHALLENGE_DAYS = ${JSON.stringify(daySchema)};\n`, "utf8");
console.log(`day-data.js: ${daySchema.length} structured days`);
