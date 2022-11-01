import React from "react";
import "./DonationsForm.css"

function DonationsForm(){
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Thank you for your donation!');
      }

    return(
        <div className="donation-form-body">
            <h2>DONATE</h2>
            <div className="donation-form">
                <form onSubmit={handleSubmit}>
                    <label><b>DONATION NAME:</b></label>
                    <input placeholder="Education/Food/Healthcare" type="text"></input>

                    <label><b>DESCRIPTION:</b></label>
                    <input placeholder="Describe your donation" type="text"></input>

                    <label><b>DONATION AMOUNT:</b></label>
                    <input placeholder="How much money would you like to contribute?" type="text"></input>

                    <label><b>COUNTRY CODE:</b></label>
                    <input placeholder="Enter the country code of the beneficiary" type="text"></input>

                    <button className="form-btn" type="submit">SEND DONATION</button>

                </form>
            </div>
        </div>
    )
}

export default DonationsForm;