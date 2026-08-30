import type { MarketingPageContent } from "../types";

export const flolens: MarketingPageContent = {
  slug: "platform/flolens",
  bandImage: "/brand/bands/platform-flolens.jpg",
  title: "FloLens — workflow suggestions that stay in context.",
  eyebrow: "Platform · FloLens",
  lead: "Surface the next best step on the board you already work — without another dashboard to babysit.",
  description: "FloLens workflow intelligence for auto transport operations.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "See platform", href: "/platform" },
  sections: [
    {
      heading: "Suggestions, not another stack",
      bullets: [
        "Context from the live order and lane history",
        "Hints appear where dispatch already looks",
        "Human confirms before anything awards or messages",
        "Quiet when there is nothing useful to say",
      ],
    },
  ],
  finalCta: {
    title: "Focus the board, not the noise.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Contact", href: "/contact" },
  },
};
