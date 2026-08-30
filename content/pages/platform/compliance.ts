import type { MarketingPageContent } from "../types";

/** Live copy from prevaylos.com/platform/compliance */
export const compliance: MarketingPageContent = {
  slug: "platform/compliance",
  bandImage: "/brand/bands/platform-compliance.jpg",
  eyebrow: "Platform · Compliance",
  title: "The compliance burden, lifted.",
  lead: "DOT and FMCSA documentation, eBOL generation, insurance tracking, and audit-ready records — built into the same platform that runs your loads.",
  description: "Compliance for auto transport: DOT, FMCSA, eBOL, insurance tracking, audit-ready records.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Book a Demo", href: "/contact" },
  sections: [
    {
      heading: "What runs before the truck moves",
      features: [
        { title: "eBOL", body: "Generated, e-signed, archived to the order — searchable later when a claim lands." },
        { title: "Insurance", body: "Current coverage checked at assignment, not once a year in a folder." },
        { title: "Audit trail", body: "Who changed what, when — insert-only logs for privileged actions." },
        { title: "Dealer-facing proof", body: "Status and documents that customers can see without email archaeology." },
      ],
      cols: 2,
    },
  ],
  finalCta: {
    title: "Run compliance where the work already happens.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Contact", href: "/contact" },
  },
};
