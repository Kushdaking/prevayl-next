import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/Button";
import { pricing } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
};

/** Full pricing page - data from content/site.ts -> pricing */
export default function PricingPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="font-display text-4xl sm:text-5xl text-gold-gradient mb-4">
            SIMPLE PRICING. EVERYTHING INCLUDED.
          </h1>
          <p className="text-prevayl-soft/80 text-lg">{pricing.lead}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col relative ${
                plan.featured
                  ? "glass-strong shadow-gold border border-prevayl-gold/40"
                  : "glass"
              }`}
            >
              {plan.featured && plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-prevayl-gold text-prevayl-navy text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <h2 className="text-white font-semibold text-xl mb-1">{plan.name}</h2>
              <p className="text-prevayl-muted text-sm mb-6">{plan.range}</p>
              <ul className="space-y-2.5 text-sm text-prevayl-soft/80 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-prevayl-gold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <LinkButton
                href={plan.href}
                variant={plan.featured ? "gold" : "ghost"}
                className="w-full"
                size="sm"
              >
                {plan.cta}
              </LinkButton>
            </div>
          ))}
        </div>

        <p className="text-center text-prevayl-muted text-sm mt-10">{pricing.footnote}</p>
      </div>
    </main>
  );
}
