import type { MarketingPageContent } from "./types";

/** Live copy from https://prevaylos.com/solutions */
export const solutionsOverview: MarketingPageContent = {
  slug: "solutions",
  eyebrow: "Solutions",
  title: "Built for every role in the lane.",
  lead: "Auto transport has four roles, four sets of pain points, and one shared workflow. Prevayl serves all of them on one platform — without forcing anyone to compromise.",
  description: "One platform serving every role in auto transport: brokers, carriers, dealers, and wholesale auctions.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  sections: [
    {
      features: [
        { n: "01", title: "Brokers", body: "Replace your load board, QuickBooks, and spreadsheets with one platform. AI carrier matching, per-VIN pricing, no per-seat tax." },
        { n: "02", title: "Carriers", body: "Always-free tools for owner-operators and small fleets. Driver app, BOL, IFTA, 1–2 day Stripe payouts. Zero subscription." },
        { n: "03", title: "Dealers", body: "White-label customer portal. Track every VIN you order. Stop the phone tag. Self-serve booking and dispatch." },
        { n: "04", title: "Auctions / Wholesale", body: "From auction lot to buyer location in one workflow. Direct integrations with Manheim, ADESA, OVE. Eliminate the handoff lag." },
      ],
      cols: 2,
    },
    {
      heading: "One shared workflow",
      body: "When a broker dispatches a load, the carrier sees it instantly in the driver app. When the dealer checks their portal, they see the same data. No webhooks. No CSVs. No waiting.",
    },
  ],
  finalCta: {
    title: "Pick your role. Start free.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "For brokers", href: "/solutions/brokers" },
  },
};
