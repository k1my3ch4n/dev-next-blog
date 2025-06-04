"use client";

import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/graphql/post";
import { PostsResponseData } from "@/fixtures/posts";
import { useMemo } from "react";

export const adapter = (data?: PostsResponseData) => {
  if (!data) {
    return [];
  }

  return data.posts;
};

const useGetPosts = ({
  tag = "",
  orderBy = "DESC",
}: {
  tag?: string;
  orderBy?: "DESC" | "ASC";
}) => {
  const {
    data,
    loading: isLoading,
    error,
  } = useQuery<PostsResponseData>(GET_POSTS, {
    variables: { tag, orderBy },
    fetchPolicy: "cache-and-network",
  });

  const postsData = useMemo(() => adapter(data), [data]);

  return {
    isLoading,
    isError: !!error,
    postsData,
  };
};

export default useGetPosts;
