import React from "react";
import DarkModeToggle from "./DarkModeToggle";

function Navbar({ icon }) {
  return (
    <div className="nav flex justify-between items-center text-xl text-slate-500 p-5">
      <p>Gemini</p>
      <div className="flex gap-6 items-center">
        <DarkModeToggle/>
        <img className="rounded-full cursor-pointer" src={icon} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
