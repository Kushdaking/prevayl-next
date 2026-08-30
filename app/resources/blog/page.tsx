import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { resourcesBlog } from "@/content/pages/resources";

export const metadata: Metadata = {
  title: resourcesBlog.title,
  description: resourcesBlog.description,
};

export default function Page() {
  return <MarketingPage page={resourcesBlog} />;
}
