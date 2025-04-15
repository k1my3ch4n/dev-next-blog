import styles from './HomeButton.module.scss';

const HomeButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      🏠
    </button>
  );
};

export default HomeButton;
