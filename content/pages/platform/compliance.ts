import type { MarketingPageContent } from "../types";

export const compliance: MarketingPageContent = {
  slug: "platform/compliance",
  bandImage: "/brand/bands/platform-compliance.jpg",
  title: "The compliance burden, lifted.",
  eyebrow: "Platform · Compliance",
  lead: "Vetting at assignment, eBOL on the order, insurance that is current — not a folder from last year.",
  description: "Compliance at assignment: insurance, eBOL, audit trail, dealer-facing proof.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Talk to sales", href: "/contact" },
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
