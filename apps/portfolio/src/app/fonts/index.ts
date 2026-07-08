import localFont from "next/font/local";

const PaperLogyFont = localFont({
  src: [
    {
      path: "./Paperlogy-4Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Paperlogy-5Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Paperlogy-6SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Paperlogy-7Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Paperlogy-8ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Paperlogy-9Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-paperlogy",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export default PaperLogyFont;
