import type { MarketingPageContent } from "../types";

export const businessIntelligence: MarketingPageContent = {
  slug: "platform/business-intelligence",
  eyebrow: "Platform · Business Intelligence",
  title: "Business intelligence for the lane — not a generic dashboard.",
  lead: "Lane profitability, carrier scorecards, utilization, and AR aging built from the same VIN-level data that runs dispatch and accounting. One source of truth.",
  description: "BI for auto transport: lane P&L, carrier scorecards, utilization.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  sections: [
    {
      heading: "What you can see",
      features: [
        { title: "Lane profitability", body: "Revenue and margin per lane, not just per load. Spot which corridors pay for the platform." },
        { title: "Carrier scorecards", body: "On-time rate, claim history, and lane-level performance for your network." },
        { title: "Utilization", body: "How full your loads run — tied to Load Optimizer and real VIN classes." },
        { title: "AR / AP aging", body: "Accounting metrics that match the same orders your dispatchers see." },
      ],
      cols: 2,
    },
    {
      body: "Reports sit on operational data. No second warehouse of made-up KPIs. Export when you need it for your bookkeeper or ownership meeting.",
    },
  ],
  finalCta: {
    title: "Run the numbers on your volume.",
    primary: { label: "Book a demo", href: "/contact" },
    secondary: { label: "Start Free Trial", href: "/register" },
  },
};
