import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#0a0f1c",
        primary: "#3b82f6",
        accent: "#38bdf8",
        muted: "#0b1220",
        border: "rgba(255,255,255,0.06)",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(56,189,248,0.15)",
        soft: "0 10px 40px rgba(0,0,0,0.45)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
