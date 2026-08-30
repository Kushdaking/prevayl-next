import type { MarketingPageContent } from "../types";

export const pinProtocol: MarketingPageContent = {
  slug: "platform/pin-protocol",
  bandImage: "/brand/bands/platform-pin-protocol.jpg",
  title: "PIN Protocol — secure handoff without the phone tree.",
  eyebrow: "Platform · PIN Protocol",
  lead: "Identity and proof at pickup and delivery so handoffs stop living in texts and voicemail.",
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
