"use client";

import Link from "next/link";
import { DOCS_NAV } from "@/content/docs-nav";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";


export function DocsShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="pt-16 min-h-screen bg-prevayl-navy">
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[240px_1fr] gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <Link
              href="/resources/docs"
              className="text-xs font-mono uppercase tracking-widest text-prevayl-gold hover:underline"
            >
              ← Docs home
            </Link>
            {DOCS_NAV.map((group) => (
              <div key={group.group}>
                <div className="text-[0.7rem] uppercase tracking-wider text-prevayl-muted font-semibold mb-2">
                  {group.group}
                </div>
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block text-sm px-3 py-1.5 rounded-lg transition-colors ${
                            active
                              ? "bg-prevayl-gold/15 text-prevayl-gold border border-prevayl-gold/25"
                              : "text-prevayl-soft/80 hover:text-prevayl-gold hover:bg-prevayl-navy-3"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <article className="min-w-0 max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl text-white mb-3">{title}</h1>
          {description && (
            <p className="text-prevayl-muted text-base leading-relaxed mb-10 border-b border-prevayl-navy-4 pb-8">
              {description}
            </p>
          )}
          <div className="docs-prose space-y-5 text-prevayl-soft/90 text-[0.95rem] leading-relaxed">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}

export function DocH2({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-2xl text-white mt-10 mb-3 scroll-mt-24">{children}</h2>;
}

export function DocH3({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold text-prevayl-gold mt-8 mb-2">{children}</h3>;
}

export function DocP({ children }: { children: ReactNode }) {
  return <p className="text-prevayl-muted leading-relaxed">{children}</p>;
}

export function DocUl({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 pl-1">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-prevayl-muted text-sm">
          <span className="text-prevayl-gold shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DocCode({ text, lang }: { text: string; lang?: string }) {
  return (
    <pre className="bg-prevayl-navy-2 border border-prevayl-navy-4 rounded-xl p-4 overflow-x-auto text-sm font-mono text-prevayl-soft/90">
      {lang && (
        <div className="text-[0.65rem] uppercase tracking-wider text-prevayl-muted mb-2">{lang}</div>
      )}
      <code>{text}</code>
    </pre>
  );
}

export function DocNote({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-prevayl-gold/50 bg-prevayl-gold/5 rounded-r-lg px-4 py-3 text-sm text-prevayl-soft/85">
      {children}
    </div>
  );
}
