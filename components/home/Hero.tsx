import Link from "next/link";
import { Band } from "@/components/ui/Band";
import { hero } from "@/content/site";

/**
 * Image-led hero. The render fills the band; the headline sits on it.
 *
 * The dispatch preview panel that shipped in the template is gone — it was a
 * thin SVG standing in for a full-bleed render, and it read as a small map
 * pasted onto an otherwise empty page.
 */
export function Hero() {
  return (
    <Band image="/art/hero-4.webp" align="left" height="screen">
      <p className="text-prevayl-gold text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase mb-6">
        {hero.eyebrow}
      </p>

      <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-wide text-white mb-7">
        {hero.lines.map((line, i) => (
          <span key={line} className="block">
            {i === hero.gradientLine ? (
              <span className="text-gold-gradient">{line}</span>
            ) : (
              line
            )}
          </span>
        ))}
      </h1>

      <p className="text-prevayl-soft/85 text-lg sm:text-xl leading-relaxed mb-9">
        {hero.sub.split(hero.highlightInSub).map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && (
              <span className="text-prevayl-gold font-medium">{hero.highlightInSub}</span>
            )}
          </span>
        ))}
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          href={hero.primaryCta.href}
          className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold transition hover:brightness-110"
        >
          {hero.primaryCta.label} →
        </Link>
        <Link
          href={hero.secondaryCta.href}
          className="inline-flex items-center rounded-xl px-8 py-4 text-base font-semibold border border-prevayl-gold/40 text-prevayl-gold transition hover:bg-prevayl-gold/10"
        >
          {hero.secondaryCta.label}
        </Link>
      </div>

      <p className="mt-7 text-sm text-prevayl-muted">{hero.note}</p>
    </Band>
  );
}
