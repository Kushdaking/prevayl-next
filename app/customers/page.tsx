import type {Metadata} from "next";
import {CustomerExperience} from "@/components/redesign/CustomerExperience";
import "./customers.css";
export const metadata:Metadata={title:"Customers — Built around your operation",description:"Explore Prevayl workflows for trucking companies, brokers, dealerships and wholesale teams. See the platform and plan a demo around your operation.",alternates:{canonical:"https://prevaylos.com/customers/"}};
export default function Page(){return <main className="pvl-redesign cx-page"><CustomerExperience/></main>}
