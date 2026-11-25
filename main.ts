import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Famous Last Words: The Funniest Epitaph
// Winner draft D05 (25/25): first-person dying speech, the twist lands on
// the last four words — the thing mourned is the Wi-Fi password, not the man.
// Tie-break vs runners-up D03/D14/D18/D23 (all 24/25): D05 is the only
// draft that is first-person dying speech AND stone-short AND quotable;
// D03's grammar joke is niche, D14's "oops" is thin, D18 needs the name Bob,
// D23's twist is a half-step weaker.
const ENTRY =
  "Do not mourn me. Mourn the Wi-Fi password. It dies with me.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
