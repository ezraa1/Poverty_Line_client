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
                    <h3>POVERTYLINE</h3>

                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                    <Link  to="/hero">Home</Link> 
                    {/* <a href='/#hero' spy="true" smooth="true" offset={-100} duration={500} onClick={closeMenu}>Home</a> */}
                    </li>
                    <li className='nav-item'>
                    <Link  to="/about">About</Link> 
                    {/* <a href='/#about' spy="true" smooth="true" offset={50} duration={500} onClick={closeMenu}>About</a> */}
                    </li>
                    
                    <li className='nav-item'>
                    <Link  to="/donations">Donations</Link> 
                    {/* <a href='/#donations' spy="true" smooth="true" offset={50} duration={500} onClick={closeMenu}>Donations</a> */}
                    </li>
                    <li className='nav-item'>
                    <Link  to="/subscribe">Subscription</Link> 
                    
                    {/* <a href='/#testimonials' spy="true" smooth="true" offset={-100} duration={500} onClick={closeMenu}>Testimonials</a> */}
                    </li>
                    
                    <li className='nav-item'>
                    <Link  to="/signup">Signup</Link> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
