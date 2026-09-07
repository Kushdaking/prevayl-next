"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import type {ReactNode} from "react";
import {DOCS_NAV} from "@/content/docs-nav";
export function DocsShell({title,description,children}:{title:string;description?:string;children:ReactNode}){
 const pathname=usePathname().replace(/\/$/,"");
 function Navigation(){return <nav aria-label="Documentation">{DOCS_NAV.map(group=><div className="pvl-doc-group" key={group.group}><h2>{group.group}</h2>{group.items.map(item=><Link href={item.href} key={item.href} aria-current={pathname===item.href?"page":undefined}>{item.label}</Link>)}</div>)}</nav>}
 return <main className="pvl-redesign pvl-docs"><div className="pvl-wrap"><details className="pvl-doc-mobile"><summary>Browse documentation</summary><Navigation/></details><div className="pvl-docs-layout"><aside><Navigation/></aside><article><Link href="/resources/docs" className="pvl-eyebrow" style={{display:"inline-block"}}>Documentation /</Link><h1>{title}</h1>{description&&<p>{description}</p>}<div className="docs-prose space-y-5">{children}</div><div style={{marginTop:60,paddingTop:30,borderTop:"1px solid #1E2D3D"}}><p>Need help with your setup?</p><Link className="pvl-text-link" href="/contact?type=support">Contact the team →</Link></div></article></div></div></main>
}
export function DocH2({children}:{children:ReactNode}){return <h2 className="mt-10 mb-4">{children}</h2>}
export function DocH3({children}:{children:ReactNode}){return <h3 className="mt-8 mb-3">{children}</h3>}
export function DocP({children}:{children:ReactNode}){return <p>{children}</p>}
export function DocUl({items}:{items:string[]}){return <ul className="pvl-checklist">{items.map(item=><li key={item}><span aria-hidden="true">→</span>{item}</li>)}</ul>}
export function DocCode({text,lang}:{text:string;lang?:string}){return <div style={{background:"#111820",border:"1px solid #1E2D3D",borderRadius:8,padding:20}}>{lang&&<p className="pvl-eyebrow">{lang}</p>}<pre><code>{text}</code></pre></div>}
export function DocNote({children}:{children:ReactNode}){return <aside style={{borderLeft:"2px solid #C9A84C",background:"#C9A84C0a",padding:20}}>{children}</aside>}
