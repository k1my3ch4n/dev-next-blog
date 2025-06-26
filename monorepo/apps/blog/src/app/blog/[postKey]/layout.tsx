import HomeButtonWrapper from "@components/HomeButtonWrapper";
import { ScrollToTopButton } from "@repo/components";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeButtonWrapper url="/blog" />
      {children}
      <ScrollToTopButton />
    </>
  );
}
