import sharedConfig from "@repo/tailwind-config/tailwindConfig";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [sharedConfig],
};
