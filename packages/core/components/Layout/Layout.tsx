import styles from './Layout.module.scss';

const Layout = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};

export default Layout;
