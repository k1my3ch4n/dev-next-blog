import styles from './Text.module.scss';

const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default Text;
