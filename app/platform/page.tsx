import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Band } from "@/components/shared/Band";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Dispatch, carriers, compliance, AI, BI, load optimizer, route optimizer, FloLens, PIN Protocol — one Prevayl platform.",
};

const LINKS = [
  { href: "/platform/dispatch", title: "Dispatch", body: "Load board, AI match, eBOL" },
  { href: "/platform/carriers", title: "Carriers", body: "Free forever tools" },
  { href: "/platform/compliance", title: "Compliance", body: "Vetting at assignment" },
  { href: "/platform/ai", title: "AI Platform", body: "Matching, pricing, margin" },
  { href: "/platform/agentic-ai", title: "Agentic AI", body: "Trust-layered agents" },
  { href: "/platform/agents", title: "Meet the Agents", body: "Each agent explained" },
  { href: "/platform/business-intelligence", title: "Business Intelligence", body: "Lane P&L, scorecards" },
  { href: "/platform/load-optimizer", title: "Load Optimizer", body: "VIN-aware truck packing" },
  { href: "/platform/route-optimizer", title: "Route Optimizer", body: "Multi-stop sequences" },
  { href: "/platform/flolens", title: "FloLens", body: "Workflow suggestions" },
  { href: "/platform/pin-protocol", title: "PIN Protocol", body: "Secure handoff" },
];

export default function PlatformOverviewPage() {
  return (
    <main>
      <PageHero
        eyebrow="Platform"
        title="One platform. Every workflow."
        lead="Dispatch, compliance, AI, BI, and carrier tools share the same VIN-level data. No duct-taped stack."
        primaryCta={{ label: "Start Free Trial", href: "/register" }}
        secondaryCta={{ label: "Meet the Agents", href: "/platform/agents" }}
        bandImage="/brand/bands/platform-index.jpg"
      />
      <Band height="md">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="glass module-card rounded-xl p-5 block">
              <h3 className="text-prevayl-gold font-semibold mb-1">{l.title}</h3>
              <p className="text-prevayl-muted text-sm">{l.body}</p>
            </Link>
          ))}
        </div>
      </Band>
    </main>
  );
}
