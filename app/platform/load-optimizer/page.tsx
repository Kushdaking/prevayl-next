import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { loadOptimizer } from "@/content/pages/platform";

export const metadata: Metadata = {
  title: loadOptimizer.title,
  description: loadOptimizer.description,
};

export default function Page() {
  return <MarketingPage page={loadOptimizer} />;
}
