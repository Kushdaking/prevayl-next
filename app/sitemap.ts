import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
export default function sitemap(): MetadataRoute.Sitemap {
  const root=path.join(process.cwd(),"app");
  const entries: MetadataRoute.Sitemap=[];
  function visit(dir:string){
    for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
      const file=path.join(dir,entry.name);
      if(entry.isDirectory()) visit(file);
      else if(entry.name==="page.tsx"){
        const route=path.relative(root,dir).split(path.sep).join("/");
        if(!["login","register"].includes(route))
          entries.push({url:"https://prevaylos.com/"+(route?route+"/":"")});
      }
    }
  }
  visit(root);
  return entries;
}
