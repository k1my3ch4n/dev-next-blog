import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "게시글 목록",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
