import styles from "./page.module.css";
import { Text } from "@repo/components";

export default function Home() {
  return (
    <div className={styles.page}>
      <Text>안녕하세요</Text>
    </div>
  );
}
