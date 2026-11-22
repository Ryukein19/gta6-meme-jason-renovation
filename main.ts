// gta6-meme-x-01 — Jason's renovation invoice.
//
// The judged artifact is the X post itself (its first picture + text).
// This program only hands over the post's address: it reads POST.json,
// validates that it names a real X post URL, and copies POST.json and
// meme.png to the output directory. It exits 1 on a placeholder URL
// by design — the user posts the image to X first, then wires the URL in.
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });

if (!existsSync("POST.json") || !existsSync("meme.png")) {
  console.error("POST.json and meme.png must both sit next to main.ts");
  process.exit(1);
}

const posted = JSON.parse(readFileSync("POST.json", "utf8"));
const url = posted.url ?? posted.post;
if (typeof url !== "string" || !/^https:\/\/(x\.com|twitter\.com)\/\w+\/status\/\d+/.test(url)) {
  console.error("POST.json must name a real X post URL, e.g. https://x.com/Weeennn19/status/123");
  process.exit(1);
}

writeFileSync(join(out, "POST.json"), JSON.stringify({ url }));
copyFileSync("meme.png", join(out, "meme.png"));
console.log(url);
