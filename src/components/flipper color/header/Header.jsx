import './Header.css'
import React from 'react'

export const Header = () => {
  return (
    <>
        <nav className='header'>
            <h1>Flipper Color</h1>
            <ul className='links'>
                <li>Simple</li>
                <li>Hexa</li>
            </ul>
        </nav>
    </>
  )
}

export default Header;