import type { ReactNode } from "react";

type Align = "left" | "center" | "right";
type Height = "sm" | "md" | "lg" | "auto";

type BandProps = {
  children: ReactNode;
  image?: string;
  align?: Align;
  height?: Height;
  className?: string;
  alt?: boolean;
};

const heightMap: Record<Height, string> = {
  sm: "py-12",
  md: "py-20",
  lg: "py-28",
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
  align = "left",
  height = "md",
  className = "",
  alt = false,
}: BandProps) {
  return (
    <section
      className={`relative overflow-hidden ${heightMap[height]} ${
        alt ? "bg-prevayl-navy-2/50" : ""
      } ${className}`}
    >
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-prevayl-navy/80 via-prevayl-navy/90 to-prevayl-navy" />
        </>
      )}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 ${alignMap[align]}`}>
        {children}
      </div>
    </section>
  );
}
