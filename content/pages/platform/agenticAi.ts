import type { MarketingPageContent } from "../types";

export const agenticAi: MarketingPageContent = {
  slug: "platform/agentic-ai",
  bandImage: "/brand/bands/platform-agentic-ai.jpg",
  title: "One AI. Eight personas. A different set of powers for every role.",
  eyebrow: "Platform · Agentic AI",
  lead: "Trust-layered agents that act inside clear thresholds — never a black box that awards loads on its own.",
  description: "Agentic AI with role personas for brokers, carriers, dealers, and dispatchers.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Meet the Agents", href: "/platform/agents" },
  sections: [
    {
      heading: "Eight personas. One control plane.",
      body: "Each persona inherits the same data, audit trail, and policy layer — then specializes.",
      features: [
        { n: "01", title: "Broker agent", body: "Matching, margin, rate suggestions, exception routing for the desk that runs the lane." },
        { n: "02", title: "Carrier agent", body: "Load offers, payout status, document expiry, re-engagement without the spam." },
        { n: "03", title: "Dealer agent", body: "VIN status, portal notifications, self-serve booking moments that still feel branded." },
        { n: "04", title: "Dispatcher agent", body: "Board hygiene, late escalations, assignment suggestions, status at the right moments only." },
      ],
      cols: 2,
    },
    {
      heading: "Trust layers first.",
      bullets: [
        "Every agent action is policy-checked before it fires",
        "Suggest vs auto-award is a setting, not a surprise",
        "Insert-only audit for privileged agent writes",
        "Kill switches per agent and per workspace",
      ],
    },
  ],
  finalCta: {
    title: "Put agents on the desk that already ships cars.",
    lead: "Start with matching and margin. Expand when the thresholds earn trust.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Talk to sales", href: "/contact" },
  },
};
