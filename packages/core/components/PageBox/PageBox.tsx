import ImageBox from '../ImageBox';
import styles from './PageBox.module.scss';

const PageBox = ({
  Thumbnail,
  title,
  onClick,
  width,
  height,
  imageWrapperClassName = '',
  imageClassName = '',
}: {
  Thumbnail: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  onClick: () => void;
  width: string;
  height: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
}) => {
  return (
    <div className={styles.box} onClick={onClick}>
      <ImageBox
        wrapperClassName={imageWrapperClassName}
        imageClassName={imageClassName}
        Image={Thumbnail}
        width={width}
        height={height}
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default PageBox;
