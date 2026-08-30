import type { MarketingPageContent } from "../types";

/** Live copy from prevaylos.com/platform/agentic-ai */
export const agenticAi: MarketingPageContent = {
  slug: "platform/agentic-ai",
  bandImage: "/brand/bands/platform-agentic-ai.jpg",
  eyebrow: "Platform · Agentic AI",
  title: "One AI. Eight personas. A different set of powers for every role.",
  lead: "Every other platform ships a chatbot. Prevayl ships agents with a different set of powers for every role in the lane — broker, carrier, dealer, dispatcher — each one layered by trust so automation never silently awards a load or invents a rate.",
  description: "Agentic AI — eight personas layered by trust for every role in auto transport.",
  primaryCta: { label: "Meet the Agents", href: "/platform/agents" },
  secondaryCta: { label: "Start Free Trial", href: "/register" },
  sections: [
    {
      heading: "Layered by trust",
      paragraphs: [
        "Agents that act inside bounded workflows: suggest, notify, re-engage, reprice. Each layer has a trust boundary so automation never silently awards a load or invents a rate.",
        "Human-in-the-loop by design. Suggestions require confirm. Empty rules that match everything are refused. Cooldowns prevent spam. Thresholds are yours to set.",
      ],
    },
    {
      heading: "Eight personas, one platform",
      features: [
        { n: "01", title: "Broker agent", body: "Matching, margin, rate suggestions, exception routing for the desk that runs the lane." },
        { n: "02", title: "Carrier agent", body: "Load offers, payout status, document expiry, re-engagement without the spam." },
        { n: "03", title: "Dealer agent", body: "VIN status, portal notifications, self-serve booking moments that still feel branded." },
        { n: "04", title: "Dispatcher agent", body: "Board hygiene, late escalations, assignment suggestions, status at the right moments only." },
      ],
      cols: 2,
    },
    {
      heading: "What never happens silently",
      bullets: [
        "No auto-award of a load without a human confirm",
        "No invented rate without lane history behind it",
        "No customer spam outside the configured status moments",
        "No empty matching rules that would match every carrier",
      ],
    },
  ],
  finalCta: {
    title: "See the agents on your lanes.",
    primary: { label: "Meet the Agents", href: "/platform/agents" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
