"use client";

import useGetPosts from "@apis/useGetPosts";
import { BLOG_THUMBNAIL } from "@constants/blog";
import { Divider, Link, PageBox, Title } from "@repo/components";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();
  const { postsData } = useGetPosts({});

  const wrapperClassName = "flex justify-around flex-wrap gap-[10px] w-full";

  return (
    <div className="w-full mb-[20px]">
      <div className="w-full flex justify-between items-baseline">
        <Title title="블로그" />
        <Link link="/blog">전체보기</Link>
      </div>
      <Divider />
      <div className={wrapperClassName}>
        {postsData?.slice(0, 4).map((data, index) => {
          const { title, postKey } = data;

          const handleClick = (postKey: string) => {
            router.push(`/blog/${postKey}`);
            window.scrollTo(0, 0);
          };

          return (
            <PageBox
              key={index}
              Thumbnail={BLOG_THUMBNAIL[postKey]}
              title={title}
              onClick={() => handleClick(postKey)}
              width="400px"
              height="300px"
              imageClassName="rounded-t-[10px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
