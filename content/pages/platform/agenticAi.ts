import type { MarketingPageContent } from "../types";

export const agenticAi: MarketingPageContent = {
  slug: "platform/agentic-ai",
  eyebrow: "Platform · Agentic AI",
  title: "Agentic AI — layered by trust.",
  lead: "Agents that act inside bounded workflows: suggest, notify, re-engage, reprice. Each layer has a trust boundary so automation never silently awards a load or invents a rate.",
  description: "Agentic AI for auto transport — trust-layered automation.",
  primaryCta: { label: "Meet the Agents", href: "/platform/agents" },
  sections: [
    {
      heading: "Trust layers, not a black box",
      body: "Prevayl agents operate at different levels of autonomy. Matching and pricing suggest. Status and reengagement notify. Margin flags alert. Award and final rate always stay with a human unless you explicitly configure otherwise.",
      features: [
        { n: "01", title: "Observe", body: "Read order state, carrier scorecards, lane history, and insurance status." },
        { n: "02", title: "Suggest", body: "Surface top carriers, recommended rates, and margin risk — with reasons." },
        { n: "03", title: "Notify", body: "Customer and carrier messages only at defined moments, with cooldown rules." },
        { n: "04", title: "Escalate", body: "Exceptions (late, no-show, claim) route to the right role with context." },
      ],
      cols: 2,
    },
  ],
  finalCta: {
    title: "See agents with your thresholds.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Meet the Agents", href: "/platform/agents" },
  },
};
