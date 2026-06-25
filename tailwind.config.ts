import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6f7ff",
          100: "#b3e5ff",
          200: "#80d4ff",
          300: "#4dc2ff",
          400: "#1ab0ff",
          500: "#0099e6",
          600: "#0077b3",
          700: "#005580",
          800: "#00334d",
          900: "#001a26",
        },
        utility: {
          water: "#00C2FF",
          electricity: "#FFD000",
          grid: "#6C5CE7",
          revenue: "#00D084",
          alert: "#FF4D4F",
        },
        bg: {
          primary: "#0B1220",
          secondary: "#0F1A2E",
          card: "#111B2E",
        },
      },

      fontFamily: {
  sans: ["Arial", "Helvetica", "sans-serif"],
  display: ["Arial", "Helvetica", "sans-serif"],
  mono: ["monospace"],
},

      boxShadow: {
        glow: "0 0 30px rgba(0, 153, 230, 0.25)",
        card: "0 10px 30px rgba(0,0,0,0.3)",
      },

      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },

      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
        pulseGlow: "pulseGlow 2s infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0,153,230,0.3)" },
          "50%": { boxShadow: "0 0 25px rgba(0,153,230,0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;