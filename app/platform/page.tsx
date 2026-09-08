import {IntegrationOverview} from "@/components/redesign/IntegrationExperience";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ProductTour } from "@/components/redesign/ProductTour";
import { CTA,Links,Eyebrow } from "@/components/redesign/Shared";
export const metadata:Metadata={title:"Platform — Every team, one operation",description:"Explore the Prevayl workspaces for dispatch, orders, accounting, carriers and AI."};
export default function Page(){return <main className="pvl-redesign"><PageHero eyebrow="The platform" title="The whole operation. In view." lead="Explore the workspaces that connect your vehicles, customers, carriers and financial records." primaryCta={{href:"/contact?type=demo",label:"Book a demo"}} secondaryCta={{href:"#workspaces",label:"Explore the workspaces"}}/><section className="pvl-wrap pvl-section"><ProductTour/></section><section className="pvl-wrap pvl-section" id="workspaces"><Eyebrow>Find your workspace</Eyebrow><Links platform items={[
{href:"/platform/dispatch",title:"Dispatch",body:"Coordinate active work, carrier assignments and exceptions."},
{href:"/platform/orders",title:"Orders",body:"The vehicle, lane and customer record behind each movement."},
{href:"/platform/accounting",title:"Accounting",body:"Invoicing, receivables, payables and financial reporting."},
{href:"/platform/carriers",title:"Carriers",body:"Your carrier network and operating relationships."},
{href:"/platform/dealer-portal",title:"Dealer portal",body:"A place for your customers to follow their vehicles."},
{href:"/platform/compliance",title:"Compliance",body:"Carrier documentation and the checks behind assignment."},
{href:"/platform/agents",title:"AI Bots",body:"Meet Margin Guard, Carrier Match, Pricer and more."},
{href:"/platform/dispatcher-bot",title:"Dispatcher Bot",body:"Follow the stages of an automated dispatch workflow."},
{href:"/platform/ai",title:"AI workspace",body:"Tools for pricing, matching and operational assistance."},
{href:"/platform/agentic-ai",title:"Agentic AI",body:"Context, tools and action controls for your team."},
{href:"/platform/business-intelligence",title:"Business Intelligence",body:"Reporting across lanes, carriers and the business."},
{href:"/platform/load-optimizer",title:"Load Optimizer",body:"Plan vehicles against available truck capacity."},
{href:"/platform/route-optimizer",title:"Route Optimizer",body:"Review stop sequences and routing tradeoffs."},
{href:"/platform/flolens",title:"FloLens",body:"Bring workflow insights into view."},
{href:"/platform/pin-protocol",title:"PIN Protocol",body:"Review identity and authorization at the handoff."}
]}/></section><IntegrationOverview/><CTA/></main>}
