import React from "react";
import {RiLogoutBoxLine} from "react-icons/ri"
import {NavLink, useNavigate } from "react-router-dom"
import {AiOutlineForm} from "react-icons/ai"
import IMG from "../../assets/two.jpg"
import "./userdashboard.css"
import {BiDonateBlood} from "react-icons/bi"
import {FaStreetView} from "react-icons/fa"

const UserDashboard = ( ) => {
    const navigate = useNavigate();
    const handleClick =( ) =>{
        navigate('/login')
      }


    return (

        <div className="board">
        <div className="dash">
        <h1>User Dashboard</h1>
        <h3> <RiLogoutBoxLine onClick={handleClick}/>Logout</h3>
        <ul>
             <li>
             <NavLink to="/form"><a href="Registration"><div className="icon"><AiOutlineForm /></div>Registration</a></NavLink>
             </li>
             <li>
             <NavLink to="/"> <a href="Available Scholarships"><div className="icon"><BiDonateBlood /></div>Available Scholarships</a></NavLink>
             </li>
             <li>
             <NavLink to="/userdash"><a href="View Users"><div className="icon"><FaStreetView /></div>View Users</a></NavLink>
             </li>
        </ul>
        </div>
        <div className="image">
        <img src={IMG} alt="cover" />
        <p>Poverty line reaches and helps the most fragile communities affected by conflict, natural disasters,
         climate change, flooding, and extreme hunger. The organization implements various programs designed
          to address specific causes of extreme poverty in communities in 25 countries. It focuses on six thematic
          areas: livelihoods, health and nutrition, education, emergencies, gender equality and innovations.
          The core of the organization’s work is empowering local communities to build their resilience and ensure
          their transformation is sustainable and long-lasting, with an aim to achieve a vision of a world free poverty, fear and oppression.
          Expensive services are often beyond the reach of people living in poverty.
          Yet change is possible – with inclusive business models that offer affordable products and new jobs. Ideas
           like this need courage, supportive partners and knowledge, challenges an entrepreneur from Sub saharan
            has succeeded in rising to. Her mission is health care for all.</p>
            <h2>POVERTY LINE</h2>
      </div>

        </div>

    )
}


export default UserDashboard
