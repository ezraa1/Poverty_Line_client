import React from "react";

const Navbar = ( ) =>{
    return(
        <div className="nav-wrapper">
            <div className="nav-left">
                <div className="nav-name">Charity</div>
                <span>toggle</span>
            </div>
            <div className="nav-right">
                <div className="nav-list">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Donate</li>
                        <li>Contact us</li>
                        <li>Login/sign-up</li>
                    </ul>

                </div>
                <button className="button">
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Navbar;