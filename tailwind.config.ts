import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1966C9",
          dark: "#124C97",
          light: "#EAF3FF",
        },
        whatsapp: "#25D366",
        surface: "#F7FAFC",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "navy-sm": "0 10px 30px rgba(25,102,201,0.08)",
        "navy-md": "0 18px 50px rgba(25,102,201,0.12)",
        "navy-lg": "0 26px 70px rgba(18,76,151,0.16)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "translateY(0)" },
          "50%": { opacity: "0.5", transform: "translateY(6px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-soft": "pulse-soft 1.8s ease-in-out infinite",
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
