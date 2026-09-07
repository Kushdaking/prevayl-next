import type {Metadata} from "next";
import Link from "next/link";
import {PageHero} from "@/components/shared/PageHero";
export const metadata:Metadata={title:"Notes from the lane",description:"Product and operating notes from Prevayl."};
export default function Page(){return <main className="pvl-redesign"><PageHero eyebrow="Resources / Blog" title="Notes from the lane." lead="Operations, technology and the daily work of moving vehicles."/><section className="pvl-wrap"><div className="pvl-empty"><p className="pvl-eyebrow">From the team</p><h2>More to come.</h2><p style={{margin:"20px 0"}}>Our first articles are on the way. In the meantime, explore the platform guides.</p><Link href="/resources/docs" className="pvl-button secondary">Read the documentation →</Link></div></section></main>}
