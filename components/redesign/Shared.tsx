import {PlatformTile} from "./PlatformVisual";
import {MiniVisual} from "./SectionVisual";
import {featureVisual} from "@/content/section-visuals";
import {VisualIcon} from "./VisualExamples";
import Link from "next/link";
import type { ReactNode } from "react";
export function Eyebrow({children}:{children:ReactNode}){return <p className="pvl-eyebrow">{children}</p>}
export function CTA({title="Bring your lanes. See the workflow.",body="Walk through Prevayl with the people who built it. Start with the work your team does every day.",primary={href:"/contact?type=demo",label:"Book a demo"},secondary={href:"/platform",label:"Explore the platform"}}:{title?:string;body?:string;primary?:{href:string;label:string};secondary?:{href:string;label:string}}){return <section className="pvl-cta pvl-wrap"><div><div className="sx-cta-art" aria-hidden="true"><VisualIcon name="document"/><i/><VisualIcon name="truck"/><i/><VisualIcon name="pin"/><i/><VisualIcon name="chart"/></div><Eyebrow>Put Prevayl to work</Eyebrow><h2>{title}</h2><p>{body}</p></div><div className="pvl-actions"><Link className="pvl-button" href={primary.href}>{primary.label} ↗</Link><Link className="pvl-button secondary" href={secondary.href}>{secondary.label} →</Link></div></section>}
export function Steps({items}:{items:string[]}){return <ol className="pvl-steps">{items.map((s,i)=><li key={s}><span className="vx-step-icon"><VisualIcon name={i===0?"document":i===1?"truck":i===2?"people":i===3?"pin":"document"}/></span><strong>{s}</strong>{i<items.length-1&&<b aria-hidden="true">→</b>}</li>)}</ol>}
export function Links({items,platform=false}:{platform?:boolean;items:{href:string;title:string;body:string}[]}){return <div className="pvl-link-grid">{items.map((l,i)=><Link href={l.href} key={l.href} className="pvl-link-card"><span className="pvl-card-number">{String(i+1).padStart(2,"0")} <span aria-hidden="true">↗</span></span><span className="vx-icon"><VisualIcon name={/carrier/i.test(l.title)?"truck":/account|pricing|intelligence/i.test(l.title)?"chart":/compliance|pin/i.test(l.title)?"shield":/order|dealer|auction/i.test(l.title)?"document":/ai|bot/i.test(l.title)?"people":"pin"}/></span>{platform?<PlatformTile title={l.title} kind={featureVisual(l.title)}/>:<MiniVisual kind={featureVisual(l.title)}/>}<h3>{l.title}</h3><p>{l.body}</p></Link>)}</div>}




