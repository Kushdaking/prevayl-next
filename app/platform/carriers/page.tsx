import type {Metadata} from "next";
import {CarrierWorkflow} from "@/components/redesign/CarrierWorkflow";
import "./carrier-workflow.css";
export const metadata:Metadata={title:"Carrier TMS — From freight to driver settlement",description:"Explore Prevayl’s carrier workflow: OEM EDI, load building, driver assignment, ELD fleet visibility, delivery records and settlement review.",alternates:{canonical:"https://prevaylos.com/platform/carriers/"}};
export default function Page(){return <main className="pvl-redesign"><CarrierWorkflow/></main>}
