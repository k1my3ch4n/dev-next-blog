import type { Metadata } from "next";
import { SEO } from "@shared/config";

export const metadata: Metadata = {
  title: "쇼케이스",
  description: "지금까지 만든 프로젝트와 사이드 프로젝트를 모아봤습니다.",
  openGraph: {
    type: "website",
    url: `${SEO.siteUrl}/showcase`,
    title: `쇼케이스 | ${SEO.siteName}`,
    description: "지금까지 만든 프로젝트와 사이드 프로젝트를 모아봤습니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: `쇼케이스 | ${SEO.siteName}`,
    description: "지금까지 만든 프로젝트와 사이드 프로젝트를 모아봤습니다.",
  },
  alternates: {
    canonical: `${SEO.siteUrl}/showcase`,
  },
};

export default function ShowcaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
