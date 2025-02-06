import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
      },
      keyframes: {
        "reveal-up": {
          "0%": {opacity: "0", transform: "translateY(80%)"},
          "100%": {opacity: "1", transform: "translateY(0)"},
        },
        "reveal-down": {
          "0%": {opacity: "0", transform: "translateY(-80%)"},
          "100%": {opacity: "1", transform: "translateY(0)"},
        },
        "content-blur": {
          "0%": {filter: "blur(0.3rem)"},
          "100%": {filter: "blur(0)"},
        },
      },
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
    },
  },
  plugins: [animate],
} satisfies Config;

// no i don't like those. i made a list of the ones i want on the website. first things first, i want this one instead of the grid:
