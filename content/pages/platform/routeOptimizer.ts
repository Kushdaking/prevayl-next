import type { MarketingPageContent } from "../types";

export const routeOptimizer: MarketingPageContent = {
  slug: "platform/route-optimizer",
  eyebrow: "Platform · Route Optimizer",
  title: "Route Optimizer for multi-stop auto transport.",
  lead: "Sequence pickups and deliveries across multi-VIN, multi-stop runs. Built for how auto transport actually moves — not generic last-mile routing.",
  description: "Route optimization for multi-stop vehicle transport loads.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  sections: [
    {
      heading: "Routing that respects the lane",
      body: "Auto transport routes are constrained by auction lot hours, dealer receiving windows, and carrier equipment. Route Optimizer sequences stops with those constraints in mind and stays connected to the same order and VIN records as Dispatch.",
      features: [
        { title: "Multi-stop sequences", body: "Order pickups and dropoffs across a multi-VIN run without a separate spreadsheet." },
        { title: "Window-aware", body: "Respect pickup and delivery windows from auctions and dealers." },
        { title: "Tied to dispatch", body: "Same live load board and carrier assignment flow — not a disconnected map toy." },
      ],
    },
  ],
  finalCta: {
    title: "Optimize the next multi-stop run.",
    primary: { label: "Start Free Trial", href: "/register" },
  },
};
