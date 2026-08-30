/**
 * Docs sidebar structure.
 *
 * Lives here rather than in DocsShell because DocsShell is a client component.
 * The docs index page is a server component and maps over this list; importing
 * it across that boundary fails the export with "Attempted to call map() from
 * the server but map is on the client".
 */
export const DOCS_NAV = [
  {
    group: "Start",
    items: [{ href: "/resources/docs/getting-started", label: "Getting started" }],
  },
  {
    group: "Modules",
    items: [
      { href: "/resources/docs/dispatch", label: "Dispatch" },
      { href: "/resources/docs/accounting", label: "Accounting" },
      { href: "/resources/docs/compliance", label: "Compliance" },
      { href: "/resources/docs/dealer-portal", label: "Dealer portal" },
    ],
  },
  {
    group: "Developers",
    items: [
      { href: "/resources/docs/api", label: "REST API" },
      { href: "/resources/docs/webhooks", label: "Webhooks" },
      { href: "/resources/docs/zapier", label: "Zapier" },
    ],
  },
] as const;
