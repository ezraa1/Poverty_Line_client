import React from "react";
import './Intro.css';
import kids from '../../img/kids.jpg'


const intro = () =>{
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                <span>The assistance we provide are: </span>
                <div className="intro-title">
                  <div className="intro-title-wrapper">
                    <div className="intro-title-item">Water</div>
                    <div className="intro-title-item">Food</div>
                    <div className="intro-title-item">Shelter</div>
                    <div className="intro-title-item">Clothing</div>
                    <div className="intro-title-item">School</div>
                  </div>

                </div>
                <div className="intro-desc">
                  <p>Our Charity is a perfect place for all local residents to come in with their families and join for a prayer and a newfound peace of mind and soul. Religion will make your life more meaningful!</p>
                </div>
                
                </div>  
                
                {/* <button className="button intro-button">click</button>  */}
        
            </div>
            <div className="intro-right">
              <img src={kids} alt=" " className="intro-img"/>
             
            
          <div>
            
          </div>

            </div>
        </div>

    )
}
export default intro;