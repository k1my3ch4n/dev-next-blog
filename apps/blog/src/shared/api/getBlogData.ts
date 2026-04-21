import { getPosts, getAllTags } from "@shared/lib";
import { isPostVisible } from "@entities/post";
import type { PostData } from "@shared/types";

export interface BlogData {
  posts: PostData[];
  tags: string[];
}

const getBlogData = async () => {
  try {
    const [allPosts, tags] = await Promise.all([
      getPosts("", "DESC"),
      getAllTags(),
    ]);

    return {
      data: {
        posts: allPosts.filter(isPostVisible),
        tags,
      },
      error: null,
    };
  } catch (error) {
    console.error("getBlogData error:", error);
    return {
      data: { posts: [], tags: [] } as BlogData,
      error,
    };
  }
};

export default getBlogData;
