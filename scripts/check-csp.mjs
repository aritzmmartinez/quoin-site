import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const files = readdirSync("dist", { recursive: true })
  .map(String)
  .filter((f) => f.endsWith(".html"));
let failures = 0;

for (const file of files) {
  const html = readFileSync(join("dist", file), "utf8");
  const csp = html.match(
    /http-equiv="content-security-policy" content="([^"]*)"/,
  )?.[1];
  if (!csp) {
    console.error(`${file}: no CSP meta`);
    failures++;
    continue;
  }
  const blocks = [
    ...html.matchAll(/<(script|style)(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/\1>/g),
  ];
  for (const [, tag, body] of blocks) {
    if (!body) continue;
    const hash = createHash("sha256").update(body).digest("base64");
    if (!csp.includes(hash)) {
      console.error(`${file}: unhashed <${tag}> ${body.slice(0, 60)}`);
      failures++;
    }
  }
  for (const [attr] of html.matchAll(/\sstyle="[^"]+"/g)) {
    console.error(`${file}: inline style attribute ${attr.trim()}`);
    failures++;
  }
}

if (failures) process.exit(1);
console.log(`CSP check: ${files.length} pages ok`);
