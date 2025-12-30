import type { Metadata } from "next";
import { cookies } from "next/headers";

import "./globals.css";
import "@repo/components/index.css";

import PaperLogyFont from "./fonts";
import { Layout } from "@repo/components";
import { ThemeProvider } from "@components/ThemeProvider";
import ThemeToggle from "@components/ThemeToggle";

const BASE_URL = "https://portfolio.k1my3ch4n.xyz";

export const metadata: Metadata = {
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
