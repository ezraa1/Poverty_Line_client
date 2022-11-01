import React, {useState, useEffect} from "react";
import "./usertable.css"
import {AiFillEdit} from "react-icons/ai"
import {MdDelete} from "react-icons/md"

const UserTable = ( ) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = "https://poverty-line-api.herokuapp.com/users"
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
      <h1>USERS DETAILS</h1>
        <table>
          <thead>
          <tr>
          <th>Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>City</th>
            <th>Country Name</th>
            <th>Region Id</th>
            <th>Telephone</th>
            <th>Marital Status</th>
            <th>Employment Status</th>
            <th>Monthly Income</th>
            <th>Access to safe water</th>
            <th>Access to electricity</th>
            <th>Medical Insurance</th>
            <th>Education Level</th>
            <th>Religion</th>
            <th>Disability</th>
            <th>Password Digest</th>
            <th>Action</th>

          </tr>
          </thead>
          <tbody>
          {data.map(( ) => (
            <tr>
            <td>{data.id}</td>
            <td>{data.full_name}</td>
            <td>{data.email}</td>
            <td>{data.gender}</td>
            <td>{data.age}</td>
            <td>{data.city}</td>
            <td>{data.country_name}</td>
            <td>{data.region_id}</td>
            <td>{data.phone}</td>
            <td>{data.marital_status}</td>
            <td>{data.employment_status}</td>
            <td>{data.monthly_income}</td>
            <td>{data.access_to_safe_water}</td>
            <td>{data.access_to_electricity}</td>
            <td>{data.medical_insurance}</td>
            <td>{data.education_level}</td>
            <td>{data.religion}</td>
            <td>{data.is_disabled}</td>
            <td>{data.password_digest}</td>
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

  export default UserTable;
