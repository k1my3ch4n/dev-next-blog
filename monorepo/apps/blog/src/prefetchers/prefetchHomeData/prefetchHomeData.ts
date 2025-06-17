import { getClient } from "@/client/client";
import { GET_POSTS } from "@graphql/post";

const prefetchHomeData = async () => {
  await getClient().query({
    query: GET_POSTS,
    variables: { tag: "", orderBy: "DESC" },
  });
};

export default prefetchHomeData;
