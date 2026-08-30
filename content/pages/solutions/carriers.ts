import type { MarketingPageContent } from "../types";

/** Live copy from https://prevaylos.com/solutions/carriers — preserved. */
export const solutionsCarriers: MarketingPageContent = {
  slug: "solutions/carriers",
  eyebrow: "Solutions \u00b7 For Carriers",
  title: "Free tools. Real payouts. Built for the truck.",
  goldTitle: true,
  lead: "Always-free tools for owner-operators and small fleets. Driver app, BOL, IFTA, 1-2 day Stripe payouts. Zero subscription.",
  description: "Prevayl free carrier tools: driver app, eBOL, IFTA, Stripe payouts in 1-2 days.",
  primaryCta: { label: "Get Free Driver App", href: "/register" },
  secondaryCta: { label: "For Brokers", href: "/solutions/brokers" },
  sections: [
    {
      bullets: [
        "Always free \u2014 no subscription, no per-load fee for carriers",
        "iOS + Android driver app with offline support",
        "eBOL, photo inspections, signature capture",
        "IFTA-friendly trip records",
        "Stripe Connect payouts in 1\u20132 days after delivery",
      ],
    },
    {
      heading: "Driver app",
      body: "Built for the cab, not a desktop. Live loads, status updates, required photos, and eBOL without calling the desk for every step.",
      features: [
        { title: "Live loads", body: "See assigned loads, addresses, and notes without calling dispatch." },
        { title: "Photos + eBOL", body: "Required-photo enforcement and digital signature at pickup and delivery." },
        { title: "Offline capable", body: "Capture evidence when signal is bad; sync when you're back online." },
        { title: "Payouts", body: "Stripe Connect. 1\u20132 day settlements after delivery confirmation." },
      ],
      cols: 2,
    },
    {
      heading: "Why free forever",
      paragraphs: [
        "We make money from brokers and dealers who run the platform \u2014 not from the people moving freight. If carriers have to pay to use the tools that make the lane work, the network shrinks and everyone loses.",
      ],
    },
  ],
  finalCta: {
    title: "Get the free driver app.",
    primary: { label: "Start Free", href: "/register" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
