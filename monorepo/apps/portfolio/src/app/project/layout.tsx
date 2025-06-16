import type { Metadata } from "next";
import HomeButtonWrapper from "@components/HomeButtonWrapper";
import { ScrollToTopButton } from "@repo/components";

export const metadata: Metadata = {
  title: "김예찬's Project",
  description: "김예찬's Project",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeButtonWrapper />
      {children}
      <ScrollToTopButton />
    </>
  );
}
