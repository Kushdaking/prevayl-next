# Prevayl Next.js Template

**Target stack:** Next.js App Router + Tailwind CSS + TypeScript

Editable marketing site matching the Prevayl redesign (deep navy `#0a0f1a` + gold `#C9A84C` + glassmorphism).

## Quick start

```bash
git clone https://github.com/Kushdaking/prevayl-next.git
cd prevayl-next
npm install
npm run dev
# -> http://localhost:3000
```

## How to edit

### All copy & data -> `content/site.ts`

```ts
hero.lines = ["THE AI-NATIVE", "OPERATING SYSTEM", "FOR AUTO TRANSPORT"]
hero.liveLoads = [{ lane: "Detroit, MI -> Atlanta, GA", status: "IN TRANSIT", tone: "gold" }]
pricing.plans = [ ... ]
nav = [ { label: "Platform", href: "/platform", children: [...] } ]
brand.mc — removed: Prevayl holds no MC or DOT authority
```

**Day-to-day edits = only `content/site.ts`.**

### Brand colors -> `tailwind.config.ts`

```ts
colors: { prevayl: { gold: "#C9A84C", navy: "#0a0f1a" } }
```

### Glass utilities -> `app/globals.css`

### Add a page (App Router)

```bash
mkdir -p app/solutions/brokers
# create app/solutions/brokers/page.tsx
```

Header + Footer come from `app/layout.tsx`.

## File map

```
prevayl-next/
├── app/           layout, page, pricing, platform/agents
├── content/       site.ts  <- ALL editable copy
├── components/    home, layout, ui
├── tailwind.config.ts
└── package.json
```

## Deploy (Cloudflare / your stack)

```bash
npm run build
```

Connect this repo to Cloudflare Pages or Vercel as a Next.js project.

---

(c) 2026 Prevayl Inc. | Howell, MI
