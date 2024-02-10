import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '2346983b68cab368a234f90c82ed1675';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Lodz,pl&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [apiKey]);

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <div name='weather' className='w-full h-screen bg-[#36393B] text-gray-300'>
      {weatherData && (
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='sm:text-right text-4xl font-bold'>Aktualna pogoda dla Łodzi</p>
          <p className='sm:text-right text-1xl font-bold'>Temperatura: {kelvinToCelsius(weatherData.main.temp)} °C</p>
          <p className='sm:text-right text-1xl font-bold'>Pogoda: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
