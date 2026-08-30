import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { aboutCompany } from "@/content/pages/about";

export const metadata: Metadata = {
  title: aboutCompany.title,
  description: aboutCompany.description,
};

export default function Page() {
  return <MarketingPage page={aboutCompany} />;
}
