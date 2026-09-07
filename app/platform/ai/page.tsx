import type {Metadata} from "next";
import {MarketingPage} from "@/components/shared/MarketingPage";
import {ai} from "@/content/pages/platform/ai";
export const metadata:Metadata={title:ai.title,description:ai.description};
export default function Page(){return <MarketingPage page={ai}/>}
