import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
  function handleSignUp (e){
    e.PreventDefault();
    alert('Signup successfull');
  }

  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    usertype: "",
  })

  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

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
    email: "",
    password: "",
    usertype: "",
        });

        setTimeout(() => {
          // navigate("/footer", { state: user });
        }, 2000);
      } else {
        setErrors(user);
      }
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };



        return (
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-5 d-none d-lg-block bg-register-image bg-primary"></div>
                  <div className="col-lg-7">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                      </div>
                      <form  className="user" method='post' onSubmit={handleSignUp}>

                        <div className="form-group">
                            <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                        </div>
                        <button type='submit' className="btn btn-primary btn-user btn-block">
                          SIGNUP
                        </button>
                        <hr/>
                      </form>
                      <hr/>
                    
                      <div className="text-center">
                        <Link className="small" to="/login">Already have an account? Login!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     )
}

export default SignUp;