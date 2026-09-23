import {SectionVisual} from "@/components/redesign/SectionVisual";
import Link from "next/link";
import { Screen } from "@/components/redesign/Screen";
import { CTA, Eyebrow } from "@/components/redesign/Shared";
import { productViews } from "@/content/product-views";
import type { MarketingPageContent } from "@/content/pages/types";
const sectionLinks:Record<string,string>={"For Brokers":"/solutions/brokers","For Trucking Companies":"/solutions/carriers","For Dealers":"/solutions/dealers","Wholesale Auctions":"/solutions/wholesale","Documentation":"/resources/docs","Security":"/resources/security","Blog":"/resources/blog","Company":"/about/company","Leadership":"/about/leadership","Careers":"/about/careers","Getting started":"/resources/docs/getting-started","Dispatch":"/platform/dispatch","Accounting":"/platform/accounting","Compliance":"/platform/compliance","Dealer Portal":"/platform/dealer-portal","API":"/resources/docs/api","Webhooks":"/resources/docs/webhooks","Zapier":"/resources/docs/zapier"};
export function MarketingPage({page}:{page:MarketingPageContent}){
 const view=productViews[page.slug];const sections=page.sections||[];
 return <main className="pvl-redesign"><section className={"pvl-page-hero "+(view?"has-view":"")}><div className="pvl-wrap"><Eyebrow>{page.eyebrow||page.slug.split("/")[0]}</Eyebrow><div className="pvl-hero-columns"><h1>{page.title}</h1><div><p className="pvl-lead">{page.lead}</p><div className="pvl-actions"><Link className="pvl-button" href={page.primaryCta?.href||"/contact?type=demo"}>{page.primaryCta?.label||"Book a demo"} ↗</Link>{page.secondaryCta&&<Link className="pvl-text-link" href={page.secondaryCta.href}>{page.secondaryCta.label} →</Link>}</div></div></div></div></section>
 {view&&<div className="pvl-wrap pvl-product-intro"><Screen {...view} eager/></div>}

 {sections.some(s=>s.heading)&&<nav className="pvl-page-index pvl-wrap" aria-label="On this page"><span>On this page</span>{sections.map((s,i)=>s.heading&&<a key={i} href={"#section-"+i}>{s.heading.replace(/^\d+\s*·\s*/,"")}</a>)}</nav>}
 <div className="pvl-wrap">{sections.map((s,i)=><section key={i} id={"section-"+i} className={"pvl-story "+(s.heading?"":"pvl-story-full")}><div className="pvl-story-heading"><Eyebrow>{String(i+1).padStart(2,"0")} / {page.eyebrow?.split("·").pop()?.trim()||"The details"}</Eyebrow>{s.heading&&<h2>{s.heading.replace(/^\d+\s*·\s*/,"")}</h2>}</div><div className="pvl-story-content">{s.body&&<p className="pvl-story-lead">{s.body}</p>}{s.paragraphs?.map(p=><p key={p}>{p}</p>)}{s.bullets&&<ul className="pvl-checklist">{s.bullets.map(b=><li key={b}><span aria-hidden="true">↗</span>{b}</li>)}</ul>}{s.features&&<div className="pvl-feature-list">{s.features.map((f,j)=><article key={f.title}><span className="pvl-feature-num">{String(j+1).padStart(2,"0")}</span><div><h3>{f.title}</h3><p>{f.body}</p>{sectionLinks[f.title]&&<Link className="pvl-text-link" href={sectionLinks[f.title]}>Explore {f.title.toLowerCase()} →</Link>}</div></article>)}</div>}</div><SectionVisual slug={page.slug} index={i} title={s.heading?.replace(/^\d+\s*·\s*/,"")}/></section>)}</div>
 {page.finalCta&&<CTA title={page.finalCta.title} body={page.finalCta.lead} primary={page.finalCta.primary} secondary={page.finalCta.secondary}/>}
 </main>
}


