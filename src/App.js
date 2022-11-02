import React
//  { useEffect, useState } 
 from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup/signup";
import Donations from "./components/Donations";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import About from "./components/About";
 const App = ( ) => {
  return (
    <div>

<Navbar/>

<Routes>
              <Route   path="/hero"   element={<Hero/> }   />
              <Route   path="/signup"   element={<Signup/>}   />
              <Route   path="/donations"   element={<Donations/>}   />
              <Route   path="/testimonials"   element={<Testimonials/>}   />
              <Route    path="/subscribe"  element={<Subscribe/>}  /> 
              <Route    path="/about"  element={<About/>}  /> 
              <Route    path="/login"  element={<Login/>}  /> 
              </Routes>
    </div>
  );
}

export default App;
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
