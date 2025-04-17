import { Divider, Link, PageBox, Title } from '@repo/core/components';
import styles from './Blog.module.scss';
import { useRouter } from 'next/navigation';
import { BLOG_THUMBNAIL } from '@constants/blog';
import usePostsStore from '@src/stores/usePostsStore';

const Blog = () => {
  const router = useRouter();
  const postsData = usePostsStore((state) => state.postsData);

  return (
    <div className={styles.wrapper}>
      <div className={styles.blogTitle}>
        <Title title="블로그" />
        <Link link="/blog">전체보기</Link>
      </div>
      <Divider />
      <div className={styles.boxWrapper}>
        {postsData?.slice(0, 4).map((data, index) => {
          const { title, postKey } = data;

          const handleClick = (postKey: string) => {
            router.push(`/blog/${postKey}`);
            window.scrollTo(0, 0);
          };

          return (
            <PageBox
              key={index}
              Thumbnail={BLOG_THUMBNAIL[postKey]}
              title={title}
              onClick={() => handleClick(postKey)}
              width="400px"
              height="300px"
              imageClassName={styles.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
