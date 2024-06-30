import React, { useContext, useEffect } from "react";
import Head from "./components/Head";
import Geolocation from "./components/Geolocation";
import Main from "./components/Main";
import { Context } from "./context/Context";
import APIkey from "./APIkey";
import axios from "axios";

function App() {
  const {
    isDay,
    setGeolocation,
    setSelectedCity,
    fetchForecast,
    fetchWeather
  } = useContext(Context);

  useEffect(() => {
    const fetchWeatherByLocation = async (lat, lon) => {
      try {
        const res = await axios.get(
          `https://api.weatherapi.com/v1/search.json?key=${APIkey}&q=${lat},${lon}`
        );
        const data = res.data;
        setGeolocation(data[0]);
        setSelectedCity(data[0]);
        fetchWeather(data[0].name, true);
        fetchForecast(data[0].name);
      } catch (err) {
        console.error("Error fetching city by location", err);
      }
    };

    const handleSuccess = (position) => {
      const { latitude: lat, longitude: lon } = position.coords;
      fetchWeatherByLocation(lat, lon);
    };

    const handleError = (err) => {
      console.error("Error getting geolocation: ", err);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  }, []);

  return (
    <div className={`${isDay ? "bg-white" : "bg-blue-950"} pb-12`}>
      <Head />
      <Geolocation />
      <Main />
    </div>
  );
}

export default App;
