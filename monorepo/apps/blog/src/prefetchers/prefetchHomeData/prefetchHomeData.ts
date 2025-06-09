import { client } from "@/client/client";
import { GET_POSTS } from "@/graphql/post";

const prefetchHomeData = async () => {
  await client.query({
    query: GET_POSTS,
  });
};

export default prefetchHomeData;
