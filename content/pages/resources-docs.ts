import type { DocPageContent } from "./types";

export const docGettingStarted: DocPageContent = {
  slug: "resources/docs/getting-started",
  title: "Getting started",
  description: "Shipped. Get running in 30 minutes. What a new customer does in the first half hour on Prevayl.",
  blocks: [
    { type: "note", text: "SHIPPED \u2014 Get running in 30 minutes." },
    { type: "h2", text: "Create your account" },
    { type: "p", text: "Sign up from the register page with your work email. You'll get a workspace for your brokerage or fleet. Carriers can join free via the driver app without a paid workspace." },
    { type: "h2", text: "Invite your team" },
    { type: "ul", items: ["Add dispatchers, accounting, and admin users from Settings \u2192 Team", "Assign roles: dispatcher, accounting, partner, admin", "Row-level security scopes data to your workspace"] },
    { type: "h2", text: "Connect integrations (optional)" },
    { type: "ul", items: ["QuickBooks Online: Settings \u2192 Integrations \u2192 QuickBooks Online \u2192 Connect (OAuth ~30 seconds)", "Stripe Connect: for carrier payouts", "Auction feeds: Manheim / ADESA / OVE when enabled for your plan"] },
    { type: "h2", text: "Run your first load" },
    { type: "ol", items: ["Create an order with one or more VINs", "Open Dispatch and assign a carrier (or accept an AI suggestion)", "Confirm rate and watch status move through pickup \u2192 in-transit \u2192 delivered", "eBOL and photos attach to the order automatically"] },
    { type: "note", text: "Pricing is built around your volume on a call. Carriers stay free." },
  ],
};

export const docDispatch: DocPageContent = {
  slug: "resources/docs/dispatch",
  title: "Dispatch",
  description: "Shipped dispatch module. The load board, AI carrier matching, BOL workflow, and photo inspections.",
  blocks: [
    { type: "note", text: "SHIPPED \u2014 Dispatch module." },
    { type: "h2", text: "Load board" },
    { type: "p", text: "Active, pending, and completed loads in one filterable view. Color-coded by status, sortable by ETA or margin, with inline notes your team can see." },
    { type: "ul", items: ["Filter by status, carrier, dealer, lane, ETA, margin, or custom fields", "Inline notes with @mentions", "Live map with active loads and carrier locations", "Saved views per user, per role", "Real-time updates without page refresh"] },
    { type: "h2", text: "AI matching" },
    { type: "p", text: "For every load, the AI ranks your network by historical performance on that lane. You see the top 3 \u2014 accept, override, or post wider." },
    { type: "ul", items: ["Lane-level performance scoring", "Auto-vetting: MC, DOT, insurance, BOC-3 at assignment", "Humans always have the final call"] },
    { type: "h2", text: "Inspections and eBOL" },
    { type: "p", text: "Pickup and dropoff capture photos, signature, and timestamp. The BOL is generated, e-signed, and stored on the order." },
    { type: "ul", items: ["Required-photo enforcement on mobile", "eBOL signature capture, FMCSA-oriented workflow", "Auto-archived, searchable, exportable", "DamageDesk when a claim is filed"] },
  ],
};

export const docAccounting: DocPageContent = {
  slug: "resources/docs/accounting",
  title: "Accounting",
  description: "Shipped accounting module. Accounts Receivable, Accounts Payable, General Ledger, invoicing, and QBO sync.",
  blocks: [
    { type: "note", text: "SHIPPED \u2014 Accounting module." },
    { type: "h2", text: "What it covers" },
    { type: "p", text: "Accounts Receivable, Accounts Payable, General Ledger, and P&L in the same system that runs your loads \u2014 so you are not reconciling a TMS export against QuickBooks every Friday." },
    { type: "ul", items: ["Invoice on delivery or on your rules", "Carrier bills and payables", "AR aging and collections visibility", "Two-way QuickBooks Online sync when connected", "DamageDesk chargebacks tied to the order"] },
    { type: "h2", text: "QuickBooks Online" },
    { type: "p", text: "Connect via OAuth under Settings \u2192 Integrations. Invoices, payments, and carrier bills sync according to your mapping \u2014 not a one-way CSV dump." },
  ],
};

