import Link from "next/link";
import { Band } from "@/components/ui/Band";
import { finalCta } from "@/content/site";

export function FinalCTA() {
  return (
    <Band image="/art/hero-2.webp" align="center" height="mid">
      <div className="text-center">
        <h2 className="font-display text-4xl sm:text-6xl text-white leading-[0.95] tracking-wide mb-5">
          {finalCta.title}
        </h2>
        <p className="text-prevayl-soft/85 text-lg mb-9 max-w-2xl mx-auto">{finalCta.lead}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={finalCta.primary.href}
            className="inline-flex items-center rounded-xl px-8 py-4 text-base font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold transition hover:brightness-110"
          >
            {finalCta.primary.label}
          </Link>
          <Link
            href={finalCta.secondary.href}
            className="inline-flex items-center rounded-xl px-8 py-4 text-base font-semibold border border-prevayl-gold/40 text-prevayl-gold transition hover:bg-prevayl-gold/10"
          >
            {finalCta.secondary.label}
          </Link>
        </div>
      </div>
    </Band>
  );
}
