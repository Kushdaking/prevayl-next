import type { MarketingPageContent } from "./types";

/** Live copy from prevaylos.com/resources* */
export const resourcesOverview: MarketingPageContent = {
  slug: "resources",
  eyebrow: "Resources",
  title: "LEARN. INTEGRATE. SCALE.",
  goldTitle: true,
  lead: "Industry insights, security documentation, and platform reference for operators and developers.",
  description: "Prevayl resources \u2014 documentation, security, blog.",
  sections: [
    {
      features: [
        { title: "Documentation", body: "Getting started, modules, API, webhooks, and Zapier. Platform reference for operators and developers." },
        { title: "Security", body: "How we protect your data: access control, infrastructure, availability, vendor management." },
        { title: "Blog", body: "Thinking out loud about auto transport \u2014 operations, technology, economics, and the unglamorous work of running the lane." },
      ],
      cols: 3,
    },
  ],
  finalCta: {
    title: "Start with the docs.",
    primary: { label: "Documentation", href: "/resources/docs" },
    secondary: { label: "Security", href: "/resources/security" },
  },
};

export const resourcesBlog: MarketingPageContent = {
  slug: "resources/blog",
  eyebrow: "Resources \u00b7 Blog",
  title: "Thinking out loud about auto transport.",
  lead: "Operations, technology, economics, and the unglamorous work of running the lane. When posts go live, they land here.",
  description: "Prevayl blog \u2014 product and industry notes.",
  sections: [
    {
      body: "Posts are published on the live site as they ship. This redesign keeps the blog index shell \u2014 wire your CMS or MDX collection into this route when ready. Layout stays dense and scannable, not a full-bleed marketing band.",
    },
  ],
};

/**
 * Security \u2014 full live practices from prevaylos.com/resources/security.
 * No invented certifications beyond what the live page states.
 */
export const resourcesSecurity: MarketingPageContent = {
  slug: "resources/security",
  eyebrow: "Resources \u00b7 Security",
  title: "Security at Prevayl",
  lead: "We protect your data with enterprise-grade controls, transparent practices, and continuous monitoring.",
  description: "Prevayl security practices \u2014 access control, infrastructure, availability, vendor management.",
  primaryCta: { label: "Contact", href: "/contact" },
  sections: [
    {
      heading: "Access control",
      bullets: [
        "Role-based access control (RBAC): dispatcher, carrier, dealer, accounting, partner, admin",
        "Row-Level Security (RLS) enforced at the database layer via Supabase",
        "Admin actions require MFA (rolling out Q2 2026)",
        "Least-privilege principle applied to all service accounts",
        "All privileged actions logged with user ID, timestamp, and IP address",
        "Audit logs are insert-only \u2014 no modification or deletion permitted",
        "Logs retained for a minimum of 2 years per SOC 2 requirements",
        "Anomaly alerts for off-hours admin access and mass data exports",
      ],
    },
    {
      heading: "Infrastructure",
      bullets: [
        "Hosted on DigitalOcean (SOC 2 Type II certified) \u2014 US East region",
        "UFW firewall \u2014 only ports 80, 443, 22 publicly accessible",
        "Fail2ban active: SSH brute-force protection",
        "SSH key-only authentication \u2014 password auth disabled",
        "Automated dependency security scanning via GitHub Dependabot",
        "nginx reverse proxy with security headers (HSTS, X-Frame-Options, etc.)",
      ],
    },
    {
      heading: "Availability & resilience",
      bullets: [
        "PM2 process manager with automatic restart on crash",
        "Daily database backups via Supabase (7-day retention, Point-in-Time Recovery)",
        "Uptime monitoring at /api/health",
        "Incident response plan in place (RTO: 4h, RPO: 24h)",
      ],
    },
    {
      heading: "Vendor management",
      bullets: [
        "All subprocessors reviewed for SOC 2 / ISO 27001 compliance",
        "Data processing agreements (DPAs) in place with key vendors",
        "Full subprocessor list maintained at /legal/subprocessors",
      ],
    },
    {
      heading: "Vulnerability disclosure",
      paragraphs: [
        "We welcome responsible disclosure of security vulnerabilities. If you discover a security issue, please email security@prevaylos.com with details of the finding.",
        "We commit to: (1) acknowledging your report within 48 hours, (2) keeping you updated on our remediation progress, and (3) not pursuing legal action against good-faith researchers following responsible disclosure.",
      ],
      body: "Last updated: April 30, 2026 (from live security page).",
    },
  ],
  finalCta: {
    title: "Questions about security?",
    primary: { label: "Contact", href: "/contact" },
  },
};

export const docsIndex: MarketingPageContent = {
  slug: "resources/docs",
  eyebrow: "Resources \u00b7 Documentation",
  title: "Documentation",
  lead: "Platform documentation and integration guides. Customers run modules from day one; API, webhooks, and Zapier are labeled with ship status where the live docs say planned.",
  description: "Prevayl documentation index.",
  sections: [
    {
      features: [
        { title: "Getting started", body: "Create your account, invite your team, run your first load." },
        { title: "Dispatch", body: "Load board, AI matching, eBOL, inspections." },
        { title: "Accounting", body: "AR, AP, GL, invoicing, QBO sync." },
        { title: "Compliance", body: "Broker disclosure, SAFER, insurance, eBOL audit trail." },
        { title: "Dealer portal", body: "White-label customer portal, VIN tracking, roles." },
        { title: "API \u00b7 Webhooks \u00b7 Zapier", body: "Developer integrations \u2014 see each doc for ship status." },
      ],
      cols: 3,
    },
  ],
  finalCta: {
    title: "Start here",
    primary: { label: "Getting started", href: "/resources/docs/getting-started" },
  },
};
