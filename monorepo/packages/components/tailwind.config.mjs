import sharedConfig from "@repo/tailwind-config/tailwindConfig";

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [sharedConfig],
  content: ["./src/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#808080",
      },
    },
  },
  plugins: [],
};

export default config;
