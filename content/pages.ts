/**
 * Sub-page content. Same idea as site.ts — copy lives here, never in components.
 *
 * Copy is drawn from the redesign mockups where it was legible and from the
 * existing platform description otherwise. No metrics are included: every
 * figure in the mockups (847 loads, 94% match, $847,200 booked) is invented,
 * and none of it is repeated here. Add real numbers deliberately or not at all.
 */
export type PageDef = {
  slug: string;
  eyebrow: string;
  title: string;
  titleGold?: string;
  lead: string;
  art: string;
  align: "left" | "right" | "center";
  points: { title: string; body: string }[];
  ctaNote?: string;
};

export const pages: PageDef[] = [
  {
    slug: "platform",
    eyebrow: "Platform · Overview",
    title: "ONE PLATFORM.",
    titleGold: "SEVEN MODULES.",
    lead: "Dispatch, orders, carriers, dealer portal, accounting, AI matching and compliance in a single system. Zero context-switching between tools that were never meant to talk to each other.",
    art: "/art/objects.webp",
    align: "left",
    points: [
      { title: "Dispatch", body: "Live load board, AI top-3 carrier matching, drag-and-drop assignment, eBOL and photo inspections." },
      { title: "Orders", body: "VIN-level tracking, multi-vehicle orders, auction integrations, and a customer-facing portal." },
      { title: "Accounting", body: "AR, AP, GL and P&L with QuickBooks and Xero two-way sync, DamageDesk and Stripe Connect." },
      { title: "Compliance", body: "DOT, FMCSA, BOC-3 and BOL handling with a full audit log behind every action." },
    ],
  },
  {
    slug: "platform/orders",
    eyebrow: "Platform · Orders",
    title: "EVERY VIN,",
    titleGold: "QUOTE TO DELIVERED.",
    lead: "One record per vehicle, from the moment it is quoted to the moment it is signed for. No spreadsheet in the middle, no re-keying between systems.",
    art: "/art/works.webp",
    align: "left",
    points: [
      { title: "Multi-vehicle orders", body: "Move five cars or fifty on one order, each VIN tracked and billed individually." },
      { title: "Auction CSV import", body: "Drop in a purchase list and orders build themselves, no manual entry." },
      { title: "Manheim, ADESA and OVE", body: "Direct integrations so auction purchases flow in without a handoff." },
      { title: "Customer-facing portal", body: "Your customer checks status themselves instead of calling your dispatcher." },
      { title: "Automatic status updates", body: "SMS and email broadcasts fire on real events, not on someone remembering." },
    ],
  },
  {
    slug: "platform/dealer-portal",
    eyebrow: "Platform · Dealer Portal",
    title: "YOUR BRAND.",
    titleGold: "THEIR PORTAL.",
    lead: "A white-label portal your dealers log into under your own domain and branding. They see their vehicles, place their own orders, and stop phoning your desk for updates.",
    art: "/art/roles.webp",
    align: "right",
    points: [
      { title: "Real-time VIN status", body: "Every vehicle, current location and stage, without a phone call." },
      { title: "Self-serve booking", body: "Dealers place orders directly against your rates." },
      { title: "Role-based access", body: "Separate views for manager, runner and accounting." },
      { title: "Signed BOL on delivery", body: "Proof of delivery available the moment the driver closes the job." },
    ],
  },
  {
    slug: "platform/accounting",
    eyebrow: "Platform · Accounting",
    title: "STOP RECONCILING",
    titleGold: "WITH A SPREADSHEET.",
    lead: "AR and AP aging alongside P&L in one view, tied to the same records that dispatch and orders write to. The books and the operation stop disagreeing.",
    art: "/art/pricing.webp",
    align: "left",
    points: [
      { title: "Two-way QuickBooks sync", body: "QuickBooks Online and Xero stay current without manual export." },
      { title: "Carrier payouts via Stripe", body: "Stripe Connect settlement, typically one to two days." },
      { title: "DamageDesk chargebacks", body: "Damage claims and chargeback workflows tied to the VIN they belong to." },
      { title: "Reconciliation dashboard", body: "See what has not matched, rather than discovering it at month end." },
    ],
  },
  {
    slug: "solutions/brokers",
    eyebrow: "Solutions · For Brokers",
    title: "ONE PLATFORM FOR",
    titleGold: "EVERY BROKER JOB.",
    lead: "Three systems for one job, a per-seat TMS bill, and manual carrier vetting. Prevayl replaces the stack with one subscription and per-VIN economics.",
    art: "/art/hero-1.webp",
    align: "left",
    points: [
      { title: "AI carrier matching", body: "Top-three recommendations on every load, with human override on each one." },
      { title: "Per-VIN economics", body: "Priced per vehicle rather than per seat, so cost tracks volume." },
      { title: "Full accounting", body: "Replaces the separate books entirely — no export, no reconciliation step." },
      { title: "Automated compliance", body: "MC, DOT, insurance and BOC-3 checked automatically, with expiry alerts." },
    ],
  },
  {
    slug: "solutions/carriers",
    eyebrow: "Solutions · For Carriers",
    title: "ALWAYS FREE.",
    titleGold: "NO ASTERISK.",
    lead: "Owner-operators and small fleets pay nothing. Prevayl earns from brokers, not from the people actually moving the freight.",
    art: "/art/hero-3.webp",
    align: "right",
    points: [
      { title: "Driver app on iOS and Android", body: "Accept loads, capture inspection photos, and close jobs from the cab." },
      { title: "eBOL and IFTA", body: "Bill of lading and fuel tax handling included, not an add-on." },
      { title: "Stripe payouts", body: "Settlement in one to two days rather than on thirty-day terms." },
      { title: "No monthly fee", body: "Free forever for carriers. Not a trial and not a loss-leader tier." },
    ],
  },
  {
    slug: "solutions/dealers",
    eyebrow: "Solutions · For Dealers",
    title: "WHITE-LABEL",
    titleGold: "DEALER PORTAL.",
    lead: "Your branding, your domain. Real-time VIN tracking and self-serve booking so the phone tag between your lot and your transporter stops.",
    art: "/art/hero-2.webp",
    align: "left",
    points: [
      { title: "Your branding and domain", body: "The portal looks like yours because it is yours." },
      { title: "Real-time VIN tracking", body: "Every unit visible without asking anyone." },
      { title: "Self-serve booking", body: "Staff place transport orders directly." },
      { title: "Role-based access", body: "Manager, runner and accounting each see what they need." },
    ],
  },
  {
    slug: "solutions/wholesale",
    eyebrow: "Solutions · Auctions & Wholesale",
    title: "AUCTION LOT TO",
    titleGold: "BUYER LOCATION.",
    lead: "One workflow from the moment the hammer drops to the moment the vehicle arrives. Manheim, ADESA and OVE integrate directly, so the handoff lag disappears.",
    art: "/art/hero-4.webp",
    align: "right",
    points: [
      { title: "Direct auction integrations", body: "Manheim, ADESA and OVE without a manual export step." },
      { title: "Multi-vehicle orders", body: "A whole purchase run moves as one order, tracked per VIN." },
      { title: "VIN-level tracking", body: "Each unit has its own record, status and proof of delivery." },
      { title: "No handoff lag", body: "Purchase and transport are the same workflow, not two systems." },
    ],
  },
];
