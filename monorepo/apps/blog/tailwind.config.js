/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/app/blog/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inner-border": "0 2px 2px 2px rgba(0, 0, 0, 0.16)",
        tag: "0 0 0 1px #264db1 inset;",
      },
    },
  },
  plugins: [],
};

export default config;
