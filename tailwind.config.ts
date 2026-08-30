import type { Config } from "tailwindcss";

/**
 * PREVAYL Tailwind theme — locked redesign system
 * Edit colors here; they flow through every component.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prevayl: {
          gold: "#C9A84C",
          "gold-dark": "#A67C32",
          "gold-light": "#E8D48B",
          navy: "#0a0f1a",
          "navy-2": "#0d121e",
          "navy-3": "#111827",
          "navy-4": "#1e2d40",
          slate: "#3D5470",
          soft: "#c8d8e8",
          muted: "#9a9894",
          success: "#10b981",
          info: "#60a5fa",
          warning: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glass:
          "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        gold: "0 0 40px rgba(201,168,76,0.25)",
        "gold-sm": "0 0 20px rgba(201,168,76,0.15)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
