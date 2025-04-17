import { useQuery } from '@apollo/client';
import { GET_TAGS } from '@graphql/post';
import { useMemo } from 'react';

interface GetTagsResponse {
  allTags: string[];
}

export const adapter = (data?: GetTagsResponse) => {
  if (!data) {
    return [];
  }

  return data.allTags;
};

const useGetTags = () => {
  const { data, loading, error } = useQuery<GetTagsResponse>(GET_TAGS);

  const tagsData = useMemo(() => adapter(data), [data]);

  return { tagsData, isLoading: loading, isError: !!error };
};

export default useGetTags;
