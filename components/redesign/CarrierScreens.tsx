"use client";
import { useState } from "react";
import { Screen } from "./Screen";

const views = {
 intake: {width:2816,height:1400,label:"Freight intake",title:"Incoming work, ready for review",src:"/screenshots/carrier/intake-2x.png",caption:"Actual carrier freight queue with incoming GM orders, route details, assignment status and shipment milestones. Order identifiers are masked; these loads are unassigned."},
 assignment: {width:920,height:560,label:"Driver assignment",title:"Connect the driver to the load",src:"/screenshots/carrier/assignment-2x.png",caption:"Actual driver-assignment dialog. The selector contains the carrier account’s driver roster; confirming an assignment moves the order from New to Accepted. No assignment was submitted for this capture."},
 delivery: {width:1886,height:520,label:"Delivery documents",title:"Capture the proof behind the delivery",src:"/screenshots/carrier/delivery-2x.png",caption:"Actual proof-of-delivery upload controls in the carrier document workspace, with BOL and POD categories. This capture shows the upload interface; the demonstration account has no uploaded POD records."},
 builder: { width:2824, height:2050, label: "Load builder", title: "From orders to a planned load", src: "/screenshots/carrier/builder-2x.png", caption: "Actual carrier load-builder interface with 50 historical, inactive orders and their plotted routes. The view shows the order filters, assignment filters and route context; it does not show a newly dispatched load. Order identifiers, VINs and rates are masked. Map data © OpenStreetMap contributors / OpenMapTiles; Leaflet." },
 settlements: { width:2490, height:1480, label: "Driver settlements", title: "Review the work behind driver pay", src: "/screenshots/carrier/settlements-2x.png", caption: "Actual settlement-run history from the carrier demonstration account, showing draft, finalized, voided and paid states. Monetary amounts are hidden. This is settlement history, not a completed reconciliation demonstration." },
 map: { width:2420, height:1880, label: "Fleet map", title: "Your fleet, in view", src: "/screenshots/carrier/map-2x.png", caption: "The actual carrier fleet map, populated with historical vehicle positions. This capture demonstrates the interface; it is not a current live ELD feed. Map data © OpenStreetMap contributors / OpenMapTiles; Leaflet." },
 dashboard: { width:2326, height:1498, label: "Carrier dashboard", title: "The business behind the fleet", src: "/screenshots/carrier/dashboard-2x.png", caption: "Fleet activity, lane alerts, mileage and financial context in the actual carrier console. Financial amounts are hidden for privacy." },
 gm: { width:2000, height:1700, label: "GM VTIMS / EDI", title: "OEM connection activity", src: "/screenshots/carrier/gm-2x.png", caption: "The actual GM VTIMS workspace shows connection status and incoming and outgoing file records. Connection details and file identifiers are masked. Partner setup and acceptance requirements apply." },
};
export type CarrierView = keyof typeof views;
export function CarrierScreens({ initial="map", fixed=false }: { initial?:CarrierView; fixed?:boolean }) {
 const [active,setActive]=useState<CarrierView>(initial);
 const view=views[active];
 return <div className="carrier-captures">
  <div className="carrier-captures-label">INSIDE THE CARRIER CONSOLE <span>ACTUAL PRODUCT CAPTURES</span></div>
  {!fixed && <div className="carrier-captures-nav" aria-label="Carrier product screenshots">{(["builder","settlements","map","dashboard","gm"] as CarrierView[]).map(key=><button key={key} type="button" aria-pressed={active===key} onClick={()=>setActive(key)}>{views[key].label}</button>)}</div>}
  <Screen width={view.width} height={view.height} src={view.src} title={view.title} caption={view.caption} disclosure="Captured from a demonstration account containing synthetic and historical records. Screenshots are cropped and redacted; displayed figures are not verified customer results."/>
 </div>;
}
