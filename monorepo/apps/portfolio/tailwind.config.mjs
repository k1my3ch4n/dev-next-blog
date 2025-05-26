import sharedConfig from "@repo/tailwind-config/tailwindConfig";

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [sharedConfig],
  content: [
    "./src/app/**/*.{svg,js,jsx,ts,tsx}",
    "./src/assets/**/*.{svg,js,jsx,ts,tsx}",
  ],
  theme: {},
  plugins: [],
};

export default config;
