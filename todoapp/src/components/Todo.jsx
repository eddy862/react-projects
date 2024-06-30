import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
import EditItem from "./EditItem";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState(null);

  return (
    <>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditMode={setEditMode}
        setCurrentEditItem={setCurrentEditItem}
        ></TodoList>
        {editMode && (
          <EditItem
            currentEditItem={currentEditItem}
            todos={todos}
            setTodos={setTodos}
            setEditMode={setEditMode}
          ></EditItem>
        )}
      <Footer
        todos={todos}
        ></Footer>
    </>
  );
}
