import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "게시글 목록",
  description: "게시글 목록 페이지 입니다.",
  alternates: {
    canonical: "./blog",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
