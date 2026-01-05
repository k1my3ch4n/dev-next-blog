import getHomeData from "@data/getHomeData";
import Blog from "./_components/Blog";
import Extra from "./_components/Extra";
import Introduce from "./_components/Introduce";
import Projects from "./_components/Projects";

export const revalidate = 60; // 60초마다 데이터 갱신

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
