import React,{useState}from "react";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import SignUp  from "../pages/SignUp";
import "../pages/style2.css"
const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
    
          <div className="col-xl-10 col-lg-12 col-md-9" >
    
        <Link className="btn btn-block btn-primary mt-5 rounded-0"  to="/" >Back to Homepage </Link> 
       {showLogin?( 
         <>
          <Login /> 
         <label> No Account?</label>
       <button  className='btn  btn-dark btn-block w-25 rounded-0' onClick={() => setShowLogin(false)}>Sign Up</button>
       </>):( <>
           <SignUp /> 
           <label>Already have an account</label>
           <button className='btn  btn-dark rounded-0 w-25 btn-block' onClick={() => setShowLogin(true)}>Login</button>
            </>
       )}

 </div>
 </div>
 </div>
    )
}
export default LoginSignup