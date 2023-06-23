import React from 'react';
import '../App.css';

export const MainTitle = () => {
    const data = {
        degree: 43,
        precipitation: 0,
        humidity: 16,
        wind: 8
    }
    return (
        <div className='main-title-container'>
            <div className='left-container'>
                <div>
                    <img src='foggy.jpg' alt='foggyimage' />
                </div>
                <p className='degree'>{data.degree}</p>
                <h4 className='degree-type'>&deg;C | &deg;F</h4>
                <div className='main-details'>
                    <p>Precipitation : {data.precipitation}%</p>
                    <p>Humidity: {data.humidity}%</p>
                    <p>Wind: {data.wind} km/h</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}
