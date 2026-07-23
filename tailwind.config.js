/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#d4a017", light: "#f5c842", dark: "#a07810" },
        steel: { DEFAULT: "#8a9bb0", light: "#b8c9d9", dark: "#4a5568" },
        charcoal: { DEFAULT: "#1a1f2e", light: "#232938", dark: "#0f1117" },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "gold-sm": "0 4px 24px rgba(212,160,23,0.2)",
        "gold-md": "0 8px 40px rgba(212,160,23,0.3)",
        card: "0 4px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
