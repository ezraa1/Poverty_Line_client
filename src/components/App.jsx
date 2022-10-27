import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Region from "./pages/Region";
import Donation from "./pages/Donation";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/region" exact component={Region} />
          <Route path="/donation" exact component={Donation} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </div>
  )
}

export default App