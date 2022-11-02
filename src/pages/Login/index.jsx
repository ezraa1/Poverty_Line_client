import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

     function handleLogin () {
        this.props.history.push("/dashboard");
    }

    const [data, setData] =useState({
      email: "",
      password: "",
      });
  
      const [errors, setErrors] = useState(null);
      const [success, setSuccess] = useState(null);
      // const navigate = useNavigate();
  
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
              // navigate("/home", { state: user });
            }, 2000);
          } else {
            setErrors(user);
          }
        } catch (error) {
          console.log(error);
        }
      };
  



        return (
         
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                      <div className="col-lg-5 d-none d-lg-block bg-login-image bg-primary"></div>
                      <div className="col-lg-7">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                          </div>
                          <form  onSubmit={handleLogin} className="user">
                            <div className="form-group">
                              <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                            </div>
                        
                            <button  type="submit" className="btn btn-primary btn-user btn-block">
                              LOGIN
                            </button>
                            <hr/>
                           
                          </form>
                          <hr/>
                          {/* Use the below part to output  error messages */}
                          <div className='alert alert-danger rounded-0'>Incorrect username or password</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )
    }


export default Login;