import type { Metadata } from "next";
import Link from "next/link";
import { ElementStage } from "@/components/ui/ElementStage";
import { Band } from "@/components/shared/Band";
import { layoutFor } from "@/content/layouts";

export const metadata: Metadata = {
  title: "Carriers — Always free. No asterisk.",
  description: "Owner-operators and fleets: free driver app, eBOL, IFTA, Stripe payouts. No subscription.",
};

const layout = layoutFor("solutions/carriers")!;

const CARDS = [
  {
    title: "Driver app on iOS and Android",
    body: "Accept loads, capture inspection photos, and close jobs from the cab.",
  },
  {
    title: "eBOL and IFTA",
    body: "Bill of lading and fuel tax handling included — not an add-on.",
  },
  {
    title: "Stripe payouts",
    body: "Settlement in one to two days rather than on thirty-day terms.",
  },
  {
    title: "No monthly fee",
    body: "Free forever for carriers. Not a trial and not a loss-leader tier.",
  },
] as const;

export default function CarriersPage() {
  return (
    <main>
      <ElementStage bandImage={layout.band} elements={layout.elements} height="hero">
        <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">
          Solutions · For Carriers
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-5 max-w-4xl">
          Always free. No asterisk.
        </h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl leading-relaxed mb-8">
          Owner-operators and small fleets pay nothing. Prevayl earns from brokers, not from the people
          actually moving the freight. Driver app, BOL, IFTA, and payouts included.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/register"
            className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold transition hover:brightness-110"
          >
            Get the Free Driver App
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
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Ready to haul?</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link
            href="/register"
            className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold"
          >
            Get the Free Driver App
          </Link>
        </div>
      </Band>
    </main>
  );
}
