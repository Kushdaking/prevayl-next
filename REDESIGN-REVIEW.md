# Prevayl marketing redesign
Review build based on ea1e9a9. Live marketing and dispatcher production were not deployed or edited.

## Scope
41 existing marketing/documentation routes, homepage below the existing hero, and a new branded not-found page.
Product imagery moved toward the top of product pages; duplicated shots removed; image expansion added.
AI Bots has a keyboard-operable roster and explicit sample walkthroughs.
Dispatcher Bot has expandable workflow stages.
Contact now sends the JSON contract expected by the existing backend; all submissions disabled outside prevaylos.com / www.prevaylos.com.
Docs retain their content and gain mobile navigation. Existing footer edit preserved.

## Protected hero
Hero.tsx, its Band component, content/site.ts, globals.css, tailwind.config.ts and hero-4.webp remain byte-for-byte unchanged. Added styles are scoped to rebuilt sections.
Header adds keyboard focus access and mobile sign-in without changing desktop visual layout.

## Evidence and limits
See VALIDATION.json and the build log. Static rendering/type checking, links, image paths, duplicate shot checks and protected-file hashes are checked.
No live transactional/contact submission tests were performed. No orders, messages or fixtures were created.
Existing platform captures are used; illustrative bot data is labeled. Screenshots are historical captures, not live metrics.
This is a marketing rebuild, not remediation of the separate platform audit. No guarantees that prior operational/security findings are fixed.
Some inherited plan, feature and documentation copy still needs product-owner confirmation before public release. The security and AI pages avoid unsupported blanket guarantees.
Production contact API can return success even when storage/email fail; frontend integration alone does not fix that backend issue.
