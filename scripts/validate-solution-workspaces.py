from pathlib import Path
from html.parser import HTMLParser
import json,subprocess
root=Path("/root/.openclaw/workspace/prevayl-marketing-review-source-20260907")
class Scan(HTMLParser):
 def __init__(self):super().__init__();self.names=[]
 def handle_starttag(self,t,a):
  d=dict(a)
  if "data-solution-workspace" in d:self.names.append(d["data-solution-workspace"])
seen=set();report=[]
for route,count in [("dealers",2),("brokers",5),("carriers",3),("wholesale",4)]:
 p=root/"dist/solutions"/route/"index.html";s=Scan();s.feed(p.read_text())
 assert len(s.names)==count,(route,s.names)
 for n in s.names:
  assert n not in seen,n
  seen.add(n)
 report.append({"page":"/solutions/"+route+"/","workspaces":s.names})
for f in ["components/home/Hero.tsx","components/redesign/RoleWorkspaces.tsx","components/redesign/BotScenes.tsx"]:
 assert (root/f).read_bytes()==subprocess.check_output(["git","show","HEAD:"+f],cwd=root),f
print(json.dumps({"bespoke_workspaces":len(seen),"pages":report,"protected_visuals_unchanged":True,"browser_visual_qa":False},indent=2))
