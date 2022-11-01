import React from "react";
import "./DonationsForm.css"

function DonationsForm(){
    return(
        <div className="donation-form-body">
            <h2>DONATE</h2>
            <div className="donation-form">
                <form>
                    <label><b>DONATION NAME:</b></label>
                    <input placeholder="Education/Food/Healthcare"></input>

                    <label><b>DESCRIPTION:</b></label>
                    <input placeholder="Describe your donation"></input>

                    <label><b>DONATION AMOUNT:</b></label>
                    <input placeholder="How much money would you like to contribute?"></input>

                    <label><b>COUNTRY CODE:</b></label>
                    <input placeholder="Enter the country code of the recipient country"></input>

                </form>
            </div>
        </div>
    )
}

export default DonationsForm;