import { PostData } from '@fixtures/posts';
import { create } from 'zustand';

interface PostsStore {
  postsData: PostData[];
  setPostsData: (data: PostData[]) => void;
}

const usePostsStore = create<PostsStore>((set) => ({
  postsData: [],
  setPostsData: (data) => set({ postsData: data }),
}));

export default usePostsStore;
