import { ElementStage } from "@/components/ui/ElementStage";
import { FeatureGrid } from "./FeatureGrid";
import { Band } from "./Band";
import { LinkButton } from "@/components/ui/Button";
import type { MarketingPageContent } from "@/content/pages/types";
import { layoutFor } from "@/content/layouts";

/**
 * Three-layer marketing page:
 * 1. Band atmosphere (layout.band or page.bandImage)
 * 2. Element objects (layout.elements)
 * 3. HTML — every word indexable
 */
export function MarketingPage({ page }: { page: MarketingPageContent }) {
  const layout = layoutFor(page.slug);
  const band = page.bandImage ?? layout?.band;
  const elements = layout?.elements ?? [];

  return (
    <main>
      <ElementStage bandImage={band} elements={elements} height="hero">
        {page.eyebrow && (
          <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">
            {page.eyebrow}
          </p>
        )}
        <h1
          className={`font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] mb-5 max-w-3xl ${
            page.goldTitle ? "text-gold-gradient" : "text-white"
          }`}
        >
          {page.title}
        </h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl leading-relaxed mb-8">{page.lead}</p>
        {(page.primaryCta || page.secondaryCta) && (
          <div className="flex flex-wrap gap-4">
            {page.primaryCta && (
              <LinkButton href={page.primaryCta.href} variant={page.primaryCta.variant ?? "gold"} size="md">
                {page.primaryCta.label}
              </LinkButton>
            )}
            {page.secondaryCta && (
              <LinkButton
                href={page.secondaryCta.href}
                variant={page.secondaryCta.variant ?? "ghost"}
                size="md"
              >
                {page.secondaryCta.label}
              </LinkButton>
            )}
          </div>
        )}
      </ElementStage>

      {page.sections?.map((section, i) => (
        <Band
          key={section.heading ?? i}
          alt={i % 2 === 1}
          height="md"
          image={section.image}
          imageOpacity={section.image ? 0.25 : undefined}
        >
          {section.heading && (
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">{section.heading}</h2>
          )}
          {section.body && (
            <p className="text-prevayl-muted text-base max-w-3xl leading-relaxed mb-8">{section.body}</p>
          )}
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="text-prevayl-muted text-base max-w-3xl leading-relaxed mb-4">
              {p}
            </p>
          ))}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="space-y-2 mb-8 max-w-2xl">
              {section.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-prevayl-soft/85 text-sm">
                  <span className="text-prevayl-gold shrink-0">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {section.features && section.features.length > 0 && (
            <FeatureGrid items={section.features} cols={section.cols ?? 3} />
          )}
        </Band>
      ))}

      {page.finalCta && (
        <Band height="md" align="center" className="border-t border-prevayl-navy-4">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">{page.finalCta.title}</h2>
          {page.finalCta.lead && (
            <p className="text-prevayl-muted max-w-xl mx-auto mb-8">{page.finalCta.lead}</p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton href={page.finalCta.primary.href} size="md">
              {page.finalCta.primary.label}
            </LinkButton>
            {page.finalCta.secondary && (
              <LinkButton href={page.finalCta.secondary.href} variant="ghost" size="md">
                {page.finalCta.secondary.label}
              </LinkButton>
            )}
          </div>
        </Band>
      )}
    </main>
  );
}
