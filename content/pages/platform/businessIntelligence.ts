import type { MarketingPageContent } from "../types";

/** Live copy from prevaylos.com/platform/business-intelligence */
export const businessIntelligence: MarketingPageContent = {
  slug: "platform/business-intelligence",
  bandImage: "/brand/bands/platform-business-intelligence.jpg",
  eyebrow: "Platform · Business Intelligence",
  title: "Eleven live metrics. Two delay breakdowns. One click to drill in.",
  lead: "The real dashboard — not a mockup of one. Predict, flag, and explain. Not a black box.",
  description: "Business intelligence for auto transport: live metrics, delay breakdowns, anomaly detection, volume forecast, risk scoring.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Book a Demo", href: "/contact" },
  sections: [
    {
      heading: "01 · Live operational metrics",
      body: "Aging orders, delays, pickups, deliveries, revenue, GP, top customers, and carrier performance — all live.",
      bullets: [
        "Eleven real widgets on the operational dashboard",
        "Click-to-expand revenue: exact revenue, gross profit, and margin — not just a bar height",
        "Pickup delays and delivery delays get separate carrier tables — genuinely different risks",
      ],
    },
    {
      heading: "02 · Volume forecast",
      body: "A real pace-based projection, honestly labeled. Projected monthly volume = (orders so far ÷ days elapsed) × days in the month, compared against the trailing 3-month average to classify trending up, down, or flat, plus a year-over-year comparison. This is a real statistical forecast, not a black-box machine-learning prediction dressed up as one.",
      bullets: [
        "Trending up: more than 5% above the trailing 3-month average. Trending down: more than 5% below.",
        "Year-over-year comparison against the same month last year, when data exists",
        "Only shown once an org's AI intelligence is active — it doesn't appear on thin data",
      ],
    },
    {
      heading: "03 · Anomaly detection & risk scoring",
      body: "What's wrong tonight, and who's about to become a problem. A real 7-rule engine runs nightly across every active order: unassigned orders past 48 hours, stalled in-transit shipments, carrier no-shows, invoices overdue 30+ days, carriers with repeated no-shows, price outliers versus lane average, and inactive new orgs. Separately, a 3-signal model scores customer credit risk — average days to pay, payment ratio, and open claims — and notifies once per newly-flagged customer, never spamming.",
      bullets: [
        "Every anomaly carries a real severity tier and a direct link to the record that triggered it",
        "High customer risk: collections flag, or over 90 days average delay, or under 80% payment ratio",
        "A newly high-risk customer is only notified once every 30 days — a deliberate anti-spam design choice",
      ],
    },
    {
      heading: "Every capability, out of the box",
      features: [
        { title: "11 real widgets", body: "Aging orders, delays, pickups, deliveries, revenue, GP, top customers, and carrier performance — all live." },
        { title: "Two delay breakdowns", body: "Pickup delays and delivery delays get separate carrier tables, because they're genuinely different risks." },
        { title: "Click-to-expand revenue", body: "Click any month for exact revenue, gross profit, and margin — not just a bar height to eyeball." },
        { title: "Pace-based forecast", body: "A real day-of-month projection vs. trailing average and year-over-year — honestly labeled, not oversold." },
        { title: "7-rule anomaly engine", body: "Runs nightly across every active order — unassigned loads, no-shows, overdue invoices, price outliers, and more." },
        { title: "Customer risk scoring", body: "A real 3-signal credit-risk model that notifies once per newly-flagged customer, not on repeat." },
      ],
      cols: 3,
    },
  ],
  finalCta: {
    title: "Ready to move?",
    lead: "Get started in under 10 minutes. Pricing is built around your volume and the modules you run.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
