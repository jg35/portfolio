import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mono: ["inherit"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "#D2D2D2",
        "green-dark": "#1E251F",
        green: "#365A3B",
        "lime-light": "#DDFFCD",
        lime: "#C1FFA2",
        red: "#FB4769",
        yellow: "#F3F9D5",
      },
    },
  },
  plugins: [],
};
export default config;
