import type { Metadata } from "next";

import "./globals.css";
import "@repo/components/index.css";

import ApolloWrapper from "@components/ApolloWrapper";
import WrapperLayout from "@components/WrapperLayout";
import PaperLogyFont from "./fonts";

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
        <ApolloWrapper>
          <WrapperLayout>{children}</WrapperLayout>
        </ApolloWrapper>
      </body>
    </html>
  );
}
