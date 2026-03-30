import { Divider, ScrollToTopButton, Title } from "@repo/components";
import { TagList, TagProvider } from "@features/tag-filter";
import { PostList } from "@features/post-list";
import { getBlogData } from "@shared/api";
import { HomeButtonWrapper } from "@shared/ui";

export const dynamic = "force-dynamic";

export default async function BlogListPage() {
  const { data, error } = await getBlogData();

  if (error) {
    console.error("Blog list page prefetch error:", error);
  }

  return (
    <>
      <HomeButtonWrapper />
      <Title title="📘 K1MY3CH4N's Blog" />
      <Divider />
      <TagProvider>
        <TagList tags={data.tags} />
        <PostList posts={data.posts} />
      </TagProvider>
      <ScrollToTopButton />
    </>
  );
}
