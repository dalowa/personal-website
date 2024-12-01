import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xs": "390px",
    },
    extend: {
      colors: {
        m_black: "var(--milesblack)",
        m_red: "var(--milesred)",
        m_white: "var(--mileswhite)",
      },
    },
  },
  plugins: [],
} satisfies Config;
