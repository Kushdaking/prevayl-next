import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { agenticAi } from "@/content/pages/platform";

export const metadata: Metadata = {
  title: agenticAi.title,
  description: agenticAi.description,
};

export default function Page() {
  return <MarketingPage page={agenticAi} />;
}
