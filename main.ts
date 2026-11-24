// Angry Judge: The Short Rant Contest — make.fun bounty
// Entry: a funny rant about a small everyday annoyance, 1-400 characters.
// The supermarket trolley has one wheel that only turns left.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const entry =
  "The supermarket trolley has one wheel that only turns left. I came in for milk and now I am doing laps of the cereal aisle like a lost parade float, wrestling a metal cage that squeaks louder every time I try to go right. It is not a trolley. It is a hostage situation with a wobbly wheel, and I am paying for the privilege.";

// Gate: the house gate scorer requires /output/entry.txt to be UTF-8 text
// of 1 to 400 characters, not only white space — fail loudly instead of
// writing a bad entry.
if (entry.length < 1 || entry.length > 400) {
  console.error(`entry must be 1-400 characters, got ${entry.length}`);
  process.exit(1);
}
if (entry.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

// Self-check: read the entry back and confirm it is exactly the rant.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== entry) {
  console.error(
    `entry mismatch: wrote ${JSON.stringify(entry)}, read back ${JSON.stringify(written)}`,
  );
  process.exit(1);
}
console.log(`Entry: ${written}`);
console.log(`Character count: ${written.length} (limit 400)`);
