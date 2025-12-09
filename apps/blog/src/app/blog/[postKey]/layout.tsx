import prefetchPostData from "@prefetcher/prefetchPostData";
import HomeButtonWrapper from "@components/HomeButtonWrapper";
import { ScrollToTopButton } from "@repo/components";

export const dynamic = "force-dynamic";

const BASE_URL = "https://blog.k1my3ch4n.xyz";

type BlogPostParams = Promise<{ postKey?: string }>;

export async function generateMetadata({ params }: { params: BlogPostParams }) {
  const { postKey } = await params;

  const { data } = await prefetchPostData(postKey);

  if (!data || !data.post) {
    return {
      title: "게시글을 찾을 수 없습니다.",
      description: "요청하신 게시글을 찾을 수 없습니다.",
    };
  }

  const postData = data.post;

  return {
    title: `${postData.title}`,
    description: `${postData.title} 에 대한 상세 정보입니다.`,
    alternates: {
      canonical: `${BASE_URL}/blog/${postKey}`,
    },
  };
}

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
