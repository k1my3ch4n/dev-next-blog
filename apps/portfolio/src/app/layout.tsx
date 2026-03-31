import type { Metadata } from "next";

import "./globals.css";
import "@repo/components/index.css";

import PaperLogyFont from "./fonts";
import { ThemeProvider } from "@repo/components";
import { SectionNav } from "@widgets/SectionNav";
import { ScrollIndicator } from "@shared/ui/ScrollIndicator";

const BASE_URL = "https://portfolio.k1my3ch4n.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "김예찬's Portfolio",
    template: "%s | 김예찬's Portfolio",
  },
  description:
    "웹 프론트엔드 개발자 김예찬의 포트폴리오입니다. React, Next.js, TypeScript 등을 활용한 프로젝트들을 소개합니다.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "김예찬's Portfolio",
    title: "김예찬's Portfolio",
    description:
      "웹 프론트엔드 개발자 김예찬의 포트폴리오입니다. React, Next.js, TypeScript 등을 활용한 프로젝트들을 소개합니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "김예찬's Portfolio",
    description:
      "웹 프론트엔드 개발자 김예찬의 포트폴리오입니다. React, Next.js, TypeScript 등을 활용한 프로젝트들을 소개합니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const THEME_SCRIPT = `(function(){try{var m=document.cookie.match(/portfolio-theme=(\\w+)/);if(m&&m[1]==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`;

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
        <ThemeProvider cookieName="portfolio-theme">
          <SectionNav />
          <ScrollIndicator />
          <main className="max-w-content mx-auto px-5 pt-24 pb-20">
            {children}
          </main>
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
