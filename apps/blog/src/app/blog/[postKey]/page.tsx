import { notFound } from "next/navigation";
import getHomeData from "@data/getHomeData";
import getPostData from "@data/getPostData";
import { Highlight, Title } from "@repo/components";

import { getFileContents } from "@utils/fileUtils";
import MdxWrapper from "@components/MdxWrapper";
import { BlogPostingJsonLd } from "@components/JsonLd";

export const revalidate = 3600;

export async function generateStaticParams() {
  const { data } = await getHomeData();

  return data.posts
    .filter((post) => post.postKey && !post.externalUrl)
    .map((post) => ({ postKey: post.postKey! }));
}

type BlogPostParams = Promise<{ postKey?: string }>;

export default async function BlogPostPage({
  params,
}: {
  params: BlogPostParams;
}) {
  const { postKey } = await params;

  const { data, error } = await getPostData(postKey);

  if (error) {
    notFound();
  }

  const { title, tags } = data.post;

  const { fileContents, isFound } = await getFileContents({ postKey });

  if (!isFound) {
    notFound();
  }

  return (
    <>
      <BlogPostingJsonLd title={title} postKey={postKey ?? ""} tags={tags} />
      <Title title={title} />
      <div className="mt-[10px] mb-[20px]">
        {tags.map((tag) => (
          <Highlight key={tag} className="mr-[4px]">
            {tag}
          </Highlight>
        ))}
      </div>
      <MdxWrapper source={fileContents} />
    </>
  );
}
