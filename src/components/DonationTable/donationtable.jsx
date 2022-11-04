import React, {useState, useEffect} from "react";
import "./donationtable.css"
import {AiFillEdit} from "react-icons/ai"
import {MdDelete} from "react-icons/md"
//import EditDonation from "../EditDonation/editdonation";

const DonationTable = ( ) => {
  const [data, setData] = useState([])
  const [editData, setEditData] = useState(null)

  useEffect(() => {
    const url = "https://intense-scrubland-82333.herokuapp.com/donations"
    fetch(url)
    .then((r) => r.json())
        .then((data) => setData(data));

    } , [ ])

    const handleEditClick = (event, data) =>{
      event.preventDefault( );
      setEditData(data.user_id);
    }
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
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {data.map((data, i) => (
            <tr key={i}>
            <td>{data.user_id}</td>
            <td>{data.donation_name}</td>
            <td>{data.description}</td>
            <td>{data.donation_amount}</td>
            <td>{data.region_id}</td>
            <td>{data.country_code}</td>

            <td><button className="btn btn-danger" onClick={handleEditClick}><AiFillEdit /></button>
            <button className="btn btn-danger"><MdDelete /></button>
            </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default DonationTable;
