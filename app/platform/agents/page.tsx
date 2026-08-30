import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Meet the Agents",
};

const AGENTS = [
  {
    name: "Margin Guard",
    body: "Computes real margin on every priced shipment. <0% critical | <10% warning | else silent.",
  },
  {
    name: "Status Bot",
    body: "Sends branded email + SMS at 4 customer-facing moments only. Everything else stays quiet.",
  },
  {
    name: "Reengagement",
    body: "Wins back inactive carriers with a real 7-day cooldown so nobody gets double-emailed.",
  },
  {
    name: "Carrier Match",
    body: "Configurable rule engine that suggests - never auto-awards - a load. Confirm-first.",
  },
  {
    name: "Pricer",
    body: "Lane-pricing engine that refuses to guess a rate without real history behind it.",
  },
];

export default function AgentsPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">
          Platform | AI Control Center
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">Meet the Agents</h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl mb-8 leading-relaxed">
          Ten agents. Each one, explained. Every agent is a real automation route with real
          thresholds - not a decorative avatar.
        </p>
        <LinkButton href="/register" size="md" className="mb-12">
          Start Free Trial
        </LinkButton>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {AGENTS.map((a) => (
            <div key={a.name} className="glass rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{a.name}</h3>
              <p className="text-prevayl-muted text-sm leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-prevayl-gold font-semibold mb-2">01 | Margin Guard</h3>
            <p className="text-prevayl-muted text-sm mb-3">
              Profitability, checked the moment a rate is set.
            </p>
            <ul className="text-prevayl-muted text-sm space-y-1 list-disc list-inside">
              <li>Negative margin sets a flag and fires a critical alert</li>
              <li>Low margin (under 10%) triggers a high-priority warning</li>
              <li>Healthy margin is logged, not alerted</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-prevayl-gold font-semibold mb-2">02 | Carrier Match</h3>
            <p className="text-prevayl-muted text-sm mb-3">
              A rule engine you configure - not a black box.
            </p>
            <ul className="text-prevayl-muted text-sm space-y-1 list-disc list-inside">
              <li>Excludes expired insurance, sorts by scorecard</li>
              <li>Suggests one carrier - human confirms and awards</li>
              <li>Refuses empty rules that match everything</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
