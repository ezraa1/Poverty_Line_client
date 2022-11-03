import React from "react";

const Sample = ( {user_id, donation_name, description, donation_amount, region_id, country_code}) =>{
    return (
        <div>
        {user_id}
        {donation_name}
        {description}
        {donation_amount}
        {region_id}
        {country_code}
        </div>
    )
}
export default Sample