export const docCompliance: DocPageContent = {
  slug: "resources/docs/compliance",
  title: "Compliance",
  description: "Shipped compliance. Broker disclosure (49 CFR \u00a7371.113), FMCSA SAFER-oriented workflows, insurance, eBOL audit trail.",
  blocks: [
    { type: "note", text: "SHIPPED \u2014 Compliance." },
    { type: "h2", text: "Broker disclosure" },
    { type: "p", text: "Support for broker disclosure workflows aligned with 49 CFR \u00a7371.113 \u2014 documentation that stays with the order, not a separate binder." },
    { type: "h2", text: "Carrier documents" },
    { type: "ul", items: ["MC / DOT status checks at assignment", "Insurance currency and BOC-3 on file", "Expiry alerts before documents lapse"] },
    { type: "h2", text: "eBOL audit trail" },
    { type: "p", text: "Signatures, photos, and timestamps stored on the order for later claims and audits." },
  ],
};

export const docDealerPortal: DocPageContent = {
  slug: "resources/docs/dealer-portal",
  title: "Dealer portal",
  description: "Shipped dealer portal. White-label, customer-facing portal where dealers track VINs without phone tag.",
  blocks: [
    { type: "note", text: "SHIPPED \u2014 Dealer portal." },
    { type: "h2", text: "White-label" },
    { type: "p", text: "Your logo, domain, and brand colors \u2014 not Prevayl's \u2014 on the portal dealers actually open." },
    { type: "h2", text: "Real-time VIN status" },
    { type: "ul", items: ["In-queue, picked up, in-transit, delivered", "Self-serve visibility without calling dispatch", "Role-based access for manager, runner, accounting"] },
  ],
};

export const docApi: DocPageContent = {
  slug: "resources/docs/api",
  title: "API reference",
  description: "Planned \u00b7 Q3 2026 REST API. Programmatic access to orders, carriers, and status.",
  blocks: [
    { type: "note", text: "PLANNED \u00b7 Q3 2026 \u2014 REST API. Status taken from live docs; not invented." },
    { type: "h2", text: "What the API will cover" },
    { type: "p", text: "Programmatic access to orders, carriers, and status so you can connect Prevayl to internal tools without CSV round-trips." },
    { type: "h2", text: "Auth (planned)" },
    { type: "p", text: "API keys scoped to your workspace. Rotate from Settings when available." },
    { type: "code", lang: "bash", text: "# Example shape (illustrative \u2014 API not generally available yet)\ncurl -H \"Authorization: Bearer $PREVAYL_KEY\" \\\n  https://api.prevaylos.com/v1/orders" },
    { type: "note", text: "Do not treat example paths as a public production contract until the live docs mark the API as shipped." },
  ],
};

export const docWebhooks: DocPageContent = {
  slug: "resources/docs/webhooks",
  title: "Webhooks",
  description: "Planned \u00b7 Q3 2026 webhooks. Subscribe to lifecycle events instead of polling.",
  blocks: [
    { type: "note", text: "PLANNED \u00b7 Q3 2026 \u2014 Webhooks. Status from live docs." },
    { type: "h2", text: "Events (planned)" },
    { type: "ul", items: ["Order created / updated / delivered", "Carrier assigned", "Invoice issued / paid", "Claim opened"] },
    { type: "h2", text: "Delivery" },
    { type: "p", text: "HTTPS endpoints you register. Signed payloads so you can verify origin. Retry with backoff on non-2xx." },
    { type: "code", lang: "json", text: "{\n  \"event\": \"order.delivered\",\n  \"order_id\": \"ord_...\",\n  \"vin\": \"...\"\n}" },
  ],
};

export const docZapier: DocPageContent = {
  slug: "resources/docs/zapier",
  title: "Zapier integration",
  description: "Planned \u00b7 Q3 2026 Zapier integration. Connect Prevayl to 6,000+ apps without custom code.",
  blocks: [
    { type: "note", text: "PLANNED \u00b7 Q3 2026 \u2014 Zapier. Status from live docs." },
    { type: "h2", text: "What it will enable" },
    { type: "p", text: "Connect Prevayl to 6,000+ apps without writing integration code \u2014 Slack, Sheets, CRM tools, and internal ops bots." },
    { type: "h2", text: "Triggers and actions (planned)" },
    { type: "ul", items: ["Triggers: new order, status change, invoice paid", "Actions: create order draft, notify channel, update row"] },
  ],
};

export const docPages: Record<string, DocPageContent> = {
  "getting-started": docGettingStarted,
  dispatch: docDispatch,
  accounting: docAccounting,
  compliance: docCompliance,
  "dealer-portal": docDealerPortal,
  api: docApi,
  webhooks: docWebhooks,
  zapier: docZapier,
};
