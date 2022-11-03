import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/hero' className='logo'>
                    <h3 className='poverty-line'>POVERTYLINE</h3>
                </a>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/hero">Home</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/about">About</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/donations">Donations</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/subscribe">Subscription</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/signup">Signup</Link>
                    </li>   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
