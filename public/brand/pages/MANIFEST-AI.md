# platform/ai visual assignment

| Slot | Path | Source asset | What it is |
|------|------|--------------|------------|
| **heroImage** | `public/brand/pages/platform-ai.jpg` | `be5de906-6345-4bc0-a611-932276708a74` | Full page mockup: 3 glass cards (Pricing / Matching / Operations), metrics, CTA |
| **bandImage** | `public/brand/bands/platform-ai.jpg` | `a2d26f55-e6e8-4b9a-9137-dc03623b6bba` (constellation crop) | Full-bleed atmosphere under navy scrim |

## Marvin: put binaries in repo
```bash
# from Grok handoff or local artifacts
cp platform-ai-pages.jpg public/brand/pages/platform-ai.jpg
cp platform-ai-band.jpg  public/brand/bands/platform-ai.jpg
git add public/brand/pages/platform-ai.jpg public/brand/bands/platform-ai.jpg
git commit -m "assets: platform-ai hero mockup + band constellation"
```

Or unpack `platform-ai-renders.tar.gz` at repo root.

Content already wires both paths in `content/pages/platform/ai.ts`.
