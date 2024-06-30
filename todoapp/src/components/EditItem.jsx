import React, { useState } from "react";

function EditItem({ currentEditItem, setTodos, setEditMode, todos }) {
  const [input, setInput] = useState(currentEditItem.name);

  function handleSave(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      setEditMode(false);

      const newTodos = todos.map(item => 
        item.id === currentEditItem.id ? {...item, name: input} : item
      )
      setTodos(newTodos);
    }
  }

  function handleCancle(e) {
    e.preventDefault();
    setEditMode(false);
  }

  return (
    <div
      className="bg-white fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 border-2 rounded-xl overflow-hidden"
      style={{ width: "400px" }}
    >
      <p className="bg-yellow-400 text-center py-1 font-semibold text-lg ">
        Edit To Do
      </p>
      <form className="p-3" onSubmit={(e) => handleSave(e)}>
        <input
          className="w-full outline outline-1 outline-slate-400 rounded-md px-2 py-1"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="mt-3 flex gap-4 justify-center">
          <button
            className="bg-yellow-400 px-2 py-1 rounded-lg text-white"
            onClick={(e) => handleSave(e)}
          >
            Save
          </button>
          <button
            className="bg-slate-500 px-2 py-1 rounded-lg text-white"
            onClick={(e) => handleCancle(e)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditItem;
