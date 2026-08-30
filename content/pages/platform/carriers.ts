import type { MarketingPageContent } from "../types";

export const carriers: MarketingPageContent = {
  slug: "platform/carriers",
  bandImage: "/brand/bands/platform-carriers.jpg",
  title: "Free for carriers. Built to be used.",
  eyebrow: "Platform · Carriers",
  lead: "Driver app, eBOL, photos, and payouts — free forever for carriers who run with Prevayl brokers.",
  description: "Carrier tools free forever: live loads, eBOL, offline photos, Stripe payouts.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "See carrier app", href: "/solutions/carriers" },
  sections: [
    {
      heading: "What carriers get without a seat tax",
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
    title: "Give carriers tools they will actually open.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Contact", href: "/contact" },
  },
};
