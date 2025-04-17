export interface PostData {
  id: number;
  postKey: string;
  title: string;
  tags: string[];
}

export interface PostsResponseData {
  posts: PostData[];
}

export interface PostWithKeyResponseData {
  post: PostData;
}

export const MOCK_GET_POSTS_RESPONSE: PostsResponseData = {
  posts: [
    {
      id: 1,
      postKey: 'msw-1',
      title: 'title1',
      tags: ['tag1', 'tag2'],
    },
    {
      id: 2,
      postKey: 'msw-2',
      title: 'title2',
      tags: ['tag3', 'tag4'],
    },
    {
      id: 3,
      postKey: 'msw-3',
      title: 'title3',
      tags: ['tag5', 'tag6'],
    },
  ],
};

export const MOCK_GET_POST_WITH_KEY_RESPONSE: PostWithKeyResponseData = {
  post: {
    id: 1,
    postKey: 'msw-1',
    title: 'title1',
    tags: ['tag1', 'tag2'],
  },
};
