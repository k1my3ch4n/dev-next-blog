import { getHomeData } from "@shared/api";
import { Blog } from "@widgets/home-blog";
import { Extra } from "@widgets/home-extra";
import { Hackathon } from "@widgets/home-hackathon";
import { Introduce } from "@widgets/home-introduce";
import { Projects } from "@widgets/home-projects";

export const revalidate = false;

export default async function Home() {
  const { data, error } = await getHomeData();

  if (error) {
    console.error("Home page prefetch error:", error);
  }

  return (
    <>
      <Introduce />
      <Projects />
      <Hackathon />
      <Blog posts={data.posts} />
      <Extra />
    </>
  );
}
