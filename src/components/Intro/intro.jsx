import React from "react";
import './intro.css';
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";


const intro = () =>{
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                <span>Lorem ipsum dolor sit, </span>
                <span>Lorem ipsum  </span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, cupiditate tempore? Aut quos pariatur, quasi ea officia accusantium ipsum? Aut quam ex itaque veritatis aspernatur delectus! Perspiciatis natus mollitia molestiae!</span>
                </div>  
                <button className="button intro-button">Click here</button> 
        <div className="intro-icons">
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
            </div>
            <div className="intro-right">
            <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <div>
            
          </div>

            </div>
        </div>

    )
}
export default intro;