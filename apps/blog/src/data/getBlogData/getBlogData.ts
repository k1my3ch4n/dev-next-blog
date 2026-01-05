import { getClient } from "@client/client";
import { GET_POSTS, GET_TAGS } from "@graphql/post";
import { PostsResponseData } from "@fixtures/posts";

interface TagsResponseData {
  allTags: string[];
}

export interface BlogData {
  posts: PostsResponseData["posts"];
  tags: string[];
}

const getBlogData = async () => {
  try {
    const [tagsResult, postsResult] = await Promise.all([
      getClient().query<TagsResponseData>({ query: GET_TAGS }),
      getClient().query<PostsResponseData>({
        query: GET_POSTS,
        variables: { tag: "", orderBy: "DESC" },
      }),
    ]);

    return {
      data: {
        posts: postsResult.data.posts,
        tags: tagsResult.data.allTags,
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
