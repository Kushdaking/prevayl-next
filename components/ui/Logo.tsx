import Link from "next/link";
import { brand } from "@/content/site";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/** Gold pin mark + wordmark — edit brand.name in content/site.ts */
export function Logo({ className = "", showWordmark = true, size = 32 }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        className="flex-shrink-0"
        aria-hidden
      >
        <circle cx="20" cy="12" r="5" fill="#C9A84C" />
        <path d="M20 17 L20 28" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M12 22 Q16 26 20 28 Q24 26 28 22"
          stroke="#C9A84C"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
        <circle cx="10" cy="20" r="1.5" fill="#C9A84C" opacity="0.6" />
        <circle cx="30" cy="20" r="1.5" fill="#C9A84C" opacity="0.6" />
        <circle cx="14" cy="26" r="1.2" fill="#C9A84C" opacity="0.5" />
        <circle cx="26" cy="26" r="1.2" fill="#C9A84C" opacity="0.5" />
      </svg>
      {showWordmark && (
        <span className="font-display text-2xl tracking-wide text-white group-hover:text-prevayl-gold transition-colors">
          {brand.name}
        </span>
      )}
    </Link>
  );
}
