import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of Monday, written as if Monday were a restaurant.
const entry =
  "One star. Monday's menu is just alarms and emails, the waiter never shows, and the bill is five days long.";

// Bounty gate: one line, 1-25 words, 1-180 chars, plain text naming Monday.
// Fail loudly here instead of shipping an entry the judge would reject.
const trimmed = entry.trim();
const words = trimmed.split(/\s+/).filter(Boolean);
if (trimmed.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (words.length < 1 || words.length > 25) {
  throw new Error(`entry must be 1-25 words, got ${words.length}`);
}
if (trimmed.length < 1 || trimmed.length > 180) {
  throw new Error(`entry must be 1-180 chars, got ${trimmed.length}`);
}
if (!trimmed.includes("Monday")) {
  throw new Error("entry must name Monday");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed + "\n", { encoding: "utf8" });
