import { LinkButton } from "@/components/ui/Button";

type Cta = { label: string; href: string; variant?: "gold" | "ghost" };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  goldTitle?: boolean;
  lead: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

export function PageHero({
  eyebrow,
  title,
  goldTitle = false,
  lead,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="pt-28 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-prevayl-gold/8 blur-[80px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {eyebrow && (
          <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h1
          className={`font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] mb-5 max-w-4xl ${
            goldTitle ? "text-gold-gradient" : "text-white"
          }`}
        >
          {title}
        </h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl leading-relaxed mb-8">{lead}</p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4">
            {primaryCta && (
              <LinkButton href={primaryCta.href} variant={primaryCta.variant ?? "gold"} size="md">
                {primaryCta.label}
              </LinkButton>
            )}
            {secondaryCta && (
              <LinkButton
                href={secondaryCta.href}
                variant={secondaryCta.variant ?? "ghost"}
                size="md"
              >
                {secondaryCta.label}
              </LinkButton>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
