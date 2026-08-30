import Link from "next/link";
import { Band } from "@/components/ui/Band";
import { pricing } from "@/content/site";

export function PricingTeaser() {
  return (
    <Band image="/art/pricing.webp" align="center" height="tall">
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide mb-5">
          <span className="text-white">{pricing.title} </span>
          <span className="text-gold-gradient">{pricing.titleGold}</span>
        </h2>
        <p className="text-prevayl-soft/85 text-lg mb-10">{pricing.lead}</p>

        <div className="grid md:grid-cols-3 gap-5 text-left">
          {pricing.plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-6 flex flex-col ${
                p.featured
                  ? "glass-strong border-prevayl-gold/45 shadow-gold"
                  : "glass"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-white font-semibold text-2xl">{p.name}</h3>
                {"badge" in p && p.badge && (
                  <span className="text-[10px] tracking-widest text-prevayl-gold border border-prevayl-gold/40 rounded-full px-2.5 py-1">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="text-prevayl-gold text-sm mb-5">{p.range}</p>
              <ul className="space-y-2.5 mb-7 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="text-prevayl-soft/75 text-sm flex gap-2.5">
                    <span className="text-prevayl-gold mt-0.5">·</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={p.href}
                className={`block text-center rounded-xl px-6 py-3 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy hover:brightness-110"
                    : "border border-prevayl-gold/40 text-prevayl-gold hover:bg-prevayl-gold/10"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-prevayl-muted text-sm mt-8">
          {pricing.footnote} ·{" "}
          <Link href={pricing.fullComparisonHref} className="text-prevayl-gold hover:underline">
            Full comparison
          </Link>
        </p>
      </div>
    </Band>
  );
}
