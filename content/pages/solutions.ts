import type { MarketingPageContent } from "./types";

/** Live copy from prevaylos.com/solutions */
export const solutionsOverview: MarketingPageContent = {
  slug: "solutions",
  bandImage: "/brand/bands/solutions-index.jpg",
  eyebrow: "Solutions",
  title: "BUILT FOR EVERYONE IN THE LANE.",
  goldTitle: true,
  lead: "Auto transport has four roles, four sets of pain points, and one shared workflow. Prevayl serves all of them on one platform — without forcing anyone to compromise.",
  description: "Solutions for brokers, carriers, dealers, and wholesale auctions.",
  primaryCta: { label: "Get Started Free", href: "/register" },
  secondaryCta: { label: "Book a 30-min Demo", href: "/contact" },
  sections: [
    {
      features: [
        { n: "01", title: "For Brokers", body: "Replace your load board, QuickBooks, and spreadsheets with one platform. AI carrier matching, per-VIN pricing, no per-seat tax. TMS · billing · compliance · AI" },
        { n: "02", title: "For Carriers", body: "Always-free tools for owner-operators and small fleets. Driver app, BOL, IFTA, 1-2 day Stripe payouts. Zero subscription. $0/mo · iOS + Android · payouts in days" },
        { n: "03", title: "For Dealers", body: "White-label customer portal. Track every VIN you order. Stop the phone tag. Self-serve booking and dispatch. Branded portal · real-time VIN tracking" },
        { n: "04", title: "Wholesale Auctions", body: "From auction lot to buyer location in one workflow. Direct integrations with Manheim, Adesa, OVE. Eliminate the handoff lag. Manheim · Adesa · OVE integrations" },
      ],
      cols: 2,
    },
    {
      heading: "ONE PLATFORM. EVERY ROLE. ZERO HANDOFF FRICTION.",
      paragraphs: [
        "When a broker dispatches a load, the carrier sees it instantly in the driver app. When the dealer checks their portal, they see the same data. No webhooks. No CSVs. No waiting.",
      ],
    },
  ],
  finalCta: {
    title: "Get started free.",
    primary: { label: "Get Started Free", href: "/register" },
    secondary: { label: "Book a 30-min Demo", href: "/contact" },
  },
};
