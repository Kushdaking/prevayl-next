import type {Metadata} from "next";
import {MarketingPage} from "@/components/shared/MarketingPage";
import {solutionsDealers} from "@/content/pages/solutions/dealers";
export const metadata:Metadata={title:solutionsDealers.title,description:solutionsDealers.description};
export default function Page(){return <MarketingPage page={solutionsDealers}/>}
