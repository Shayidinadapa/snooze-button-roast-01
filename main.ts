// Snooze Button Roast — make.fun entry
// Writes one line roasting an alarm clock that rings at 6 AM on a Saturday
// to /output/entry.txt. The line is a fixed, hand-written string so the
// output is fully deterministic: the same bytes on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The roast: the clock is an unpaid intern, far too eager for a job
// nobody hired it for — the punchline lands in the last few words.
const ROAST =
  "My alarm clock rang at 6 AM on Saturday like an unpaid intern trying to impress a boss who doesn't exist.";

const MAX_CHARS = 200;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  const line = ROAST.trim();

  // Gate: exactly one line, 1-200 characters, not only whitespace.
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (!/\S/.test(line)) {
    throw new Error("entry must not be only whitespace");
  }

  // On-topic guard: the roast must actually name its target — an alarm
  // clock ringing at 6 AM on a Saturday — or it loses to any line that does.
  const lowered = line.toLowerCase();
  for (const must of ["alarm clock", "6 am", "saturday"]) {
    if (!lowered.includes(must)) {
      throw new Error(`entry must mention "${must}"`);
    }
  }

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, line, "utf8");

  // Round-trip guard: what landed on disk must be byte-for-byte the line
  // we validated, with no trailing newline or extra whitespace sneaking in.
  const written = readFileSync(OUT_FILE, "utf8");
  if (written !== line) {
    throw new Error("written entry does not match the validated line");
  }
}

main();
