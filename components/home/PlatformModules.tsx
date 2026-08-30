import Link from "next/link";
import { Band } from "@/components/ui/Band";
import { modules } from "@/content/site";

export function PlatformModules() {
  return (
    <Band image="/art/objects.webp" align="left" height="tall">
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide mb-6">
        <span className="text-white">{modules.title} </span>
        <span className="text-gold-gradient">{modules.titleGold}</span>
      </h2>
      <p className="text-prevayl-soft/85 text-lg leading-relaxed mb-8">{modules.lead}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {modules.items.map((m) => (
          <Link
            key={m.title}
            href={m.href}
            className="module-card glass rounded-xl px-5 py-4 block"
          >
            <h3 className="text-prevayl-gold font-semibold text-[15px] mb-1">{m.title}</h3>
            <p className="text-prevayl-soft/65 text-[13px] leading-relaxed">{m.body}</p>
          </Link>
        ))}
      </div>
    </Band>
  );
}
