import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f1f4f9",
          100: "#dde4ed",
          200: "#b8c6d8",
          300: "#849bb9",
          400: "#506d96",
          500: "#33517c",
          600: "#274166",
          700: "#1f3354",
          800: "#162542",
          900: "#0c1a35",
          950: "#070f24",
        },
        zap: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f5b800",
          600: "#d99e00",
          700: "#b37d00",
          800: "#8c5e00",
          900: "#6b4700",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(245,184,0,0.18), transparent 50%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "scan": "scan 2.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "orbit-cw": "orbitCw 12s linear infinite",
        "orbit-ccw": "orbitCcw 16s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(0%)", opacity: "0.4" },
          "50%": { transform: "translateY(100%)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", filter: "blur(40px)" },
          "50%": { opacity: "1", filter: "blur(60px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        borderGlow: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(245, 184, 0, 0)" },
          "50%": { boxShadow: "0 0 20px rgba(245, 184, 0, 0.25)" },
        },
        orbitCw: {
          "from": { transform: "rotate(0deg) translateX(60px) rotate(0deg)" },
          "to": { transform: "rotate(360deg) translateX(60px) rotate(-360deg)" },
        },
        orbitCcw: {
          "from": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          "to": { transform: "rotate(-360deg) translateX(80px) rotate(360deg)" },
        },
      },
      boxShadow: {
        "glow-yellow": "0 0 60px rgba(245, 184, 0, 0.35)",
        "glow-yellow-sm": "0 0 24px rgba(245, 184, 0, 0.45)",
        "glow-navy": "0 0 60px rgba(12, 26, 53, 0.5)",
        "premium": "0 20px 60px -20px rgba(0,0,0,0.5), 0 8px 24px -12px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
