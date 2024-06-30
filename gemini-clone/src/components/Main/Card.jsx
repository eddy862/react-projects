import React from "react";

function Card({ icon, text, setInput }) {
  return (
    <div
      className="card p-4 dark:bg-gray-900 bg-slate-100 rounded-xl relative cursor-pointer hover:bg-slate-200 dark:hover:bg-gray-800"
      onClick={() => setInput(text)}
    >
      <p className="dark:text-slate-100 text-slate-700">{text}</p>
      <img src={icon} alt="" />
    </div>
  );
}

export default Card;
