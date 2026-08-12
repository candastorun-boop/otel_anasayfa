#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const index = path.join(dist, "client", "index.html");
const worker = path.join(root, "worker", "index.js");
const hosting = path.join(root, ".openai", "hosting.json");
const serverEntry = path.join(dist, "ssr", "entry-server.js");

for (const file of [index, worker, hosting, serverEntry]) {
  if (!existsSync(file)) throw new Error("Missing Sites build input: " + file);
}

const { render } = await import(serverEntry);
const appHtml = render();
const documentHtml = readFileSync(index, "utf8").replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
writeFileSync(index, documentHtml);

mkdirSync(path.join(dist, "server"), { recursive: true });
mkdirSync(path.join(dist, ".openai"), { recursive: true });
copyFileSync(worker, path.join(dist, "server", "index.js"));
copyFileSync(hosting, path.join(dist, ".openai", "hosting.json"));
rmSync(path.join(dist, "ssr"), { recursive: true, force: true });

console.log("Prepared pre-rendered HTML and Sites build files.");
