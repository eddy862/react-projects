import React, { useContext } from "react";
import { Context } from "../context/Context";

function AutoSuggestion({ item, setSuggestions }) {
  const {
    setSelectedCity,
    setQuery,
    fetchForecast,
    fetchWeather,
  } = useContext(Context);

  const handleSelectCity = async () => {
    setSelectedCity(item);
    setSuggestions([]);
    setQuery("");
    fetchWeather(item.name);
    fetchForecast(item.name);
  };

  return (
    <li
      className="px-3 py-2 hover:bg-slate-200 cursor-pointer"
      onClick={() => handleSelectCity()}
    >
      {item.name}, {item.region}, {item.country}
    </li>
  );
}

export default AutoSuggestion;
