import React, { useContext } from "react";
import HourlyForecastItem from "./HourlyForecastItem";
import { Context } from "../context/Context";

function HourlyForecast() {
  const { forecast, unit, currentWeather, firstDayHourlyForecast } =
    useContext(Context);

  return (
    <div
      className="mx-auto mt-6 shadow-lg rounded-lg bg-white pt-3 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12"
    >
      <div className="uppercase text-xl font-semibold px-6 my-1">
        hourly forecast in the next 48 hours
      </div>
      <div className="divide-y-2">
        {firstDayHourlyForecast.length !== 0 && (
          <>
            <div className="px-8 font-bold text-lg py-2">
              {formatDate(forecast[0].date)}
            </div>
            {firstDayHourlyForecast.map((item, index) => (
              <HourlyForecastItem key={index} weather={item} unit={unit} />
            ))}
          </>
        )}

        <div className="px-8 font-bold text-lg py-2">
          {formatDate(forecast[1].date)}
        </div>

        {forecast[1].hour.map((item, index) => (
          <HourlyForecastItem key={index} weather={item} unit={unit} />
        ))}

        <div className="px-8 font-bold text-lg py-2">
          {formatDate(forecast[2].date)}
        </div>

        {forecast[2].hour
          .slice(0, 24 - firstDayHourlyForecast.length)
          .map((item, index) => (
            <HourlyForecastItem key={index} weather={item} unit={unit} />
          ))}
      </div>
    </div>
  );
}

function takeLaterHrsInCurrentDay(currentTime, currentDayForecast) {
  const currentHrs = Number(currentTime.split(" ")[1].slice(0, 2));

  const filteredForecast = currentDayForecast.filter(
    (item) => Number(item.time.split(" ")[1].slice(0, 2)) > currentHrs
  );

  return filteredForecast;
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayWeek = weekdays[date.getUTCDay()];
  const month = months[date.getUTCMonth()];
  const dayOfMonth = date.getUTCDate();

  return `${dayWeek}, ${month} ${dayOfMonth}`;
}

export default HourlyForecast;
