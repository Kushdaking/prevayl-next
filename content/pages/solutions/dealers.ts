import type { MarketingPageContent } from "../types";

/** Live copy from https://prevaylos.com/solutions/dealers */
export const solutionsDealers: MarketingPageContent = {
  slug: "solutions/dealers",
  bandImage: "/brand/bands/solutions-dealers.jpg",
  eyebrow: "Solutions · For Dealers",
  title: "White-label dealer portal.",
  goldTitle: true,
  lead: "Your branding, your domain, your colors. Real-time VIN tracking. Stop the phone tag. Self-serve booking and dispatch.",
  description: "Prevayl for dealers: white-label portal, real-time VIN tracking, self-serve booking.",
  primaryCta: { label: "Get Started Free", href: "/register" },
  secondaryCta: { label: "Book a Demo", href: "/contact" },
  heroImage: "/brand/pages/solutions-dealers.jpg",
  heroImageAlt: "Prevayl for Dealers — white-label portal, real-time VIN tracking",
  sections: [
    {
      heading: "The dealer portal",
      body: "White-label customer portal under your brand. Dealers track every VIN they order without calling dispatch for status.",
      bullets: [
        "Your logo, domain, and colors — not Prevayl's",
        "Per-VIN status: in-queue, picked up, in-transit, delivered",
        "Self-serve booking where you enable it",
        "Role-based access for manager, runner, accounting",
      ],
    },
    {
      heading: "Less phone tag, more throughput",
      paragraphs: [
        "When a dealer checks the portal, they see the same data your dispatcher sees. No webhooks. No CSVs. No waiting on a callback.",
      ],
      features: [
        { title: "Real-time status", body: "Live VIN tracking across active units." },
        { title: "Documents", body: "eBOL and photos available when delivery completes." },
        { title: "Branded", body: "Customer-facing experience that looks like your company." },
        { title: "Roles", body: "Manager, runner, accounting scopes without shared passwords." },
      ],
      cols: 2,
    },
  ],
  finalCta: {
    title: "Give dealers a portal that works.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
