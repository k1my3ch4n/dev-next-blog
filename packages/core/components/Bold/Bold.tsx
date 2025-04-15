import styles from './Bold.module.scss';

const Bold = ({ children }: { children: React.ReactNode }) => {
  return <span className={styles.bold}>{children}</span>;
};

export default Bold;
