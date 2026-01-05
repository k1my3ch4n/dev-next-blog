import { Divider, Link, Title, GRID_LAYOUT } from "@repo/components";
import { PostData } from "@fixtures/posts";
import BlogCard from "./BlogCard";

interface BlogProps {
  posts: PostData[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <div className="w-full mb-[20px]">
      <div className="w-full flex justify-between items-baseline">
        <Title title="블로그" />
        <Link link="/blog">전체보기</Link>
      </div>
      <Divider />
      <div className={GRID_LAYOUT.responsive2Cols}>
        {posts.slice(0, 4).map(({ title, postKey }) => (
          <BlogCard key={postKey} postKey={postKey} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
