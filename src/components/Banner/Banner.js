import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='Banner'>
        <div className='ak'>
        <div className='content'>
            <h2 className='title'>Campus in-Service</h2>
            
                <h2 className='description'>Why wait in long queue when you can order from Campus in-Service</h2>
            <div className='banner-button'>
            <a href='/login'><button className='button'>Login</button></a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner