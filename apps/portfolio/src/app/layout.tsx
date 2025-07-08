import type { Metadata } from "next";

import "./globals.css";
import "@repo/components/index.css";

import PaperLogyFont from "./fonts";
import { Layout } from "@repo/components";

export const metadata: Metadata = {
  title: "김예찬's Portfolio",
  description: "김예찬's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PaperLogyFont.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
