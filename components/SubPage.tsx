import Link from "next/link";
import { Band } from "@/components/ui/Band";
import type { PageDef } from "@/content/pages";

/** One layout for every sub-page: image band hero, then the detail points. */
export function SubPage({ def }: { def: PageDef }) {
  return (
    <>
      <Band image={def.art} align={def.align} height="tall">
        <p className="text-prevayl-gold text-xs font-semibold tracking-[0.22em] uppercase mb-5">
          {def.eyebrow}
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-wide mb-6">
          <span className="text-white">{def.title} </span>
          {def.titleGold && <span className="text-gold-gradient">{def.titleGold}</span>}
        </h1>
        <p className="text-prevayl-soft/85 text-lg leading-relaxed mb-8">{def.lead}</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/register" className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy shadow-gold transition hover:brightness-110">
            Get Started Free
          </Link>
          <Link href="/contact?type=demo" className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold border border-prevayl-gold/40 text-prevayl-gold transition hover:bg-prevayl-gold/10">
            Book a 30-min Demo
          </Link>
        </div>
      </Band>

      <section className="bg-prevayl-navy py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-5">
          {def.points.map((p) => (
            <div key={p.title} className="glass rounded-xl p-6">
              <h2 className="text-prevayl-gold font-semibold text-lg mb-2">{p.title}</h2>
              <p className="text-prevayl-soft/75 text-[15px] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
