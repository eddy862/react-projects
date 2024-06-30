import React, { useContext } from "react";
import { Context } from "../context/Context";

function UnitSelectList({ unitListRef }) {
  const { setIsSelectUnitVisible, setUnit } = useContext(Context);

  function handleSetUnit(unit) {
    setUnit(unit);
    setIsSelectUnitVisible(false);
  }
  return (
    <div className="bg-white absolute w-screen" ref={unitListRef}>
      <p
        className="hover:bg-slate-200 py-3 px-5 cursor-pointer"
        onClick={() => handleSetUnit("°C")}
      >
        Metric - C / millimeters / km / kmh / millibars
      </p>
      <p
        className="hover:bg-slate-200 py-3 px-5 cursor-pointer"
        onClick={() => handleSetUnit("°F")}
      >
        Imperial - F / mph / miles / inches
      </p>
    </div>
  );
}

export default UnitSelectList;
