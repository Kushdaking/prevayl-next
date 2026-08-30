# Three-layer art (locked)

| Layer | Path | Owns words? |
|-------|------|-------------|
| Band | `/brand/bands/*.jpg` | No |
| Element | `/brand/elements/*.png` | No |
| HTML | `app/**/page.tsx` + content | **Yes** |

No composed mockups with baked text.

## Shipped on GitHub
- `components/ui/Element.tsx` + `ElementStage.tsx`
- `content/layouts.ts` — every marketing page band + element placement
- `MarketingPage` uses ElementStage for all content-driven routes
- `/platform/ai` full HTML cards + metrics (reference)
- Element curl MANIFEST for Marvin

## Docs
DocsShell only — no Band/Element art.
