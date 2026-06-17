import { getHomeData } from "@shared/api";
import { Blog } from "@widgets/home-blog";
import { Extra } from "@widgets/home-extra";
import { Works } from "@widgets/home-works";
import { Introduce } from "@widgets/home-introduce";

export default async function Home() {
  const { data, error } = await getHomeData();

  if (error) {
    console.error("Home page prefetch error:", error);
  }

  return (
    <>
      <Introduce />
      <Works />
      <Blog posts={data.posts} />
      <Extra />
    </>
  );
}
