/**
 * ===========================================================
 * PREVAYL SITE CONTENT - edit everything here
 * ===========================================================
 *
 * Single source of truth for copy, links, pricing, routes, and nav.
 * Components import from here. Target: Next.js App Router + Tailwind
 */

export const brand = {
  name: "PREVAYL",
  tagline: "The AI-native operating system for auto transport.",
  year: "2026",
  mc: "MC#01813480",
  dot: "DOT#4562182",
  location: "Howell, MI",
  email: "hello@prevaylos.com",
} as const;

/**
 * Platform includes core modules + advanced tools.
 * load-optimizer, route-optimizer, flolens, pin-protocol KEPT
 * (live product pages with real copy).
 */
export const nav = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Dispatch", href: "/platform/dispatch" },
      { label: "AI", href: "/platform/ai" },
      { label: "Agentic AI", href: "/platform/agentic-ai" },
      { label: "Business Intelligence", href: "/platform/business-intelligence" },
      { label: "Carriers", href: "/platform/carriers" },
      { label: "Compliance", href: "/platform/compliance" },
      { label: "Meet the Agents", href: "/platform/agents" },
      { label: "Load Optimizer", href: "/platform/load-optimizer" },
      { label: "Route Optimizer", href: "/platform/route-optimizer" },
      { label: "FloLens", href: "/platform/flolens" },
      { label: "PIN Protocol", href: "/platform/pin-protocol" },
      { label: "Overview", href: "/platform" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Brokers", href: "/solutions/brokers" },
      { label: "Carriers", href: "/solutions/carriers" },
      { label: "Dealers", href: "/solutions/dealers" },
      { label: "Auctions / Wholesale", href: "/solutions/wholesale" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Customers", href: "/customers" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Documentation", href: "/resources/docs" },
      { label: "Security", href: "/resources/security" },
      { label: "Blog", href: "/resources/blog" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about/company" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Auto Transport | TMS | CRM | OS",
  lines: ["THE AI-NATIVE", "OPERATING SYSTEM", "FOR AUTO TRANSPORT"],
  gradientLine: 1,
  sub: "TMS, CRM, accounting, dispatch, AI - one platform. One subscription. Free for carriers. Predictable per-VIN economics for brokers.",
  highlightInSub: "Free for carriers.",
  primaryCta: { label: "Get Started Free", href: "/register" },
  secondaryCta: { label: "Tour the Platform", href: "/platform" },
  note: "Pricing built to your volume | No card required",
  liveStats: { activeLoads: 47, aiMatch: "94%" },
  liveLoads: [
    { lane: "Detroit, MI -> Atlanta, GA", status: "IN TRANSIT", tone: "gold" as const },
    { lane: "Chicago, IL -> Miami, FL", status: "DISPATCHED", tone: "blue" as const },
    { lane: "Phoenix, AZ -> Dallas, TX", status: "DELIVERED", tone: "green" as const },
  ],
} as const;

export const features = {
  title: "AUTO TRANSPORT ACTUALLY WORKS.",
  lead: "Dispatch, orders, customers, accounting, and operations live in one place. No more duct-taping a load board with QuickBooks and seventeen spreadsheets.",
  items: [
    {
      title: "One living platform",
      body: "17 workflows, 15 specialized bots. Auto-pricing, auto-matching, auto-vetting, auto-invoicing. Activates at 200 orders/month.",
    },
    {
      title: "Always free for carriers",
      body: "Owner-operators and small fleets pay nothing. Driver app, BOL, IFTA, payouts - all free. We make money from brokers, not from the people moving freight.",
    },
    {
      title: "Per-VIN, not per-load",
      body: "$1 per VIN. That is it. No per-load fees, no per-mile cuts, no surprise quarterlies. Predictable economics that scale with you.",
    },
  ],
} as const;

export const roles = {
  title: "BUILT FOR EVERYONE",
  titleGold: "IN THE LANE.",
  lead: "Replace your duct-taped stack with one tool. Auto transport has four roles - Prevayl serves all of them.",
  items: [
    {
      n: "01",
      title: "Brokers",
      href: "/solutions/brokers",
      body: "AI carrier matching, per-VIN pricing, full TMS + accounting. Replace load board + QuickBooks.",
    },
    {
      n: "02",
      title: "Carriers",
      href: "/solutions/carriers",
      body: "Always free. Driver app, BOL, IFTA, Stripe payouts in 1-2 days. $0/mo forever.",
    },
    {
      n: "03",
      title: "Dealers",
      href: "/solutions/dealers",
      body: "White-label portal. Real-time VIN tracking. Stop the phone tag. Your brand, your domain.",
    },
    {
      n: "04",
      title: "Auctions",
      href: "/solutions/wholesale",
      body: "Manheim | ADESA | OVE. Auction lot to buyer location in one workflow.",
    },
  ],
} as const;

export const modules = {
  title: "ONE PLATFORM.",
  titleGold: "EVERY WORKFLOW.",
  lead: "Seven modules. Zero context-switching. Live operational view across dispatch, accounting, compliance, AI matching, and portals.",
  tourHref: "/platform",
  items: [
    { href: "/platform/dispatch", title: "Dispatch", body: "Live load board, AI top-3 matching, drag-and-drop, eBOL, photo inspections" },
    { href: "/platform/ai", title: "AI", body: "17 workflows | 15 bots | pricing, matching, vetting" },
    { href: "/platform/carriers", title: "Carriers", body: "Free forever. Driver app, Stripe payouts, IFTA, BOL" },
    { href: "/platform/compliance", title: "Compliance", body: "DOT, FMCSA, BOC-3, BOL, full audit log" },
    { href: "/platform/agents", title: "AI Agents", body: "Margin Guard | Carrier Match | Pricer | Status Bot" },
    { href: "/platform/business-intelligence", title: "BI", body: "11 live metrics, anomaly engine, risk scoring" },
    { href: "/platform/load-optimizer", title: "Load Optimizer", body: "Deck-aware packing for car haulers" },
  ],
  metric: { value: "847", label: "active loads" },
} as const;

export const pricing = {
  title: "SIMPLE. PER-VIN.",
  titleGold: "PREDICTABLE.",
  lead: "Free for carriers. Always. Per-VIN for brokers. Volume pricing available.",
  plans: [
    {
      name: "Solo",
      range: "5-25 cars/month",
      features: ["Free for carriers", "Dispatch + load board", "eBOL + inspection photos", "Basic invoicing + AR"],
      featured: false,
      cta: "Start Free Trial",
      href: "/register",
    },
    {
      name: "Pro",
      range: "25-200 cars/month",
      features: [
        "Everything in Solo",
        "AI Control Center (17 workflows)",
        "Full accounting (replaces QuickBooks)",
        "DamageDesk + Stripe Connect",
        "QBO / Xero 2-way sync",
      ],
      featured: true,
      badge: "MOST POPULAR",
      cta: "Start Free Trial",
      href: "/register",
    },
    {
      name: "Growth",
      range: "200-1,000 cars/month",
      features: [
        "Everything in Pro",
        "Dedicated onboarding",
        "Custom-branded dispatcher UI",
        "Advanced analytics + BI",
        "SSO + priority support",
      ],
      featured: false,
      cta: "Start Free Trial",
      href: "/register",
    },
  ],
  footnote: "Annual prepay 10-15% off | Volume pricing set on a call",
  fullComparisonHref: "/pricing",
} as const;

export const finalCta = {
  title: "READY TO MOVE?",
  lead: "Get started in under 10 minutes. Pricing is built around your volume and the modules you run.",
  primary: { label: "Start Free Trial", href: "/register" },
  secondary: { label: "Book a 30-min Demo", href: "/contact?type=demo" },
} as const;

export const footer = {
  columns: [
    {
      title: "Platform",
      links: [
        { href: "/platform/dispatch", label: "Dispatch" },
        { href: "/platform/agents", label: "AI Agents" },
        { href: "/platform/ai", label: "AI" },
        { href: "/platform/compliance", label: "Compliance" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { href: "/solutions/brokers", label: "Brokers" },
        { href: "/solutions/carriers", label: "Carriers" },
        { href: "/solutions/dealers", label: "Dealers" },
        { href: "/solutions/wholesale", label: "Auctions" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/pricing", label: "Pricing" },
        { href: "/about", label: "About" },
        { href: "/resources/docs", label: "Docs" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ],
} as const;
