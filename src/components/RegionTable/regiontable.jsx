import React, {useState, useEffect} from "react";
import "./regiontable.css"

const RegionTable = ( ) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = "https://poverty-line-api.herokuapp.com/regions"
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
      <h1>REGION DETAILS</h1>
        <table>
          <thead>
          <tr>
            <th>Identification</th>
            <th>Sub Region</th>
            <th>Sub Region Code</th>
            <th>Country Name</th>
            <th>Country Code</th>
            <th>City</th>
            <th>City Reporting level</th>
          </tr>
          </thead>
          <tbody>
          {data.map(( ) => (
            <tr>
            <td>{data.id}</td>
            <td>{data.sub_region}</td>
            <td>{data.sub_region_code}</td>
            <td>{data.country_name}</td>
            <td>{data.country_code}</td>
            <td>{data.city}</td>
            <td>{data.city_reporting_level}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default RegionTable;
