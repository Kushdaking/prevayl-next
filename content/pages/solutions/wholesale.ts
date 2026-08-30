import type { MarketingPageContent } from "../types";

/** Live copy from https://prevaylos.com/solutions/wholesale */
export const solutionsWholesale: MarketingPageContent = {
  slug: "solutions/wholesale",
  eyebrow: "Solutions \u00b7 Auctions / Wholesale",
  title: "From auction lot to buyer location in one workflow.",
  goldTitle: true,
  lead: "Direct integrations with Manheim, ADESA, OVE. Eliminate the handoff lag. VIN-level tracking across all active units.",
  description: "Prevayl for auctions and wholesale: Manheim, ADESA, OVE, multi-carrier loads, condition chain of custody.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Book a Demo", href: "/contact" },
  sections: [
    {
      heading: "Auction imports that become orders",
      body: "Drop a buyer lot CSV or map Manheim / ADESA / OVE exports. Pickup lot codes resolve to auction addresses. Release dates feed scheduling.",
      bullets: [
        "Manheim, ADESA, and OVE buyer CSV import with field mapping",
        "Pickup lot code resolves to auction address automatically",
        "Release dates propagate to load scheduling",
        "Duplicate VIN detection across open orders before import completes",
      ],
    },
    {
      heading: "VIN-level tracking across all active units",
      body: "Every VIN in motion shows live status in one dashboard. In-queue, picked up, in-transit, delivered \u2014 by unit, by auction source, by buyer, or by carrier.",
      bullets: [
        "Per-VIN status: in-queue, assigned, picked up, in-transit, delivered",
        "Filter by auction source, carrier, buyer, or delivery location",
        "ETA from the routing engine \u2014 not a carrier estimate",
        "Delivery confirmation with signed BOL available immediately",
      ],
    },
    {
      heading: "Multi-carrier, multi-auction, one record",
      body: "A 40-unit week might span Manheim Detroit, ADESA Chicago, and OVE \u2014 moving to buyers in three states across four carriers. Prevayl tracks all of it under one account.",
      bullets: [
        "No limit on active loads, carriers, or auction sources per account",
        "Multi-carrier assignment: split a buyer lot across multiple runs if needed",
        "Rate confirmation per carrier per load \u2014 PDF generated with one click",
        "Bulk import: drop a 200-VIN buyer lot CSV, 200 load records in under 60 seconds",
      ],
    },
    {
      heading: "Documented condition from lot to driveway",
      body: "Driver captures required photos at auction pickup and buyer delivery. Digital signature at delivery. eBOL generated and archived immediately.",
      bullets: [
        "Required photo capture at auction pickup \u2014 can't advance without it",
        "Buyer digital signature at delivery \u2014 eBOL archived instantly",
        "Photos timestamped and geotagged at auction lot",
        "Damage claim in-portal: evidence pre-attached",
      ],
    },
  ],
  finalCta: {
    title: "MOVE MORE. TRACK ALL OF IT.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
