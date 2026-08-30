import type { MarketingPageContent } from "../types";

/**
 * Live copy from prevaylos.com/platform/route-optimizer
 * Note: not in main marketing nav — kept as deep-link / platform module page.
 */
export const routeOptimizer: MarketingPageContent = {
  slug: "platform/route-optimizer",
  bandImage: "/brand/bands/platform-route-optimizer.jpg",
  eyebrow: "Platform · Route Optimizer",
  title: "Empty miles cost everyone money. Stop having them.",
  lead: "Route Optimizer scans your network and load book for deadhead reduction, better sequencing, and denser days on the road — without treating a car hauler like a generic LTL truck.",
  description: "Multi-stop route optimization for auto transport.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "See platform", href: "/platform" },
  sections: [
    {
      heading: "Routes that match how you actually ship",
      bullets: [
        "Multi-stop sequences across real US lanes",
        "Constraints from equipment, hours, and commitments",
        "Suggestions first — dispatch still owns the award",
        "Same board language as load matching and BI",
      ],
    },
  ],
  finalCta: {
    title: "Plan the path. Keep the control.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Contact", href: "/contact" },
  },
};
