import React from "react";
import "./Donations.css";
import education from "./images/education.jpg";
import food from './images/food.jpg';
import sick from "./images/sick.jpg";
import { useNavigate } from "react-router-dom";



function Donations() {

  // const [goToForm, setGoToForm ] = useState(false);

  // if(goToForm){
  //   return <Navigate to="/donations/donate" />;
  // }

 const navigate = useNavigate();
   
  

  return (
    
    <div className="donations" id="donate">

      <div className="heading">
      <h2>Donations</h2>
      <span className='line'></span>
      </div>

      <div className="btn-donations">

      <div className="education">
          <img src={education} alt="education"/>
             
             <button className="btn-educate" onClick={() => {navigate("/donations/donate")}}><b>EDUCATE A CHILD</b></button>
              
      </div>

      <div>
        <img src={food} alt="food"/>
        <button className="btn-feed" onClick={() => {navigate("/donations/donate")}}><b>FEED A FAMILY</b></button>
      </div>

      <div>
        <img width={500} src={sick} alt="sick"/>
        <button className="health" onClick={() => {navigate("/donations/donate")}}><b>HEALTHCARE DONATIONS</b></button>
      </div>

      </div>

    </div>
    
  );
}

export default Donations;