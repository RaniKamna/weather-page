import React from 'react'

export const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <ul className='nav-links'>
                    <li className='active'>Temperature <span>|</span></li>
                    <li>Precipitaion <span>|</span></li>
                    <li>Wind</li>
                </ul>
            </nav>
        </div>
    )
}
