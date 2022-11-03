import React, {useState} from "react";
import "./donationform.css";
import { useNavigate } from "react-router-dom"

const Donation = ( ) => {

    const [data, setData] = useState({
        user_id: "",
        donation_name: "",
        description: "",
        donation_amount: "",
        region_id: "",
        country_code:"",
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
            setSuccess("Form completed successfully");
            setData({
                user_id: "",
                donation_name: "",
                description: "",
                donation_amount: "",
                region_id: "",
                country_code:"",
            });

            setTimeout(() => {
              navigate("/dashboard", { state: user });
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
          <div className="log-donform">
              <div className="sign-donform">
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
          </div>
        <div className="form-don">
        <div className="tab-donform">
        <h1>Fill in the form below</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <label>User Id</label>
          <input type="text" name="user_id" placeholder="User Id.............." required  onChange={handleChange}
                value={data.user_id}  />
                <label>Donation Name</label>
          <input type="text" name="donation_name" placeholder="Enter you name............" required   onChange={handleChange}
          value={data.donation_name}/>
          <label>Description</label>
          <input type="text" name="description" placeholder="Description..........." required   onChange={handleChange}
          value={data.description}/>
          <label>Donation Amount</label>
          <input type="text" name="donation_amount" placeholder="Amount....." required   onChange={handleChange}
            value={data.donation_amount}/>
            <label>Region Id</label>
            <input type="text" name="region_id" placeholder="Region id..........." required   onChange={handleChange}
          value={data.region_id}/>
          <label>Country code</label>
          <input type="text" name="country_code" placeholder="Country code.........." required   onChange={handleChange}
          value={data.country_code}/>
          <button type="submit" className="btn-primary-donform" onClick={handleSubmit}>
            Submit
          </button>
              <p>“Always give without remembering and always receive without forgetting"
              Brian Tracy</p>
            </form>
          </div>
          </div>
      )
  }

export default Donation
