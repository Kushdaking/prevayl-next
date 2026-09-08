import Link from "next/link";
import {PlatformTile} from "../redesign/PlatformVisual";
import { DocsShell, DocH3, DocP, DocUl, DocCode, DocNote } from "./DocsShell";
import type { DocPageContent } from "@/content/pages/types";
import type {VisualKind} from "@/content/section-visuals";
const kinds:Record<string,VisualKind>={"getting-started":"board",dispatch:"route",accounting:"ledger",compliance:"documents","dealer-portal":"portal",api:"connections",webhooks:"automation",zapier:"connections"};
export function DocPage({page}:{page:DocPageContent}){const key=page.slug.split("/").pop()!;let section=0;const heads=page.blocks.filter(b=>b.type==="h2");return <DocsShell title={page.title} description={page.description}><div className="rh-doc-intro"><nav aria-label="On this page"><strong>In this guide</strong>{heads.map((b,i)=><a key={i} href={"#guide-"+i}>{"text" in b?b.text:""}<span>↗</span></a>)}</nav></div>{page.blocks.map((block,i)=>{switch(block.type){case "h2":return <h2 className="rh-doc-heading" id={"guide-"+section++} key={i}>{block.text}</h2>;case "h3":return <DocH3 key={i}>{block.text}</DocH3>;case "p":return <DocP key={i}>{block.text}</DocP>;case "ul":return <DocUl key={i} items={block.items}/>;case "ol":return <ol key={i} className="rh-doc-steps">{block.items.map((item,j)=><li key={item}><b>{j+1}</b><span>{item}</span></li>)}</ol>;case "code":return <DocCode key={i} text={block.text} lang={block.lang}/>;case "note":return <DocNote key={i}>{block.text}</DocNote>}})}<div className="rh-related"><strong>Continue the workflow</strong><Link href="/resources/docs/dispatch">Dispatch guide →</Link><Link href="/resources/docs/accounting">Accounting guide →</Link><Link href="/resources/security">Security and access →</Link></div></DocsShell>}


