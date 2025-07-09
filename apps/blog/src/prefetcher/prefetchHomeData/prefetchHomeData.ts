import { PostsResponseData } from "@/fixtures/posts";
import { getClient } from "@client/client";
import { GET_POSTS } from "@graphql/post";

const prefetchHomeData = async () => {
  const { data } = await getClient().query<PostsResponseData>({
    query: GET_POSTS,
    variables: { tag: "", orderBy: "DESC" },
  });

  return { data };
};

export default prefetchHomeData;
