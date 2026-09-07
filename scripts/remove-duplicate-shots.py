from pathlib import Path
import re
p=Path("/root/.openclaw/workspace/prevayl-marketing-redesign-20260907")
for f in (p/"app").rglob("page.tsx"):
 s=f.read_text()
 if "<MarketingPage" in s:
  s=re.sub(r'import \{ PageShot \} from [^\n]+\n',"",s)
  s=re.sub(r'\s*<PageShot slug="[^"]+" />',"",s)
  f.write_text(s)
