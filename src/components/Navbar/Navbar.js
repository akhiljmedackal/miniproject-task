import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
     <div className='Navbar'>
        <span className='nav-logo'>Campus in-Service</span>
        <div className='nav-items'>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='Login'>Login</a>
      
      <a href='/contact'>Contact</a>
    </div>
    <div className='nav-toggle'>
        <div className='bar'></div>
    </div>
    </div>
  )
}

export default Navbar