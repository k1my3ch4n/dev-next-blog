import getPostData from "@data/getPostData";
import HomeButtonWrapper from "@components/HomeButtonWrapper";
import { ScrollToTopButton } from "@repo/components";
import { SEO } from "@/constants/seo";

export const revalidate = 60; // 60초마다 데이터 갱신

type BlogPostParams = Promise<{ postKey?: string }>;

export async function generateMetadata({ params }: { params: BlogPostParams }) {
  const { postKey } = await params;

  const { data, error } = await getPostData(postKey);

  if (error || !data?.post?.title) {
    return {
      title: "게시글을 찾을 수 없습니다.",
      description: "요청하신 게시글을 찾을 수 없습니다.",
    };
  }

  const postData = data.post;
  const postUrl = `${SEO.siteUrl}/blog/${postKey}`;
  const description = `${postData.title} - ${SEO.siteName}`;

  return {
    title: postData.title,
    description,
    authors: [{ name: SEO.author }],
    openGraph: {
      type: "article",
      url: postUrl,
      title: postData.title,
      description,
      siteName: SEO.siteName,
      locale: SEO.locale,
      authors: [SEO.author],
      tags: postData.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description,
      creator: SEO.twitterHandle,
    },
    alternates: {
      canonical: postUrl,
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
