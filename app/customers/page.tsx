import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { customers } from "@/content/pages/customers";

export const metadata: Metadata = {
  title: customers.title,
  description: customers.description,
};

export default function Page() {
  return <MarketingPage page={customers} />;
}
