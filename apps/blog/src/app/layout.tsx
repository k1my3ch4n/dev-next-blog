import type { Metadata } from "next";

import "./globals.css";
import "@repo/components/index.css";

import { ApolloWrapper, Nav } from "@shared/ui";
import PaperLogyFont from "./fonts";
import { ThemeProvider, ScrollIndicator } from "@repo/components";
import { SEO } from "@shared/config";

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
    canonical: SEO.siteUrl,
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
          <Nav />
          <ScrollIndicator />
          <ApolloWrapper>
            <main className="max-w-content mx-auto px-5 pt-24 pb-20">
              {children}
            </main>
          </ApolloWrapper>
          <footer className="py-8 text-center border-t border-[var(--border)]">
            <p className="text-xs text-[var(--ink-muted)]">
              &copy; 2026 김예찬 · Built with Next.js
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
