import { Divider, PageBox, Title } from '@repo/core/components';
import styles from './Extra.module.scss';
import { MainLogo, Github } from '@images';

const GITHUB_LINK = 'https://github.com/k1my3ch4n';
const PORTFOLIO_LINK = 'https://portfolio.k1my3ch4n.xyz/';

const Extra = () => {
  const handleClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <Title title="ETC" />
      <Divider />
      <div className={styles.wrapper}>
        <PageBox
          Thumbnail={Github}
          title="Github"
          onClick={() => handleClick(GITHUB_LINK)}
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Portfolio"
          onClick={() => handleClick(PORTFOLIO_LINK)}
          width="400px"
          height="300px"
        />
      </div>
    </>
  );
};

export default Extra;
