import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { routeOptimizer } from "@/content/pages/platform";

export const metadata: Metadata = {
  title: routeOptimizer.title,
  description: routeOptimizer.description,
};

export default function Page() {
  return <MarketingPage page={routeOptimizer} />;
}
