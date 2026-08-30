/**
 * bandImage = full-bleed Band art under /brand/bands/
 * heroImage / pages = product mockups under /brand/pages/
 */
export const bandMedia = {
  "platform": "/brand/bands/platform-index.jpg",
  "platform/dispatch": "/brand/bands/platform-dispatch.jpg",
  "platform/ai": "/brand/bands/platform-ai.jpg",
  "platform/agentic-ai": "/brand/bands/platform-agentic-ai.jpg",
  "platform/agents": "/brand/bands/platform-agents.jpg",
  "platform/carriers": "/brand/bands/platform-carriers.jpg",
  "platform/compliance": "/brand/bands/platform-compliance.jpg",
  "platform/business-intelligence": "/brand/bands/platform-business-intelligence.jpg",
  "platform/load-optimizer": "/brand/bands/platform-load-optimizer.jpg",
  "platform/route-optimizer": "/brand/bands/platform-route-optimizer.jpg",
  "platform/flolens": "/brand/bands/platform-flolens.jpg",
  "platform/pin-protocol": "/brand/bands/platform-pin-protocol.jpg",
} as const;

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
