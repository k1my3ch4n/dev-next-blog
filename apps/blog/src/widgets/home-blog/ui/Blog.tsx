import Link from "next/link";
import type { PostData } from "@shared/types";
import { BlogCard } from "@shared/ui/BlogCard";

interface BlogProps {
  posts: PostData[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <section className="w-full mb-16">
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <p className="section-label">Blog</p>
          <h2 className="section-title">블로그</h2>
        </div>
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--accent)] no-underline hover:underline"
        >
          전체보기 →
        </Link>
      </div>

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
