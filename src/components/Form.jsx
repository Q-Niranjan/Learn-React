import { useState } from "react";
import styles from "./form.module.css";
export default function From({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handelForm(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todofrom} onSubmit={handelForm}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
            placeholder="Enter todo item..."
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
