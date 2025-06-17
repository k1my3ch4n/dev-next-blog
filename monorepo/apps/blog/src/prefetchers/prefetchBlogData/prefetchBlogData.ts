import { getClient } from "@/client/client";
import { GET_POSTS, GET_TAGS } from "@graphql/post";

const prefetchBlogData = async () => {
  await getClient().query({
    query: GET_TAGS,
  });

  await getClient().query({
    query: GET_POSTS,
    variables: { tag: "", orderBy: "DESC" },
  });
};

export default prefetchBlogData;
