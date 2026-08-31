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
    elements: [
      { art: E.chartGold, x: "82%", y: "48%", artW: 260, opacity: 0.55, hideBelow: "lg" },
    ],
  },
  "platform/dealer-portal": {
    band: "/art/roles.webp",
    elements: [
      { art: E.glassPanel, x: "80%", y: "52%", artW: 300, opacity: 0.6, hideBelow: "lg" },
    ],
  },
  "about/company": {
    band: "/brand/bands/about.jpg",
    elements: [
      { art: E.chainGold, x: "78%", y: "72%", artW: 260, opacity: 0.35, hideBelow: "lg" },
    ],
  },
  "about/leadership": {
    band: "/art/hero-3.webp",
    elements: [
      { art: E.nodesGold, x: "83%", y: "45%", artW: 200, opacity: 0.4, hideBelow: "lg" },
    ],
  },
  "about/careers": {
    band: "/art/hero-1.webp",
    elements: [
      { art: E.routeGold, x: "80%", y: "55%", artW: 230, opacity: 0.4, hideBelow: "lg" },
    ],
  },

  platform: {
    band: "/brand/bands/platform-index.jpg",
    elements: [
      { art: E.nodesGold, x: "78%", y: "42%", artW: 160, opacity: 0.9, hideBelow: "md" },
      { art: E.glassPanel, x: "88%", y: "68%", artW: 100, opacity: 0.75, hideBelow: "lg" },
    ],
  },
  "platform/ai": {
    band: "/brand/bands/platform-ai.jpg",
    elements: [
      { art: E.pinGold, x: "18%", y: "62%", artW: 140, opacity: 0.95, hideBelow: "md" },
      { art: E.brainGold, x: "78%", y: "48%", artW: 220, opacity: 0.9, hideBelow: "md" },
      { art: E.nodesGold, x: "88%", y: "30%", artW: 90, opacity: 0.85, hideBelow: "lg" },
    ],
  },
  "platform/agents": {
    band: "/brand/bands/platform-agents.jpg",
    elements: [
      { art: E.cubeGold, x: "78%", y: "48%", artW: 340, opacity: 0.92, hideBelow: "md" },
      { art: E.nodesGold, x: "60%", y: "72%", artW: 100, opacity: 0.8, hideBelow: "lg" },
    ],
  },
  "platform/orders": {
    band: "/brand/bands/platform-orders.jpg",
    elements: [
      { art: E.routeGold, x: "78%", y: "50%", artW: 320, opacity: 0.95, hideBelow: "md" },
      { art: E.pinGold, x: "62%", y: "30%", artW: 90, opacity: 0.8, hideBelow: "lg" },
    ],
  },
  "platform/dispatch": {
    band: "/brand/bands/platform-dispatch.jpg",
    elements: [
      { art: E.routeGold, x: "80%", y: "45%", artW: 160, opacity: 0.9, hideBelow: "md" },
      { art: E.pinGold, x: "70%", y: "70%", artW: 90, opacity: 0.85, hideBelow: "lg" },
    ],
  },
  "platform/agentic-ai": {
    band: "/brand/bands/platform-agentic-ai.jpg",
    elements: [
      { art: E.nodesGold, x: "75%", y: "40%", artW: 150, opacity: 0.9, hideBelow: "md" },
      { art: E.brainGold, x: "88%", y: "62%", artW: 100, opacity: 0.8, hideBelow: "lg" },
    ],
  },
  "platform/carriers": {
    band: "/brand/bands/platform-carriers.jpg",
    elements: [
      { art: E.truckGold, x: "78%", y: "48%", artW: 150, opacity: 0.9, hideBelow: "md" },
      { art: E.routeGold, x: "88%", y: "70%", artW: 110, opacity: 0.75, hideBelow: "lg" },
    ],
  },
  "platform/compliance": {
    band: "/brand/bands/platform-compliance.jpg",
    elements: [{ art: E.shieldGold, x: "78%", y: "45%", artW: 150, opacity: 0.95, hideBelow: "md" }],
  },
  "platform/business-intelligence": {
    band: "/brand/bands/platform-business-intelligence.jpg",
    elements: [{ art: E.chartGold, x: "78%", y: "45%", artW: 150, opacity: 0.9, hideBelow: "md" }],
  },
  "platform/load-optimizer": {
    band: "/brand/bands/platform-load-optimizer.jpg",
    elements: [{ art: E.cubeGold, x: "78%", y: "48%", artW: 140, opacity: 0.9, hideBelow: "md" }],
  },
  "platform/route-optimizer": {
    band: "/brand/bands/platform-route-optimizer.jpg",
    elements: [{ art: E.routeGold, x: "78%", y: "45%", artW: 160, opacity: 0.9, hideBelow: "md" }],
  },
  "platform/flolens": {
    band: "/brand/bands/platform-flolens.jpg",
    elements: [{ art: E.lensGold, x: "78%", y: "45%", artW: 150, opacity: 0.9, hideBelow: "md" }],
  },
  "platform/pin-protocol": {
    band: "/brand/bands/platform-pin-protocol.jpg",
    elements: [{ art: E.chainGold, x: "78%", y: "45%", artW: 150, opacity: 0.9, hideBelow: "md" }],
  },
  solutions: {
    band: "/brand/bands/solutions-index.jpg",
    elements: [{ art: E.routeGold, x: "80%", y: "45%", artW: 150, opacity: 0.85, hideBelow: "md" }],
  },
  "solutions/brokers": {
    band: "/brand/bands/solutions-brokers.jpg",
    elements: [
      { art: E.chartGold, x: "78%", y: "52%", artW: 320, opacity: 0.95, hideBelow: "md" },
      { art: E.nodesGold, x: "68%", y: "30%", artW: 90, opacity: 0.8, hideBelow: "lg" },
    ],
  },
  "solutions/carriers": {
    band: "/brand/bands/solutions-carriers.jpg",
    elements: [
      { art: E.carriersPhone, x: "78%", y: "50%", artW: 220, opacity: 0.98, hideBelow: "md" },
      { art: E.truckGold, x: "62%", y: "72%", artW: 100, opacity: 0.75, hideBelow: "lg" },
    ],
  },
  "solutions/dealers": {
    band: "/brand/bands/solutions-dealers.jpg",
    elements: [
      { art: E.glassPanel, x: "78%", y: "50%", artW: 300, opacity: 0.95, hideBelow: "md" },
      { art: E.pinGold, x: "62%", y: "30%", artW: 90, opacity: 0.8, hideBelow: "lg" },
    ],
  },
  "solutions/wholesale": {
    band: "/brand/bands/solutions-wholesale.jpg",
    elements: [
      { art: E.routeGold, x: "80%", y: "45%", artW: 150, opacity: 0.9, hideBelow: "md" },
      { art: E.chainGold, x: "70%", y: "68%", artW: 100, opacity: 0.8, hideBelow: "lg" },
    ],
  },
  about: {
    band: "/brand/bands/about.jpg",
    elements: [{ art: E.nodesGold, x: "80%", y: "45%", artW: 130, opacity: 0.8, hideBelow: "md" }],
  },
  customers: {
    band: "/brand/bands/customers.jpg",
    elements: [{ art: E.nodesGold, x: "80%", y: "45%", artW: 130, opacity: 0.8, hideBelow: "md" }],
  },
  pricing: {
    band: "/brand/bands/pricing.jpg",
    elements: [{ art: E.chartGold, x: "80%", y: "45%", artW: 130, opacity: 0.85, hideBelow: "md" }],
  },
  resources: {
    band: "/brand/bands/resources.jpg",
    elements: [{ art: E.glassPanel, x: "80%", y: "45%", artW: 120, opacity: 0.8, hideBelow: "md" }],
  },
  "resources/blog": { band: "/brand/bands/resources-blog.jpg", elements: [] },
  "resources/security": {
    band: "/brand/bands/resources-security.jpg",
    elements: [{ art: E.shieldGold, x: "80%", y: "45%", artW: 140, opacity: 0.9, hideBelow: "md" }],
  },
  contact: { band: "/brand/bands/contact.jpg", elements: [] },
};

export function layoutFor(slug: string): PageLayout | undefined {
  return layouts[slug];
}
