// news-image-20261118, Rev 4 — 38 stories in one image.
// Node 22, standard library only. The finished artwork is entry.png
// beside this file; this program copies it byte-for-byte into the
// output directory (/output, or MAKEFUN_OUTPUT_DIR when set).
// Rev 4 = Rev 2 layout rebuilt from the winner's thesis: 2-line deks
// with sources under every pictured headline, UTC timeline, date-check
// box, claim labels, region colours, 3-column index, 300px world map;
// illustrations are flat-vector Pillow drawings (Rev 8, 326x56 strips).
// Two 1px ink zone dividers (hero->grid, grid->brief) and a 10px
// hero->grid gap; total 1019/1024. The gate takes a whole PNG or JPEG
// of at most 1 MiB, 1024x1024 px.
// Resubmit fix 1: validate the copy (size must match) and log confirmation.
// Resubmit fix 2: check PNG signature + IHDR dimensions (must be 1024x1024).

import { copyFileSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const artwork = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");

const head = readFileSync(artwork);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
const width = head.readUInt32BE(16);
const height = head.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png dimensions must be 1024x1024, got ${width}x${height}`);
}

copyFileSync(artwork, dest);
const srcSize = statSync(artwork).size;
const dstSize = statSync(dest).size;
if (srcSize !== dstSize) {
  throw new Error(`entry.png copy size mismatch: ${srcSize} != ${dstSize}`);
}
console.log(`entry.png copied OK (${dstSize} bytes, ${width}x${height})`);
