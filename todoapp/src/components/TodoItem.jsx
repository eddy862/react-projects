export default function TodoItem({ item, todos, setTodos, setEditMode, setCurrentEditItem }) {
  function handleDelete(itemToDelId) {
    const newTodos = todos.filter((todo) => todo.id != itemToDelId);
    setTodos(newTodos);
  }

  function handleClick(itemId) {
    const newTodos = todos.map((todo) =>
      todo.id === itemId ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }

  function toggleEditWin(item) {
    setEditMode(true);
    setCurrentEditItem(item);
  }

  return (
    <div className="group font-semibold text-lg flex justify-between items-center py-4">
      <div
        className={`${item.done ? "line-through" : ""} cursor-pointer`}
        onClick={() => handleClick(item.id)}
      >
        {item.name}
      </div>
      
      <div className="flex items-center gap-4">
        <button className="cursor-pointer group-hover:visible invisible" onClick={() => toggleEditWin(item)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          className="cursor-pointer w-8 h-8 rounded-md text-white bg-yellow-400"
        >
          x
        </button>
      </div>
    </div>
  );
}
