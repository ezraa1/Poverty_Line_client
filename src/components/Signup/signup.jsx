import React, {useState} from "react"
import "./signup.css"
import { NavLink, useNavigate } from "react-router-dom"
import IMG from "../../assets/hand.jpg"

const Signup = ( ) => {
    const [data, setData] = useState({
      full_name: "",
      email: "",
      password: "",
      user_type: "",
      password_confirmation: "",
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
        const response = await fetch("https://intense-scrubland-82333.herokuapp.com/signup", {
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
      full_name: "",
      email: "",
      password: "",
      user_type: "",
      password_confirmation: "passwordConfirmation",
      skills: "",
          });

          setTimeout(() => {
            navigate("login", { state: user });
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

        <h3 className="signup-h3">Already have an account? </h3>
        <NavLink to="/login">
        <button type="submit" className="btn">
            Login
          </button>
          </NavLink>
          </div>
      <div className="form-signup">
      <form onSubmit={handleSubmit}>
         
        <input type="text" name="full_name" placeholder="Enter your fullname................"  onChange={handleChange}
        value={data.full_name} />
        <input type="email" name="email" placeholder="Enter you email............" required   onChange={handleChange}
        value={data.email}/>
         <input type="password" name="password" placeholder="Enter you password............" required   onChange={handleChange}
        value={data.password} />
        <input type="password" name="password_confirmation" placeholder="confirm password........." required   onChange={handleChange}
        value={data.password_confirmation}/>
        <input type="text" name="user_type" placeholder="Enter 1 for regular, 2 for admin................" required  onChange={handleChange}
              value={data.user_type}  />
        
        
       
          <input type="text" name="skills" placeholder="Enter your skill................" required  onChange={handleChange}

              value={data.skills}  /> 


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


