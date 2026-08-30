import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { aboutOverview } from "@/content/pages/about";

export const metadata: Metadata = {
  title: aboutOverview.title,
  description: aboutOverview.description,
};

export default function Page() {
  return <MarketingPage page={aboutOverview} />;
}
