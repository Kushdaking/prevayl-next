import type {VisualKind} from "@/content/section-visuals";
const labels:Partial<Record<VisualKind,[string,string,string]>>={
automation:["Pickup recorded","Evaluate stage policy","Propose the next action"],
connections:["Order workspace","Connected services","Shared record"],
permissions:["Organization","Role scope","Allowed workspace"],
team:["Dispatch","Customer team","Accounting"],
principles:["Trackable","Measurable","Repeatable"],
message:["Shipment context","Draft update","Review & send"],
onboarding:["Your operation","Your connections","Your first movement"],
library:["Choose a topic","Find the workflow","Take the next step"]
};
export function RichContext({kind,active=0}:{kind:VisualKind;active?:number}){
const list=labels[kind];if(!list)return null;
if(kind==="connections")return <div className="rc-context rc-network"><div className="rc-network-hub"><span>PREVAYL</span><strong>Order workspace</strong><small>One connected record</small></div><div className="rc-network-spokes">{["Customer portal","Carrier workflow","Documents","Accounting"].map((s,i)=><div className={i%3===active?"active":""} key={s}><span>↔</span><strong>{s}</strong><small>{["Requests & status","Assignment & milestones","Evidence & handoff","Receivables & payables"][i]}</small></div>)}</div><footer>ILLUSTRATIVE CONNECTIONS · CONFIGURATION REQUIRED</footer></div>;
if(kind==="permissions")return <div className="rc-context rc-permissions"><header><span>ROLE-SCOPED WORKSPACE</span><strong>Access follows the job.</strong></header><div className="rc-access"><div className="rc-role"><b>DP</b><strong>Dispatcher</strong><small>Example role</small></div><div className="rc-scope">{["Orders","Carrier coordination","Pickup context"].map((s,i)=><div className={i===active?"active":""} key={s}><span>✓</span>{s}<small>In scope</small></div>)}<div className="rc-restricted"><span>—</span>Other workspaces<small>Role dependent</small></div></div></div></div>;
if(kind==="message")return <div className="rc-context rc-message"><div className="rc-message-source"><span>ORDER CONTEXT</span><strong>DEMO-1042</strong><small>Pickup recorded<br/>Detroit → Nashville</small></div><span className="rc-transfer">→</span><div className="rc-message-draft"><header><span>CUSTOMER UPDATE</span><b>DRAFT</b></header><p>Your vehicle has been picked up. Follow the movement and delivery details in your portal.</p><footer>Review message <span>↗</span></footer></div></div>;
if(kind==="library")return <div className="rc-context rc-library"><header><span>WORKFLOW LIBRARY</span><strong>Find the answer. Keep moving.</strong></header><div className="rc-guide-grid">{["First order","Daily dispatch","Integrations"].map((s,i)=><div key={s} className={active===i?"active":""}><span>0{i+1} / GUIDE</span><strong>{s}</strong><i/><i/><small>Open workflow →</small></div>)}</div></div>;
if(kind==="team")return <div className="rc-context rc-team"><header><span>SHARED MOVEMENT</span><strong>Three responsibilities. One record.</strong></header><div className="rc-team-grid">{list.map((s,i)=><div key={s} className={i===active?"active":""}><b>{["DP","CX","AC"][i]}</b><strong>{s}</strong><small>{["Carrier & milestones","Customer & status","Invoice & payable"][i]}</small></div>)}</div><footer><span>DEMO-1042</span><i/>Vehicle · Lane · Documents</footer></div>;
if(kind==="principles")return <div className="rc-context rc-principles"><header><span>OPERATING DISCIPLINE</span><strong>Make the work visible.</strong></header><div className="rc-principle-grid">{list.map((s,i)=><div key={s} className={i===active?"active":""}><span>{["↗","▥","↻"][i]}</span><strong>{s}</strong><small>{["A record of the movement","A view of the outcome","A workflow to use again"][i]}</small></div>)}</div></div>;
return null;
}
