import React from "react";
import "./Donation.css"
function Donation() {

  return (
    
    <div className="donations-page">
      <div className="heading">
      <h2>Donations</h2>
      <span className='line'></span>
      </div>
      <div className="btn-donations">
      <div className="education">
         <button className="btn-educate">Educate A Child</button>
      </div>
      <div>
        <button className="btn-feed">Feed a Family</button>
      </div>
      <div>
        <button className="health">Healthcare Donations</button>
      </div>
      </div>
    </div>
    
  );
}

export default Donation;