from pathlib import Path
from html.parser import HTMLParser
import json
root=Path("/root/.openclaw/workspace/prevayl-marketing-review-source-20260907")
class Inspect(HTMLParser):
 def __init__(self):super().__init__();self.visuals=[];self.obsolete=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs);cls=a.get("class","").split()
  for c in ["pv-tile-path","sx-network","rc-flow-grid"]:
   if c in cls:self.obsolete.append(c)
  if "data-unique-visual" in a:self.visuals.append(a["data-unique-visual"])
results=[];seen={}
for p in sorted((root/"dist").rglob("*.html")):
 page=Inspect();page.feed(p.read_text())
 assert not page.obsolete,(str(p),page.obsolete)
 for name in page.visuals:
  assert name not in seen,(name,seen[name],str(p))
  seen[name]=str(p.relative_to(root/"dist"))
 results.append(str(p.relative_to(root/"dist")))
assert len(seen)==12,seen
print(json.dumps({"html_pages_checked":len(results),"obsolete_card_patterns":0,"bespoke_visuals":seen,"bespoke_visual_duplicates":0,"browser_visual_qa":False},indent=2))
