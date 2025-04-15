import styles from './Header.module.scss';

const Header = ({
  children,
  size = 'l',
  wrapperClassName = '',
  titleClassName = '',
}: {
  children: React.ReactNode;
  size?: 'l' | 'm' | 's';
  wrapperClassName?: string;
  titleClassName?: string;
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[size]} ${wrapperClassName}`}>
      <div className={`${styles.title} ${titleClassName}`}>{children}</div>
    </div>
  );
};

export default Header;
