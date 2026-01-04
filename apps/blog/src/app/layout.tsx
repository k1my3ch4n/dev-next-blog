import type { Metadata } from "next";
import { cookies } from "next/headers";

import "./globals.css";
import "@repo/components/index.css";

import ApolloWrapper from "@components/ApolloWrapper";
import WrapperLayout from "@components/WrapperLayout";
import PaperLogyFont from "./fonts";
import { ThemeProvider, ThemeToggle } from "@repo/components";
import { SEO } from "@/constants/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: SEO.title,
    template: `%s | ${SEO.siteName}`,
  },
  description: SEO.description,
  authors: [{ name: SEO.author }],
  creator: SEO.author,
  openGraph: {
    type: "website",
    locale: SEO.locale,
    url: SEO.siteUrl,
    siteName: SEO.siteName,
    title: SEO.title,
    description: SEO.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    creator: SEO.twitterHandle,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="ko" className={theme === "dark" ? "dark" : ""}>
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
