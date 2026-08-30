# Marketing art plan — Band-first

## Decisions (locked)
1. **Band first, then art.** Marketing pages use `Band` full-bleed (`bandImage`) before generating remaining heroes.
2. **Generate by themed batch; review between batches.** Not one-at-a-time, not all 23 blind.

## Docs
**No art.** Keep `DocsShell` dense.

## Counts
| Bucket | Pages needing band art | Visual language |
|--------|------------------------|-----------------|
| Platform | ~10–14 | Holographic panels, constellation, glass UI |
| Solutions | 5 | Maps, lanes, role-specific |
| Resources + About | ~8 | Quieter light fields, depth |
| Docs | 0 | — |
| **Total new** | **~23** | |

## Path convention
- Full-bleed atmosphere → `public/brand/bands/{slug}.jpg` → `bandImage`
- Product mockup → `public/brand/pages/{slug}.jpg` → `heroImage`

## Batch order
1. Platform
2. Solutions
3. Resources + About
