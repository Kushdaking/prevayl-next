/**
 * Page visual assignment — redesign mockups in public/brand/pages/
 * Source Imagine assets mapped to live routes.
 */
export const pageMedia = {
  "platform/ai": {
    src: "/brand/pages/platform-ai.jpg",
    alt: "Prevayl AI Platform — 17 workflows, pricing intelligence, carrier matching, operations automation",
  },
  "platform/dispatch": {
    src: "/brand/pages/platform-dispatch.jpg",
    alt: "Prevayl Dispatch — live load board, AI top-3 matching, eBOL and photo inspections",
  },
  "platform/agents": {
    src: "/brand/pages/platform-agents.jpg",
    alt: "Prevayl Meet the Agents — Margin Guard, Status Bot, Reengagement, Carrier Match, Pricer",
    compact: "/brand/pages/platform-agents-compact.jpg",
  },
  "solutions/brokers": {
    src: "/brand/pages/solutions-brokers.jpg",
    alt: "Prevayl for Brokers — operations console, AI matching, per-VIN pricing",
  },
  "solutions/carriers": {
    src: "/brand/pages/solutions-carriers.jpg",
    alt: "Prevayl for Carriers — free driver app, eBOL, Stripe payouts",
  },
  "solutions/dealers": {
    src: "/brand/pages/solutions-dealers.jpg",
    alt: "Prevayl for Dealers — white-label portal, real-time VIN tracking",
  },
} as const;

export type PageMediaKey = keyof typeof pageMedia;
