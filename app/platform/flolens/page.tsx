import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { flolens } from "@/content/pages/platform";

export const metadata: Metadata = {
  title: flolens.title,
  description: flolens.description,
};

export default function Page() {
  return <MarketingPage page={flolens} />;
}
