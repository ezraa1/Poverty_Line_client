import "./login.css"
import {FaArrowLeft} from "react-icons/fa"
import IMG from "../../assets/hand.jpg"
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = ( ) => {
  const [data, setData] =useState({
    email: "",
    password: "",
    });

    const [errors, setErrors] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
      setErrors(null);
      const { name } = event.target;
      const { value } = event.target;
      setData({ ...data, [name]: value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch("https://poverty-line-api.herokuapp.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(data),
        });
        const user = await response.json();
        if (response.ok) {
          setSuccess("Logged in successfully!");
          setData({ email: "", password: "" });
          setTimeout(() => {
            navigate("/home", { state: user });
          }, 2000);
        } else {
          setErrors(user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    return(
        <div className="nav">
        <div className="arrow">
        <FaArrowLeft />
        </div>
            <div className="bar">
            {errors !== null ? (
              <div
                style={{
                  color: "orange",
                  padding: "0.1rem",
                  margin: "1rem 0",
                }}
              >
                {errors.error}
              </div>
            ) : null}

            {success !== null ? (
              <div
                style={{
                  color: "green",
                  padding: "0.1rem",
                  margin: "1rem 0",
                }}
              >
                {success}
              </div>
            ) : null}
       <h3>Back to Homepage</h3>
            <h1>WELCOME BACK!</h1>
            <img src={IMG} alt="Logo Image" />
                </div>

            <div className="form">
            <form onSubmit= {handleSubmit} >
            <input type="text" name="email" placeholder="Enter Email.................." required
            value={data.email}
            onChange={handleChange}/>
            <input type="password" name="password" placeholder="Enter Password............" required
            value={data.password}
            onChange={handleChange}/>
            </form>
        </div>

        <div className="button">
        <button
          type="submit"
          className="btn btn-primary" onClick={handleSubmit}
        >
          Login
        </button>
      </div>

      <div className="signup">
        <h3>Have no account? </h3>
        <NavLink to="/signup">
        <button type="submit" className="btn">
            Sign Up
          </button>
          </NavLink>
        </div>
        </div>
    )
}

export default Login
