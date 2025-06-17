"use client";

import { PostWithKeyResponseData } from "@/fixtures/posts";
import { GET_POST_WITH_KEY } from "@graphql/post";
import { useQuery } from "@apollo/client";

import { useMemo } from "react";

export const adapter = (data?: PostWithKeyResponseData) => {
  if (!data) {
    return;
  }

  return data.post;
};

const useGetPostWithKey = (postKey?: string) => {
  const {
    data,
    loading: isLoading,
    error,
  } = useQuery<PostWithKeyResponseData>(GET_POST_WITH_KEY, {
    variables: { postKey },
  });

  const postData = useMemo(() => adapter(data), [data]);

  return {
    isLoading,
    isError: !!error,
    postData,
  };
};

export default useGetPostWithKey;
