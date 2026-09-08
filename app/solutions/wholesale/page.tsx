import {MarketingPage} from "@/components/shared/MarketingPage";
import {solutionsWholesale} from "@/content/pages/solutions/wholesale";
export const metadata={title:solutionsWholesale.title,description:"Coordinate auction-source vehicles, carrier assignments and shipment evidence."};
export default function Page(){return <MarketingPage page={{...solutionsWholesale,lead:"Keep auction-source vehicles, carrier assignments and shipment evidence connected from pickup to the receiving location. Import availability depends on your configured integrations."}}/>}
