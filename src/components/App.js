import React, { useEffect, useState } from "react";
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import Form from "./Form/form"
import Donation from "./Donation/donation";
import Region from "./Region/region"
import UserDash from "./UserDash/userdash";
import Footer from "./Footer/footer";
import UserDashboard from "./UserDashboard/userdashboard";

const App = ( ) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
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

      <Route
      path="/footer"
      element={<Footer />}
    />
              </Routes>

            </div>
  )
}

export default App
