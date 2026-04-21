import { PHASE_PRODUCTION_BUILD } from "next/constants";
import { getPosts } from "@shared/lib";
import { isPostVisible } from "@entities/post";
import type { PostData } from "@shared/types";

const getHomeData = async () => {
  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
    return { data: { posts: [] as PostData[] }, error: null };
  }

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
