import type { PostData } from "@shared/types";
import BlogCard from "./BlogCard";

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
        <a
          href="/blog"
          className="text-sm font-medium text-[var(--accent)] no-underline"
        >
          전체보기 →
        </a>
      </div>

      <div className="flex flex-col gap-3">
        {posts
          .slice(0, 4)
          .map(({ id, title, postKey, externalUrl, thumbnailKey, tags }) => (
            <BlogCard
              key={postKey || `external-${id}`}
              id={id}
              postKey={postKey}
              externalUrl={externalUrl}
              thumbnailKey={thumbnailKey}
              title={title}
              tags={tags}
            />
          ))}
      </div>
    </section>
  );
};

export default Blog;
