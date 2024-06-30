import React, { useContext, useEffect, useRef } from "react";
import Search from "./Search";
import SelectUnit from "./SelectUnit";
import UnitSelectList from "./UnitSelectList";
import { Context } from "../context/Context";

function Head() {
  const { isSelectUnitVisible, setIsSelectUnitVisible } = useContext(Context);

  const unitSelectRef = useRef(null);
  const unitListRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      unitSelectRef.current &&
      !unitSelectRef.current.contains(event.target) &&
      unitListRef.current &&
      !unitListRef.current.contains(event.target)
    ) {
      setIsSelectUnitVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-blue-800 py-4 px-6">
        <div className="font-bold text-xl text-white">Weather</div>
        <Search />
        <SelectUnit unitSelectRef={unitSelectRef} />
      </div>
      {isSelectUnitVisible && <UnitSelectList unitListRef={unitListRef} />}
    </div>
  );
}

export default Head;
