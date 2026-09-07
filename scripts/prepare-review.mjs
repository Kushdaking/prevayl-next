import fs from "node:fs";import path from "node:path";
const base=process.cwd(),out=path.join(base,"out"),dest=path.join(base,"dist");
if(!fs.existsSync(path.join(out,"index.html")))throw Error("Missing successful static export");
fs.mkdirSync(dest,{recursive:true});
const assetRoots=new Set(["art","brand","screenshots"]);const selected=new Set();
function scan(d){for(const f of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,f.name);const rel=path.relative(out,p);if(f.isDirectory()){if(!assetRoots.has(rel))scan(p)}else{if(/\.(?:html|js|css|txt)$/.test(p)){const s=fs.readFileSync(p,"utf8");for(const m of s.matchAll(/\/(?:art|brand|screenshots)\/[a-zA-Z0-9_./-]+\.(?:webp|jpg|jpeg|png|svg|gif|woff2?)/g))selected.add(m[0]);}const target=path.join(dest,rel);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(p,target)}}}
scan(out);
for(const a of selected){const source=path.join(out,a),target=path.join(dest,a);if(!fs.existsSync(source))throw Error("Missing referenced asset "+a);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(source,target)}
console.log(JSON.stringify({directory:"dist",referencedAssets:[...selected]},null,2));
