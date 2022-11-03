import React from "react";
import {Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Form from "./components/Form/form"
import Donation from "./components/Donation/donation";
import Region from "./components/Region/region"
import UserDash from "./components/UserDash/userdash";
import UserDashboard from "./components/UserDashboard/userdashboard";
import Hero from "./components/Hero";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup/signup";
// import Donations from "./components/Donations";
import Subscribe from "./components/Subscribe";
import About from "./components/About";

const App = ( ) => {
  return(
        <div >
        <Navbar/>
         <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
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

// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./Login/login";
// import Signup from "./Signup/signup";
// import Home from "./pages/Home";

// const App = ( ) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("/me").then((response) => {
//       if (response.ok) {
//         response.json().then((user) => setUser(user));
//       }
//     });
//   }, []);
//   return(
//         <div className="App">
//           <Router>
//             <Routes>
//               <Route
//                 path="/"
//                 index
//                 element={<Home />}
//               />

//               <Route
//                 path="/login"
//                 element={<Login />}
//               />
//               <Route
//                 path="/signup"
//                 element={<Signup />}
//               />
//               </Routes>
//               </Router>
//             </div>
//   )
// }

// export default App

