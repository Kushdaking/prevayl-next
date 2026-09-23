import { IntegrationOverview } from "./IntegrationExperience";
import { AudienceLane } from "./AudienceLane";
import { ProductTour } from "./ProductTour";
import { BotExplorer } from "./BotExplorer";
import { CTA, Eyebrow } from "./Shared";
export function HomeBelow(){return <div className="pvl-redesign"><AudienceLane/><section className="pvl-section pvl-wrap" id="platform-tour" aria-labelledby="platform-tour-title"><div className="pvl-section-heading"><div><Eyebrow>Explore the shared platform</Eyebrow><h2 id="platform-tour-title">The workspaces behind<br/><em>every movement.</em></h2></div><p>Beyond your role, explore how the operations team manages dispatch, orders, accounting and reporting. Your workspace and access depend on your business and permissions.</p></div><ProductTour/></section><IntegrationOverview/><BotExplorer/><CTA/></div>}
