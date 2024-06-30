import { useState } from "react";
import styles from "./form.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      name: todo,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  }

  return (
    <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputCont}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button className={styles.modernBtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
