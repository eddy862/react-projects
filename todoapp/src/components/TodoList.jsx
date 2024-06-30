import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos, setEditMode, setCurrentEditItem }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div
      className="mx-auto bg-white my-10 shadow-lg p-4 rounded-md flex flex-col divide-y-2"
      style={{ width: "500px" }}
    >
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          todos={todos}
          setTodos={setTodos}
          setEditMode={setEditMode}
          setCurrentEditItem={setCurrentEditItem}
        />
      ))}
    </div>
  );
}
