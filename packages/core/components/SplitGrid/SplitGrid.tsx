import styles from './SplitGrid.module.scss';

const SplitGrid = ({
  lhs,
  lhsClassName = '',
  rhs,
  rhsClassName = '',
}: {
  lhs: React.ReactNode;
  lhsClassName?: string;
  rhs: React.ReactNode;
  rhsClassName?: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.lhs} ${lhsClassName}`}>{lhs}</div>
      <div className={`${styles.rhs} ${rhsClassName}`}>{rhs}</div>
    </div>
  );
};

export default SplitGrid;
