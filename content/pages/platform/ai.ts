import type { MarketingPageContent } from "../types";

/** Live copy from prevaylos.com/platform/ai — preserved, not rewritten.
 * Visual: heroImage = be5de906 full 3-card design (Pricing / Matching / Operations);
 * bandImage = constellation atmosphere under scrim.
 */
export const ai: MarketingPageContent = {
  slug: "platform/ai",
  bandImage: "/brand/bands/platform-ai.jpg",
  eyebrow: "Platform · AI",
  title: "17 workflows. Built for auto transport.",
  lead: "15 specialized AI agents handle pricing, carrier matching, vetting, invoicing, and exception management. Human-in-the-loop by design — every AI action can be reviewed, overridden, or escalated. Activates at 200 orders/month.",
  description:
    "15 specialized AI agents for auto transport: pricing, matching, vetting, invoicing, exception management. Activates at 200 orders/month.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Book a Demo", href: "/contact" },
  heroImage: "/brand/pages/platform-ai.jpg",
  heroImageAlt:
    "Prevayl AI — 17 workflows: Pricing Intelligence, Carrier Matching & Vetting, Operations Automation",
  sections: [
    {
      bullets: [
        "17 AI workflows across pricing, matching, vetting, operations, and finance",
        "15 specialized bots trained on auto-transport data — not generic LLM prompts",
        "Auto-pricing: lane + season + fuel cost model, updated daily",
        "Auto-matching: top-3 carrier recommendation per load based on lane history and real-time availability",
        "Activates at 200 orders/month — costs $1/VIN, no per-seat license on top",
        "Human override on every AI decision — your dispatchers always have the final call",
      ],
    },
    {
      heading: "01 · Pricing Intelligence",
      body: "Rate every lane. Automatically. The Prevayl pricing engine builds a rate recommendation for every lane using historical job data, seasonal demand patterns, current fuel costs, and carrier supply on that specific route. It doesn't guess — it scores. Dispatchers see the recommended rate, the confidence band, and the margin at the quoted price before they commit.",
      bullets: [
        "Lane-level rate model updated daily with new job completions",
        "Seasonal demand weighting: summer auction surge, winter rate premiums",
        "Fuel cost passthrough: diesel index applied to long-haul lane estimates",
        "Confidence band: well-priced lanes vs thin data, be cautious",
        "Margin calculator: see your gross at quoted rate vs carrier cost before you send the quote",
      ],
    },
    {
      heading: "02 · Carrier Matching & Vetting",
      body: "Right carrier. First try. For every load, the matching engine ranks your carrier network by lane performance, on-time rate, damage history, current location, and rate competitiveness. The top 3 surface with one click — you accept, override, or open it to the broader market. Auto-vetting runs in parallel: MC, DOT, insurance, and BOC-3 checked at every assignment, not just at onboarding.",
      bullets: [
        "Per-lane carrier scoring: on-time %, damage rate, rate vs market average",
        "Real-time location weighting: closer carrier scores higher on rush loads",
        "Top-3 recommendations with one-click acceptance or broadcast to market",
        "Auto-vetting on every assignment: MC/DOT active, insurance current, BOC-3 on file",
        "Expiry alerts: 60/30/7 day warnings before carrier documents lapse",
      ],
    },
    {
      heading: "03 · Operations Automation",
      body: "The repetitive work disappears. Beyond pricing and matching, the AI handles the operational work that consumes dispatcher time: status notifications, exception escalations, invoice generation, and re-engagement of silent carriers — all with thresholds you control.",
      bullets: [
        "Status notifications only at real customer moments",
        "Exception escalations with severity tiers",
        "Invoice generation on delivery",
        "Carrier re-engagement with cooldown so nobody gets double-emailed",
      ],
    },
  ],
  finalCta: {
    title: "Ready to move?",
    lead: "Get started in under 10 minutes. Pricing is built around your volume and the modules you run.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
