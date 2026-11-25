import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of Monday, written as if Monday were a restaurant.
const entry =
  "One star. Monday's menu is just alarms and emails, the waiter never shows, and the bill is five days long.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
