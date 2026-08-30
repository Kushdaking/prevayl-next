import { PageHero } from "./PageHero";
import { FeatureGrid } from "./FeatureGrid";
import { Band } from "./Band";
import { LinkButton } from "@/components/ui/Button";
import type { MarketingPageContent } from "@/content/pages/types";

export function MarketingPage({ page }: { page: MarketingPageContent }) {
  return (
    <main>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        goldTitle={page.goldTitle}
        lead={page.lead}
        primaryCta={page.primaryCta}
        secondaryCta={page.secondaryCta}
        heroImage={page.heroImage}
        heroImageAlt={page.heroImageAlt}
      />
      {page.sections?.map((section, i) => (
        <Band key={section.heading ?? i} alt={i % 2 === 1} height="md">
          {section.heading && (
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">{section.heading}</h2>
          )}
          {section.body && (
            <p className="text-prevayl-muted text-base max-w-3xl leading-relaxed mb-8">{section.body}</p>
          )}
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="text-prevayl-muted text-base max-w-3xl leading-relaxed mb-4">{p}</p>
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
            <LinkButton href={page.finalCta.primary.href} size="md">{page.finalCta.primary.label}</LinkButton>
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
