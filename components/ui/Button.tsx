import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "gold" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  gold: "bg-gradient-to-br from-prevayl-gold to-prevayl-gold-dark text-prevayl-navy font-semibold shadow-gold hover:shadow-[0_0_32px_rgba(201,168,76,0.45)] hover:-translate-y-px",
  ghost:
    "border border-prevayl-gold/35 text-prevayl-gold hover:bg-prevayl-gold/10 hover:border-prevayl-gold",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3.5 text-base rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  size?: Size;
};

type ButtonProps = Common & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = Common & { href: string };

export function Button({
  children,
  variant = "gold",
  className = "",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  href,
  variant = "gold",
  className = "",
  size = "md",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
