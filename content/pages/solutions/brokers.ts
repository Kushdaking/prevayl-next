import type { MarketingPageContent } from "../types";

/** Live copy from https://prevaylos.com/solutions/brokers */
export const solutionsBrokers: MarketingPageContent = {
  slug: "solutions/brokers",
  eyebrow: "Solutions \u00b7 For Brokers",
  title: "One platform for every broker job.",
  goldTitle: true,
  lead: "No duct tape. Auto transport brokers are running their load board, QuickBooks, a carrier rate spreadsheet, and email chains simultaneously. Prevayl replaces all of it \u2014 dispatch, billing, compliance, and customer communication in one place.",
  description: "Prevayl for auto transport brokers: real-time load board, AI carrier matching, QuickBooks sync, per-VIN pricing, Stripe carrier payouts.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Book a Demo", href: "/contact" },
  sections: [
    {
      heading: "The problems every broker knows.",
      body: "You've been here.",
      features: [
        { title: "You're running three systems to do one job.", body: "A load board for loads. QuickBooks for invoices. A spreadsheet for carrier rates. Email for everything else. When a customer asks for a status update, you're alt-tabbing between all of them." },
        { title: "Your per-seat TMS bill grows with every hire.", body: "Most TMS vendors charge per dispatcher seat plus a platform fee. Add a second dispatcher and your monthly cost jumps $150-300. Add an accounting person and it jumps again. You're paying for headcount, not throughput." },
        { title: "Carrier vetting is a manual Friday afternoon job.", body: "Someone has to check the FMCSA database, pull the COI, verify the BOC-3. If nobody remembered, you find out when a claim comes in. Insurance lapsed in February. Load ran in March." },
        { title: "Payment timing hurts your carrier relationships.", body: "Paper checks or ACH batch runs take 5-15 business days. Carriers who need to get paid to fill their tank for the next run start avoiding your loads. Your network shrinks quietly." },
      ],
      cols: 2,
    },
    {
      heading: "One platform. Dispatch, billing, compliance.",
      body: "Prevayl consolidates the tools a broker actually needs: a real-time load board with AI carrier matching, an invoicing and AR module that syncs to QuickBooks Online, carrier document tracking, and a customer-facing VIN tracker. You stop context-switching and start dispatching.",
      bullets: [
        "Load board with AI-suggested carrier matching \u2014 top 3 per load based on lane history and rate",
        "Auto-invoice on delivery: branded PDF sent within 60 seconds of BOL signature",
        "AR aging and QuickBooks Online 2-way sync \u2014 your bookkeeper stays in QB, you stay in Prevayl",
        "Customer portal: dealers track their own VINs, your phone stops ringing for status",
      ],
    },
    {
      heading: "Per-VIN pricing. No seat tax.",
      body: "Prevayl charges per VIN moved, not per seat. Your second dispatcher, your accounting person, your ops manager \u2014 they all get access. The cost scales with your volume, not your headcount. The AI tier activates at 200 orders/month at $1/VIN \u2014 you're paying for capability, not login count.",
      bullets: [
        "Unlimited seat access at every plan tier",
        "$1/VIN AI pricing activates at 200 orders/month",
        "Pricing set to your volume and the modules you run \u2014 not a fixed tier",
        "No per-seat add-ons for accounting or ops roles",
      ],
    },
    {
      heading: "Carrier vetting runs itself.",
      body: "MC/DOT status, insurance currency, BOC-3 verification \u2014 checked automatically at every load assignment. Insurance expiry alerts fire at 60, 30, and 7 days before a policy lapses. If a carrier's authority goes inactive between loads, the next assignment is blocked and your dispatcher sees exactly why.",
      bullets: [
        "FMCSA check at every assignment \u2014 not just onboarding",
        "Insurance expiry alerts: 60/30/7 days, to both you and the carrier",
        "BOC-3 verification at onboarding and scheduled renewal",
        "Assignment block if MC is inactive or insurance is expired",
      ],
    },
    {
      heading: "Stripe Connect: carriers paid in 1-2 days.",
      body: "Carrier payouts run through Stripe Connect. Once delivery is confirmed and the BOL is signed, the payout initiates. Standard bank transfer timing is 1-2 business days. Carriers who know they'll be paid fast take your loads over someone else's 15-day check cycle.",
      bullets: [
        "1-2 business day carrier payouts via Stripe Connect",
        "No per-carrier ACH setup \u2014 bank account linked once in onboarding",
        "Deduction workflow: damage or accessorial deductions require a reason code, audit trail preserved",
        "Carrier payout history visible in the carrier portal \u2014 no where's-my-payment calls",
      ],
    },
  ],
  finalCta: {
    title: "MOVE MORE. TRACK ALL OF IT.",
    lead: "Pricing is built around your volume and the modules you run. Get started in under 10 minutes.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
