import { Divider, Link, PageBox, Title } from '@repo/core/components';
import styles from './Blog.module.scss';
import { useNavigate } from 'react-router-dom';
import { BLOG_THUMBNAIL } from '@constants/blog';
import { useRecoilValue } from 'recoil';
import postsAtom from '@recoil/postsAtom';

const Blog = () => {
  const navigate = useNavigate();
  const postsData = useRecoilValue(postsAtom);

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
            navigate(`/blog/${postKey}`);
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
