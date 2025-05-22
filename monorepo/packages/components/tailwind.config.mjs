import sharedConfig from "@repo/tailwind-config/tailwindConfig";

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [sharedConfig],
  content: ["./src/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
