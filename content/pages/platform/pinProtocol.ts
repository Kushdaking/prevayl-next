import type { MarketingPageContent } from "../types";

/**
 * Live copy from prevaylos.com/platform/pin-protocol
 * Note: not in main marketing nav — kept as deep-link / platform module page.
 */
export const pinProtocol: MarketingPageContent = {
  slug: "platform/pin-protocol",
  bandImage: "/brand/bands/platform-pin-protocol.jpg",
  eyebrow: "Platform · PIN Protocol",
  title: "High-value handoffs that cannot be faked.",
  lead: "Cryptographic context binding for high-value vehicle handoffs — so the person releasing or receiving a VIN is the person who was authorized, with an audit trail that holds up later.",
  description: "PIN Protocol secure handoff for auto transport pickup and delivery.",
  primaryCta: { label: "Start Free Trial", href: "/register" },
  secondaryCta: { label: "See platform", href: "/platform" },
  sections: [
    {
      heading: "Trust at the curb",
      bullets: [
        "PIN-based confirmation at critical handoff moments",
        "Tied to the order and the carrier on file",
        "Evidence lands on the same record as eBOL and photos",
        "Fewer ‘who has the keys’ threads",
      ],
    },
  ],
  finalCta: {
    title: "Handoffs that leave a trail.",
    primary: { label: "Start Free Trial", href: "/register" },
    secondary: { label: "Contact", href: "/contact" },
  },
};
