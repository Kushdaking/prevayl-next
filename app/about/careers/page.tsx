import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { aboutCareers } from "@/content/pages/about";

export const metadata: Metadata = {
  title: aboutCareers.title,
  description: aboutCareers.description,
};

export default function Page() {
  return <MarketingPage page={aboutCareers} />;
}
