import { notFound } from "next/navigation";
import { getPostData } from "@shared/api";
import { Highlight, Title } from "@repo/components";

import { getFileContents } from "@shared/lib";
import { MdxWrapper, BlogPostingJsonLd } from "@shared/ui";

export const dynamic = "force-dynamic";

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
