import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState({
        current: {
            temperature: '',
            weather_icons: '',
            wind_speed: '',
            wind_dir: '' 
        }
    })

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: capital
        }
        console.log(params.access_key)
        axios
          .get(`http://api.weatherstack.com/current`, {params})
          .then(response => {
            console.log('weather promise resolved')
            console.log(response.data)
            setWeather(response.data)
          });
      }, [capital])

    
    return (
      <div>
            <h3>Weather in {capital}</h3>
            <p><b>Temperature:</b> {weather.current.temperature} °C</p>
            <img src={weather.current.weather_icons} alt='Weather icon' width='20%'/>
            <p><b>Wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
      </div>
    );
  };



export default Weather;