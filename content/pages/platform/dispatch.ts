import type { MarketingPageContent } from "../types";

export const dispatch: MarketingPageContent = {
  slug: "platform/dispatch",
  eyebrow: "Platform · Dispatch",
  title: "Dispatch built for humans, augmented by AI.",
  lead: "A real-time load board with drag-and-drop assignment, AI-suggested carrier matches, photo-verified inspections, and a digital BOL — all in one screen.",
  description:
    "Real-time dispatch board with AI carrier matching, drag-and-drop assignment, photo-verified pickup and delivery.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Tour the Platform", href: "/platform" },
  sections: [
    {
      heading: "One board. Every load.",
      body: "No more switching between multiple load boards and a spreadsheet. Active, pending, and completed loads in one filterable view. Color-coded by status, sortable by ETA or margin, with inline notes that everyone on your team can see.",
      bullets: [
        "Filter by status, carrier, dealer, lane, ETA, margin, or any custom field",
        "Inline notes with @mentions — your dispatcher and accounting teams stay aligned",
        "Live map with active loads and carrier locations",
      ],
    },
    {
      heading: "AI matching that suggests — never auto-awards.",
      body: "For every load, the AI ranks your network by historical performance on that exact lane: on-time rate, claim history, rate competitiveness, and current location. You see the top 3 with one click — accept, override, or post to the broader network.",
      features: [
        {
          title: "Top-3 carrier rank",
          body: "AI suggests the top 3 carriers per load based on lane history, on-time rate, and rate target.",
        },
        {
          title: "Auto-vetting at assign",
          body: "MC, DOT, insurance, BOC-3 — all checked at assignment. Flagged the moment something expires.",
        },
        {
          title: "Human final call",
          body: "Override anytime. Drag-and-drop assignment with one-click rate confirmations.",
        },
      ],
    },
    {
      heading: "Photo chain of custody + eBOL.",
      body: "Every pickup and dropoff captures driver-side photos, customer signature, and timestamp. The BOL is generated automatically, e-signed, and stored in the order record forever. No more hunting for paper BOLs when a damage claim comes in 60 days later.",
      bullets: [
        "Mobile-driven inspections with required-photo enforcement",
        "eBOL: signature capture, FMCSA-compliant",
        "Auto-archived to the order — searchable, exportable",
        "DamageDesk integration if a claim is filed",
      ],
    },
    {
      heading: "Built-in dispatcher tools",
      features: [
        { title: "Live map", body: "See every active load and carrier on one map. Click for status, ETA, contact." },
        { title: "Lane templates", body: "Reusable lane templates with default rates, transit times, and notes." },
        { title: "Rate confirmations", body: "One-click PDF generation with your branding, signed by carrier in 30 seconds." },
        { title: "Status texts", body: "Auto-text dealers at pickup, in-transit, and delivery." },
        { title: "Driver app", body: "iOS + Android. Free for carriers. Works offline. Photo + signature capture." },
        { title: "Escalations", body: "Late, breakdown, no-show — escalations route to the right person." },
      ],
      cols: 3,
    },
  ],
  finalCta: {
    title: "Ready to run dispatch on Prevayl?",
    lead: "Start free. Pricing built around your volume.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Book a demo", href: "/contact" },
  },
};
