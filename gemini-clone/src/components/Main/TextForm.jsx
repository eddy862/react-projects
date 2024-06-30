import React from "react";

function TextForm({ input, onSent, setInput }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSent();
  }
  return (
    <form
      action=""
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter a prompt here"
        className="bg-transparent focus:outline-none w-full"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </form>
  );
}

export default TextForm;
