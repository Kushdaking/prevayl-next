export type VisualKind="board"|"match"|"documents"|"ledger"|"trend"|"forecast"|"route"|"capacity"|"portal"|"connections"|"permissions"|"team"|"principles"|"message"|"pricing"|"onboarding"|"library"|"inspection"|"automation"|"pin";
export const sectionPlans:Record<string,VisualKind[]>={
"platform/dispatch":["board","match","inspection","route"],"platform/orders":["board","board","board"],"platform/accounting":["ledger"],"platform/carriers":["route","portal"],"platform/dealer-portal":["portal"],"platform/compliance":["documents"],"platform/ai":["pricing","match","automation"],"platform/business-intelligence":["trend","forecast","board","trend"],"platform/load-optimizer":["capacity","capacity","board"],"platform/route-optimizer":["route"],"platform/flolens":["automation"],"solutions":["connections","route"],"solutions/brokers":["connections","board","pricing","documents","ledger"],"solutions/carriers":["route","inspection","pricing"],"solutions/dealers":["portal","message"],"solutions/wholesale":["connections","board","route","inspection"],"customers":["team","onboarding","message"],"about":["team","board","principles","route"],"about/company":["onboarding","principles","inspection"],"about/leadership":["team","principles"],"about/careers":["team","principles","message"],"resources":["library"],"resources/security":["permissions","connections","pin","message"],"resources/blog":["library"],
"resources/docs/getting-started":["onboarding","permissions","connections","board"],"resources/docs/dispatch":["board","match","inspection"],"resources/docs/accounting":["ledger","connections"],"resources/docs/compliance":["documents","documents","inspection"],"resources/docs/dealer-portal":["portal","board"],"resources/docs/api":["connections","permissions"],"resources/docs/webhooks":["automation","connections"],"resources/docs/zapier":["connections","automation"]
};
export function visualFor(slug:string,index=0):VisualKind {return sectionPlans[slug]?.[index]??sectionPlans[slug]?.[0]??"connections"}
export function featureVisual(title:string):VisualKind{
if(/load optimizer|deck|vehicle.class|operability|capacity/i.test(title))return "capacity";
if(/route|live map|lane template/i.test(title))return "route";
if(/photo|inspection|damage|condition/i.test(title))return "inspection";
if(/pin|handoff|authorization/i.test(title))return "pin";
if(/invoice|account|pay|settle|commission|reconcil|financial/i.test(title))return "ledger";
if(/margin|price|pricing|cost|rate/i.test(title))return "pricing";
if(/match|rank|carrier.aware/i.test(title))return "match";
if(/insurance|vetting|compliance|document|bol|audit/i.test(title))return "documents";
if(/trend|forecast|score|metric|intelligence|revenue|analytics/i.test(title))return "trend";
if(/role|access|permission|auth|team/i.test(title))return "permissions";
if(/portal|brand|dealer/i.test(title))return "portal";
if(/text|email|notify|notification|message|follow.up|review.request|contact/i.test(title))return "message";
if(/import|sync|api|webhook|integration|csv|auction/i.test(title))return "connections";
if(/ai|bot|automation|floLens|escalat/i.test(title))return "automation";
if(/career|leadership|company|kenny|spencer|broker|carrier/i.test(title))return "team";
if(/doc|resource|guide|blog/i.test(title))return "library";
return "board";
}


