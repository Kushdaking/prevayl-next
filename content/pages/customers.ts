import type { MarketingPageContent } from "./types";

/** Customers — no fake logos or invented metrics. */
export const customers: MarketingPageContent = {
  slug: "customers",
  eyebrow: "Customers",
  title: "Built for brokers, carriers, dealers, and auctions running real freight.",
  lead: "We have a small team, a roadmap, and a direction. We're not going to inflate our numbers, and we're not going to put fake logos on a marketing page. What we show you is what the platform actually does.",
  description: "Prevayl customers — brokers, carriers, dealers, and wholesale operators.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Book a demo", href: "/contact" },
  sections: [
    {
      heading: "Who it's for",
      features: [
        { title: "Brokers", body: "Brokerages running real freight on Prevayl across dispatcher, carrier, dealer, and accounting consoles." },
        { title: "Carriers", body: "Owner-operators and fleets on the free driver app — BOL, photos, payouts." },
        { title: "Dealers", body: "White-label portals so dealers track VINs without phone tag." },
        { title: "Auctions / wholesale", body: "Auction lot to buyer location with Manheim, ADESA, OVE integrations." },
      ],
      cols: 2,
    },
    {
      heading: "How we prove it",
      paragraphs: [
        "Book a call and we'll show you the platform running on your own volume and lanes.",
        "Every feature starts with a real dispatcher, carrier, or dealer problem. We don't build toward a pitch deck.",
      ],
    },
  ],
  finalCta: {
    title: "See it on your volume.",
    primary: { label: "Book a demo", href: "/contact" },
    secondary: { label: "Start Free Trial", href: "/register" },
  },
};
