import type { MarketingPageContent } from "../types";

/** Live copy from https://prevaylos.com/solutions/carriers */
export const solutionsCarriers: MarketingPageContent = {
  slug: "solutions/carriers",
  bandImage: "/brand/bands/solutions-carriers.jpg",
  eyebrow: "Solutions · For Carriers",
  title: "Always free for carriers.",
  goldTitle: true,
  lead: "Free forever. Driver app, BOL, IFTA, payouts. Always-free tools for owner-operators and small fleets. Zero subscription.",
  description: "Prevayl free carrier tools: driver app, eBOL, IFTA, Stripe payouts in 1-2 days.",
  primaryCta: { label: "Get the Free Driver App", href: "/register" },
  secondaryCta: { label: "For Brokers", href: "/solutions/brokers" },
  heroImage: "/brand/pages/solutions-carriers.jpg",
  heroImageAlt: "Prevayl for Carriers — free driver app, eBOL, Stripe payouts",
  sections: [
    {
      bullets: [
        "Always free — no subscription, no per-load fee for carriers",
        "iOS + Android driver app with offline support",
        "eBOL, photo inspections, signature capture",
        "IFTA-friendly trip records",
        "Stripe Connect payouts in 1–2 days after delivery",
      ],
    },
    {
      heading: "Driver app",
      body: "Built for the cab, not a desktop. Live loads, status updates, required photos, and eBOL without calling the desk for every step.",
      features: [
        { title: "Live loads", body: "See assigned loads, addresses, and notes without calling dispatch." },
        { title: "Photos + eBOL", body: "Required-photo enforcement and digital signature at pickup and delivery." },
        { title: "Offline capable", body: "Capture evidence when signal is bad; sync when you're back online." },
        { title: "Payouts", body: "Stripe Connect. 1–2 day settlements after delivery confirmation." },
      ],
      cols: 2,
    },
    {
      heading: "Why free forever",
      paragraphs: [
        "We make money from brokers and dealers who run the platform — not from the people moving freight.",
      ],
    },
  ],
  finalCta: {
    title: "Get the free driver app.",
    primary: { label: "Start Free", href: "/register" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
