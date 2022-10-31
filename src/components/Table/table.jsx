import React, {useState} from "react";
import "./table.css"


const Table =async ( ) => {

  const [data, setData] = useState()

  const response = await fetch("https://poverty-line-api.herokuapp.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

    return (
      <div className="app-container">
        <table>
          <thead>
          <tr>
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
          </tr>
          </thead>
          <tbody>
          {data.map(( ) => (
            <tr>
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
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default Table;
