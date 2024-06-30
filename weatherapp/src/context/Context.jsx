import React, { createContext, useState } from "react";
import axios from "axios";
import APIkey from "../APIkey";
import { proxyUrl } from "../APIkey";

function takeLaterHrsInCurrentDay(currentTime, currentDayForecast) {
  const currentHrs = Number(currentTime.split(" ")[1].slice(0, 2));

  const filteredForecast = currentDayForecast.filter(
    (item) => Number(item.time.split(" ")[1].slice(0, 2)) > currentHrs
  );

  return filteredForecast;
}

export const Context = createContext();

function ContextProvider({ children }) {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [userCurrentWeather, setUserCurrentWeather] = useState("");
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [geolocation, setGeolocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isSelectUnitVisible, setIsSelectUnitVisible] = useState(false);
  const [unit, setUnit] = useState("°C");
  const [isDay, setIsDay] = useState(true);
  const [loadingCurrentWeather, setLoadingCurrentWeather] = useState(false);
  const [isForecastClicked, setIsForecastClicked] = useState([]);
  const firstDayHourlyForecast =
    currentWeather &&
    forecast &&
    takeLaterHrsInCurrentDay(currentWeather.last_updated, forecast[0].hour);

  const fetchForecast = async (city) => {
    setForecast(null);
    try {
      const res = await axios.get(
        proxyUrl +
          `https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${city}&days=10`
      );
      const data = res.data;
      setForecast(data.forecast.forecastday);
      setIsForecastClicked(
        data.forecast.forecastday.map((item, index) => ({
          index: index,
          clicked: false,
        }))
      );
    } catch (err) {
      console.error("Error fetching current weather: ", err);
    }
  };

  const fetchWeather = async (city, isGeolocationWeather) => {
    setIsDay(true);
    try {
      const res = await axios.get(
        proxyUrl +
          `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${city}`
      );
      const data = res.data;
      isGeolocationWeather && setUserCurrentWeather(data.current);
      setCurrentWeather(data.current);
      data.current.is_day ? setIsDay(true) : setIsDay(false);
    } catch (err) {
      console.error("Error fetching current weather: ", err);
    }
  };

  const contextValue = {
    query,
    setQuery,
    selectedCity,
    setSelectedCity,
    coords,
    setCoords,
    currentWeather,
    setCurrentWeather,
    forecast,
    setForecast,
    unit,
    setUnit,
    isSelectUnitVisible,
    setIsSelectUnitVisible,
    geolocation,
    setGeolocation,
    userCurrentWeather,
    setUserCurrentWeather,
    isDay,
    setIsDay,
    loadingCurrentWeather,
    setLoadingCurrentWeather,
    isForecastClicked,
    setIsForecastClicked,
    firstDayHourlyForecast,
    fetchForecast,
    fetchWeather,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ContextProvider;
