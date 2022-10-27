import React from "react";
import "./footer.css"
import {FaInstagramSquare} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"
import {SiSlack} from "react-icons/si"
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const Footer = ( ) => {
    return (
        <footer>
        <a href="#" className="logo"></a>
        <a href="#"><BsFillArrowUpCircleFill /></a>
        <div className="soshi">
                <a href="https://figma.com"><FaInstagramSquare /></a>
                <a href="https://github.com"><FaGithubSquare /></a>
                <a href="https://slack.com"><SiSlack /></a>
        </div>

        <div className="copyright">
            <small>&copy; Created with ProDev by <span> Team Aid Hub.</span> All rights reserved</small>
        </div>
        </footer>
    )
}

export default Footer
