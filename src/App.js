import React from "react";
import {Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Form from "./components/Form/form"
import DonationForm from "./components/DonationForm/donationform";
import Region from "./components/Region/region"
import UserDash from "./components/UserDash/userdash";
import UserDashboard from "./components/UserDashboard/userdashboard";
import Hero from "./components/Hero";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup/signup";
import Donation from "./components/Donations";
import Subscribe from "./components/Subscribe";
import About from "./components/About";

const App = ( ) => {
  return(
        <div >
        <Navbar/>
         <Routes>
              <Route  path="/dashboard" element={<Dashboard />} />
              <Route  path="/userdashboard" element={<UserDashboard />} />
              <Route  path="/form" element={<Form />} />
              <Route   path="/donation"  element={<Donation />} />
               <Route path="/region" element={<Region />} />
              <Route path="/userdash" element={<UserDash />}/>
              <Route   path="/hero"   element={<Hero/> }   />
              <Route   path="/signup"   element={<Signup/>}   />
              <Route   path="/donations"   element={<Donation/>}   />
              <Route    path="/subscribe"  element={<Subscribe/>}  />
              <Route    path="/about"  element={<About/>}  />
              <Route    path="/login"  element={<Login/>}  />

        </Routes>

          </div>
  )
}

export default App


