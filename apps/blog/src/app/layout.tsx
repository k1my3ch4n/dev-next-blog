import type { Metadata } from "next";
import { cookies } from "next/headers";

import "./globals.css";
import "@repo/components/index.css";

import ApolloWrapper from "@components/ApolloWrapper";
import WrapperLayout from "@components/WrapperLayout";
import PaperLogyFont from "./fonts";
import { ThemeProvider, ThemeToggle } from "@repo/components";

export const metadata: Metadata = {
  title: "김예찬's Blog",
  description: "김예찬's Blog",
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
  const themeCookie = cookieStore.get("blog-theme");
  const theme = themeCookie?.value === "dark" ? "dark" : "light";

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body className={PaperLogyFont.className}>
        <ThemeProvider initialTheme={theme} cookieName="blog-theme">
          <ThemeToggle />
          <ApolloWrapper>
            <WrapperLayout>{children}</WrapperLayout>
          </ApolloWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
