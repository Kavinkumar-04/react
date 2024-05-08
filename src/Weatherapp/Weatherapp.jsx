import React from 'react'
import './weatherapp.css';

function Weatherapp() {
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityinput' placeholder='enter the place'/>
        </div>
        <div className='search-icon'>
            <img src="" alt="search icon" />
        </div>
      
    </div>
  )
}

export default Weatherapp
