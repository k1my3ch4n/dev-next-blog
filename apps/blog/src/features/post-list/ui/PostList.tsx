"use client";

import type { PostData } from "@shared/types";
import useFilteredPosts from "../hooks/useFilteredPosts";
import OrderByControl from "./OrderByControl";
import PostTimeline from "./PostTimeline";
import BlogCard from "@widgets/home-blog/ui/BlogCard";

interface PostListProps {
  posts: PostData[];
}

const PostList = ({ posts }: PostListProps) => {
  const { filteredPosts, orderBy, setOrderBy } = useFilteredPosts(posts);

  return (
    <>
      <OrderByControl
        count={filteredPosts.length}
        orderBy={orderBy}
        onOrderChange={setOrderBy}
      />

      <hr
        className="border-none mb-6"
        style={{ height: "1px", background: "var(--border)" }}
      />

      <div className="flex gap-5">
        <PostTimeline count={filteredPosts.length} />

        <div className="flex-1 flex flex-col gap-3">
          {filteredPosts.map((post) => (
            <article key={post.postKey || `external-${post.id}`}>
              <BlogCard
                id={post.id}
                postKey={post.postKey}
                externalUrl={post.externalUrl}
                thumbnailKey={post.thumbnailKey}
                title={post.title}
                tags={post.tags}
              />
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
