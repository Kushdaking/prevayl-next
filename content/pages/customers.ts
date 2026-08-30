import type { MarketingPageContent } from "./types";

/** Live copy from prevaylos.com/customers */
export const customers: MarketingPageContent = {
  slug: "customers",
  eyebrow: "Customers",
  title: "Built for the people who move the cars.",
  lead: "Brokerages, dealer groups and wholesalers run their whole operation on Prevayl \u2014 dispatch through accounting \u2014 without the duct-taped stack.",
  description: "Who Prevayl is for: brokerages, dealer groups, wholesalers, and owner-operators expanding into brokerage.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "Book a Demo", href: "/contact" },
  sections: [
    {
      heading: "Who it's for",
      bullets: [
        "Brokerages that have outgrown the load-board-plus-QuickBooks stack",
        "Owner-operators expanding into brokerage",
        "Dealer groups or used-car wholesalers booking their own transports",
        "Anyone who's been running auto transport on duct tape and is ready for a real platform",
      ],
      paragraphs: [
        "This was built by an operator who ran dispatch at two major auto transport companies and got tired of software that had never moved a car. If you move vehicles for a living and the tools are slowing you down, it's for you.",
      ],
    },
    {
      heading: "How it works",
      body: "From call to dispatch.",
      features: [
        { n: "01", title: "Book a call", body: "Twenty minutes on your operation: monthly volume, how you dispatch today, where the money leaks. No slide deck, no discovery-call theater." },
        { n: "02", title: "See it on your lanes", body: "We load your real lanes and vehicle mix so you are looking at your own operation in the platform, not a generic demo tenant with made-up VINs." },
        { n: "03", title: "Onboard", body: "Your carrier network, lane rates, customer rate matrix and dealer portal config. We import your shipment history so the pricing engine has something to work from on day one." },
        { n: "04", title: "Dispatch", body: "Most brokerages are moving real loads within a week. Your dispatchers, carriers, dealers and accounting all working in the same system." },
      ],
      cols: 2,
    },
    {
      heading: "FAQ",
      features: [
        { title: "What does it cost?", body: "It depends on your volume, how many users you need, and which modules you run. We price it on a call so you are not paying for a tier that does not match your operation." },
        { title: "Is there a commitment?", body: "No annual contract required. Month-to-month works. We would rather keep the account because the platform earns it than because a contract traps you." },
        { title: "What counts as a brokerage?", body: "Any business that moves vehicles for customers \u2014 traditional brokerages, dealer groups booking their own transports, wholesalers with regular auction-to-lot volume." },
        { title: "We're small. Are we the right fit?", body: "Yes. A broker moving 50 cars a month is exactly who this is built for. The platform scales up, but it was designed by someone dispatching real loads." },
        { title: "Can we bring our existing data?", body: "Yes. Carriers, customers and historical orders import directly. Your shipment history feeds the lane pricing engine." },
        { title: "How long does onboarding take?", body: "Most brokerages are dispatching inside a week. Data import, carrier network setup and portal configuration happen with us on the call." },
      ],
      cols: 2,
    },
  ],
  finalCta: {
    title: "Ready to move?",
    lead: "Get started in under 10 minutes. Pricing is built around your volume.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Book a Demo", href: "/contact" },
  },
};
