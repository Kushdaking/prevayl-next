from pathlib import Path
import json,subprocess
root=Path("/root/.openclaw/workspace/prevayl-marketing-review-source-20260907")
routes=sorted(root.joinpath("app/platform").rglob("page.tsx"))
coverage=[]
for p in routes:
    route=str(p.parent.relative_to(root/"app"))
    html=root/"dist"/route/"index.html"
    s=html.read_text()
    scenes=s.count('data-platform-scene=')
    tiles=s.count('class="pv-tile ')
    assert scenes or tiles, route+" has no upgraded visual"
    coverage.append({"route":"/"+route+"/","section_scenes":scenes,"context_tiles":tiles})
protected=["components/home/Hero.tsx","components/redesign/RoleWorkspaces.tsx","components/redesign/BotScenes.tsx","public/illustrations/lane-ecosystem.webp"]
for p in protected:
    prior=subprocess.check_output(["git","show","HEAD:"+p],cwd=root)
    assert prior==(root/p).read_bytes(),p+" changed"
s=(root/"dist/platform/carriers/index.html").read_text()
assert 'data-platform-scene="driver"' in s
assert 'data-platform-scene="flolens"' in (root/"dist/platform/flolens/index.html").read_text()
assert "PIN AUTHORIZATION" in (root/"dist/platform/pin-protocol/index.html").read_text()
report={"pages":len(coverage),"coverage":coverage,"protected_files_unchanged":protected,"browser_visual_qa":False}
(root/"PLATFORM-VISUAL-COVERAGE.json").write_text(json.dumps(report,indent=2))
print(json.dumps(report,indent=2))
