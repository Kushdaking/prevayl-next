import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { resourcesOverview } from "@/content/pages/resources";

export const metadata: Metadata = {
  title: resourcesOverview.title,
  description: resourcesOverview.description,
};

export default function Page() {
  return <MarketingPage page={resourcesOverview} />;
}
