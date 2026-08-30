# Marketing art plan — three-layer composition

## Layers (locked)
| Layer | What | Who edits |
|-------|------|-----------|
| **Band** | Full-bleed atmosphere (`/brand/bands/*.jpg`) — no text, left third dark for type | Marvin generates / deploys |
| **Element** | Isolated objects on transparent or flat black (`/brand/elements/*.png`) — pin, brain, nodes, glass shards | Grok delivers isolated assets + URLs; Marvin places |
| **HTML** | Every word, metrics, CTAs, cards — real DOM in `app/**/page.tsx` | Either; copy from live site only |

**No composed mockups with baked text.** Indexable copy stays HTML. Art is backdrop + positioned objects only.

## Division of labor
| Role | Ships |
|------|--------|
| **Grok** | (1) Plain-text layout description (x/y/artW/opacity per element) (2) Isolated object renders on flat black / transparent, shareable URLs (3) Content/copy modules if needed — no JPGs in git |
| **Marvin** | curl assets onto box, Element placement in page.tsx, Band full-bleed, build + deploy |

Binaries travel by **curl/scp only** — never base64 through chat.

## Grok ask format (clean)
```
PAGE: /platform/ai
BAND: /brand/bands/platform-ai.jpg — navy constellation, left third dark, no text
ELEMENTS:
  - pin-gold.png     — gold location pin, flat black, transparent edges
  - brain-gold.png   — gold neural brain, flat black
  - brain-blue.png   — blue neural brain, flat black
  - nodes-gold.png   — gold node cluster icon, flat black
LAYOUT (HTML already owns all copy):
  pin-gold     x=18% y=55% artW=120 opacity=0.95
  brain-gold   x=48% y=52% artW=140 opacity=0.9
  brain-blue   x=78% y=48% artW=110 opacity=0.85
  nodes-gold   x=72% y=28% artW=80  opacity=0.9
  hideBelow: md
```
No full-page designs. No burned-in headlines/metrics/buttons.

## Live reference
- Pattern live: https://prevayl-web.pages.dev/platform/ai
- Edits: single values in that route's page.tsx (`x`, `y`, `artW`, `art`, `opacity`)

## Docs
Still **no art** on DocsShell pages.
