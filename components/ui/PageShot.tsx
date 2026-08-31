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
 * 2026-08-31: nine of these routes now show an actual screenshot of the live
 * app (captured at 4800x3000 via Playwright against the real Cars2Go org,
 * dark mode, then downsampled to 2400x1500 webp) instead of a hand-drawn SVG
 * recreation. `shot` wins when present; `c` (the SVG mockup) is the fallback
 * for routes without a verified-good capture yet — see MARKETING-SCREENSHOTS.md.
 */
const SHOTS: Record<
  string,
  { c: React.ComponentType; caption: string; shot?: string }
> = {
  "platform": { c: PlatformOverviewMockup, caption: "One platform — dispatch, orders, carriers, accounting, compliance." },
  "platform/dispatch": { c: LoadBoardMockup, shot: "/screenshots/platform/dispatch.webp", caption: "The live dispatch load board — lanes, carriers, ETAs and margin at a glance." },
  "platform/orders": { c: OrdersMockup, shot: "/screenshots/platform/orders.webp", caption: "VIN-level order tracking from quote to signed delivery." },
  "platform/accounting": { c: AccountingDashMockup, shot: "/screenshots/platform/accounting.webp", caption: "AR and AP aging alongside P&L, on the same records dispatch writes." },
  "platform/compliance": { c: ComplianceMockup, caption: "Authority, insurance and BOC-3 checked automatically, with expiry alerts." },
  "platform/ai": { c: AIMatchMockup, shot: "/screenshots/platform/ai.webp", caption: "Top-three carrier recommendations — suggested, never auto-awarded." },
  "platform/agents": { c: AgentRosterMockup, caption: "The agent roster and what each one actually does." },
  "platform/agentic-ai": { c: AgenticAIMockup, shot: "/screenshots/platform/agentic-ai.webp", caption: "Agentic workflows with human review on every action." },
  "platform/business-intelligence": { c: BIDashboardMockup, shot: "/screenshots/platform/business-intelligence.webp", caption: "Lane, margin and carrier performance in one view." },
  "platform/dealer-portal": { c: DealerPortalMockup, caption: "The white-label portal your dealers log into." },
  "platform/flolens": { c: FloLensMockup, caption: "FloLens visibility across the network." },
  "platform/pin-protocol": { c: PinProtocolMockup, shot: "/screenshots/platform/pin-protocol.webp", caption: "Chain-of-custody verification at every handoff." },
  "platform/load-optimizer": { c: LoadOptimizerMockup, shot: "/screenshots/platform/load-optimizer.webp", caption: "Load planning across available capacity." },
  "platform/carriers": { c: DispatchMapMockup, shot: "/screenshots/platform/carriers.webp", caption: "Carrier network and live coverage." },
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
          {hit.shot ? (
            // eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer
            <img src={hit.shot} alt={hit.caption} className="w-full h-auto block" loading="lazy" />
          ) : (
            <C />
          )}
        </ProductShot>
      </div>
    </section>
  );
}
