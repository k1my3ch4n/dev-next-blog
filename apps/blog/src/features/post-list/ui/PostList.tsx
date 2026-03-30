"use client";

import { ImageBox } from "@repo/components";
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
      <div className="flex justify-between items-center mb-6">
        <p className="text-xs font-medium text-[var(--ink-muted)]">
          {filteredPosts.length} posts
        </p>
        <nav className="flex items-center gap-3" aria-label="정렬">
          <button
            className={`text-sm bg-transparent border-none cursor-pointer ${orderBy === "DESC" ? "font-bold text-[var(--ink)]" : "text-[var(--ink-muted)]"}`}
            onClick={() => handleOrderClick("DESC")}
            aria-pressed={orderBy === "DESC"}
          >
            최신 순
          </button>
          <span className="text-[var(--ink-muted)]">/</span>
          <button
            className={`text-sm bg-transparent border-none cursor-pointer ${orderBy === "ASC" ? "font-bold text-[var(--ink)]" : "text-[var(--ink-muted)]"}`}
            onClick={() => handleOrderClick("ASC")}
            aria-pressed={orderBy === "ASC"}
          >
            오래된 순
          </button>
        </nav>
      </div>

      <hr
        className="border-none mb-6"
        style={{ height: "1px", background: "var(--border)" }}
      />

      <div className="flex gap-5">
        {/* Timeline */}
        <div className="hidden md:flex flex-col items-center pt-2">
          {filteredPosts.map((_, i) => (
            <div key={i} className="contents">
              <div
                className="timeline-dot"
                style={{ opacity: Math.max(0.2, 1 - i * 0.15) }}
              />
              {i < filteredPosts.length - 1 && (
                <div className="timeline-line" />
              )}
            </div>
          ))}
        </div>

        {/* Posts */}
        <div className="flex-1 flex flex-col gap-3">
          {filteredPosts.map(
            ({ id, title, tags, postKey, externalUrl, thumbnailKey }) => {
              const imageKey = thumbnailKey || postKey;
              const ThumbnailImage = imageKey ? BLOG_THUMBNAIL[imageKey] : null;
              const href =
                externalUrl ?? (postKey ? `/blog/${postKey}` : undefined);
              const target = externalUrl ? "_blank" : undefined;
              const rel = externalUrl ? "noopener noreferrer" : undefined;

              return (
                <article key={postKey || `external-${id}`}>
                  <a className="list-row" href={href} target={target} rel={rel}>
                    {ThumbnailImage && (
                      <div className="w-[180px] min-h-[120px] shrink-0 flex items-center justify-center bg-[var(--surface-raised)]">
                        <ImageBox
                          Image={ThumbnailImage}
                          width="180px"
                          height="120px"
                          imageClassName="object-contain p-3"
                        />
                      </div>
                    )}
                    <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
                      <p className="font-semibold text-sm mb-1.5">{title}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {tags?.map((tag: string) => (
                          <span className="tag-pill" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </article>
              );
            },
          )}
        </div>
      </div>
    </>
  );
};

export default PostList;
