import type { ReactNode } from "react";

/**
 * ProductShot — frames a real UI mockup as the page's product visual.
 *
 * These are the actual Prevayl interface components lifted from the platform
 * repo: pure SVG, no data hooks, no Tailwind dependency. They show load rows,
 * lanes, carriers, rates and margins — what a broker evaluating a TMS actually
 * wants to see — instead of abstract glow art.
 *
 * Crisp at any resolution and a few KB, so this replaces heavy background
 * renders rather than sitting on top of them.
 */
export function ProductShot({
  children,
  caption,
  className = "",
}: {
  children: ReactNode;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`relative ${className}`}>
      <div className="rounded-2xl border border-prevayl-navy-4 bg-prevayl-navy-2/70 p-2 shadow-glass overflow-hidden">
        <div className="rounded-xl overflow-hidden">{children}</div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-prevayl-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
