import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        script: ["'Dancing Script'", "cursive"],
      },
      colors: {
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        navy: {
          900: "#0a1628",
          800: "#0d1f3c",
          700: "#112952",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,249,255,0.8) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(14, 165, 233, 0.1)",
        "glass-lg": "0 20px 60px rgba(14, 165, 233, 0.15)",
        "card": "0 4px 20px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 12px 40px rgba(14, 165, 233, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
