import { Divider, ScrollToTopButton, Title } from "@repo/components";
import TagList from "./_components/TagList";
import PostList from "./_components/PostList";
import TagProvider from "./_components/TagProvider";
import prefetchBlogData from "@prefetcher/prefetchBlogData";
import HomeButtonWrapper from "@components/HomeButtonWrapper";

export default async function BlogListPage() {
  await prefetchBlogData();

  return (
    <>
      <HomeButtonWrapper />
      <Title title="📘 K1MY3CH4N's Blog" />
      <Divider />
      <TagProvider>
        <TagList />
        <PostList />
      </TagProvider>
      <ScrollToTopButton />
    </>
  );
}
