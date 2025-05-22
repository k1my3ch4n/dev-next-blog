import sharedConfig from "@repo/tailwind-config/tailwindConfig";

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [sharedConfig],
  content: ["./src/*.{ts,tsx}"],
  theme: {
    extend: {
      padding: {
        "3px": "3px",
      },
    },
  },
  plugins: [],
};

export default config;
