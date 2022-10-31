import React from "react";
import "./dashboard.css";
import {RiLogoutBoxLine} from "react-icons/ri"
import { useNavigate } from "react-router-dom"

const Dashboard = ( ) => {
    const navigate = useNavigate();
    const handleClick =( ) =>{
        navigate('/')
      }

    return (
        <div className="board">
        <div className="dash">
        <h1>Admin Dashboard</h1>
        <h3> <RiLogoutBoxLine onClick={handleClick}/>Logout</h3>
        </div>
        </div>
    )
}

export default Dashboard
