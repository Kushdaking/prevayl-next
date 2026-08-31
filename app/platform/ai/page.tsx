import type { Metadata } from "next";
import Link from "next/link";
import { ElementStage } from "@/components/ui/ElementStage";
import { Band } from "@/components/shared/Band";
import { layoutFor } from "@/content/layouts";

export const metadata: Metadata = {
  title: "AI — 17 workflows built for auto transport",
  description:
    "AI workflows across pricing, matching, vetting, operations and finance. Human override on every decision.",
};

const layout = layoutFor("platform/ai")!;

/** Metrics strip — confirm figures against product; edit strings only. */
const METRICS = [
  { label: "Activates at", value: "200", unit: "orders/month" },
  { label: "", value: "$1", unit: "/VIN" },
  { label: "Human override", value: "", unit: "on every AI decision" },
] as const;

const CARDS = [
  {
    n: "01",
    title: "Pricing Intelligence",
    tag: "Rate every lane. Automatically.",
    body: "Lane-level rate model, seasonal demand, fuel passthrough, confidence band, and margin calculator — scored before you send the quote.",
  },
  {
    n: "02",
    title: "Carrier Matching & Vetting",
    tag: "Right carrier. First try.",
    body: "Top-3 recommendations from lane history. Auto-vetting MC/DOT/insurance/BOC-3 at assignment, with expiry alerts — human confirms the award.",
  },
  {
    n: "03",
    title: "Operations Automation",
    tag: "The repetitive work disappears.",
    body: "Status at real customer moments, exception escalations, invoice on delivery, and carrier re-engagement with cooldowns you control.",
  },
] as const;

export default function AiPage() {
  return (
    <main>
      <ElementStage bandImage={layout.band} elements={layout.elements} height="tall">
        <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">
          Platform · AI
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-5 max-w-4xl">
          17 workflows. Built for auto transport.
        </h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl leading-relaxed mb-8">
          Specialized AI agents handle pricing, carrier matching, vetting, invoicing, and exception
          management. Human-in-the-loop by design — every AI action can be reviewed, overridden, or
          escalated.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
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

        <div className="flex flex-wrap gap-8 sm:gap-12 text-sm">
          {METRICS.map((m) => (
            <div key={m.unit + m.value} className="min-w-[7rem]">
              {m.label && <p className="text-prevayl-muted text-xs mb-1">{m.label}</p>}
              <p className="text-white">
                {m.value && (
                  <span className="text-prevayl-gold font-display text-3xl">{m.value}</span>
                )}{" "}
                <span className="text-prevayl-soft/80">{m.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </ElementStage>

      <Band height="md">
        <div className="grid md:grid-cols-3 gap-5">
          {CARDS.map((c) => (
            <div key={c.n} className="glass rounded-2xl p-6 border border-prevayl-gold/15">
              <p className="text-prevayl-gold text-xs font-semibold tracking-widest uppercase mb-3">
                {c.n}
              </p>
              <h2 className="text-white font-semibold text-lg mb-1">{c.title}</h2>
              <p className="text-prevayl-gold text-sm mb-3">{c.tag}</p>
              <p className="text-prevayl-muted text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band height="md" align="center" className="border-t border-prevayl-navy-4">
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Ready to move?</h2>
        <p className="text-prevayl-muted max-w-xl mx-auto mb-8">
          Get started in under 10 minutes. Pricing is built around your volume and the modules you
          run.
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
    </main>
  );
}
