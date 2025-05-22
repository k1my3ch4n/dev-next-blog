import sharedConfig from "@repo/tailwind-config/tailwindConfig";

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [sharedConfig],
  content: ["./src/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#808080",
        "highlight-background": "rgba(207, 207, 207, 0.79)",
        "highlight-color": "#eb5757",
      },
    },
  },
  plugins: [],
};

export default config;
