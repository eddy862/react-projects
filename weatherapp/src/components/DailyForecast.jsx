import React, { useContext } from "react";
import { Context } from "../context/Context";
import "./DailyForecast.css";

function DailyForecast() {
  const { forecast, unit, isForecastClicked, setIsForecastClicked } =
    useContext(Context);

  function handleClick(index) {
    const newClicked = isForecastClicked.map((item) =>
      item.index === index
        ? { ...item, clicked: !item.clicked }
        : { ...item, clicked: false }
    );
    setIsForecastClicked(newClicked);
  }

  return (
    <div
      className="mx-auto mt-6 shadow-lg rounded-lg bg-white pt-3 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12"
    >
      <div className="font-semibold uppercase px-6 my-1 text-xl">
        10 Days ForeCast
      </div>
      <div className="divide-y-2">
        {forecast.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer forecast-container ${
              isForecastClicked[index].clicked ? "forecast-clicked" : ""
            } overflow-hidden px-8 pb-2`}
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center justify-between">
              <div className="w-14">{convertToWeekdays(item.date)}</div>
              <div className="w-8 text-lg">
                {unit === "°C"
                  ? Math.round(item.day.avgtemp_c)
                  : Math.round(item.day.avgtemp_f)}
                °
              </div>
              <div className="w-14">
                <img src={item.day.condition.icon} alt="" />
              </div>
              <div className="w-16 flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                  <path d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z" />
                </svg>
                <div>{item.day.daily_chance_of_rain}%</div>
              </div>
            </div>
            {!isForecastClicked[index].clicked && (
              <div className="text-center text-sm text-slate-400 mb-1">
                Click to show more details
              </div>
            )}
            <div className="text-xl font-semibold py-2">{item.day.condition.text}</div>
            <hr />
            <div className="flex flex-col my-3">
              <div className="inline-flex justify-between">
                <div>Humidity</div>
                <div>{item.day.avghumidity}%</div>
              </div>
              <div className="inline-flex justify-between">
                <div>Visibility</div>
                <div>
                  {unit === "°C"
                    ? `${item.day.avgvis_km} km`
                    : `${item.day.avgvis_miles} miles`}
                </div>
              </div>
              <div className="inline-flex justify-between">
                <div>Max Temp</div>
                <div>
                  {unit === "°C" ? item.day.maxtemp_c : item.day.maxtemp_f}°
                </div>
              </div>
              <div className="inline-flex justify-between">
                <div>Min Temp</div>
                <div>
                  {unit === "°C" ? item.day.mintemp_c : item.day.mintemp_f}°
                </div>
              </div>
              <div className="inline-flex justify-between">
                <div>Max Wind</div>
                <div>
                  {unit === "°C"
                    ? `${item.day.maxwind_kph} kph`
                    : `${item.day.maxwind_mph} mph`}
                </div>
              </div>
              <div className="inline-flex justify-between">
                <div>Total Precip</div>
                <div>
                  {unit === "°C"
                    ? `${item.day.totalprecip_mm} mm`
                    : `${item.day.totalprecip_in} in`}
                </div>
              </div>
            </div>
            <div className="uppercase font-semibold text-slate-600">
              sun & moon
            </div>
            <div className="flex flex-col divide-y-2">
              <div className="flex items-center justify-between py-1">
                <div className="inline-flex gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>
                  <div>
                    {daylightDuration(item.astro.sunrise, item.astro.sunset)}
                  </div>
                </div>
                <div className="inline-flex flex-col">
                  <div className="inline-flex gap-4">
                    <div className="w-8 text-right">Rise</div>
                    <div className="w-18 text-right">{item.astro.sunrise}</div>
                  </div>
                  <div className="inline-flex gap-4">
                    <div className="w-8 text-right">Set</div>
                    <div className="w-18 text-right">{item.astro.sunset}</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-1">
                <div className="inline-flex gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                  </svg>
                  <div>{item.astro.moon_phase}</div>
                </div>
                <div className="inline-flex flex-col">
                  <div className="inline-flex gap-4">
                    <div className="w-8 text-right">Rise</div>
                    <div className="w-18 text-right">{item.astro.moonrise}</div>
                  </div>
                  <div className="inline-flex gap-4">
                    <div className="w-8 text-right">Set</div>
                    <div className="w-18 text-right">{item.astro.moonset}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function convertToWeekdays(dateString) {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(dateString);
  const dayOfWeek = weekdays[date.getUTCDay()];
  let dayOfMonth = date.getUTCDate().toString();
  dayOfMonth = dayOfMonth.length < 2 ? "0" + dayOfMonth : dayOfMonth;

  return `${dayOfMonth} ${dayOfWeek}`;
}

function daylightDuration(sunrise, sunset) {
  function timeToMinute(time) {
    const [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return hours * 60 + minutes;
  }

  const sunriseMins = timeToMinute(sunrise);
  const sunsetMins = timeToMinute(sunset);
  const durationMins = sunsetMins - sunriseMins;
  const hours = Math.floor(durationMins / 60);
  const mins = durationMins % 60;

  return `${hours} hrs and ${mins} mins`;
}

export default DailyForecast;
