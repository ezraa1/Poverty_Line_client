import React, { useEffect, useState } from "react";
import {Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Form from "./components/Form/form"
import Donation from "./components/Donation/donation";
import Region from "./components/Region/region"
import UserDash from "./components/UserDash/userdash";
import UserDashboard from "./components/UserDashboard/userdashboard";

const App = ( ) => {
  return(
        <div className="App">

            <Routes>
              <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
            path="/userdashboard"
            element={<UserDashboard />}
          />

            <Route
              path="/form"
              element={<Form />}
            />

            <Route
            path="/donation"
            element={<Donation />}
          />

          <Route
          path="/region"
          element={<Region />}
        />

        <Route
        path="/userdash"
        element={<UserDash />}
      />

              </Routes>

            </div>
  )
}

export default App
