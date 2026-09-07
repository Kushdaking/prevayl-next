import Link from "next/link";
type Cta={label:string;href:string;variant?:"gold"|"ghost"};
export function PageHero({eyebrow,title,lead,primaryCta,secondaryCta}:{eyebrow?:string;title:string;lead:string;goldTitle?:boolean;primaryCta?:Cta;secondaryCta?:Cta;bandImage?:string;heroImage?:string;heroImageAlt?:string}){
 return <section className="pvl-redesign pvl-page-hero"><div className="pvl-wrap"><p className="pvl-eyebrow">{eyebrow}</p><div className="pvl-hero-columns"><h1>{title}</h1><div><p className="pvl-lead">{lead}</p><div className="pvl-actions">{primaryCta&&<Link href={primaryCta.href} className="pvl-button">{primaryCta.label} ↗</Link>}{secondaryCta&&<Link href={secondaryCta.href} className="pvl-text-link">{secondaryCta.label} →</Link>}</div></div></div></div></section>
}
