import Link from "next/link";
import { roles } from "@/content/site";

/** Edit role cards in content/site.ts → roles */
export function BuiltForEveryone() {
  return (
    <section className="py-24 bg-prevayl-navy-2/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            {roles.title} <span className="text-prevayl-gold">{roles.titleGold}</span>
          </h2>
          <p className="text-prevayl-muted">{roles.lead}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.items.map((role) => (
            <Link
              key={role.href}
              href={role.href}
              className="glass module-card rounded-2xl p-6 block group"
            >
              <div className="text-prevayl-gold text-xs font-mono tracking-widest mb-3">
                {role.n}
              </div>
              <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-prevayl-gold transition-colors">
                {role.title}
              </h3>
              <p className="text-prevayl-muted text-sm leading-relaxed mb-4">{role.body}</p>
              <span className="text-prevayl-gold text-sm font-medium">Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
