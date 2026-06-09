import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFF3F1",
          100: "#FFE3DE",
          200: "#FFC7BD",
          300: "#FF9E8C",
          400: "#F86A52",
          500: "#E63E2B",
          600: "#C81E2D",
          700: "#A11321",
          800: "#7E0F1A",
          900: "#5E0B13",
        },
        ink: {
          DEFAULT: "#1B1B1F",
          soft: "#3A3A40",
          muted: "#6B6B73",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(200, 30, 45, 0.18)",
        card: "0 18px 50px -20px rgba(27, 27, 31, 0.25)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #E63E2B 0%, #C81E2D 45%, #8E1119 100%)",
        "brand-radial": "radial-gradient(circle at 30% 20%, #F86A52 0%, #C81E2D 55%, #7E0F1A 100%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.8s ease forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
