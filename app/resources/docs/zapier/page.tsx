import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { docPages } from "@/content/pages/resources";

const page = docPages["zapier"];
export const metadata: Metadata = { title: page.title, description: page.description };
export default function Page() { return <DocPage page={page} />; }
