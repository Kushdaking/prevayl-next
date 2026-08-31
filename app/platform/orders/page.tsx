import type { Metadata } from "next";
import Link from "next/link";
import { ElementStage } from "@/components/ui/ElementStage";
import { Band } from "@/components/shared/Band";
import { layoutFor } from "@/content/layouts";
import { PageShot } from "@/components/ui/PageShot";

export const metadata: Metadata = {
  title: "Orders — Every VIN, quote to delivered",
  description:
    "Multi-vehicle orders, auction CSV import, Manheim/ADESA/OVE integrations, customer portal, auto status broadcasts.",
};

const layout = layoutFor("platform/orders")!;

const CARDS = [
  {
    title: "Multi-vehicle orders",
    body: "Move five cars or fifty on one order, each VIN tracked and billed individually.",
  },
  {
    title: "Auction CSV import",
    body: "Drop in a purchase list and orders build themselves — no manual re-keying.",
  },
  {
    title: "Manheim, ADESA and OVE",
    body: "Direct integrations so auction purchases flow in without a handoff.",
  },
  {
    title: "Customer-facing portal",
    body: "Your customer checks status themselves instead of calling your dispatcher.",
  },
  {
    title: "Automatic status updates",
    body: "SMS and email broadcasts fire on real events, not on someone remembering.",
  },
  {
    title: "Quote builder",
    body: "Multi-VIN, multi-carrier quotes with the same records that become the order.",
  },
] as const;

export default function OrdersPage() {
  return (
    <main>
      <ElementStage bandImage={layout.band} elements={layout.elements} height="hero">
        <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">
          Platform · Orders
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-5 max-w-4xl">
          Every VIN, from quote to delivered.
        </h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl leading-relaxed mb-8">
          One record per vehicle, from the moment it is quoted to the moment it is signed for. No
          spreadsheet in the middle, no re-keying between systems.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        <div className="flex flex-wrap justify-center gap-4 mt-6">
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
          <PageShot slug="platform/orders" />
    </main>
  );
}
