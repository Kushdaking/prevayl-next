import Link from "next/link";
import { modules } from "@/content/site";

/** Edit modules in content/site.ts → modules */
export function PlatformModules() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-3">
              {modules.title} <span className="text-prevayl-gold">{modules.titleGold}</span>
            </h2>
            <p className="text-prevayl-muted max-w-xl">{modules.lead}</p>
          </div>
          <Link
            href={modules.tourHref}
            className="border border-prevayl-gold/35 text-prevayl-gold hover:bg-prevayl-gold/10 px-5 py-2.5 rounded-lg text-sm self-start lg:self-auto transition-all"
          >
            See full platform tour →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.items.map((m) => (
            <Link key={m.href} href={m.href} className="glass module-card rounded-xl p-5">
              <h4 className="text-prevayl-gold font-semibold mb-1">{m.title}</h4>
              <p className="text-prevayl-muted text-xs leading-relaxed">{m.body}</p>
            </Link>
          ))}
          <div className="glass rounded-xl p-5 border-prevayl-gold/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-mono text-prevayl-gold">{modules.metric.value}</div>
              <div className="text-xs text-prevayl-muted">{modules.metric.label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
