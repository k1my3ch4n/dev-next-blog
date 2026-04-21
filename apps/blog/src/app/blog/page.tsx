import { ScrollToTopButton } from "@repo/components";
import { TagList, TagProvider } from "@features/tag-filter";
import { PostList } from "@features/post-list";
import { getBlogData } from "@shared/api";
import { HomeButtonWrapper } from "@shared/ui";

export const revalidate = 3600;

export default async function BlogListPage() {
  const { data, error } = await getBlogData();

  if (error) {
    console.error("Blog list page prefetch error:", error);
  }

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
          <div className="stat-val">{data.posts.length}</div>
          <div className="stat-label">게시글</div>
        </div>
        <div className="stat-cell">
          <div className="stat-val">{data.tags.length}</div>
          <div className="stat-label">태그</div>
        </div>
        <div className="stat-cell">
          <div className="stat-val" style={{ fontSize: "1rem" }}>
            2026.03
          </div>
          <div className="stat-label">최근 업데이트</div>
        </div>
      </div>

      <TagProvider>
        <TagList tags={data.tags} />
        <PostList posts={data.posts} />
      </TagProvider>
      <ScrollToTopButton />
    </>
  );
}
