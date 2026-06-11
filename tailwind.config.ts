import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        panel: "var(--panel)",
        accent: "var(--accent)",
        brand: {
          ink: "#08111f",
          midnight: "#091225",
          cyan: "#65e7ff",
          blue: "#6d7cff",
          peach: "#ff9f7a",
          gold: "#f4c978"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        glow: "0 20px 80px rgba(101, 231, 255, 0.18)",
        card: "0 24px 80px rgba(4, 10, 24, 0.32)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
