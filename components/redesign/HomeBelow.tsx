import {IntegrationOverview} from "./IntegrationExperience";
import {AudienceLane} from "./AudienceLane";
import {SectionVisual} from "./SectionVisual";
import {VisualExamples} from "./VisualExamples";
import { ProductTour } from "./ProductTour";
import { BotExplorer } from "./BotExplorer";
import { CTA, Eyebrow, Links, Steps } from "./Shared";
export function HomeBelow(){return <div className="pvl-redesign"><AudienceLane/><section className="pvl-section pvl-wrap"><div className="pvl-section-heading"><div><Eyebrow>Inside Prevayl</Eyebrow><h2>Less switching.<br/><em>More moving.</em></h2></div><p>Dispatch, orders, accounting and AI. Take a closer look at the workspaces your operation can run on.</p></div><ProductTour/></section><section className="pvl-section pvl-wrap" style={{borderTop:"1px solid #1E2D3D",borderBottom:"1px solid #1E2D3D"}}><Eyebrow>Connected from the first call</Eyebrow><h2>One movement.<br/>Every team in the loop.</h2><Steps items={["Quote the lane","Build the order","Assign the carrier","Track the delivery","Manage the money"]}/><SectionVisual kind="route" title="One lane, connected handoffs" showSecondary={false}/></section><VisualExamples slug="home"/><BotExplorer/><IntegrationOverview/><CTA/></div>}
