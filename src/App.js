import React
//  { useEffect, useState } 
 from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
 
import LoginSignup from "./components/LoginSignup";
 const App = ( ) => {
  return (
    <div>
            <Routes>
              <Route   path="/" index    element={<HomePage/> }   />
              <Route   path="/login"   element={<LoginSignup/>}   />
              <Route    path="/signup"  element={<LoginSignup/>}  />
              </Routes>
    </div>
  );
}

export default App;
