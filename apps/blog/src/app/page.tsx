import { getHomeData } from "@shared/api";
import { Blog } from "@widgets/home-blog";
import { Extra } from "@widgets/home-extra";
import { Introduce } from "@widgets/home-introduce";
import { Projects } from "@widgets/home-projects";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data, error } = await getHomeData();

  if (error) {
    console.error("Home page prefetch error:", error);
  }

  return (
    <>
      <Introduce />
      <Projects />
      <Blog posts={data.posts} />
      <Extra />
    </>
  );
}
