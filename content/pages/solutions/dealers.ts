import type { MarketingPageContent } from "../types";

/** Live copy from https://prevaylos.com/solutions/dealers */
export const solutionsDealers: MarketingPageContent = {
  slug: "solutions/dealers",
  bandImage: "/brand/bands/solutions-dealers.jpg",
  eyebrow: "Solutions · For Dealers",
  title: "Your vehicles. From request to delivery.",
  goldTitle: true,
  lead: "Request transport, follow each VIN and find delivery records in one portal. Give your dealership a shared view of the vehicles moving into and out of your inventory.",
  description: "Prevayl for dealers: white-label portal, real-time VIN tracking, self-serve booking.",
  primaryCta: { label: "Contact Sales", href: "/contact?type=sales&role=dealers" },
  secondaryCta: { label: "Book a Demo", href: "/contact?type=demo&role=dealers" },
  heroImage: "/brand/pages/solutions-dealers.jpg",
  heroImageAlt: "Prevayl for Dealers — white-label portal, real-time VIN tracking",
  sections: [
    {
      heading: "The dealer portal",
      body: "See the orders, shipment updates and documents your dealership needs without chasing dispatch for every status change.",
      bullets: [
        "Your dealership’s orders and vehicle details in one place",
        "Per-VIN status: in-queue, picked up, in-transit, delivered",
        "Self-serve booking where you enable it",
        "Role-based access for manager, runner, accounting",
      ],
    },
    {
      heading: "Less phone tag, more throughput",
      paragraphs: [
        "Your team can follow the shipment record shared through the portal, from pickup details to delivery documents. Available actions depend on your account permissions.",
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
    title: "See your dealership’s transport workflow.",
    primary: { label: "Contact Sales", href: "/contact?type=sales&role=dealers" },
    secondary: { label: "Book a Demo", href: "/contact?type=demo&role=dealers" },
  },
};

