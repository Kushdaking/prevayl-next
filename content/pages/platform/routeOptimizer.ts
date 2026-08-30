import type { MarketingPageContent } from "../types";

export const routeOptimizer: MarketingPageContent = {
  slug: "platform/route-optimizer",
  bandImage: "/brand/bands/platform-route-optimizer.jpg",
  title: "Route Optimizer — multi-stop sequences that respect real lanes.",
  eyebrow: "Platform · Route Optimizer",
  lead: "Sequence pickups and deliveries with the same VIN-level data the rest of the platform already trusts.",
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
