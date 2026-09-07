from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import hashlib,json,re
root=Path("/root/.openclaw/workspace/prevayl-marketing-redesign-20260907")
original=Path("/root/.openclaw/workspace/prevayl-next")
out=root/"out"
class Page(HTMLParser):
 def __init__(self,s):
  super().__init__();self.links=[];self.assets=[];self.ids=set();self.h1=0;self.main=0;self.screen=0;self.feed(s)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=="a" and a.get("href"):self.links.append(a["href"])
  if tag in ["img","script"] and a.get("src"):self.assets.append(a["src"])
  if tag=="link" and a.get("rel") in ["stylesheet","preload"]:self.assets.append(a.get("href",""))
  if a.get("id"):self.ids.add(a["id"])
  if tag=="h1":self.h1+=1
  if tag=="main":self.main+=1
  if tag=="figure" and "pvl-screen" in a.get("class",""):self.screen+=1
files=[p for p in out.rglob("index.html") if "_next" not in p.parts]
pages={"/"+str(p.parent.relative_to(out)).replace(".","").strip("/"):Page(p.read_text()) for p in files}
errors=[];external=set()
for route,parsed in pages.items():
 if parsed.h1!=1:errors.append([route,"h1 count",parsed.h1])
 if parsed.main!=1:errors.append([route,"main count",parsed.main])
 if parsed.screen>1:errors.append([route,"duplicate product screenshots",parsed.screen])
 for value in parsed.assets:
  u=urlsplit(value)
  if not u.netloc and u.path.startswith("/") and not (out/unquote(u.path).lstrip("/")).is_file():errors.append([route,"missing asset",value])
 for value in parsed.links:
  u=urlsplit(value)
  if u.scheme or u.netloc:continue
  target=u.path.rstrip("/") or route if not u.path else u.path.rstrip("/") or "/"
  if target not in pages:
   if re.match(r"^/(register|signup|login|legal)(/|$)",target):external.add(target)
   else:errors.append([route,"unresolved internal link",value])
  elif u.fragment and unquote(u.fragment) not in pages[target].ids:errors.append([route,"missing fragment",value])
protected=["components/home/Hero.tsx","components/ui/Band.tsx","app/globals.css","content/site.ts","tailwind.config.ts","public/art/hero-4.webp"]
hero={p:hashlib.sha256((root/p).read_bytes()).hexdigest() for p in protected}
for p in protected:
 if (root/p).read_bytes()!=(original/p).read_bytes():errors.append(["protected hero dependency changed",p])
result={"routes":len(pages),"heroProtectedFiles":hero,"productionRedirects":sorted(external),"errors":errors}
(root/"VALIDATION.json").write_text(json.dumps(result,indent=2))
print(json.dumps(result,indent=2))
raise SystemExit(bool(errors))
