import {
  Divider,
  HomeButtonWrapper,
  ScrollToTopButton,
  Title,
} from "@repo/components";
import TagList from "./_components/TagList";
import PostList from "./_components/PostList";
import TagProvider from "./_components/TagProvider";
import getBlogData from "@data/getBlogData";

export const revalidate = 60; // 60초마다 데이터 갱신

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
