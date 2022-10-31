import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/login";
import Signup from "./Signup/signup";
import Home from "./pages/Home";
import Dashboard from "./Dashboard/dashboard";

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
          <Router>
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
              </Routes>
              </Router>
            </div>
  )
}

export default App
