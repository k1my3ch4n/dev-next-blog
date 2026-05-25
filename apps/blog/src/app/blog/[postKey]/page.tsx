import { notFound } from "next/navigation";
import { getPostData } from "@shared/api";
import { getPosts } from "@shared/lib";
import { isPostVisible } from "@entities/post";
import { Highlight, Title } from "@repo/components";

import { getFileContents } from "@shared/lib";
import { MdxWrapper, BlogPostingJsonLd } from "@shared/ui";

export const revalidate = false;

export async function generateStaticParams() {
  try {
    const posts = await getPosts("", "DESC");
    return posts
      .filter((post) => isPostVisible(post) && post.postKey !== null)
      .map((post) => ({ postKey: post.postKey as string }));
  } catch {
    return [];
  }
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
    <article className="max-w-[760px] mx-auto">
      <BlogPostingJsonLd title={title} postKey={postKey ?? ""} tags={tags} />
      <header className="pb-[32px] border-b border-[var(--border)]">
        <Title title={title} />
        <div className="mt-[14px] flex flex-wrap gap-[6px]">
          {tags.map((tag) => (
            <Highlight key={tag}>{tag}</Highlight>
          ))}
        </div>
      </header>
      <MdxWrapper source={fileContents} />
    </article>
  );
}
