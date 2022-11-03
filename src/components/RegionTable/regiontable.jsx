import React, {useState, useEffect} from "react";
import "./regiontable.css"
import {AiFillEdit} from "react-icons/ai"
import {MdDelete} from "react-icons/md"

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
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {data.map(( data, i) => (
            <tr key={i}>
            <td>{data.id}</td>
            <td>{data.sub_region}</td>
            <td>{data.sub_region_code}</td>
            <td>{data.country_name}</td>
            <td>{data.country_code}</td>
            <td>{data.city}</td>
            <td>{data.city_reporting_level}</td>
            <td><button className="btn btn-danger"><AiFillEdit /></button>
            <button className="btn btn-danger"><MdDelete /></button>
            </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default RegionTable;
