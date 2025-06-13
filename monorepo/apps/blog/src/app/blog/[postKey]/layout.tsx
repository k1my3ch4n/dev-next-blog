import HomeButtonWrapper from "@/components/HomeButtonWrapper";
import prefetchPostData from "@/prefetchers/prefetchPostData";

import fs from "fs/promises";
import path from "path";

interface BlogPostParams {
  postKey?: string;
}

const POSTS_DIRECTORY = path.join(process.cwd(), "src", "posts");

export async function generateStaticParams() {
  const filenames = await fs.readdir(POSTS_DIRECTORY);
  const postKeys = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => filename.replace(/\.(mdx|md)$/, ""));

  return postKeys.map((postKey) => ({ postKey }));
}

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
    openGraph: {
      title: `${postData.title}`,
      type: "article",
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
    </>
  );
}
