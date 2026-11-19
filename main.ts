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

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const artwork = new URL("./entry.png", import.meta.url);

copyFileSync(artwork, join(outDir, "entry.png"));
