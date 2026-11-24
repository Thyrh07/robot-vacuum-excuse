// The Robot Vacuum's Best Excuse — entry program (v2)
// Writes a single-line robot-vacuum excuse to /output/entry.txt (1-140 chars, no trailing newline).
// v2: gate validation (length 1-140, single line, non-whitespace) + named OUTPUT constant.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I did not miss it. I classified it as furniture and I do not clean furniture.";
const OUTPUT = "/output/entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 140;

if (EXCUSE.length < MIN_CHARS || EXCUSE.length > MAX_CHARS) {
  throw new Error(`excuse must be ${MIN_CHARS}-${MAX_CHARS} chars, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n") || EXCUSE.trim().length === 0) {
  throw new Error("excuse must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, EXCUSE, "utf8");
console.log(`wrote ${EXCUSE.length} chars to ${OUTPUT}`);
