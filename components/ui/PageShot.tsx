import { ProductShot } from "@/components/ui/ProductShot";
import LoadBoardMockup from "@/components/mockups/LoadBoardMockup";
import BrokerDashboardMockup from "@/components/mockups/BrokerDashboardMockup";
import AccountingDashMockup from "@/components/mockups/AccountingDashMockup";
import AIMatchMockup from "@/components/mockups/AIMatchMockup";
import AgentRosterMockup from "@/components/mockups/AgentRosterMockup";
import ComplianceMockup from "@/components/mockups/ComplianceMockup";
import OrdersMockup from "@/components/mockups/OrdersMockup";
import DealerPortalMockup from "@/components/mockups/DealerPortalMockup";
import WholesaleWorkflowMockup from "@/components/mockups/WholesaleWorkflowMockup";
import BIDashboardMockup from "@/components/mockups/BIDashboardMockup";
import PlatformOverviewMockup from "@/components/mockups/PlatformOverviewMockup";
import FloLensMockup from "@/components/mockups/FloLensMockup";
import PinProtocolMockup from "@/components/mockups/PinProtocolMockup";
import LoadOptimizerMockup from "@/components/mockups/LoadOptimizerMockup";
import AgenticAIMockup from "@/components/mockups/AgenticAIMockup";
import CustomerSuccessMockup from "@/components/mockups/CustomerSuccessMockup";
import DispatchMapMockup from "@/components/mockups/DispatchMapMockup";

/**
 * Real product UI per route.
 *
 * These are the actual interface components from the platform repo — pure SVG,
 * no data hooks. They replace abstract art as the thing each page shows,
 * because a broker evaluating a TMS wants to see load rows and margins, not a
 * glowing sphere.
 */
const SHOTS: Record<string, { c: React.ComponentType; caption: string }> = {
  "platform": { c: PlatformOverviewMockup, caption: "One platform — dispatch, orders, carriers, accounting, compliance." },
  "platform/dispatch": { c: LoadBoardMockup, caption: "The live dispatch load board — lanes, carriers, ETAs and margin at a glance." },
  "platform/orders": { c: OrdersMockup, caption: "VIN-level order tracking from quote to signed delivery." },
  "platform/accounting": { c: AccountingDashMockup, caption: "AR and AP aging alongside P&L, on the same records dispatch writes." },
  "platform/compliance": { c: ComplianceMockup, caption: "Authority, insurance and BOC-3 checked automatically, with expiry alerts." },
  "platform/ai": { c: AIMatchMockup, caption: "Top-three carrier recommendations — suggested, never auto-awarded." },
  "platform/agents": { c: AgentRosterMockup, caption: "The agent roster and what each one actually does." },
  "platform/agentic-ai": { c: AgenticAIMockup, caption: "Agentic workflows with human review on every action." },
  "platform/business-intelligence": { c: BIDashboardMockup, caption: "Lane, margin and carrier performance in one view." },
  "platform/dealer-portal": { c: DealerPortalMockup, caption: "The white-label portal your dealers log into." },
  "platform/flolens": { c: FloLensMockup, caption: "FloLens visibility across the network." },
  "platform/pin-protocol": { c: PinProtocolMockup, caption: "Chain-of-custody verification at every handoff." },
  "platform/load-optimizer": { c: LoadOptimizerMockup, caption: "Load planning across available capacity." },
  "platform/carriers": { c: DispatchMapMockup, caption: "Carrier network and live coverage." },
  "solutions/brokers": { c: BrokerDashboardMockup, caption: "The broker console: pipeline, margin and carrier health in one view." },
  "solutions/wholesale": { c: WholesaleWorkflowMockup, caption: "Auction purchase to buyer delivery in one workflow." },
  "solutions/dealers": { c: DealerPortalMockup, caption: "Real-time VIN status under your own branding." },
  "customers": { c: CustomerSuccessMockup, caption: "How operators run their day on Prevayl." },
};

export function PageShot({ slug }: { slug: string }) {
  const hit = SHOTS[slug];
  if (!hit) return null;
  const C = hit.c;
  return (
    <section className="bg-prevayl-navy pb-24 pt-2">
      <div className="max-w-6xl mx-auto px-6">
        <ProductShot caption={hit.caption}>
          <C />
        </ProductShot>
      </div>
    </section>
  );
}
