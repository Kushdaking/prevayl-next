import type { MarketingPageContent } from "../types";

export const pinProtocol: MarketingPageContent = {
  slug: "platform/pin-protocol",
  eyebrow: "Platform · PIN Protocol",
  title: "PIN Protocol",
  lead: "Secure handoff and identity verification for vehicle pickup and delivery. Keep chain of custody tight without adding another disconnected app.",
  description: "PIN Protocol — secure vehicle handoff and verification on Prevayl.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  sections: [
    {
      heading: "Handoff you can audit",
      body: "PIN Protocol ties verification events to the order and VIN record — so pickup and delivery authorization lives with the same eBOL and photo trail your compliance team already uses.",
      features: [
        { title: "Order-linked verification", body: "PINs and confirmations attach to the load, not a side channel." },
        { title: "Works with driver app", body: "Carriers complete handoff steps in the same free app they already use." },
        { title: "Audit-ready", body: "Timestamps and outcomes stored with the order for claims and reviews." },
      ],
    },
  ],
  finalCta: {
    title: "Tighten pickup and delivery handoffs.",
    primary: { label: "Start Free Trial", href: "/register" },
  },
};
