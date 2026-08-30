import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { pinProtocol } from "@/content/pages/platform";

export const metadata: Metadata = {
  title: pinProtocol.title,
  description: pinProtocol.description,
};

export default function Page() {
  return <MarketingPage page={pinProtocol} />;
}
