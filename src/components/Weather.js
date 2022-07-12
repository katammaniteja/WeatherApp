import React, { useEffect, useState } from 'react'

export default function Weather({info}) {
    const [weatherstate, setweatherstate] = useState("")
    const {temp, pressure, humidity, weathermood, name, speed, country, sunset} = info;
    let sec = sunset;
    let date = new Date(sec*1000);
    let time = `${date.getHours()}:${date.getMinutes()}`

    useEffect(()=>{
        if(weathermood){
            console.log(weathermood);
            switch(weathermood){
                case "Haze":
                    setweatherstate("wi-fog");
                    break;
                case "Clouds":
                    setweatherstate("wi-day-cloudy");
                    break;
                case "Drizzle":
                    setweatherstate("wi-day-rain")
                    break;
                case "Rain":
                    setweatherstate("wi-day-thunderstorm")
                    break;
                case "Clear":
                    setweatherstate("wi-day-sunny");
                    break;
                default:
                    setweatherstate("wi-day-sunny");
                    break;
            }
        }
    },[weathermood])
  return (
    <>
      <article className='widget'>
            <div className="weatherIcon">
                <i className={`wi ${weatherstate}`}></i>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span>{temp}&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">
                        {weathermood}
                    </div>
                    <div className="place">
                        {name}, {country}
                    </div>
                </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-day-sunny"}></i></p>
                        <p className='extra-info-leftside'>
                            {time} <br /> Sunset
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className='extra-info-leftside'>
                            {humidity} <br /> Humidity
                        </p>
                    </div>
                </div>
                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className='extra-info-leftside'>
                            {pressure} <br /> Pressure
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className='extra-info-leftside'>
                            {speed} <br /> Speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}
