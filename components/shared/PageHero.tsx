import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { Band } from "./Band";

type Cta = { label: string; href: string; variant?: "gold" | "ghost" };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  goldTitle?: boolean;
  lead: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  bandImage?: string;
  heroImage?: string;
  heroImageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  goldTitle = false,
  lead,
  primaryCta,
  secondaryCta,
  bandImage,
  heroImage,
  heroImageAlt,
}: PageHeroProps) {
  return (
    <Band image={bandImage} imageOpacity={0.4} height="hero">
      {eyebrow && (
        <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">{eyebrow}</p>
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
        <div className="flex flex-wrap gap-4 mb-10">
          {primaryCta && (
            <LinkButton href={primaryCta.href} variant={primaryCta.variant ?? "gold"} size="md">
              {primaryCta.label}
            </LinkButton>
          )}
          {secondaryCta && (
            <LinkButton href={secondaryCta.href} variant={secondaryCta.variant ?? "ghost"} size="md">
              {secondaryCta.label}
            </LinkButton>
          )}
        </div>
      )}
      {heroImage && (
        <div className="relative w-full max-w-5xl mt-2 rounded-2xl overflow-hidden border border-prevayl-gold/20 shadow-gold-sm">
          <Image
            src={heroImage}
            alt={heroImageAlt ?? title}
            width={1792}
            height={1008}
            className="w-full h-auto object-cover object-top"
            priority
            sizes="(max-width: 1280px) 100vw, 1024px"
          />
        </div>
      )}
    </Band>
  );
}
