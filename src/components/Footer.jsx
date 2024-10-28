import styles from "./footer.module.css";
export default function Footer({ completedtodos, totoaltodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedtodos}</span>

      <span className={styles.item}>Total Todos: {totoaltodos}</span>
    </div>
  );
}
