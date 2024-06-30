import React from "react";

function SidebarBottomItem({ extended, icon, text }) {
  return (
    <div className="relative bottom-item inline-flex gap-2 items-center hover:bg-slate-200 dark:hover:bg-gray-800 cursor-pointer p-3 py-2 rounded-full bt1">
      <img src={icon} alt="" />
      {extended && <p className="shrink-0">{text}</p>}
      {!extended && (
        <span className="tooltip-text absolute bg-slate-700 text-center p-0.5 px-2 rounded-md text-white">
          {text}
        </span>
      )}
    </div>
  );
}

export default SidebarBottomItem;
