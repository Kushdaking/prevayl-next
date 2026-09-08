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
      { label: "Dispatcher Bot", href: "/platform/dispatcher-bot" },
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
  sub: "TMS, CRM, accounting, dispatch, AI - one platform. Built around your operation. Contact Sales to discuss your team, volume and workflows.",
  highlightInSub: "Built around your operation.",
  primaryCta: { label: "Contact Sales", href: "/contact?type=sales" },
  secondaryCta: { label: "Tour the Platform", href: "/platform" },
  note: "Talk through your operation with our sales team",
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
      body: "17 workflows, 15 specialized bots. Auto-pricing, auto-matching, auto-vetting, auto-invoicing. Discuss automation scope with Sales.",
    },
    {
      title: "Built for carriers",
      body: "Connect loads, driver paperwork and payment records. Contact Sales to discuss your operation.",
    },
    {
      title: "A fit for your operation",
      body: "Contact Sales to discuss your team, vehicle volume, workflows and account requirements.",
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
      body: "AI carrier matching, connected order workflows, full TMS + accounting. Replace load board + QuickBooks.",
    },
    {
      n: "02",
      title: "Carriers",
      href: "/solutions/carriers",
      body: "Driver workflows, BOL, trip records and payment visibility. Contact Sales.",
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
    { href: "/platform/carriers", title: "Carriers", body: "Driver workflows, payment visibility, trip records and BOL" },
    { href: "/platform/compliance", title: "Compliance", body: "DOT, FMCSA, BOC-3, BOL, full audit log" },
    { href: "/platform/agents", title: "AI Agents", body: "Margin Guard | Carrier Match | Pricer | Status Bot" },
    { href: "/platform/business-intelligence", title: "BI", body: "11 live metrics, anomaly engine, risk scoring" },
    { href: "/platform/load-optimizer", title: "Load Optimizer", body: "Deck-aware packing for car haulers" },
  ],
  metric: { value: "847", label: "active loads" },
} as const;

export const pricing = {
  title: "LET’S TALK.",
  titleGold: "YOUR OPERATION.",
  lead: "Contact Sales to discuss your team, monthly vehicle volume, workflows and integrations.",
  plans: [],
  footnote: "Pricing and account terms are provided directly by our sales team.",
  fullComparisonHref: "/contact?type=sales",
} as const;

export const finalCta = {
  title: "READY TO MOVE?",
  lead: "Get started in under 10 minutes. Pricing is built around your volume and the modules you run.",
  primary: { label: "Contact Sales", href: "/contact?type=sales" },
  secondary: { label: "Book a 30-min Demo", href: "/contact?type=demo" },
} as const;

export const footer = {
  columns: [
    {
      title: "Platform",
      links: [
        { href: "/platform/dispatch", label: "Dispatch" },
        { href: "/platform/dispatcher-bot", label: "Dispatcher Bot" },
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

