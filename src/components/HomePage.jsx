import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../pages/HomePage/Navbar";
import Hero from "../pages/HomePage/Hero";
import About from "../pages/HomePage/About";
import Testimonials from "../pages/HomePage/Testimonials";
import Footer from "../pages/HomePage/Footer";
import Subscribe from "../pages/HomePage/Subscribe";
import Donations from "../pages/HomePage/Donations";
const HomePage = () => {

    return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Donations />
    <Testimonials />
    <Subscribe />
    <Footer />
    </>
    );
}
export default HomePage;