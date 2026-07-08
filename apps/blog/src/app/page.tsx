import { getPosts } from "@entities/post";
import { Blog } from "@widgets/home-blog";
import { Extra } from "@widgets/home-extra";
import { Works } from "@widgets/home-works";
import { Introduce } from "@widgets/home-introduce";

export default function Home() {
  const posts = getPosts();

  return (
    <>
      <Introduce />
      <Works />
      <Blog posts={posts} />
      <Extra />
    </>
  );
}
