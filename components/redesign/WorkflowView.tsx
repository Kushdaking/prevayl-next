import {Steps} from "./Shared";
const flows:Record<string,{title:string;lead:string;steps:string[]}>={
 "platform/compliance":{title:"A carrier record worth reviewing.",lead:"Bring the documentation and assignment checks into the same workflow.",steps:["Carrier record","Authority details","Insurance documents","Review exceptions","Assignment"]},
 "platform/dealer-portal":{title:"From your lot to their lot.",lead:"Connect a vehicle request with its movement and the customer’s follow-up.",steps:["Vehicle request","Order details","Movement status","Delivery record","Follow-up"]},
 "platform/route-optimizer":{title:"Every stop has a consequence.",lead:"Review the pickup and delivery sequence alongside the route.",steps:["Pickup stops","Delivery stops","Route sequence","Review tradeoffs","Dispatch plan"]},
 "platform/flolens":{title:"Turn context into a next step.",lead:"Bring workflow information into view before deciding how to act.",steps:["Workflow context","Available evidence","Suggested next step","Team review","Follow-through"]}
};
export function WorkflowView({slug}:{slug:string}){const f=flows[slug];return f?<section className="pvl-wrap pvl-workflow-view"><p className="pvl-eyebrow">The workflow</p><h2>{f.title}</h2><p className="pvl-section-lead">{f.lead}</p><Steps items={f.steps}/></section>:null}
