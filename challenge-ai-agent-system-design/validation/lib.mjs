import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const validationDir = path.dirname(fileURLToPath(import.meta.url));
export const challengeDir = path.dirname(validationDir);
export const workspaceDir = path.dirname(challengeDir);

export function read(relative, base = challengeDir) {
  return fs.readFileSync(path.join(base, relative), "utf8").replace(/^\uFEFF/, "");
}

export function exists(relative, base = challengeDir) {
  return fs.existsSync(path.join(base, relative));
}

export function splitTableRow(line) {
  return line.trim().slice(1, -1).split("|").map(cell => cell.trim());
}

export function uniqueNumbers(values) {
  return [...new Set(values)].sort((a, b) => a - b);
}

export function exactSequence(values, start, end) {
  const expected = Array.from({ length: end - start + 1 }, (_, i) => i + start);
  const unique = uniqueNumbers(values);
  return unique.length === expected.length && unique.every((value, i) => value === expected[i]) && values.length === expected.length;
}

export function section(text, startHeading, nextHeadingPattern) {
  const start = text.indexOf(startHeading);
  if (start < 0) return "";
  const rest = text.slice(start + startHeading.length);
  const match = rest.match(nextHeadingPattern);
  return text.slice(start, match ? start + startHeading.length + match.index : text.length);
}

export function result(name) {
  const items = [];
  return {
    pass(code, message) { items.push({ status: "PASS", code, message }); },
    fail(code, message) { items.push({ status: "FAIL", code, message }); },
    pending(code, message) { items.push({ status: "PENDING", code, message }); },
    warn(code, message) { items.push({ status: "WARNING", code, message }); },
    finish() {
      const counts = { PASS: 0, FAIL: 0, PENDING: 0, WARNING: 0 };
      for (const item of items) counts[item.status] += 1;
      const status = counts.FAIL ? "FAIL" : counts.PENDING ? "PENDING" : "PASS";
      const payload = { name, status, counts, items };
      if (Array.isArray(globalThis.__VALIDATION_COLLECT__)) {
        globalThis.__VALIDATION_COLLECT__.push(payload);
      } else {
        console.log(JSON.stringify(payload, null, 2));
        process.exitCode = counts.FAIL ? 1 : 0;
      }
      return payload;
    }
  };
}

export function parsePayload(relative, globalName) {
  const source = read(relative);
  const match = source.match(new RegExp(`window\\.${globalName}\\s*=\\s*(\\[[\\s\\S]*\\]);?\\s*$`));
  if (!match) throw new Error(`Cannot parse ${relative}`);
  return JSON.parse(match[1]);
}
