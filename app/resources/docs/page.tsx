import type {Metadata} from "next";
import Link from "next/link";
import {DOCS_NAV} from "@/content/docs-nav";
import {PageHero} from "@/components/shared/PageHero";
export const metadata:Metadata={title:"Documentation",description:"Guides for operators and developers using Prevayl."};
export default function Page(){return <main className="pvl-redesign"><PageHero eyebrow="Resources / Documentation" title="Get from question to next step." lead="Guides for your first load, daily operations and integrations."/><section className="pvl-wrap pvl-section"><div className="pvl-link-grid">{DOCS_NAV.map(group=><article className="pvl-link-card" key={group.group}><p className="pvl-eyebrow">{group.group}</p><ul>{group.items.map(item=><li key={item.href} style={{padding:"16px 0",borderTop:"1px solid #1E2D3D"}}><Link className="pvl-text-link" href={item.href}>{item.label} ↗</Link></li>)}</ul></article>)}</div></section></main>}
