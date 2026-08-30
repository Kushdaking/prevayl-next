import type { Metadata } from "next";
import { SubPage } from "@/components/SubPage";
import { pages } from "@/content/pages";

const def = pages.find((p) => p.slug === "solutions/brokers")!;

export const metadata: Metadata = {
  title: `${def.title} ${def.titleGold ?? ""}`.trim(),
  description: def.lead,
};

export default function Page() {
  return <SubPage def={def} />;
}
