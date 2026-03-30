import type { PostsResponseData } from "@shared/types";
import { getClient } from "./client";
import { GET_POSTS } from "./queries";

const getHomeData = async () => {
  try {
    const { data } = await getClient().query<PostsResponseData>({
      query: GET_POSTS,
      variables: { tag: "", orderBy: "DESC" },
    });

    return { data, error: null };
  } catch (error) {
    console.error("getHomeData error:", error);
    return { data: { posts: [] } as PostsResponseData, error };
  }
};

export default getHomeData;
