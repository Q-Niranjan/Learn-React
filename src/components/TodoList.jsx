import Todoitem from "./Todoitem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const sorTedtodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sorTedtodos.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
