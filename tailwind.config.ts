import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#050412",
          800: "#000c18",
          700: "#021325",
          600: "#00a7b9",
        },
        gray: {
          600: "#44505e",
          700: "#0e1b2a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
