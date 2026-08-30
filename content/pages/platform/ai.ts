import type { MarketingPageContent } from "../types";

export const ai: MarketingPageContent = {
  slug: "platform/ai",
  eyebrow: "Platform · AI",
  title: "AI that sits inside the work — not on top of it.",
  lead: "Carrier matching, pricing, margin guardrails, and status automation run as real workflows with real thresholds. Not a chat box bolted onto a TMS.",
  description: "AI platform for auto transport: matching, pricing, margin, status bots.",
  primaryCta: { label: "Meet the Agents", href: "/platform/agents" },
  secondaryCta: { label: "Start Free Trial", href: "/register" },
  sections: [
    {
      heading: "What the AI actually does",
      features: [
        { title: "Carrier Match", body: "Ranks carriers for a load by lane history, on-time rate, claims, and location. Suggests — never auto-awards." },
        { title: "Pricer", body: "Lane pricing that refuses to guess without history. Surfaces a recommended rate with context." },
        { title: "Margin Guard", body: "Computes real margin when a rate is set. Negative margin critical; low margin warning; healthy margin silent." },
        { title: "Status automation", body: "Branded email and SMS only at real customer moments — accepted, picked up, on hold, delivered." },
      ],
      cols: 2,
    },
    {
      heading: "Operators stay in control",
      body: "Every agent has thresholds you can configure. Empty rules that match everything are refused. Suggestions require a human confirm before award.",
    },
  ],
  finalCta: {
    title: "See the agents on your lanes.",
    primary: { label: "Meet the Agents", href: "/platform/agents" },
    secondary: { label: "Book a demo", href: "/contact" },
  },
};
