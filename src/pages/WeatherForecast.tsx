import React, { useState, useEffect } from "react";
import { WEATHER_API_BASE_URL, WEATHER_API_KEY } from "../config";

interface WeatherForecastProps {
  location: string;
}

interface WeatherData {
  temp_c: number;
  // Add other weather properties here as needed
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ location }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const url = `${WEATHER_API_BASE_URL}/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setWeather(data.current))
      .catch((error) => console.error('Fetch Error:', error));
  }, [location]);

  return (
    <div className="d-flex justify-content-center flex-column">
      <h2 className="text-center mt-3">
        Weather <span className="badge bg-info">Forecast</span>
      </h2>
      {weather ? (
        <h1 className="text-center">
          {location}<br />{weather.temp_c}°C
        </h1>
      ) : (
        <h1 className="text-center">Loading...</h1>
      )}
    </div>
  );
};

export default WeatherForecast;
