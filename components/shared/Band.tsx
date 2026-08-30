import type { ReactNode } from "react";

type Align = "left" | "center" | "right";
type Height = "sm" | "md" | "lg" | "xl" | "hero" | "auto";

type BandProps = {
  children: ReactNode;
  image?: string;
  imageOpacity?: number;
  align?: Align;
  height?: Height;
  className?: string;
  alt?: boolean;
};

const heightMap: Record<Height, string> = {
  sm: "py-12",
  md: "py-20",
  lg: "py-28",
  xl: "py-32 min-h-[70vh]",
  hero: "pt-28 pb-20 min-h-[85vh] flex flex-col justify-center",
  auto: "py-16",
};

const alignMap: Record<Align, string> = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto",
};

export function Band({
  children,
  image,
  imageOpacity = 0.35,
  align = "left",
  height = "md",
  className = "",
  alt = false,
}: BandProps) {
  return (
    <section
      className={`relative overflow-hidden ${heightMap[height]} ${
        !image && alt ? "bg-prevayl-navy-2/50" : ""
      } ${className}`}
    >
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url(${image})`, opacity: imageOpacity }}
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-prevayl-navy/75 via-prevayl-navy/85 to-prevayl-navy"
            aria-hidden
          />
          <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-60" aria-hidden />
        </>
      )}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 w-full ${alignMap[align]}`}>{children}</div>
    </section>
  );
}
