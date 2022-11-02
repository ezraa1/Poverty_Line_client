import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/login";
import Signup from "./Signup/signup";
import Home from "./pages/Home";
import Dashboard from "./Dashboard/dashboard";
import Form from "./Form/form"
import Donation from "./Donation/donation";
import Region from "./Region/region"

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
                path="/"
                index
                element={<Home />}
              />

              <Route
              path="/signup"
              element={<Signup />}
            />

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
              path="/dashboard"
              element={<Dashboard />}
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
              </Routes>

            </div>
  )
}

export default App
