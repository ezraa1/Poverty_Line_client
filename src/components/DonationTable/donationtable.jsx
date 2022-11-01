import React, {useState, useEffect} from "react";
import "./donationtable.css"

const DonationTable = ( ) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = "https://poverty-line-api.herokuapp.com/donations"
    fetch(url)
    .then((response) =>
    response.json()).then(json => {
        console.log("jsonn", json)
        setData(json)
    }).catch(e =>{
        console.log("e", e)
    })
    } , [ ])
    return (
      <div className="app-container">
        <h1>DONATION DETAILS</h1>
        <table>
          <thead>
          <tr>
            <th>User Id</th>
            <th>Donation Name</th>
            <th>Description</th>
            <th>Donation Amount</th>
            <th>Region Id</th>
            <th>Country Code</th>
          </tr>
          </thead>
          <tbody>
          {data.map(( ) => (
            <tr>
            <td>{data.user_id}</td>
            <td>{data.donation_name}</td>
            <td>{data.description}</td>
            <td>{data.donation_amount}</td>
            <td>{data.region_id}</td>
            <td>{data.country_code}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default DonationTable;
