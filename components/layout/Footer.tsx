import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { brand, footer } from "@/content/site";

/**
 * Footer.
 *
 * Company info sits under the logo in the left column rather than in a
 * separate full-width bar across the bottom — logo, tagline, location and
 * copyright read as one block belonging to the brand.
 *
 * Edit columns / legal in content/site.ts
 */
export function Footer() {
  return (
    <footer className="border-t border-prevayl-navy-4 py-12 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand block: logo, tagline, then company info directly beneath */}
          <div className="max-w-xs">
            <Logo className="mb-3" />
            <p className="text-prevayl-muted text-sm mb-5">{brand.tagline}</p>
            <div className="text-xs text-prevayl-muted space-y-1">
              <p>{brand.location}</p>
              <p>© {brand.year} Prevayl Inc.</p>
              <p className="text-prevayl-muted/70">Built for the lane.</p>
            </div>
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
      </div>
    </footer>
  );
}

