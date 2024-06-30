import React from "react";

function Menu({ extended, icon, setExtended }) {
  return (
    <div
      className="menu relative p-3 dark:hover:bg-gray-800 hover:bg-slate-200 flex justify-center rounded-full cursor-pointer"
      onClick={() => setExtended(!extended)}
    >
      <img src={icon} alt="" />
      <span className="tooltip-text absolute bg-slate-700 text-center p-0.5 px-2 rounded-md text-white">
        {extended ? "Collapse" : "Extend"} menu
      </span>
    </div>
  );
}

export default Menu;
