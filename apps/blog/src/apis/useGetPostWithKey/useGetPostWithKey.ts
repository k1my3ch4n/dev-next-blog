import { useQuery } from '@apollo/client';
import { GET_POST_WITH_KEY } from '@graphql/post';
import { PostWithKeyResponseData, PostData } from '@fixtures/posts';
import { useState } from 'react';

export const adapter = (data?: PostWithKeyResponseData) => {
  if (!data) {
    return;
  }

  return data.post;
};

const useGetPostWithKey = (postKey?: string) => {
  const [postData, setPostData] = useState<PostData | undefined>(undefined);

  const { loading: isLoading, error } = useQuery<PostWithKeyResponseData>(GET_POST_WITH_KEY, {
    variables: { postKey },
    onCompleted: (data) => setPostData(adapter(data)),
  });

  return {
    isLoading,
    isError: !!error,
    postData,
  };
};

export default useGetPostWithKey;
