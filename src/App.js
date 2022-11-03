import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup/signup";
import Donations from "./components/Donations";
import Subscribe from "./components/Subscribe";
import About from "./components/About";
import Donform from './components/Donform';
import Contact from "./components/Contact"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/hero" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donations/donate" element={<Donform />} />
        
      </Routes>
    </div>
  );
}

export default App;
