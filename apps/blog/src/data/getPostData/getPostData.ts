import { getClient } from "@client/client";
import { PostWithKeyResponseData } from "@fixtures/posts";
import { GET_POST_WITH_KEY } from "@graphql/post";

const getPostData = async (postKey?: string) => {
  try {
    const client = getClient();

    const { data, error } = await client.query<PostWithKeyResponseData>({
      query: GET_POST_WITH_KEY,
      variables: { postKey },
    });

    return { data, error };
  } catch (error) {
    console.error("getPostData error:", error);
    return {
      data: {
        post: { id: 0, postKey: null, externalUrl: null, thumbnailKey: null, title: "", tags: [] },
      } as PostWithKeyResponseData,
      error,
    };
  }
};

export default getPostData;
