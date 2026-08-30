import type { MarketingPageContent } from "../types";

/** Live copy from prevaylos.com/platform/carriers */
export const carriers: MarketingPageContent = {
  slug: "platform/carriers",
  bandImage: "/brand/bands/platform-carriers.jpg",
  eyebrow: "Platform · Carriers",
  title: "Free for carriers. Built to be used.",
  lead: "Owner-operators and small fleets pay nothing. Driver app, BOL, IFTA, payouts — all free. The brokers who profit from the lane are the ones who pay for the tooling. Not the truckers.",
  description: "Free carrier tools: driver app, BOL, IFTA, Stripe payouts. Always free for carriers.",
  primaryCta: { label: "Get the Free Driver App", href: "/register" },
  secondaryCta: { label: "For Brokers", href: "/solutions/brokers" },
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
  ],
  finalCta: {
    title: "Get the free driver app.",
    primary: { label: "Start Free", href: "/register" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
