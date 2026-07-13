import { ScrollToTopButton } from "@repo/components";
import { TagList, TagProvider } from "@features/tag-filter";
import { PostList } from "@features/post-list";
import { getPosts, getAllTags } from "@entities/post";
import { HomeButtonWrapper } from "@shared/ui";

export default function BlogListPage() {
  const posts = getPosts();
  const tags = getAllTags();

  return (
    <>
      <HomeButtonWrapper />

      <div className="text-center mb-8 mt-4">
        <h1 className="text-2xl md:text-3xl font-black">
          📘 K1MY3CH4N&apos;s Blog
        </h1>
      </div>

      <hr
        className="border-none mb-6"
        style={{ height: "1px", background: "var(--border)" }}
      />

      {/* Stat Strip */}
      <div className="stat-strip mb-8">
        <div className="stat-cell">
          <div className="stat-val">{posts.length}</div>
          <div className="stat-label">게시글</div>
        </div>
        <div className="stat-cell">
          <div className="stat-val">{tags.length}</div>
          <div className="stat-label">태그</div>
        </div>
        <div className="stat-cell">
          <div className="stat-val" style={{ fontSize: "1rem" }}>
            2026.07
          </div>
          <div className="stat-label">최근 업데이트</div>
        </div>
      </div>

      <TagProvider>
        <TagList tags={tags} />
        <PostList posts={posts} />
      </TagProvider>
      <ScrollToTopButton />
    </>
  );
}
