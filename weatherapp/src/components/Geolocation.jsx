import React, { useContext } from "react";
import { Context } from "../context/Context";

function Geolocation() {
  const {
    geolocation,
    userCurrentWeather,
    unit,
  } = useContext(Context);


  return (
    <div className="bg-blue-300 p-2 flex justify-around items-center text-sm md:text-base">
      {geolocation && userCurrentWeather ? (
        <>
          <div className="inline-flex items-center gap-3 md:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <div className="w-28 md:w-auto">
              {geolocation.name}, {geolocation.region}, {geolocation.country}
            </div>
            <div className="inline-flex items-center gap-2">
              <img
                className="w-8"
                src={userCurrentWeather.condition.icon}
                alt=""
              />
              {unit === "°C"
                ? Math.round(userCurrentWeather.temp_c)
                : Math.round(userCurrentWeather.temp_f)}
              °
            </div>
          </div>
          <div>Last Updated: {userCurrentWeather.last_updated}</div>
        </>
      ) : (
        <div>Fetching location...</div>
      )}
    </div>
  );
}

export default Geolocation;
