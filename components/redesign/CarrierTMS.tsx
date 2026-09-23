import Link from "next/link";
import {FleetWorkspace} from "./FleetWorkspace";
import { Eyebrow } from "./Shared";
export function CarrierTMS() {
 return <section className="pvl-section pvl-wrap" id="trucking-company-tms" aria-labelledby="carrier-tms-title">
 <div className="pvl-section-heading"><div><Eyebrow>For trucking companies & fleets</Eyebrow><h2 id="carrier-tms-title">Your trucks.<br/>Your business.<br/><em>One TMS.</em></h2></div><p>Run your auto transport company on Prevayl. Your ELD populates the live fleet map. Your load builder turns orders—including mapped EDI tenders—into planned movements. Connect the dispatch desk, driver and back office through final settlement.</p></div>
 <FleetWorkspace/>
 <div className="pvl-actions"><Link className="pvl-button" href="/solutions/carriers">Explore trucking company software ↗</Link><Link className="pvl-text-link" href="/contact?type=demo">Book a fleet operations demo →</Link></div>
 </section>;
}
