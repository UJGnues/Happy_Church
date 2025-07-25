import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#23252b",
          dark: "#1a1c21",
        },
        pink: {
          DEFAULT: "#f2a1b9",
          light: "#f5b8ca",
        },
        blue: {
          DEFAULT: "#6d96ac",
          light: "#85a6b9",
        },
        gray: {
          background: "#fbfbfb",
          text: "#96a3a0",
          border: "#e5e5e5",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)", "sans-serif"],
        serif: ["var(--font-noto-serif)", "serif"],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
