import React, { useState } from 'react'
import axios from 'axios'

export default function Weather() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState()
    function handleChange(e) {
        setCity(e.target.value)
    }
    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'a5399ed34ffe9d2bff4391314e8bda55'}`)
            setWeather(response)
            console.log(response)
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleClick = () => {
        fetchWeather(city)
    }
    return (
        <div className='weather'>
            <input type="text" placeholder='Enter city name' value={city} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
            {weather && <>
                <div>
                    <h1>{weather.data.name}</h1>
                    <h2>temp is: {weather.data.main.temp}</h2>
                    <p>{weather.data.weather[0].description}</p>
                </div>
            </>}
        </div>
    )
}
