import styles from './List.module.scss';

const LIST_SPOTS = {
  l: '•',
  m: '◦',
  s: '▪',
};

const List = ({ spot = 'l', children }: { spot?: 'l' | 'm' | 's'; children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spot}>{LIST_SPOTS[spot]}</div>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default List;
