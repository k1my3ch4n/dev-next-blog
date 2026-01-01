"use client";

import useGetPosts from "@apis/useGetPosts";
import { BLOG_THUMBNAIL } from "@constants/blog";
import { Divider, Link, PageBox, Title, GRID_LAYOUT } from "@repo/components";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();
  const { postsData } = useGetPosts({});

  const handleClick = (postKey: string) => {
    router.push(`/blog/${postKey}`);
  };

  const cardClassName = "w-full";

  return (
    <div className="w-full mb-[20px]">
      <div className="w-full flex justify-between items-baseline">
        <Title title="블로그" />
        <Link link="/blog">전체보기</Link>
      </div>
      <Divider />
      <div className={GRID_LAYOUT.responsive2Cols}>
        {postsData?.slice(0, 4).map((data) => {
          const { title, postKey } = data;

          return (
            <PageBox
              key={postKey}
              Thumbnail={BLOG_THUMBNAIL[postKey]}
              title={title}
              onClick={() => handleClick(postKey)}
              className={cardClassName}
              imageClassName="rounded-t-[10px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
