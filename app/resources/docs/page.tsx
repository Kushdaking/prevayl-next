import type { Metadata } from "next";
import Link from "next/link";
import { DOCS_NAV } from "@/content/docs-nav";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Prevayl documentation — getting started, modules, API, webhooks, Zapier.",
};

export default function DocsIndexPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-prevayl-gold text-sm font-medium tracking-widest uppercase mb-3">
          Resources · Docs
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">Documentation</h1>
        <p className="text-prevayl-soft/80 text-lg max-w-2xl mb-12 leading-relaxed">
          Operator and developer docs. Dense, scannable, high-contrast — not marketing image bands.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCS_NAV.map((group) => (
            <div key={group.group} className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-prevayl-gold font-semibold mb-3">
                {group.group}
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-prevayl-soft hover:text-prevayl-gold text-sm transition-colors"
                    >
                      {item.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
