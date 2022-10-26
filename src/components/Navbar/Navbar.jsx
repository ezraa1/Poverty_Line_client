import React from "react";
import './Navbar.css';

const Navbar = ( ) =>{
    return(
        <div className="nav-wrapper">
            <div className="nav-left">
                <div className="nav-name">Charity</div>
               
            </div>
            <div className="nav-right">
                <div className="nav-list">
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Donate</li>
                        <li>Volunteer</li>
                        <li>Login/sign-up</li>
                        <li>Contact Us</li>
                    </ul>

                </div>
                {/* <button className="button">
                    Click here
                </button> */}
            </div>
        </div>
    )
}

export default Navbar;