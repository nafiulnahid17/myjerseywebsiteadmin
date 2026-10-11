import { access, readdir } from "node:fs/promises";

await access(new URL("./public/index.html", import.meta.url));
const files = await readdir(new URL("./public/assets", import.meta.url));

if (files.length === 0) {
  throw new Error("The admin assets folder is empty. Run pnpm run build:admin-cloudflare first.");
}

console.log(`Verified the prebuilt admin bundle (${files.length} assets).`);
