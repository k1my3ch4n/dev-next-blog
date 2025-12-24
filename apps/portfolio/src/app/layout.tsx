import type { Metadata } from "next";
import { cookies } from "next/headers";

import "./globals.css";
import "@repo/components/index.css";

import PaperLogyFont from "./fonts";
import { Layout } from "@repo/components";
import { ThemeProvider } from "@components/ThemeProvider";
import ThemeToggle from "@components/ThemeToggle";

export const metadata: Metadata = {
  title: "김예찬's Portfolio",
  description: "김예찬's Portfolio",
  alternates: {
    canonical: "./",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("portfolio-theme");
  const theme = themeCookie?.value === "dark" ? "dark" : "light";

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body className={PaperLogyFont.className}>
        <ThemeProvider initialTheme={theme}>
          <ThemeToggle />
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
