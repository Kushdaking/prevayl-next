import type { MarketingPageContent } from "../types";

/**
 * Live copy from prevaylos.com/platform/flolens
 * Note: not in main marketing nav — kept as deep-link / platform module page.
 */
export const flolens: MarketingPageContent = {
  slug: "platform/flolens",
  bandImage: "/brand/bands/platform-flolens.jpg",
  eyebrow: "Platform · FloLens",
  title: "Watches your workflow, suggests the fix.",
  lead: "The platform watches its own gaps — then tells you where automation would help. FloLens surfaces friction in how your team actually works, not a generic productivity lecture.",
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
