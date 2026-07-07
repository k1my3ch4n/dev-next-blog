import { notFound } from "next/navigation";
import { getPostData } from "@shared/api";
import { Highlight, Title } from "@repo/components";

import { getFileContents } from "@shared/lib";
import { MdxWrapper, BlogPostingJsonLd } from "@shared/ui";
import { BLOG_POSTS } from "@entities/post";
import { TocSidebar, extractHeadings } from "@features/toc";

type BlogPostParams = Promise<{ postKey?: string }>;

export async function generateStaticParams() {
  return BLOG_POSTS
    .filter((post) => post.postKey !== null)
    .map((post) => ({ postKey: post.postKey }));
}

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

  const headings = extractHeadings(fileContents ?? "");

  return (
    <div className="flex gap-12 lg:justify-center items-start">
      <article className="max-w-[760px] w-full mx-auto lg:mx-0">
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
      {headings.length > 0 && (
        <aside className="hidden lg:block sticky top-[80px] w-[200px] shrink-0">
          <TocSidebar headings={headings} />
        </aside>
      )}
    </div>
  );
}
