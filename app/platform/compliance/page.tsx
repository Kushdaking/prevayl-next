import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { compliance } from "@/content/pages/platform";

export const metadata: Metadata = {
  title: compliance.title,
  description: compliance.description,
};

export default function Page() {
  return <MarketingPage page={compliance} />;
}
