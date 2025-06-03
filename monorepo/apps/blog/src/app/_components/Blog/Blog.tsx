import { Divider, Link, Title } from "@repo/components";

const Blog = () => {
  return (
    <div className="w-full mb-[20px]">
      <div className="w-full flex justify-between items-baseline">
        <Title title="블로그" />
        <Link link="/blog">전체보기</Link>
      </div>
      <Divider />
      {/* <div className={styles.boxWrapper}>
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
      </div> */}
    </div>
  );
};

export default Blog;
