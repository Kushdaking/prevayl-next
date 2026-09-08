import type { MarketingPageContent } from "../types";

/** Live copy from https://prevaylos.com/solutions/carriers */
export const solutionsCarriers: MarketingPageContent = {
  slug: "solutions/carriers",
  bandImage: "/brand/bands/solutions-carriers.jpg",
  eyebrow: "Solutions · For Carriers",
  title: "Built for carriers.",
  goldTitle: true,
  lead: "Keep loads, driver paperwork and payment records connected. Contact Sales to discuss access for your operation.",
  description: "Prevayl carrier tools: driver workflows, eBOL, trip records and payment visibility. Contact Sales.",
  primaryCta: { label: "Contact Sales", href: "/contact?type=sales" },
  secondaryCta: { label: "For Brokers", href: "/solutions/brokers" },
  heroImage: "/brand/pages/solutions-carriers.jpg",
  heroImageAlt: "Prevayl for Carriers — driver workflows, eBOL and payment visibility",
  sections: [
    {
      bullets: [
        "Contact Sales for access and account terms",
        "iOS + Android driver app with offline support",
        "eBOL, photo inspections, signature capture",
        "IFTA-friendly trip records",
        "Stripe Connect payouts in 1–2 days after delivery",
      ],
    },
    {
      heading: "Driver app",
      body: "Built for the cab, not a desktop. Live loads, status updates, required photos, and eBOL without calling the desk for every step.",
      features: [
        { title: "Live loads", body: "See assigned loads, addresses, and notes without calling dispatch." },
        { title: "Photos + eBOL", body: "Required-photo enforcement and digital signature at pickup and delivery." },
        { title: "Offline capable", body: "Capture evidence when signal is bad; sync when you're back online." },
        { title: "Payouts", body: "Stripe Connect. 1–2 day settlements after delivery confirmation." },
      ],
      cols: 2,
    },
    {
      heading: "Built around carrier work",
      paragraphs: [
        "Drivers need clear assignments, usable paperwork and visibility into the work ahead. Discuss your fleet and workflow with our sales team.",
      ],
    },
  ],
  finalCta: {
    title: "Explore the driver workflow.",
    primary: { label: "Contact Sales", href: "/contact?type=sales" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};

