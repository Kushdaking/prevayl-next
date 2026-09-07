import type {Metadata} from "next";
import {MarketingPage} from "@/components/shared/MarketingPage";
import {solutionsBrokers} from "@/content/pages/solutions/brokers";
export const metadata:Metadata={title:solutionsBrokers.title,description:solutionsBrokers.description};
export default function Page(){return <MarketingPage page={solutionsBrokers}/>}
