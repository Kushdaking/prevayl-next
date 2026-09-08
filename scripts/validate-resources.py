from pathlib import Path
from html.parser import HTMLParser
import json
root=Path("/root/.openclaw/workspace/prevayl-marketing-review-source-20260907")
class Page(HTMLParser):
 def __init__(self): super().__init__();self.ids=set();self.links=[];self.text=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if "id" in a:self.ids.add(a["id"])
  if tag=="a" and "href" in a:self.links.append(a["href"])
 def handle_data(self,data):self.text.append(data)
report=[]
for p in sorted((root/"app/resources").rglob("page.tsx")):
 route=str(p.parent.relative_to(root/"app"))
 raw=(root/"dist"/route/"index.html").read_text()
 page=Page();page.feed(raw)
 for href in page.links:
  if href.startswith("#"):assert href[1:] in page.ids,(route,href)
 assert "More to come." not in raw
 if route.startswith("resources/docs/"):
  assert len([s for s in page.ids if s.startswith("guide-")])>=5,route
  assert "SHIPPED" not in raw and "Q3 2026" not in raw
 report.append({"route":"/"+route+"/","in_page_links":len([x for x in page.links if x.startswith("#")])})
assert len(report)==12,len(report)
(root/"RESOURCES-COVERAGE.json").write_text(json.dumps({"pages":12,"guides":8,"original_operating_notes":3,"routes":report,"browser_visual_qa":False},indent=2))
print(json.dumps(report,indent=2))
