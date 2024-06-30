import React from "react";

function NewChat({ extended, icon, newChat }) {
  return (
    <div
      className="new-chat inline-flex relative items-center gap-3 dark:bg-gray-700 bg-slate-200 mt-7 text-sm rounded-full text-slate-500 cursor-pointer"
      onClick={() => newChat()}
    >
      <img src={icon} alt="" />
      {extended && <p className="shrink-0 dark:text-gray-400">New Chat</p>}
      {!extended && (
        <span className="tooltip-text absolute bg-slate-700 text-center p-0.5 px-2 rounded-md text-white">
          New Chat
        </span>
      )}
    </div>
  );
}

export default NewChat;
