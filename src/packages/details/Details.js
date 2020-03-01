import React        from 'react'

import './Details.scss'


export default ({ main, sys, wind }) => (
    <div className="harba-weather-details">
        <div>
            <h3>Details:</h3>
        </div>
        <div>
            <div>Feels like: {main.feels_like}<span>°C</span></div>
        </div>
        <div>
            <div>Wind: {wind.speed} m/s</div>
        </div>
        <div>
            <div>Humidity: {main.humidity}%</div>
        </div>
        <div>
            <div>Pressure: {main.pressure} hPa</div>
        </div>
        <div>
            <div>Sunrise: {Date(sys.sunrise).split('GMT')[0]}</div>
        </div>
        <div>
            <div>Sunset:  {Date(sys.sunset).split('GMT')[0]}</div>
        </div>
    </div>
)