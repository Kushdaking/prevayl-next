import type { Metadata } from "next";
import Link from "next/link";
import { ElementStage } from "@/components/ui/ElementStage";
import { Band } from "@/components/shared/Band";
import { layoutFor } from "@/content/layouts";
import { ProductShot } from "@/components/ui/ProductShot";
import BrokerDashboardMockup from "@/components/mockups/BrokerDashboardMockup";

export const metadata: Metadata = {
  title: "Brokers — One platform for every broker job",
  description:
    "AI matching, per-VIN economics, full accounting, and automated compliance for auto-transport brokers.",
};

const layout = layoutFor("solutions/brokers")!;

const CARDS = [
  {
    title: "AI carrier matching",
    body: "Top-three recommendations on every load, with human override on each one — never auto-award.",
  },
  {
    title: "Per-VIN economics",
    body: "Priced per vehicle rather than per seat, so cost tracks volume instead of headcount.",
  },
  {
    title: "Full accounting",
    body: "AR, AP, and P&L on the same records dispatch writes — no export, no reconciliation step.",
  },
  {
    title: "Automated compliance",
    body: "MC, DOT, insurance, and BOC-3 checked automatically, with expiry alerts before they lapse.",
  },
] as const;

export default function BrokersPage() {
  return (
    <main>
      <ElementStage bandImage={layout.band} elements={layout.elements} height="hero">
        <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">
          Solutions · For Brokers
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-5 max-w-4xl">
          One platform for every broker job.
        </h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl leading-relaxed mb-8">
          Three systems for one job, a per-seat TMS bill, and manual carrier vetting. Prevayl replaces
          the stack with one subscription and per-VIN economics.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/register"
            className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold transition hover:brightness-110"
          >
            Start Free Trial
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold border border-prevayl-gold/40 text-prevayl-gold transition hover:bg-prevayl-gold/10"
          >
            Book a Demo
          </Link>
        </div>
      </ElementStage>

      <Band height="md">
        <h2 className="font-display text-3xl text-white mb-6">The problems every broker knows</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {CARDS.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-6 border border-prevayl-gold/15">
              <h3 className="text-prevayl-gold font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-prevayl-muted text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band height="md" align="center" className="border-t border-prevayl-navy-4">
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Ready to move?</h2>
        <p className="text-prevayl-muted max-w-xl mx-auto mb-8">
          Get started in under 10 minutes. Pricing is built around your volume.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/register"
            className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold"
          >
            Start Free Trial
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold border border-prevayl-gold/40 text-prevayl-gold"
          >
            Book a Demo
          </Link>
        </div>
      </Band>
    
      <section className="bg-prevayl-navy pb-24 pt-4">
        <div className="max-w-6xl mx-auto px-6">
          <ProductShot caption="The broker console: pipeline, margin and carrier health in one view.">
            <BrokerDashboardMockup />
          </ProductShot>
        </div>
      </section>
    </main>
  );
}
