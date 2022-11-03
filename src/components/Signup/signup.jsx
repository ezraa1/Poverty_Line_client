import React, {useState} from "react"
import "./signup.css"
import { NavLink, useNavigate } from "react-router-dom"
import IMG from "../../assets/hand.jpg"

const Signup = ( ) => {
    const [data, setData] = useState({
      firstname:"",
      lastname:"",
      fullname: "",
      email: "",
      country:"",
      phone:"",
      password: "",
      telephone_number: "",
      skills: "",
    })

    const [errors, setErrors] = useState(null);
    const [success, setSuccess] = useState(null);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
      const { name } = event.target;
      const { value } = event.target;
      setData({ ...data, [name]: value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch("https://poverty-line-api.herokuapp.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setUser(user);
          setSuccess("Signup is successfull!");
          setData({
      fullname: "",
      firstname:"",
      lastname:"",
      fullname: "",
      email: "",
      country:"",
      phone:"",
      password: "",
      usertype: "",
      telephone_number: "",
      skills: "",
          });

          setTimeout(() => {
            navigate("/footer", { state: user });
          }, 2000);
        } else {
          setErrors(user);
        }
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };

    return(
        <div className="sign-up">
            <div className="sign">
            {errors !== null ? (
              <div
                style={{
                  color: "orange",
                  padding: "0.1rem",
                  margin: "1rem 0",
                }}
              >
                <ul>
                  {errors.errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
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

        <h1>SIGN UP</h1>
        <img src={IMG} alt="Logo" />
        </div>

        <div className="signup">
        <h3>Already have an account? </h3>
        <NavLink to="/login">
        <button type="submit" className="btn">
            Login
          </button>
          </NavLink>
        </div>
      <div className="form">
      <form onSubmit={handleSubmit}>
                      <input type="text" name="firstname" placeholder="Enter your firstname................" required  onChange={handleChange}
              value={data.firstname}  />
       <input type="text" name="lastname" placeholder="Enter your lastname................" required   onChange={handleChange}
            value={data.lastname} />
        <input type="text" name="fullname" placeholder="Enter your fullname................" required   onChange={handleChange}
        value={data.fullname} />
        <input type="email" name="email" placeholder="Enter you email............" required   onChange={handleChange}
        value={data.email}/>
        <input type="text" name="country" placeholder="Kenya..........." required   onChange={handleChange}
          value={data.country}/>
        {/*<input type="text" name="country" placeholder="Kenya..........." required   onChange={handleChange}
          value={data.country}/>*/}
        <input type="tel" name="phone" placeholder="+254 123 456 789........." required   onChange={handleChange}
        value={data.phone}/>
        <input type="password" name="password" placeholder="Enter you password............" required   onChange={handleChange}
        value={data.password} />
          <input type="text" name="skills" placeholder="Enter your skill................" required  onChange={handleChange}
              value={data.skills}  /> 
        {/*<input type="confirmpassword" name="confirmpassword" placeholder="Confirm password............" required   onChange={handleChange}
      value={data.confirmpassword} />*/}

          </form>
        </div>

        <div className="button">
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="par">
      <p>“Do not look the other way;
      do not hesitate. Recognise
      that the world is hungry for
       action, not words. Act with courage and vision.”</p>
      </div>
        </div>
    )
}

export default Signup
