import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { aboutLeadership } from "@/content/pages/about";

export const metadata: Metadata = {
  title: aboutLeadership.title,
  description: aboutLeadership.description,
};

export default function Page() {
  return <MarketingPage page={aboutLeadership} />;
}
