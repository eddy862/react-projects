import React, { useContext } from "react";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import { Context } from "../context/Context";
import HourlyForecast from "./HourlyForecast";

function Main() {
  const { selectedCity, currentWeather, forecast } = useContext(Context);
  return (
    <div className="px-6">
      {selectedCity && currentWeather ? (
        <CurrentWeather />
      ) : (
        <p className="text-center">Fetching current weather...</p>
      )}
      {forecast ? (
        <>
          <DailyForecast />
          <HourlyForecast />
        </>
      ) : (
        <p className="text-center">Fetching forecast weather...</p>
      )}
    </div>
  );
}

export default Main;
