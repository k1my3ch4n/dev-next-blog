import styles from './Highlight.module.scss';

const Highlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <span className={`${styles.highlight} ${className}`}>{children}</span>;
};

export default Highlight;
