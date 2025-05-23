import type { Metadata } from "next";
import "@repo/components/index.css";
import WrapperLayout from "@/components/WrapperLayout";
import { PaperLogyFont } from "./fonts/fonts";

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
        <WrapperLayout>{children}</WrapperLayout>
      </body>
    </html>
  );
}
