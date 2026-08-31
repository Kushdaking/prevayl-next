import type { ElementProps } from "@/components/ui/Element";

export type PageLayout = {
  band: string;
  elements: ElementProps[];
};

export const E = {
  pinGold: "/brand/elements/pin-gold.png",
  brainGold: "/brand/elements/brain-gold.png",
  brainBlue: "/brand/elements/brain-blue.png",
  nodesGold: "/brand/elements/node-cluster.png",
  shieldGold: "/brand/elements/shield-gold.png",
  routeGold: "/brand/elements/route-gold.png",
  cubeGold: "/brand/elements/cube-gold.png",
  lensGold: "/brand/elements/lens-gold.png",
  chainGold: "/brand/elements/chain-gold.png",
  truckGold: "/brand/elements/truck-gold.png",
  chartGold: "/brand/elements/chart-gold.png",
  glassPanel: "/brand/elements/glass-panel.png",
  carriersPhone: "/brand/elements/carriers-phone.png",
} as const;

export const layouts: Record<string, PageLayout> = {
  // ── Added: every remaining marketing route now carries a band + elements,
  // so the treatment is consistent site-wide rather than only on the pages
  // that had mockups. Art is drawn from the 25 bands and 21 elements already
  // generated; nothing new needed to be rendered.
  "platform/accounting": {
    band: "/art/works.webp",
    elements: [],
  },
  "platform/dealer-portal": {
    band: "/brand/bands/platform-ai.jpg",
    elements: [],
  },
  "about/company": {
    band: "/brand/bands/about.jpg",
    elements: [],
  },
  "about/leadership": {
    band: "/art/hero-3.webp",
    elements: [],
  },
  "about/careers": {
    band: "/art/hero-1.webp",
    elements: [],
  },

  platform: {
    band: "/brand/bands/platform-index.jpg",
    elements: [],
  },
  "platform/ai": {
    band: "/brand/bands/platform-ai.jpg",
    elements: [
      { art: E.pinGold, x: "18%", y: "62%", artW: 140, opacity: 0.95, hideBelow: "md" },
      { art: E.brainGold, x: "80%", y: "45%", artW: 260, opacity: 0.85, hideBelow: "md" },
      { art: E.nodesGold, x: "84%", y: "72%", artW: 120, opacity: 0.5, hideBelow: "lg" },
    ],
  },
  "platform/agents": {
    band: "/brand/bands/platform-agents.jpg",
    elements: [],
  },
  "platform/orders": {
    band: "/brand/bands/platform-orders.jpg",
    elements: [],
  },
  "platform/dispatch": {
    band: "/brand/bands/platform-dispatch.jpg",
    elements: [],
  },
  "platform/agentic-ai": {
    band: "/brand/bands/platform-agentic-ai.jpg",
    elements: [],
  },
  "platform/carriers": {
    band: "/brand/bands/platform-carriers.jpg",
    elements: [],
  },
  "platform/compliance": {
    band: "/brand/bands/platform-compliance.jpg",
    elements: [],
  },
  "platform/business-intelligence": {
    band: "/brand/bands/platform-business-intelligence.jpg",
    elements: [],
  },
  "platform/load-optimizer": {
    band: "/brand/bands/platform-load-optimizer.jpg",
    elements: [],
  },
  "platform/route-optimizer": {
    band: "/brand/bands/platform-route-optimizer.jpg",
    elements: [],
  },
  "platform/flolens": {
    band: "/brand/bands/platform-flolens.jpg",
    elements: [],
  },
  "platform/pin-protocol": {
    band: "/brand/bands/platform-pin-protocol.jpg",
    elements: [],
  },
  solutions: {
    band: "/brand/bands/solutions-index.jpg",
    elements: [],
  },
  "solutions/brokers": {
    band: "/brand/bands/solutions-brokers.jpg",
    elements: [],
  },
  "solutions/carriers": {
    band: "/brand/bands/solutions-carriers.jpg",
    elements: [],
  },
  "solutions/dealers": {
    band: "/brand/bands/solutions-dealers.jpg",
    elements: [],
  },
  "solutions/wholesale": {
    band: "/brand/bands/solutions-wholesale.jpg",
    elements: [],
  },
  about: {
    band: "/brand/bands/about.jpg",
    elements: [],
  },
  customers: {
    band: "/brand/bands/customers.jpg",
    elements: [],
  },
  pricing: {
    band: "/brand/bands/pricing.jpg",
    elements: [],
  },
  resources: {
    band: "/brand/bands/resources.jpg",
    elements: [],
  },
  "resources/blog": { band: "/brand/bands/resources-blog.jpg", elements: [] },
  "resources/security": {
    band: "/brand/bands/resources-security.jpg",
    elements: [],
  },
  contact: { band: "/brand/bands/contact.jpg", elements: [] },
};

export function layoutFor(slug: string): PageLayout | undefined {
  return layouts[slug];
}
