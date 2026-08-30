import type { MarketingPageContent } from "../types";

export const flolens: MarketingPageContent = {
  slug: "platform/flolens",
  eyebrow: "Platform · FloLens",
  title: "FloLens — watches your workflow, suggests the fix.",
  lead: "FloLens observes how your team actually runs dispatch, accounting, and carrier follow-up — then surfaces bottlenecks and suggested process fixes. Operator-first, not surveillance theater.",
  description: "FloLens — workflow observation and process suggestions for auto transport ops.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  sections: [
    {
      heading: "Built to help operators, not score them",
      body: "FloLens looks at workflow patterns — where loads stall, where notes pile up, where margin checks get skipped — and suggests concrete changes. You decide what to adopt.",
      features: [
        { title: "Bottleneck spotting", body: "Surfaces where orders wait longest in your real process." },
        { title: "Suggested fixes", body: "Process recommendations tied to Prevayl modules you already run." },
        { title: "Operator-first", body: "Insights for dispatch leads and owners — not a people-scoring product." },
      ],
    },
  ],
  finalCta: {
    title: "See FloLens on your workflow.",
    primary: { label: "Book a demo", href: "/contact" },
  },
};
