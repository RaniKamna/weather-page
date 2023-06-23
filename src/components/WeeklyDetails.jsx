import React from 'react'

export const WeeklyDetails = () => {
    return (
        <div className='weeklydetail-container'>
            <div className='activecard'>
                <p className='day'>Tue</p>
                <img src='activeimage.jpg' alt='foggy' />
                <p className='fullday-degree'><span>43&deg; </span>30&deg;</p>
            </div>
            <div>
                <p className='day'>Wed</p>
                <img src='cloudy.jpg' alt='foggy' />
                <p className='fullday-degree'><span>44&deg; </span> 31&deg;</p>
            </div>
            <div>
                <p className='day'>Thu</p>
                <img src='cloudy.jpg' alt='foggy' />
                <p className='fullday-degree'><span>44&deg; </span> 31&deg;</p>
            </div>
            <div>
                <p className='day'>Fri</p>
                <img src='sunny.jpg' alt='foggy' />
                <p className='fullday-degree'><span>45&deg; </span> 31&deg;</p>
            </div>
            <div>
                <p className='day'>Sat</p>
                <img src='sunny.jpg' alt='foggy' />
                <p className='fullday-degree'><span>45&deg; </span> 30&deg;</p>
            </div>
            <div>
                <p className='day'>Sun</p>
                <img src='cloudy.jpg' alt='foggy' />
                <p className='fullday-degree'><span>44&deg; </span> 32&deg;</p>
            </div>
            <div>
                <p className='day'>Mon</p>
                <img src='sunny.jpg' alt='foggy' />
                <p className='fullday-degree'><span>43&deg; </span> 31&deg;</p>
            </div>
            <div>
                <p className='day'>Tue</p>
                <img src='sunny.jpg' alt='foggy' />
                <p className='fullday-degree'><span>41&deg; </span> 29&deg;</p>
            </div>
        </div>
    )
}
