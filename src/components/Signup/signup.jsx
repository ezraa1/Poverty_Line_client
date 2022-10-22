import React from "react";

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
        <div className="button">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
        </div>
    )
}

export default Signup
