import type { Metadata } from "next";

import "./reset.css";
import "./globals.css";

import WrapperLayout from "@/components/WrapperLayout";
import { PaperLogyFont } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "김예찬's Blog",
  description: "김예찬's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PaperLogyFont.className}>
        <WrapperLayout>{children}</WrapperLayout>
      </body>
    </html>
  );
}
