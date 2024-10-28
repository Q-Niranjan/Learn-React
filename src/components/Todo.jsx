import { useState } from "react";
import From from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedtodos = todos.filter((todo) => todo.done).length;
  const totoaltodos = todos.length;
  return (
    <div>
      <From todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedtodos={completedtodos} totoaltodos={totoaltodos} />
    </div>
  );
}
