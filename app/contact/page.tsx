import {SectionVisual} from "@/components/redesign/SectionVisual";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/redesign/ContactForm";
import { Eyebrow } from "@/components/redesign/Shared";
export const metadata:Metadata={title:"Contact — Put your operation first",description:"Book a Prevayl demo or discuss your volume and workflows."};
export default function Page(){return <main className="pvl-redesign"><PageHero eyebrow="Contact" title="Bring the lane that gives you trouble." lead="Show us the work. We’ll walk through how Prevayl fits your customers, carriers and daily operation."/><div className="pvl-wrap pvl-contact-grid"><div><Eyebrow>Your operation, on the screen</Eyebrow><h2>A useful conversation starts with real work.</h2><ol className="pvl-vertical-steps"><li><span>1</span>Tell us your role, lanes and monthly volume.</li><li><span>2</span>Walk through the workflows your team relies on.</li><li><span>3</span>Discuss plans, integrations and the next steps.</li></ol><p>Already using Prevayl? Choose Support in the form so your request has the right context.</p></div><ContactForm/></div><section className="pvl-wrap pvl-section"><SectionVisual kind="onboarding" title="Your operation → walkthrough → next steps"/></section></main>}

