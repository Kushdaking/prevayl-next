import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { solutionsOverview } from "@/content/pages/solutions";

export const metadata: Metadata = {
  title: solutionsOverview.title,
  description: solutionsOverview.description,
};

const ROLE_LINKS = [
  { href: "/solutions/brokers", label: "Brokers" },
  { href: "/solutions/carriers", label: "Carriers" },
  { href: "/solutions/dealers", label: "Dealers" },
  { href: "/solutions/wholesale", label: "Auctions / Wholesale" },
];

export default function Page() {
  return (
    <>
      <MarketingPage page={solutionsOverview} />
      <div className="max-w-7xl mx-auto px-6 pb-16 -mt-8">
        <div className="flex flex-wrap gap-3">
          {ROLE_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="glass px-4 py-2 rounded-lg text-sm text-prevayl-gold hover:border-prevayl-gold/40 border border-transparent transition-colors"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
