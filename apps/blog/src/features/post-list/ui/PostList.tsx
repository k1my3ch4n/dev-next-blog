"use client";

import { Divider, Header, Highlight, ImageBox } from "@repo/components";
import { useState, useMemo } from "react";
import { useTagContext } from "@features/tag-filter";
import { BLOG_THUMBNAIL } from "@entities/post";
import type { PostData } from "@shared/types";

interface PostListProps {
  posts: PostData[];
}

const PostList = ({ posts }: PostListProps) => {
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
      <nav className="flex justify-end items-center w-full" aria-label="정렬">
        <button
          className={`m-[4px] cursor-pointer bg-transparent border-none ${orderBy === "DESC" ? "font-bold cursor-default" : ""}`}
          onClick={() => handleOrderClick("DESC")}
          aria-pressed={orderBy === "DESC"}
        >
          최신 순
        </button>
        <span className="my-0 mx-[8px]">/</span>
        <button
          className={`m-[4px] cursor-pointer bg-transparent border-none ${orderBy === "ASC" ? "font-bold cursor-default" : ""}`}
          onClick={() => handleOrderClick("ASC")}
          aria-pressed={orderBy === "ASC"}
        >
          오래된 순
        </button>
      </nav>

      <Divider />

      {filteredPosts.map(
        ({ id, title, tags, postKey, externalUrl, thumbnailKey }) => {
          const imageKey = thumbnailKey || postKey;
          const ThumbnailImage = imageKey ? BLOG_THUMBNAIL[imageKey] : null;
          const href =
            externalUrl ?? (postKey ? `/blog/${postKey}` : undefined);
          const target = externalUrl ? "_blank" : undefined;
          const rel = externalUrl ? "noopener noreferrer" : undefined;

          return (
            <article
              className="flex mt-[20px] rounded-[10px] shadow-inner-border"
              key={postKey || `external-${id}`}
            >
              <a
                className="flex cursor-pointer no-underline text-inherit w-full"
                href={href}
                target={target}
                rel={rel}
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
                  <footer className="mt-[10px] mb-[22px]">
                    {tags?.map((tag: string) => (
                      <Highlight className="mr-[5px]" key={tag}>
                        {tag}
                      </Highlight>
                    ))}
                  </footer>
                </div>
              </a>
            </article>
          );
        },
      )}
    </>
  );
};

export default PostList;
