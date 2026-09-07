import type { PageDef } from "@/content/pages";
import { MarketingPage } from "@/components/shared/MarketingPage";
export function SubPage({def}:{def:PageDef}){return <MarketingPage page={{slug:def.slug,eyebrow:def.eyebrow,title:[def.title,def.titleGold].filter(Boolean).join(" "),lead:def.lead,primaryCta:{href:"/contact?type=demo",label:"Book a demo"},secondaryCta:{href:"/platform",label:"Explore the platform"},sections:[{heading:"Built into the workflow.",features:def.points}],finalCta:{title:"See it with your operation in mind.",primary:{label:"Book a demo",href:"/contact?type=demo"}}}}/>}
