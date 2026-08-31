import type { Metadata } from "next";
import { MarketingPage } from "@/components/shared/MarketingPage";
import { dispatch } from "@/content/pages/platform";
import { PageShot } from "@/components/ui/PageShot";

export const metadata: Metadata = {
  title: dispatch.title,
  description: dispatch.description,
};

export default function Page() {
  return (
    <>
      <MarketingPage page={dispatch} />
      <PageShot slug="platform/dispatch" />
    </>
  );
}
