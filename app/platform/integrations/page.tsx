import {IntegrationOverview} from "@/components/redesign/IntegrationExperience";
import {PageHero} from "@/components/shared/PageHero";
import {CTA} from "@/components/redesign/Shared";
export const metadata={title:"Auto Transport Integrations — Central Dispatch, API & VTIMS EDI",description:"Connect Prevayl with Central Dispatch, your business systems through our full API suite, and VTIMS through in-house EDI.",alternates:{canonical:"https://prevaylos.com/platform/integrations/"}};
export default function Page(){return <main className="pvl-redesign"><PageHero eyebrow="Integrations" title="One platform. Connected to your world." lead="Connect marketplace activity, business systems and trading-partner exchange to the same vehicle logistics operation."/><IntegrationOverview/><CTA title="Let’s map your connections." primary={{href:"/contact?type=sales",label:"Contact Sales"}}/></main>}
