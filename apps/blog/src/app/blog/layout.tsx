import type { Metadata } from "next";

const BASE_URL = "https://blog.k1my3ch4n.xyz";

export const metadata: Metadata = {
  title: "게시글 목록",
  description: "게시글 목록 페이지 입니다.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
