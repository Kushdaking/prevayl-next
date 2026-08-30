export type FeatureItem = {
  title: string;
  body: string;
  n?: string;
};

export type Section = {
  heading?: string;
  body?: string;
  paragraphs?: string[];
  bullets?: string[];
  features?: FeatureItem[];
  cols?: 2 | 3 | 4;
};

export type Cta = {
  label: string;
  href: string;
  variant?: "gold" | "ghost";
};

export type MarketingPageContent = {
  slug: string;
  title: string;
  goldTitle?: boolean;
  eyebrow?: string;
  lead: string;
  description?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  sections?: Section[];
  finalCta?: {
    title: string;
    lead?: string;
    primary: Cta;
    secondary?: Cta;
  };
};

export type DocPageContent = {
  slug: string;
  title: string;
  description?: string;
  /** Markdown-ish body as structured blocks */
  blocks: DocBlock[];
};

export type DocBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; lang?: string; text: string }
  | { type: "note"; text: string };
