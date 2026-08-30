import type { MarketingPageContent } from "../types";

/** Live copy from prevaylos.com/platform/ai */
export const ai: MarketingPageContent = {
  slug: "platform/ai",
  eyebrow: "Platform \u00b7 AI",
  title: "17 workflows. Built for auto transport.",
  lead: "15 specialized AI agents handle pricing, carrier matching, vetting, invoicing, and exception management. Human-in-the-loop by design \u2014 every AI action can be reviewed, overridden, or escalated. Activates at 200 orders/month.",
  description: "15 specialized AI agents for auto transport. Activates at 200 orders/month.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Book a Demo", href: "/contact" },
  sections: [
    {
      bullets: [
        "17 AI workflows across pricing, matching, vetting, operations, and finance",
        "15 specialized bots trained on auto-transport data \u2014 not generic LLM prompts",
        "Auto-pricing: lane + season + fuel cost model, updated daily",
        "Auto-matching: top-3 carrier recommendation per load",
        "Activates at 200 orders/month \u2014 costs $1/VIN, no per-seat license on top",
        "Human override on every AI decision",
      ],
    },
    {
      heading: "01 \u00b7 Pricing Intelligence",
      body: "Rate every lane. Automatically. Historical job data, seasonal demand, fuel costs, carrier supply. It doesn't guess \u2014 it scores.",
      bullets: [
        "Lane-level rate model updated daily",
        "Seasonal demand weighting",
        "Fuel cost passthrough",
        "Confidence band and margin calculator before you commit",
      ],
    },
    {
      heading: "02 \u00b7 Carrier Matching & Vetting",
      body: "Right carrier. First try. Top 3 with one click. Auto-vetting at assignment: MC, DOT, insurance, BOC-3.",
      bullets: [
        "Per-lane carrier scoring",
        "Real-time location weighting",
        "Top-3 recommendations",
        "Expiry alerts 60/30/7 days",
      ],
    },
    {
      heading: "03 \u00b7 Operations Automation",
      body: "Status notifications, exception escalations, invoice generation, carrier re-engagement \u2014 thresholds you control.",
      bullets: [
        "Status only at real customer moments",
        "Exception escalations with severity",
        "Invoice on delivery",
        "Re-engagement with cooldown",
      ],
    },
  ],
  finalCta: {
    title: "Ready to move?",
    lead: "Get started in under 10 minutes. Pricing is built around your volume.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
