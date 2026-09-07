import type {Metadata} from "next";
import {MarketingPage} from "@/components/shared/MarketingPage";
import {solutionsCarriers} from "@/content/pages/solutions/carriers";
export const metadata:Metadata={title:solutionsCarriers.title,description:solutionsCarriers.description};
export default function Page(){return <MarketingPage page={solutionsCarriers}/>}
