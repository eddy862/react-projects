import styles from "./footer.module.css";

export default function Footer({ todos }) {
  const totalTodosCount = todos.length;
  const completedTodosCount = todos.filter(item => item.done).length;

  return (
    <div className={styles.footer}>
      <span>
        Completed Todo: {completedTodosCount} / {totalTodosCount}
      </span>
    </div>
  );
}
