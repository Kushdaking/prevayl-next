import type { Metadata } from "next";
import Link from "next/link";
import { ElementStage } from "@/components/ui/ElementStage";
import { Band } from "@/components/shared/Band";
import { layoutFor } from "@/content/layouts";
import { PageShot } from "@/components/ui/PageShot";

export const metadata: Metadata = {
  title: "Meet the Agents — AI Control Center",
  description:
    "Ten agents. Each one a real automation route with real thresholds — Margin Guard, Status Bot, Reengagement, Carrier Match, Pricer, and more.",
};

const layout = layoutFor("platform/agents")!;

const ROSTER = [
  {
    name: "Margin Guard",
    body: "Computes real margin on every priced shipment and flags critical losses instantly. Configurable thresholds: critical, warning, or silent.",
  },
  {
    name: "Status Bot",
    body: "Sends branded email and SMS only at the customer-facing moments that matter — not a firehose of noise.",
  },
  {
    name: "Reengagement",
    body: "Wins back inactive carriers with a real cooldown so nobody gets double-emailed.",
  },
  {
    name: "Carrier Match",
    body: "Configurable rule engine that suggests — never auto-awards — a load. Dispatchers always have the final call.",
  },
  {
    name: "Pricer",
    body: "Lane-pricing engine that refuses to guess a rate without real history. Confidence bands, not black-box magic.",
  },
] as const;

const SECTIONS = [
  {
    heading: "01 · Margin Guard",
    body: "Profitability, checked the moment a rate is set. See margin before you commit — and get alerted when a load would go underwater.",
  },
  {
    heading: "02 · Status Bot & Reengagement",
    body: "Communication that runs itself without spamming anyone. Real customer moments only, plus carrier re-engagement with cooldowns you control.",
  },
  {
    heading: "03 · Carrier Match",
    body: "A rule engine you configure — not a black box. Rank carriers by lane performance, on-time rate, damage history, and rate competitiveness.",
  },
] as const;

export default function AgentsPage() {
  return (
    <main>
      <ElementStage bandImage={layout.band} elements={layout.elements} height="hero">
        <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">
          Platform · AI Control Center
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-5 max-w-4xl">
          Meet the Agents
        </h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl leading-relaxed mb-8">
          Ten agents. Each one explained. Every agent in the roster is a real automation route with real
          thresholds — not a decorative avatar next to a name.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/register"
            className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold transition hover:brightness-110"
          >
            Start Free Trial
          </Link>
          <Link
            href="/platform/ai"
            className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold border border-prevayl-gold/40 text-prevayl-gold transition hover:bg-prevayl-gold/10"
          >
            See AI workflows
          </Link>
        </div>
      </ElementStage>

      <Band height="md">
        <h2 className="font-display text-3xl text-white mb-2">The roster</h2>
        <p className="text-prevayl-muted mb-8 max-w-2xl">
          Here is what five of them actually do. Thresholds are yours to set.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROSTER.map((a) => (
            <div key={a.name} className="glass rounded-2xl p-6 border border-prevayl-gold/15">
              <h3 className="text-prevayl-gold font-semibold text-lg mb-2">{a.name}</h3>
              <p className="text-prevayl-muted text-sm leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </Band>

      {SECTIONS.map((s, i) => (
        <Band key={s.heading} height="md" alt={i % 2 === 1}>
          <h2 className="font-display text-3xl text-white mb-3">{s.heading}</h2>
          <p className="text-prevayl-muted text-base max-w-3xl leading-relaxed">{s.body}</p>
        </Band>
      ))}

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
          <PageShot slug="platform/agents" />
    </main>
  );
}
