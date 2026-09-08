import type { MarketingPageContent } from "../types";

/** Live copy from prevaylos.com/platform/carriers */
export const carriers: MarketingPageContent = {
  slug: "platform/carriers",
  bandImage: "/brand/bands/platform-carriers.jpg",
  eyebrow: "Platform · Carriers",
  title: "Carrier tools. Built to be used.",
  lead: "Give owner-operators and small fleets a connected view of loads, documents, trip records and payment status. Contact Sales to discuss your operation.",
  description: "Carrier tools: driver workflows, BOL, trip records and payment visibility. Contact Sales.",
  primaryCta: { label: "Contact Sales", href: "/contact?type=sales" },
  secondaryCta: { label: "For Brokers", href: "/solutions/brokers" },
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
  ],
  finalCta: {
    title: "Explore the driver workflow.",
    primary: { label: "Contact Sales", href: "/contact?type=sales" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};

