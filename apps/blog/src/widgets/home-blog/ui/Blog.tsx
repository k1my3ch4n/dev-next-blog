import Link from "next/link";
import type { PostData } from "@shared/types";
import { BlogCard } from "@shared/ui/BlogCard";
import { SectionHeader } from "@repo/components";

interface BlogProps {
  posts: PostData[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <section className="w-full mb-16">
      <SectionHeader
        label="Blog"
        title="블로그"
        className="mb-8"
        action={
          <Link
            href="/blog"
            className="text-sm font-medium text-[var(--accent)] no-underline hover:underline"
          >
            전체보기 →
          </Link>
        }
      />

      <div className="flex flex-col gap-3">
        {posts
          .slice(0, 4)
          .map(({ id, title, postKey, externalUrl, tags, cardTypo }) => (
            <BlogCard
              key={postKey || `external-${id}`}
              id={id}
              postKey={postKey}
              externalUrl={externalUrl}
              title={title}
              tags={tags}
              cardTypo={cardTypo}
            />
          ))}
      </div>
    </section>
  );
};

export default Blog;
