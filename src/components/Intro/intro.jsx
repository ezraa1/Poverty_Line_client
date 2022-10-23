import React from "react";
import './intro.css';
import Facebook from "../../img/Facebook.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const intro = () =>{
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                <span>Lorem ipsum dolor sit, </span>
                <span>Lorem ipsum  </span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, cupiditate tempore? Aut quos pariatur, quasi ea officia accusantium ipsum? Aut quam ex itaque veritatis aspernatur delectus! Perspiciatis natus mollitia molestiae!</span>
                </div>  
                <button className="button intro-button">click</button> 
        <div className="intro-icons">
          <img src={Facebook} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
          
        </div>
            </div>
            <div className="intro-right">
            
          <div>
            
          </div>

            </div>
        </div>

    )
}
export default intro;