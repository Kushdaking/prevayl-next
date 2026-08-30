"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { nav } from "@/content/site";

/**
 * Fixed glass nav with dropdowns.
 * Edit links in content/site.ts → nav
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-strong border-b border-prevayl-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
          {nav.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-prevayl-muted hover:text-prevayl-gold transition-colors"
              >
                {item.label}
              </Link>
              {"children" in item && item.children && (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[220px] z-50">
                  <div className="glass-strong rounded-xl p-2 shadow-2xl border border-prevayl-gold/15">
                    <div className="text-[0.7rem] uppercase tracking-wider text-prevayl-gold font-semibold px-3 py-1.5">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 rounded-lg text-sm text-prevayl-soft hover:bg-prevayl-gold/10 hover:text-prevayl-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:block text-sm font-medium text-prevayl-muted hover:text-prevayl-gold px-3 py-1.5 transition-colors"
          >
            Sign in
          </Link>
          <LinkButton href="/register" size="sm">
            Get Started
          </LinkButton>
          <button
            type="button"
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="w-5 h-0.5 bg-prevayl-soft rounded" />
            <span className="w-5 h-0.5 bg-prevayl-soft rounded" />
            <span className="w-5 h-0.5 bg-prevayl-soft rounded" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="lg:hidden border-t border-prevayl-navy-4 bg-prevayl-navy/98 backdrop-blur-xl px-6 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block py-3 text-prevayl-soft border-b border-prevayl-navy-4/50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {"children" in item &&
                item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 pl-4 text-sm text-prevayl-muted border-b border-prevayl-navy-4/30"
                    onClick={() => setOpen(false)}
                  >
                    — {child.label}
                  </Link>
                ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
