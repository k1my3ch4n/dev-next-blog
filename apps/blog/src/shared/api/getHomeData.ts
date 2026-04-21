import { getPosts } from "@shared/lib";
import { isPostVisible } from "@entities/post";
import type { PostData } from "@shared/types";

const getHomeData = async () => {
  try {
    const allPosts = await getPosts("", "DESC");

    return {
      data: { posts: allPosts.filter(isPostVisible) },
      error: null,
    };
  } catch (error) {
    console.error("getHomeData error:", error);
    return { data: { posts: [] as PostData[] }, error };
  }
};

export default getHomeData;
