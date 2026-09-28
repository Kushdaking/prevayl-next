#!/usr/bin/env node
// Fails the build if any exported page loads Next assets from a bare /_next/
// path. On prevaylos.com those requests hit the droplet and 404, leaving the
// page unstyled. See next.config.mjs (assetPrefix).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.argv[2] || 'out';
const BARE = /(?:href|src)="\/_next\//;
const bad = [];
let pages = 0;
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) { pages++; if (BARE.test(readFileSync(p, 'utf8'))) bad.push(p); }
  }
})(OUT);

if (pages === 0) { console.error(`[asset-prefix] no HTML found in ${OUT}/`); process.exit(1); }
if (bad.length) {
  console.error(`[asset-prefix] FAIL: ${bad.length}/${pages} pages load /_next/ assets without the pages.dev prefix:`);
  bad.slice(0, 10).forEach((p) => console.error('  ' + p));
  console.error('Rebuild without overriding ASSET_PREFIX (production builds default to https://prevayl-web.pages.dev).');
  process.exit(1);
}
console.log(`[asset-prefix] OK: ${pages} pages, all assets prefixed`);
