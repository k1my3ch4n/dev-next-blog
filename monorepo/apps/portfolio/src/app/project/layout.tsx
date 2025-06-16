import type { Metadata } from "next";
import HomeButtonWrapper from "@/components/HomeButtonWrapper";
import { ScrollToTopButton } from "@repo/components";

export const metadata: Metadata = {
  title: "project",
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
