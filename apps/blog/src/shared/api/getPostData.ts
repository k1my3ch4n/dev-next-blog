import { getPost } from "@shared/lib";
import type { PostData } from "@shared/types";

const FALLBACK_POST: PostData = {
  id: 0,
  postKey: null,
  externalUrl: null,
  thumbnailKey: null,
  title: "",
  tags: [],
};

const getPostData = async (postKey?: string) => {
  if (!postKey) {
    return { data: { post: FALLBACK_POST }, error: new Error("No postKey") };
  }

  try {
    const post = await getPost(postKey);

    if (!post) {
      return { data: { post: FALLBACK_POST }, error: new Error("Post not found") };
    }

    return { data: { post }, error: null };
  } catch (error) {
    console.error("getPostData error:", error);
    return { data: { post: FALLBACK_POST }, error };
  }
};

export default getPostData;
