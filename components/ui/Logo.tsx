import Link from "next/link";
import Image from "next/image";

/**
 * The real Prevayl mark.
 *
 * The previous version was a hand-drawn SVG approximation — a circle, a stem
 * and scattered dots — not the actual logo. The genuine files live in the
 * platform repo and are copied into public/brand here:
 *
 *   logo-gold.png    gold mark, for dark backgrounds (default)
 *   logo-white.png   white mark, for dark backgrounds
 *   logo-onlight.png for light backgrounds
 *
 * Native size is 678x395, aspect 1.716. Height is the control; width is
 * derived so the mark can never be squashed.
 */
type LogoProps = {
  className?: string;
  /** rendered height in px; width follows the real aspect ratio */
  height?: number;
  variant?: "gold" | "white" | "onlight";
  priority?: boolean;
};

const SRC = {
  gold: "/brand/logo-gold.png",
  white: "/brand/logo-white.png",
  onlight: "/brand/logo-onlight.png",
} as const;

const ASPECT = 678 / 395;

export function Logo({
  className = "",
  height = 34,
  variant = "gold",
  priority = false,
}: LogoProps) {
  const width = Math.round(height * ASPECT);
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Prevayl — home">
      <Image
        src={SRC[variant]}
        alt="Prevayl"
        width={width}
        height={height}
        priority={priority}
        className="w-auto"
        style={{ height }}
      />
    </Link>
  );
}

export default Logo;
