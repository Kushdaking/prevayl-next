import { LinkButton } from "@/components/ui/Button";
import { finalCta } from "@/content/site";

/** Edit CTAs in content/site.ts → finalCta */
export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-prevayl-gold/8 blur-[80px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-white mb-5">{finalCta.title}</h2>
        <p className="text-prevayl-soft/80 text-lg mb-8">{finalCta.lead}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <LinkButton href={finalCta.primary.href} size="lg">
            {finalCta.primary.label}
          </LinkButton>
          <LinkButton href={finalCta.secondary.href} variant="ghost" size="lg">
            {finalCta.secondary.label}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
