import Link from "next/link";
import { Eyebrow, Links, Steps } from "./Shared";
export function CarrierTMS() {
 return <section className="pvl-section pvl-wrap" id="trucking-company-tms" aria-labelledby="carrier-tms-title">
 <div className="pvl-section-heading"><div><Eyebrow>For trucking companies & fleets</Eyebrow><h2 id="carrier-tms-title">Your trucks.<br/>Your business.<br/><em>One TMS.</em></h2></div><p>Run your auto transport company on Prevayl. A transportation management system that connects the dispatch desk, the driver and the back office—from your own customer orders through final settlement.</p></div>
 <Links items={[
 {href:"/platform/carriers#section-0",title:"Dispatch & fleet management",body:"Plan loads, assign drivers and equipment, and keep maintenance and expenses with your fleet records."},
 {href:"/platform/carriers#section-1",title:"Live tracking & ELD",body:"Connect truck locations, driver activity and supported ELD data to the work happening on the road."},
 {href:"/platform/integrations/vtims-edi",title:"OEM connections & EDI",body:"Support OEM and enterprise freight through in-house EDI and VTIMS, with onboarding tailored to your partners."},
 {href:"/solutions/carriers#section-3",title:"Accounting & driver reconciliation",body:"Connect invoices, expenses, driver pay and settlements. Follow the load through to its financial result."}
 ]}/>
 <Steps items={["Take the order","Dispatch your fleet","Track the movement","Invoice the customer","Reconcile driver pay"]}/>
 <div className="pvl-actions"><Link className="pvl-button" href="/solutions/carriers">Explore trucking company software ↗</Link><Link className="pvl-text-link" href="/contact?type=demo">Book a fleet operations demo →</Link></div>
 </section>;
}
