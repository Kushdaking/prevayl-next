import {MiniVisual} from "@/components/redesign/SectionVisual";
import type { Metadata } from "next";
import Link from "next/link";
import { pricing } from "@/content/site";
import { PageHero } from "@/components/shared/PageHero";
import { CTA } from "@/components/redesign/Shared";
export const metadata:Metadata={title:"Pricing — Find the right fit",description:"Compare Prevayl plans and discuss pricing for your operation."};
export default function Page(){return <main className="pvl-redesign"><PageHero eyebrow="Plans & pricing" title="Built around your operation." lead={pricing.lead} primaryCta={{href:"/contact?type=sales",label:"Discuss your volume"}} secondaryCta={{href:"#plans",label:"Compare plans"}}/><section className="pvl-wrap" id="plans"><div className="pvl-price-grid">{pricing.plans.map(plan=><article key={plan.name} className={"pvl-price-card "+(plan.featured?"featured":"")}><span className="pvl-pill">{plan.featured?"Most popular":"Prevayl "+plan.name}</span><h2>{plan.name}</h2><p className="pvl-range">{plan.range}</p><div className="sx-plan"><MiniVisual kind={plan.name.toLowerCase().includes("carrier")?"route":plan.featured?"connections":"board"}/></div><ul>{plan.features.map(f=><li key={f}><span aria-hidden="true">✓</span>{f}</li>)}</ul><Link href={plan.href} className={"pvl-button "+(plan.featured?"":"secondary")}>{plan.cta} ↗</Link></article>)}</div><p className="pvl-form-note">{pricing.footnote}</p></section><CTA title="Let’s put a number to your operation." body="Bring your monthly vehicle volume, team size and the workflows you need. We’ll walk through the fit with you." primary={{href:"/contact?type=sales",label:"Talk pricing"}} secondary={{href:"/platform",label:"Review the platform"}}/></main>}

