import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { businessIntelligence } from "@/content/pages/platform";

export const metadata: Metadata = {
  title: businessIntelligence.title,
  description: businessIntelligence.description,
};

export default function Page() {
  return <MarketingPage page={businessIntelligence} />;
}
