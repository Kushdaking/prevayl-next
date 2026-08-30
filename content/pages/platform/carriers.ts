import type { MarketingPageContent } from "../types";

export const carriers: MarketingPageContent = {
  slug: "platform/carriers",
  eyebrow: "Platform · Carriers",
  title: "Always free for carriers.",
  lead: "Owner-operators and small fleets pay nothing. Driver app, BOL, IFTA, Stripe payouts in 1–2 days. Free forever.",
  description: "Free carrier tools: driver app, eBOL, IFTA, Stripe payouts.",
  primaryCta: { label: "Get the Free Driver App", href: "/register" },
  sections: [
    {
      heading: "Why free for carriers?",
      body: "The brokers and dealers who profit from the lane are the ones who pay for the tooling. Not the truckers. Better carrier relationships mean better loads, fewer no-shows, and faster payouts.",
      features: [
        { title: "Driver app", body: "iOS + Android. Live loads, eBOL, photo capture, offline mode." },
        { title: "Fast payouts", body: "Stripe Connect. 1–2 day settlements after delivery — not mailed paper checks." },
        { title: "IFTA + compliance", body: "Hours-of-service support, IFTA tools, BOL audit trail — free forever." },
      ],
    },
    {
      heading: "What carriers get",
      bullets: [
        "Accept and decline loads from your phone",
        "Photo inspections required at pickup and delivery",
        "Digital BOL with signature capture",
        "Real-time status updates back to the broker",
        "Stripe Connect KYC once — payouts after that are automatic",
        "No subscription, no per-load fee, no hidden cut",
      ],
    },
  ],
  finalCta: {
    title: "Free for carriers. Always.",
    primary: { label: "Get the Free App", href: "/register" },
    secondary: { label: "I'm a broker", href: "/solutions/brokers" },
  },
};
