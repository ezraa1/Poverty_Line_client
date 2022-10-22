import React from "react"
import "./signup.css"

const Signup = ( ) => {
    return(
        <div className="log">
            <div className="sign">
        <h1>SIGN UP</h1>
        </div>

        <div className="signup">
        <h3>Already have an account? </h3>
        <button type="submit" className="btn">
            Login
          </button>
        </div>
      <div className="form">
      <form>
        <input type="text" name="firstname" placeholder="Enter your firstname................" required   />
        <input type="text" name="lastname" placeholder="Enter your lastname................" required   />
        <input type="email" name="email" placeholder="Enter you email............" required  />
        <input type="text" name="country" placeholder="Kenya..........." required  />
        <input type="tel" name="phone" placeholder="+254 123 456 789........." required  />
        <input type="password" name="password" placeholder="Enter you password............" required   />
        <input type="confirmpassword" name="confirmpassword" placeholder="Confirm password............" required   />

          </form>
        </div>
        <div className="button">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
        </div>
    )
}

export default Signup
