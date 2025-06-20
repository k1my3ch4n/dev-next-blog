import { getClient } from "@client/client";
import { PostWithKeyResponseData } from "@fixtures/posts";
import { GET_POST_WITH_KEY } from "@graphql/post";

const prefetchPostData = async (postKey?: string) => {
  const client = getClient();

  const { data, error } = await client.query<PostWithKeyResponseData>({
    query: GET_POST_WITH_KEY,
    variables: { postKey },
  });

  return { data, error };
};

export default prefetchPostData;
