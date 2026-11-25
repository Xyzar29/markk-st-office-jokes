import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: real detail (the printer that jams on urgent
// documents), punchline landing in the last few words.
const joke =
  "I told the printer my report was urgent, so it jammed on page one out of professional courtesy.\n";

// Write the single line exactly as authored: one line, trailing newline,
// nothing else — the gate counts every character (limit 199).
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(joke);
