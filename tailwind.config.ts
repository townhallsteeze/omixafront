import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#18201B",
        ink: "#1E2520",
        electric: "#11875D",
        electricHover: "#0D6F4D",
        royal: "#D96C38",
        violet: "#7A3E65",
        mist: "#F7F4EC",
        muted: "#66736A"
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(17, 135, 93, 0.24)",
        card: "0 20px 60px rgba(30, 37, 32, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
