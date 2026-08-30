import Image from "next/image";

export type ElementProps = {
  /** Public path e.g. /brand/elements/pin-gold.png */
  art: string;
  /** Horizontal position as % of stage (0–100) */
  x: string | number;
  /** Vertical position as % of stage (0–100) */
  y: string | number;
  /** Display width in px */
  artW?: number;
  opacity?: number;
  /** Hide below this Tailwind breakpoint */
  hideBelow?: "sm" | "md" | "lg";
  alt?: string;
  className?: string;
};

/**
 * Positioned decorative object — no text, no baked copy.
 * Edit placement with x / y / artW / opacity only.
 */
export function Element({
  art,
  x,
  y,
  artW = 120,
  opacity = 0.95,
  hideBelow,
  alt = "",
  className = "",
}: ElementProps) {
  const left = typeof x === "number" ? `${x}%` : x.includes("%") ? x : `${x}%`;
  const top = typeof y === "number" ? `${y}%` : y.includes("%") ? y : `${y}%`;
  const hide =
    hideBelow === "sm"
      ? "hidden sm:block"
      : hideBelow === "md"
      ? "hidden md:block"
      : hideBelow === "lg"
      ? "hidden lg:block"
      : "";

  return (
    <div
      className={`pointer-events-none absolute z-[5] -translate-x-1/2 -translate-y-1/2 ${hide} ${className}`}
      style={{ left, top, width: artW, opacity }}
      aria-hidden={alt ? undefined : true}
    >
      <Image
        src={art}
        alt={alt}
        width={artW * 2}
        height={artW * 2}
        className="w-full h-auto object-contain drop-shadow-[0_0_24px_rgba(201,168,76,0.25)]"
        unoptimized
      />
    </div>
  );
}
