import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   "light-blue": "#6DE1F4",
    //   "light-purple": "#6757EE",
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-blue": "#6DE1F4",
        "light-cyan": "#F0FCFE",
        "light-purple": "#6757EE",
        "green-contrast": "#26D48C",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
});
export default config;
