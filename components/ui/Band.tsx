import type { ReactNode } from "react";

/**
 * Band — a full-bleed image section with text overlaid.
 *
 * This replaces the card-grid approach the template shipped with. In the
 * reference mockups the render IS the section: it fills the band edge to edge
 * and the copy sits on top of it. Cards with an optional picture beside them
 * are a different architecture and cannot be edited into this one.
 *
 * The text stays real HTML rather than being baked into the render. It looks
 * identical, but stays readable by search engines and screen readers, and can
 * be changed in content/site.ts without regenerating a picture.
 *
 * `scrim` darkens the side the copy sits on so the text keeps contrast
 * regardless of what the render is doing underneath.
 */
export function Band({
  image,
  align = "left",
  height = "screen",
  scrim = true,
  children,
}: {
  image: string;
  align?: "left" | "right" | "center";
  height?: "screen" | "tall" | "mid";
  scrim?: boolean;
  children: ReactNode;
}) {
  const h =
    height === "screen"
      ? "min-h-[88vh]"
      : height === "tall"
      ? "min-h-[70vh]"
      : "min-h-[52vh]";

  const scrimClass =
    align === "right"
      ? "bg-gradient-to-l from-prevayl-navy/95 via-prevayl-navy/70 to-transparent"
      : align === "center"
      ? "bg-prevayl-navy/70"
      : "bg-gradient-to-r from-prevayl-navy/95 via-prevayl-navy/70 to-transparent";

  const justify =
    align === "right" ? "justify-end" : align === "center" ? "justify-center" : "justify-start";

  return (
    <section className={`relative ${h} flex items-center overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      {scrim && <div className={`absolute inset-0 ${scrimClass}`} aria-hidden />}
      {/* Feathered edges so bands butt together without a hard seam. */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-prevayl-navy to-transparent"
        aria-hidden
      />
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 flex ${justify}`}>
        <div className="max-w-2xl">{children}</div>
      </div>
    </section>
  );
}
