import type { MarketingPageContent } from "../types";

export const loadOptimizer: MarketingPageContent = {
  slug: "platform/load-optimizer",
  bandImage: "/brand/bands/platform-load-optimizer.jpg",
  eyebrow: "Platform · Load Optimizer",
  title: "Pack every truck to its profitable maximum.",
  lead: "Load Optimizer turns your active VIN queue into the most profitable load a carrier can haul. Drop a vehicle, swap a vehicle, add a rush — the load rebuilds and the carrier rate updates instantly.",
  description: "Pack every truck to its profitable maximum. Real-time load building from your active VIN queue.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  sections: [
    {
      bullets: [
        "Active VIN queue → optimal load assignment in seconds",
        "Wait-listed VINs auto-promote when space opens",
        "Re-prices the carrier rate every time the load changes",
        "Surfaces gross margin and utilization at the point of decision",
        "Skip rationale on every excluded VIN — never silent failure",
      ],
    },
    {
      heading: "Generic logistics tools don't know what a dually is.",
      paragraphs: [
        "A pallet-and-LTL TMS treats every load as cubic feet. Auto transport doesn't work that way. A 1-ton dually pickup, a Suburban, a Honda Civic, and an inoperable Hyundai with a wheel dolly each take a different amount of usable space on a 9-car transporter, and they have to sit on different decks.",
        "Load Optimizer is purpose-built for the asymmetry of vehicle transport — it understands deck physics, vehicle classes, and operability the same way a veteran dispatcher does.",
      ],
      features: [
        { title: "Vehicle-class-aware", body: "Not just length and weight — class and deck position matter." },
        { title: "Deck-aware", body: "Heavy on bottom, height-limited on top." },
        { title: "Operability-aware", body: "Inoperable VINs get reserved space and dolly room." },
        { title: "Carrier-aware", body: "Not every truck handles every vehicle class." },
      ],
      cols: 2,
    },
    {
      heading: "When a dealer cancels four hours before pickup",
      paragraphs: [
        "In a spreadsheet workflow, that's thirty minutes of recalculation, five phone calls, and a margin renegotiation. In Prevayl, the load rebuilds in real-time — re-pricing the carrier rate, promoting any wait-listed VINs, updating the gross margin display, and flagging if the new build needs broker approval to dispatch.",
      ],
      bullets: [
        "Drop, swap, or add a VIN — load recalculates immediately",
        "Carrier rate re-priced to reflect the new build",
        "Margin alert if a rebuild drops gross below your minimum threshold",
      ],
    },
  ],
  finalCta: {
    title: "See Load Optimizer on your queue.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Book a demo", href: "/contact" },
  },
};
