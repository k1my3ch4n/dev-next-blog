"use client";

import useGetPosts from "@/apis/useGetPosts";
import useGetTags from "@/apis/useGetTags";
import Tag from "@/components/Tag";
import { BLOG_THUMBNAIL } from "@/constants/blog";
import useSelectedTag from "@/hooks/useSelectedTag";
import {
  Divider,
  Header,
  Highlight,
  HomeButton,
  ImageBox,
  Title,
} from "@repo/components";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BlogListPage() {
  const router = useRouter();
  const { tagsData } = useGetTags();

  const { selectedTag, handleSelected } = useSelectedTag();

  const [orderBy, setOrderBy] = useState<"DESC" | "ASC">("DESC");

  // todo : 페이지네이션 추가
  const {
    isLoading: isGetPostsLoading,
    isError: isGetPostsError,
    postsData,
  } = useGetPosts({ tag: selectedTag, orderBy });

  const goHomeButtonClick = () => {
    router.push("/");
  };

  const handleOrderClick = (orderBy: "DESC" | "ASC") => {
    setOrderBy(orderBy);
  };

  return (
    <>
      <HomeButton onClick={goHomeButtonClick} />
      <Title title="📘 K1MY3CH4N's Blog" />
      <Divider />
      <div className="flex justify-center m-[20px] flex-wrap">
        {tagsData.map((tag) => {
          const isSelected = tag === selectedTag;

          return (
            <Tag
              key={tag}
              tag={tag}
              isSelected={isSelected}
              onClick={() => handleSelected(tag)}
            />
          );
        })}
      </div>

      {/* todo : 컴포넌트 분리? */}
      <div className="flex justify-end items-center w-full">
        <div
          className={`m-[4px] cursor-pointer ${orderBy === "DESC" ? "font-bold cursor-default" : ""}`}
          onClick={() => handleOrderClick("DESC")}
        >
          최신 순
        </div>
        <span className="my-0 mx-[8px]">/</span>
        <div
          className={`m-[4px] cursor-pointer ${orderBy === "ASC" ? "font-bold cursor-default" : ""}`}
          onClick={() => handleOrderClick("ASC")}
        >
          오래된 순
        </div>
      </div>

      <Divider />
      {/* todo : loading, error 컴포넌트 만들기 */}
      {isGetPostsLoading && <div>로딩중입니다 ... </div>}
      {isGetPostsError && <div>에러가 발생했습니다 . </div>}
      {postsData?.map(
        (
          {
            title,
            tags,
            postKey,
          }: { title: string; tags: string[]; postKey: string },
          index
        ) => {
          const handleClick = (projectName: string) => {
            router.push(`/blog/${projectName}`);
          };

          return (
            <div
              className="flex mt-20px cursor-pointer"
              key={index}
              onClick={() => handleClick(postKey)}
            >
              <ImageBox
                wrapperClassName="mr-[20px]"
                // todo : box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.16);
                imageClassName="rounded-[10px]"
                Image={BLOG_THUMBNAIL[postKey]}
                width="200px"
                height="150px"
              />
              <div className="flex flex-col">
                <Header size="m">{title}</Header>
                <div className="mt-[10px] mb-[22px]">
                  {tags?.map((tag: string) => (
                    <Highlight className="ml-[5px]" key={tag}>
                      {tag}
                    </Highlight>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      )}
      {/* <ScrollToTopButton /> */}
    </>
  );
}
