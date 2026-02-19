import type { Metadata } from "next";

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

const THEME_SCRIPT = `(function(){try{var m=document.cookie.match(/blog-theme=(\\w+)/);if(m&&m[1]==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className={PaperLogyFont.className}>
        <ThemeProvider cookieName="blog-theme">
          <ThemeToggle />
          <ApolloWrapper>
            <WrapperLayout>{children}</WrapperLayout>
          </ApolloWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
