import HomeButtonWrapper from "@components/HomeButtonWrapper";
import { ScrollToTopButton } from "@repo/components";

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
