import type { MarketingPageContent } from "./types";

export const aboutOverview: MarketingPageContent = {
  slug: "about",
  eyebrow: "About",
  title: "Why Prevayl exists.",
  lead: "Why Prevayl exists, who we serve, and the values that shape every decision we make about what to build.",
  description: "Prevayl Inc. — the Michigan company building the AI-native operating system for auto transport. MC #01813480 · DOT #4562182.",
  primaryCta: { label: "Company", href: "/about/company" },
  secondaryCta: { label: "Leadership", href: "/about/leadership" },
  sections: [
    {
      features: [
        { title: "Company", body: "Prevayl Inc. is a Michigan S-Corp building the operating system the auto-transport industry has been patching around for years. Holding company: Cars2Go LLC, MC #01813480." },
        { title: "Leadership", body: "The operators behind the platform. Founders, advisors, and the team building Prevayl day-to-day." },
        { title: "Careers", body: "Join us. Open roles, hiring philosophy, and what it's like to build with operators-first as the constraint." },
      ],
    },
    {
      heading: "Operators first",
      paragraphs: [
        "Every product decision starts with: does this help a dispatcher hit dispatch faster, or a carrier get paid faster, or a dealer answer a customer faster? If the answer is no, it doesn't ship.",
      ],
    },
    {
      heading: "Trackable. Measurable. Repeatable. Scalable.",
      body: "If a process can't be tracked, it can't be measured. If it can't be measured, it can't be improved. If it can't be improved repeatably, it can't scale. Every workflow on Prevayl gets built against this lens.",
    },
    {
      heading: "Free for the truckers",
      body: "Owner-operators and small fleets pay nothing on Prevayl. Driver app, BOL, IFTA, payouts — all free. The brokers and dealers who profit from the lane are the ones who pay for the tooling. Not the truckers.",
    },
  ],
  finalCta: {
    title: "Talk to the people who built it.",
    primary: { label: "Contact", href: "/contact" },
    secondary: { label: "Company", href: "/about/company" },
  },
};

export const aboutCompany: MarketingPageContent = {
  slug: "about/company",
  eyebrow: "About · Company",
  title: "Built by operators. Based in Michigan.",
  lead: "Prevayl Inc. is a Michigan S-Corp building the operating system the auto-transport industry has been patching around for years. Holding company: Cars2Go LLC, MC #01813480.",
  description: "Prevayl Inc. — Michigan S-Corp. Holding company Cars2Go LLC, MC #01813480. DOT #4562182. Howell, MI.",
  sections: [
    {
      heading: "How we go to market",
      paragraphs: [
        "We don't have a marketing budget that out-shouts every TMS vendor with a Vegas booth. We don't have a sales team trained to talk around the product.",
        "What we have: a clear thesis about what's wrong with auto transport tooling, a working platform built by people who lived inside the problem, and pricing worked out on a call against your real volume instead of a rate card built for someone else.",
        "If you want a vendor that treats you like a ticket number, there are plenty to choose from. If you want software built by someone who has actually dispatched the loads, that's the whole point.",
      ],
    },
    {
      heading: "What we won't do",
      bullets: [
        "We don't inflate our numbers",
        "We don't put fake logos on a marketing page",
        "What we show you is what the platform actually does",
      ],
    },
    {
      heading: "Vertical, not horizontal",
      body: "Auto transport is not \"freight.\" It's VINs, not pallets. It's Manheim lot codes, not warehouse addresses. It's eBOL with photo inspection, not a generic document upload. We build for the specifics of this vertical, not a horizontal TMS.",
    },
  ],
  finalCta: {
    title: "Book a call on your volume and lanes.",
    primary: { label: "Contact", href: "/contact" },
  },
};

export const aboutLeadership: MarketingPageContent = {
  slug: "about/leadership",
  eyebrow: "About · Leadership",
  title: "Small founding team. Deep industry roots.",
  lead: "We built Prevayl because we lived the problem.",
  description: "The founding team behind Prevayl — auto transport operators turned builders.",
  sections: [
    {
      features: [
        {
          title: "Kenny",
          body: "Kenny worked his way to senior operations leadership at two of the largest auto transport companies in the country before walking out to build the platform they couldn't. He has run dispatch, managed carrier networks, and watched brokerages duct-tape together four tools to do one job. Prevayl is the fix he couldn't find anywhere else.",
        },
        {
          title: "Spencer",
          body: "Spencer leads revenue. He joined as a founding partner with a focus on broker and dealer sales, building the go-to-market motion and scaling outbound to brokerages that are tired of the tools they're using.",
        },
      ],
      cols: 2,
    },
    {
      body: "We're a small founding team and that's intentional. When we hire, it will be for people who understand auto transport or who have shipped serious software — preferably both.",
    },
  ],
  finalCta: {
    title: "Want to work with us?",
    primary: { label: "Careers", href: "/about/careers" },
    secondary: { label: "Contact", href: "/contact" },
  },
};

export const aboutCareers: MarketingPageContent = {
  slug: "about/careers",
  eyebrow: "About · Careers",
  title: "No open roles right now — and that's honest.",
  lead: "We're not hiring for roles that don't exist. When we are, we'll post them here.",
  description: "Work at Prevayl. Small team. Real problems. Auto transport technology that actually fits how the industry works.",
  sections: [
    {
      paragraphs: [
        "Prevayl is a small team building the operating system for auto transport. We ship fast, keep the team intentionally lean, and everyone here works close to the product and the operators using it.",
        "We don't have open roles listed right now. That's not a placeholder — it's just honest. When we hire, it will be for people who understand how auto transport actually works or who have shipped serious software in a logistics context. Ideally both.",
        "If you're a senior engineer or a BD/sales person who is frustrated with how broken auto transport tech is and wants to be early on something real — send us a note. We read them.",
      ],
    },
    {
      heading: "How we work",
      bullets: [
        "You don't need to have dispatched freight, but you need to be able to learn it fast and care about getting it right.",
        "We have no room for process owners or headcount-for-headcount's-sake. Everyone here ships.",
        "If you're in eng, you write production code. If you're in sales, you close.",
        "We don't do long email threads or hedged opinions. If something is broken, say it clearly.",
      ],
    },
    {
      heading: "How to reach out",
      body: "No open roles right now, but we're always willing to hear from people who are serious. Send a short intro — what you do, what you've shipped, and why auto transport.",
    },
  ],
  finalCta: {
    title: "Send a short intro.",
    primary: { label: "Contact", href: "/contact" },
  },
};
