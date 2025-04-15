import styles from './Link.module.scss';

const Link = ({ link, children }: { link: string; children: React.ReactNode }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <span className={styles.wrapper} onClick={handleClick}>
      {children}
    </span>
  );
};

export default Link;
