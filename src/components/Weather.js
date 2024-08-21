import React, { useState, useEffect } from 'react';
import BidAdjustment from './BidAdjustment';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=89bea6b137884ff2a69153356240608&q=London`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const jsonData = await response.json();
        setWeatherData(jsonData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-container">
      {error ? (
        <p className="error-message">Error: {error}</p>
      ) : weatherData ? (
        <>
          <div className="weather-card">
            <h2>Weather in {weatherData.location.name}</h2>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <img src={weatherData.current.condition.icon} alt="Weather icon" />
          </div>
          <BidAdjustment weather={weatherData.current} />
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
