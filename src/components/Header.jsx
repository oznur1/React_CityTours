import React from 'react'

const Header = () => {
  return (
   <nav className='navbar'>
    <img src="public/logo.png" className='logo' alt="" />

    <ul className='nav-links'>
    <li>
        <a href="/" className='nav-link'>Home</a>
    </li>
    <li>
        <a href="/" className='nav-link'>About</a>
    </li>
    <li>
        <a href="/" className='nav-link'>Tours</a>
    </li>
    </ul>
   </nav>
  

    
  )
}

export default Header
