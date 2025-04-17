import styles from './Tag.module.scss';

const Tag = ({
  tag,
  isSelected,
  onClick,
}: {
  tag: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      key={tag}
      className={`${styles.mainTags} ${isSelected ? styles.isSelected : ''}`}
      onClick={onClick}
    >
      {tag}
    </div>
  );
};

export default Tag;
