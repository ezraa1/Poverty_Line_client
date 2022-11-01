import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <h3>POVERTYLINE</h3>

                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#hero' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                    <a href='#about' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</a>
                    </li>
                    
                    <li className='nav-item'>
                    <a href='#donate' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Donations</a>
                    </li>
                    <li className='nav-item'>
                    <a href='#testimonials' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                    <a href='#subscribe' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Subscription</a>
                    </li>
                    
                    <li className='nav-item'>
                    <a href='#signup' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
