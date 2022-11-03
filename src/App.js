import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import Donations from './components/Donations'


function App() {
  return (
    
       
       
    <div>
      <Navbar />
      <Hero />
      <About />
      <Donations />
      <Testimonials />
      <Subscribe />
      <Footer />

       
      
      
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
