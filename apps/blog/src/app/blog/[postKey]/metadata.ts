import prefetchPostData from "@prefetcher/prefetchPostData";

interface BlogPostParams {
  postKey?: string;
}

export async function generateMetadata({ params }: { params: BlogPostParams }) {
  const { postKey } = params;

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
