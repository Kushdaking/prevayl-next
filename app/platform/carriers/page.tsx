import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { carriers } from "@/content/pages/platform";

export const metadata: Metadata = {
  title: carriers.title,
  description: carriers.description,
};

export default function Page() {
  return <MarketingPage page={carriers} />;
}
