import { Divider, Link, Title, GRID_LAYOUT } from "@repo/components";
import type { PostData } from "@shared/types";
import BlogCard from "./BlogCard";

interface BlogProps {
  posts: PostData[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <section className="w-full mb-[20px]">
      <header className="w-full flex justify-between items-baseline">
        <Title title="블로그" />
        <Link link="/blog">전체보기</Link>
      </header>
      <Divider />
      <div className={GRID_LAYOUT.responsive2Cols}>
        {posts
          .slice(0, 4)
          .map(({ id, title, postKey, externalUrl, thumbnailKey }) => (
            <BlogCard
              key={postKey || `external-${id}`}
              postKey={postKey}
              externalUrl={externalUrl}
              thumbnailKey={thumbnailKey}
              title={title}
            />
          ))}
      </div>
    </section>
  );
};

export default Blog;
