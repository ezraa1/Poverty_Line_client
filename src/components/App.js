import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/login";
import Signup from "./Signup/signup";

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
                element={<Login />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              </Routes>
              </Router>
            </div>
  )
}

export default App
