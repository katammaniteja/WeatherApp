import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import Weather from './Weather';

export default function Temp() {

    const [city, setcity] = useState("Rajahmundry")
    const [info, setinfo] = useState({});

    const getWeatherInfo = async() => {
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a9093b18a3242c67f09836394946cd8f`;
            const response = await axios.get(url);
            const data = response.data;
            const {temp, pressure, humidity} = data.main;
            const { main:weathermood } = data.weather[0];
            const {name}=data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            const WeatherInfo  = {
                temp,
                pressure,
                humidity,
                weathermood,
                name,
                speed,
                country,
                sunset
            }
            console.log(weathermood);
            setinfo(WeatherInfo);

        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getWeatherInfo();
    },[])

  return (
    <>
        <div className="wrap">
            <div className="search">
                <input type="search" autoFocus placeholder='Enter City' id='search' className='searchTerm' value={city} onChange={(event)=> setcity(event.target.value)}/>
                <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
            </div>
        </div>
        <Weather info={info} />
    </>
  )
}
