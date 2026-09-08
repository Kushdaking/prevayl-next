import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/redesign/ContactForm";
export const metadata: Metadata = {
  title: "Contact Sales",
  description: "Discuss your team, vehicle volume and workflows with Prevayl Sales. Contact us for pricing and account terms.",
  alternates: { canonical: "https://prevaylos.com/pricing/" },
};
export default function Page() {
  return <main className="pvl-redesign">
    <PageHero eyebrow="Contact Sales" title="Built around your operation."
      lead="Tell us how your team moves vehicles. We’ll walk through the platform, your requirements and a proposal."
      primaryCta={{href:"#sales",label:"Contact Sales"}}
      secondaryCta={{href:"/platform",label:"Explore the platform"}} />
    <section className="pvl-wrap pvl-contact-grid" id="sales">
      <div><p className="pvl-eyebrow">Let’s talk through the fit</p>
        <h2>Your team. Your lanes. Your requirements.</h2>
        <p>Bring your monthly vehicle volume, team roles, existing systems and the workflows you want to improve.</p>
        <p>Our sales team will discuss the available setup, integrations, onboarding and account terms with you.</p>
        <p className="pvl-form-note">Contact Sales for pricing.</p>
      </div>
      <ContactForm defaultSubject="Pricing inquiry"/>
    </section>
  </main>;
}

