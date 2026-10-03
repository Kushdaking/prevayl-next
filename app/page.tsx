import { CarrierAppLaunchStrip } from "@/components/redesign/CarrierAppLaunchStrip";
import { Hero } from "@/components/home/Hero";
import { HomeBelow } from "@/components/redesign/HomeBelow";

export default function HomePage() {
  return <main><CarrierAppLaunchStrip/><Hero/><HomeBelow/></main>;
}

export const metadata = { alternates: { canonical: "https://prevaylos.com/" } };
