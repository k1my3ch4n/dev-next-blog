"use client";

import { useState, useMemo } from "react";
import { useTagContext } from "@features/tag-filter";
import type { PostData } from "@shared/types";

type OrderBy = "DESC" | "ASC";

const useFilteredPosts = (posts: PostData[]) => {
  const { selectedTag } = useTagContext();
  const [orderBy, setOrderBy] = useState<OrderBy>("DESC");

  const filteredPosts = useMemo(() => {
    let result = [...posts];

    if (selectedTag) {
      result = result.filter((post) => post.tags.includes(selectedTag));
    }

    result.sort((a, b) => (orderBy === "DESC" ? b.id - a.id : a.id - b.id));

    return result;
  }, [posts, selectedTag, orderBy]);

  return { filteredPosts, orderBy, setOrderBy };
};

export default useFilteredPosts;
