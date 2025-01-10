import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "poppins"],
      },
      colors: {
        primary: "hsl(228, 56%, 38%)",
        secondary: "#E5E7EB",
        accent: "#F59E0B",
        dark: "#111827",
      },
    },
  },
  plugins: [],
} satisfies Config;
