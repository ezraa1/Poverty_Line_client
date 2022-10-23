import "./login.css"
import {FaArrowLeft} from "react-icons/fa"
import IMG from "../../assets/hand.jpg"
import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = ( ) => {
  const [data, setData] =useState({
      fullname: "",
      password: "",
    });


    return(
        <div className="nav">
            <div className="bar">
        <FaArrowLeft /><h3><i class="fa fa-arrow-left" aria-hidden="true"></i>Back to Homepage</h3>
            <h1>WELCOME BACK!</h1>
            <img src={IMG} alt="Logo Image" />
                </div>

            <div className="form">
            <form onSubmit >
            <input type="text" name="fullname" placeholder="Enter Fullname................" required  />
            <input type="password" name="password" placeholder="Enter Password............" required />
            </form>
        </div>

        <div className="button">
        <button
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
      </div>

      <div className="signup">
        <h3>Have no account? </h3>
        <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
        </div>
    )
}

export default Login
