import type { Metadata } from "next";
import { SEO } from "@/constants/seo";

export const metadata: Metadata = {
  title: "게시글 목록",
  description: "프론트엔드 개발 관련 게시글 목록입니다.",
  openGraph: {
    type: "website",
    url: `${SEO.siteUrl}/blog`,
    title: `게시글 목록 | ${SEO.siteName}`,
    description: "프론트엔드 개발 관련 게시글 목록입니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: `게시글 목록 | ${SEO.siteName}`,
    description: "프론트엔드 개발 관련 게시글 목록입니다.",
  },
  alternates: {
    canonical: `${SEO.siteUrl}/blog`,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
