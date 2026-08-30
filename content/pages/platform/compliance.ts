import type { MarketingPageContent } from "../types";

export const compliance: MarketingPageContent = {
  slug: "platform/compliance",
  eyebrow: "Platform · Compliance",
  title: "Compliance that runs with dispatch — not after it.",
  lead: "DOT, FMCSA, BOC-3, insurance, and BOL audit trail live next to every assignment. Vet once, monitor continuously, block at the point of dispatch when something is wrong.",
  description: "Carrier vetting, insurance monitoring, BOC-3, FMCSA checks, full audit log.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  sections: [
    {
      heading: "Vet at assignment, not in a side spreadsheet.",
      body: "When a dispatcher assigns a carrier, Prevayl checks MC, DOT, insurance status, and BOC-3. Expired coverage or revoked authority flags immediately — before the rate confirmation goes out.",
      bullets: [
        "MC / DOT authority status at assign time",
        "Insurance expiration monitoring with alerts",
        "BOC-3 process agent tracking",
        "Full audit log of every compliance check",
      ],
    },
    {
      heading: "Built for broker compliance reality",
      features: [
        { title: "Continuous monitoring", body: "Not a one-time upload. Carriers are re-checked so expired coverage doesn't slip into an active load." },
        { title: "Dispatch-time blocks", body: "Configure warn vs hard-block thresholds so your team stays inside your own compliance policy." },
        { title: "Exportable audit trail", body: "BOL, photos, timestamps, and compliance checks exportable when you need them for a claim or review." },
      ],
    },
  ],
  finalCta: {
    title: "Keep compliance inside the workflow.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Read the docs", href: "/resources/docs/compliance" },
  },
};
