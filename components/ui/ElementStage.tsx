import type { ReactNode } from "react";
import { Element, type ElementProps } from "./Element";

type StageProps = {
  bandImage?: string;
  bandOpacity?: number;
  elements?: ElementProps[];
  children: ReactNode;
  className?: string;
  height?: "hero" | "tall" | "mid";
};

const heightMap = {
  hero: "min-h-[88vh] pt-28 pb-16",
  tall: "min-h-[70vh] pt-28 pb-14",
  mid: "min-h-[52vh] pt-24 pb-12",
};

/** Three-layer stage: Band atmosphere + Element objects + HTML children. */
export function ElementStage({
  bandImage,
  bandOpacity = 0.4,
  elements = [],
  children,
  className = "",
  height = "hero",
}: StageProps) {
  return (
    <section className={`relative overflow-hidden flex flex-col justify-center ${heightMap[height]} ${className}`}>
      {bandImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url(${bandImage})`, opacity: bandOpacity }}
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-prevayl-navy/95 via-prevayl-navy/80 to-prevayl-navy/55"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-prevayl-navy to-transparent"
            aria-hidden
          />
        </>
      )}
      {elements.map((el, i) => (
        <Element key={`${el.art}-${i}`} {...el} />
      ))}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
