import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { resourcesSecurity } from "@/content/pages/resources";

export const metadata: Metadata = {
  title: resourcesSecurity.title,
  description: resourcesSecurity.description,
};

export default function Page() {
  return <MarketingPage page={resourcesSecurity} />;
}
