import React from "react";

function PrevPrompts({ extended, title, icon, loadMsg, index }) {
  return (
    <div
      className={`recent-entry inline-flex gap-2 items-center hover:bg-slate-200 dark:hover:bg-gray-700 cursor-pointer p-3 py-2 rounded-full ${
        extended ? "extended" : ""
      }`}
      onClick={() => loadMsg(index)}
    >
      <img src={icon} alt="" />
      <p className="shrink-0">{title}</p>
    </div>
  );
}

export default PrevPrompts;
