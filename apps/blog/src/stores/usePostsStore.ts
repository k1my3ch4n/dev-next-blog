import { create } from 'zustand';

export interface PostData {
  id: number;
  postKey: string;
  title: string;
  tags: string[];
}

interface PostsStore {
  postsData: PostData[];
  setPostsData: (data: PostData[]) => void;
}

const usePostsStore = create<PostsStore>((set) => ({
  postsData: [],
  setPostsData: (data) => set({ postsData: data }),
}));

export default usePostsStore;
