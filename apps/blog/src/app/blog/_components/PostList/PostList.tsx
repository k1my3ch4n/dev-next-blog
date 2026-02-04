"use client";

import { Divider, Header, Highlight, ImageBox } from "@repo/components";
import { useState, useMemo } from "react";
import useTagContext from "../../_hook/useTagContext";
import { useRouter } from "next/navigation";
import { BLOG_THUMBNAIL } from "@constants/blog";
import { PostData } from "@fixtures/posts";

interface PostListProps {
  posts: PostData[];
}

const PostList = ({ posts }: PostListProps) => {
  const router = useRouter();

  const { selectedTag } = useTagContext();

  const [orderBy, setOrderBy] = useState<"DESC" | "ASC">("DESC");

  const filteredPosts = useMemo(() => {
    let result = [...posts];

    if (selectedTag) {
      result = result.filter((post) => post.tags.includes(selectedTag));
    }

    result.sort((a, b) => (orderBy === "DESC" ? b.id - a.id : a.id - b.id));

    return result;
  }, [posts, selectedTag, orderBy]);

  const handleOrderClick = (orderBy: "DESC" | "ASC") => {
    setOrderBy(orderBy);
  };

  return (
    <>
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

      {filteredPosts.map(
        ({ id, title, tags, postKey, externalUrl, thumbnailKey }) => {
          const handleClick = () => {
            if (externalUrl) {
              window.open(externalUrl, "_blank", "noopener,noreferrer");
            } else if (postKey) {
              router.push(`/blog/${postKey}`);
            }
          };

          const imageKey = thumbnailKey || postKey;
          const ThumbnailImage = imageKey ? BLOG_THUMBNAIL[imageKey] : null;

          return (
            <div
              className="flex mt-[20px] cursor-pointer rounded-[10px] shadow-inner-border"
              key={postKey || `external-${id}`}
              onClick={handleClick}
            >
              {ThumbnailImage && (
                <ImageBox
                  wrapperClassName="mr-[20px]"
                  imageClassName="rounded-[10px]"
                  Image={ThumbnailImage}
                  width="200px"
                  height="150px"
                />
              )}
              <div className="flex flex-col">
                <Header size="m">{title}</Header>
                <div className="mt-[10px] mb-[22px]">
                  {tags?.map((tag: string) => (
                    <Highlight className="mr-[5px]" key={tag}>
                      {tag}
                    </Highlight>
                  ))}
                </div>
              </div>
            </div>
          );
        },
      )}
    </>
  );
};

export default PostList;
