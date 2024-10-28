import styles from "./todoitem.module.css";

export default function Todoitem({ item, todos, setTodos }) {
  function handelDelete(item) {
    setTodos(todos.filter((todo) => item !== todo));
  }
  function handelClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const classname = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={classname} onClick={() => handelClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handelDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
