import type { Metadata } from "next";
import Link from "next/link";
import { ElementStage } from "@/components/ui/ElementStage";
import { Band } from "@/components/shared/Band";
import { layoutFor } from "@/content/layouts";

export const metadata: Metadata = {
  title: "Dealers — White-label dealer portal",
  description: "Your branding, your domain. Real-time VIN tracking and self-serve booking for dealers.",
};

const layout = layoutFor("solutions/dealers")!;

const CARDS = [
  {
    title: "Your branding and domain",
    body: "The portal looks like yours because it is yours — white-label under your colors and domain.",
  },
  {
    title: "Real-time VIN tracking",
    body: "Every unit visible without asking anyone. Stop the phone tag between lot and transporter.",
  },
  {
    title: "Self-serve booking",
    body: "Staff place transport orders directly against your rates.",
  },
  {
    title: "Role-based access",
    body: "Manager, runner, and accounting each see what they need.",
  },
] as const;

export default function DealersPage() {
  return (
    <main>
      <ElementStage bandImage={layout.band} elements={layout.elements} height="hero">
        <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">
          Solutions · For Dealers
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-5 max-w-4xl">
          White-label dealer portal.
        </h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl leading-relaxed mb-8">
          Your branding, your domain, your colors. Real-time VIN tracking and self-serve booking so the
          phone tag between your lot and your transporter stops.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/register"
            className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold transition hover:brightness-110"
          >
            Get Started Free
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
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Ready to move?</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link
            href="/register"
            className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold"
          >
            Get Started Free
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
