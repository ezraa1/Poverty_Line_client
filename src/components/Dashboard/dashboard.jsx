import React from "react";
import "./dashboard.css";
import {RiLogoutBoxLine} from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
import {MdDashboard} from "react-icons/md"
import {BiDonateBlood} from "react-icons/bi"
import {SiTheregister} from "react-icons/si"
import Detail from "../Detail/detail";
import Form from "../Form/form";

const Dashboard = ( ) => {
    const navigate = useNavigate();
    const handleClick =( ) =>{
        navigate('/')
      }


    return (
        <div className="board">
        <div className="dash">
        <h1>Admin Dashboard</h1>
        <NavLink to="/form">
        <button type="submit" className="btn">
            Fill form
          </button>
          </NavLink>
        <h3> <RiLogoutBoxLine onClick={handleClick}/>Logout</h3>
        <ul>
             <li>
                 <a href=""><MdDashboard />Users</a>
             </li>
             <li>
                 <a href=""><BiDonateBlood />Donation</a>
             </li>
             <li>
                 <a href=""><SiTheregister />Region</a>
             </li>
        </ul>
        <Detail />
        </div>
        <Form />
        </div>

    )
}


export default Dashboard
