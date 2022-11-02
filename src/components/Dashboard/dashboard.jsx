import React from "react";
import "./dashboard.css";
import {RiLogoutBoxLine} from "react-icons/ri"
import {NavLink, useNavigate } from "react-router-dom"
import {MdDashboard} from "react-icons/md"
import {BiDonateBlood} from "react-icons/bi"
import {SiTheregister} from "react-icons/si"
import RegionTable from "../RegionTable/regiontable";
import DonationTable from "../DonationTable/donationtable";
import UserTable from "../UserTable/usertable";
import UserDashboard from "../UserDashboard/userdashboard";

const Dashboard = ( ) => {
    const navigate = useNavigate();
    const handleClick =( ) =>{
        navigate('/login')
      }


    return (

        <div className="board">
        <div className="dash">
        <h1>Admin Dashboard</h1>
        <h3> <RiLogoutBoxLine onClick={handleClick}/>Logout</h3>
        <ul>
             <li>
             <NavLink to="/form"><a href=""><div className="icon"><MdDashboard /></div>Add users</a></NavLink>
             </li>
             <li>
             <NavLink to="/donation"> <a href=""><div className="icon"><BiDonateBlood /></div>Add donation</a></NavLink>
             </li>
             <li>
             <NavLink to="/region"><a href=""><div className="icon"><SiTheregister /></div>Add region</a></NavLink>
             </li>
        </ul>
        <UserTable />
        <RegionTable />
        <DonationTable />
        <UserDashboard />
        </div>
        </div>

    )
}


export default Dashboard
