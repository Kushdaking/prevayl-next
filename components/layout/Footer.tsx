import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { brand, footer } from "@/content/site";

/** Edit columns / legal in content/site.ts */
export function Footer() {
  return (
    <footer className="border-t border-prevayl-navy-4 py-12 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div>
            <Logo className="mb-3" />
            <p className="text-prevayl-muted text-sm max-w-xs">{brand.tagline}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <div className="text-prevayl-gold font-medium mb-3">{col.title}</div>
                <ul className="space-y-2 text-prevayl-muted">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:text-prevayl-gold transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-prevayl-navy-4 flex flex-col sm:flex-row justify-between gap-4 text-xs text-prevayl-muted">
          <span>
            © {brand.year} Prevayl Inc. · {brand.mc} · {brand.dot} · {brand.location}
          </span>
          <span>Built for the lane.</span>
        </div>
      </div>
    </footer>
  );
}
