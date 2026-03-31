export interface PostData {
  id: number;
  postKey: string | null;
  externalUrl: string | null;
  thumbnailKey: string | null;
  title: string;
  tags: string[];
}

export interface PostsResponseData {
  posts: PostData[];
}

export interface PostWithKeyResponseData {
  post: PostData;
}
