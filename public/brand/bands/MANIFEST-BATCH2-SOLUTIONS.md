# Batch 2 — Solutions band art (generate on Marvin only)

Grok does **not** generate or push binary JPGs. This MANIFEST is the handoff.

## Path convention
- Output directory: `public/brand/bands/`
- Code expects exactly these filenames (wired as `bandImage`)
- Aspect: **16:9**, ~2K (1792×1008 or similar)
- Palette: navy `#0a0f1a`, gold `#C9A84C`, glassmorphism
- **Left third kept dark** for type overlay
- Atmospheric only — **no readable UI text, no logos, no people**
- Language: **maps, lanes, routes** — role-specific, same family as Platform batch

## Exact files to generate (5)

| Filename | Route | Concept (one line) |
|----------|-------|--------------------|
| `solutions-index.jpg` | `/solutions` | Wide multi-role constellation of US lanes — four soft gold route clusters (broker desk / fleet / dealer lot / auction) orbiting one navy center |
| `solutions-brokers.jpg` | `/solutions/brokers` | Broker desk atmosphere — abstract US lane grid + soft gold load-board filaments + glass panels; left third dark |
| `solutions-carriers.jpg` | `/solutions/carriers` | Carrier / road — highway light filaments across dark navy map grid, sparse glass HUD panels, soft gold waypoints |
| `solutions-dealers.jpg` | `/solutions/dealers` | Dealer portal — quiet lot-to-driveway route arcs on navy, soft gold VIN-node constellation, glass depth |
| `solutions-wholesale.jpg` | `/solutions/wholesale` | Auction lot → buyer — multi-hop route network from cluster origin nodes to destination filaments, gold chain of custody light |

## Prompt skeleton
```
Cinematic full-bleed website hero background, 16:9, dark navy #0a0f1a,
soft gold #C9A84C, holographic glass panels, US map / lane filaments,
left third darker for text overlay, no text, no logos, no people,
no readable UI, premium freight SaaS atmospheric art: {CONCEPT}
```

## After generation
```bash
cp /tmp/bands/solutions-*.jpg public/brand/bands/
ls public/brand/bands/solutions-*.jpg   # expect 5
```

## Product mockups (do not overwrite)
`public/brand/pages/solutions-{brokers,carriers,dealers}.jpg` stay as `heroImage`.
