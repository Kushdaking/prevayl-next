import Link from "next/link";
import { Band } from "@/components/ui/Band";
import { roles } from "@/content/site";

export function BuiltForEveryone() {
  return (
    <Band image="/art/roles.webp" align="right" height="tall">
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide mb-6">
        <span className="text-white">{roles.title} </span>
        <span className="text-gold-gradient">{roles.titleGold}</span>
      </h2>
      <p className="text-prevayl-soft/85 text-lg leading-relaxed mb-8">{roles.lead}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {roles.items.map((r) => (
          <Link
            key={r.title}
            href={r.href}
            className="glass rounded-xl p-5 transition hover:border-prevayl-gold/40"
          >
            <span className="text-prevayl-gold/60 font-mono text-xs">{r.n}</span>
            <h3 className="text-white font-semibold text-lg mt-1 mb-1.5">{r.title}</h3>
            <p className="text-prevayl-soft/70 text-sm leading-relaxed">{r.body}</p>
          </Link>
        ))}
      </div>
    </Band>
  );
}
