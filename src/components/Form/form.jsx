import React, {useState} from "react"
import "./form.css"
import { useNavigate } from "react-router-dom"

const Form = ( ) => {
    const [data, setData] = useState({
      full_name: "",
      email: "",
      gender: "",
      age: "",
      city: "",
      country_name:"",
      region_id: "",
      phone:"",
      marital_status: "",
      employment_status: "",
      monthly_income: "",
      access_to_safe_water: "",
      access_to_electricity: "",
      medical_insurance: "",
      education_level: "",
      religion: "",
      is_disabled: "",
      password_digest: "",
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
            full_name: "",
            email: "",
            gender: "",
            age: "",
            city: "",
            country_name:"",
            region_id: "",
            phone:"",
            marital_status: "",
            employment_status: "",
            monthly_income: "",
            access_to_safe_water: "",
            access_to_electricity: "",
            medical_insurance: "",
            education_level: "",
            religion: "",
            is_disabled: "",
            password_digest: "",
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
        <div className="log">
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
        </div>
      <div className="form">
      <div className="tab">
      <h1>Fill in the form below</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" placeholder="Enter your fullname..............." required  onChange={handleChange}
              value={data.full_name}  />
        <input type="email" name="email" placeholder="Enter you email............" required   onChange={handleChange}
        value={data.email}/>
        <input type="gender" name="gender" placeholder="Female/ male............" required   onChange={handleChange}
        value={data.gender}/>
        <input type="text" name="age" placeholder="18+..." required   onChange={handleChange}
          value={data.age}/>
          <input type="text" name="city" placeholder="City............" required   onChange={handleChange}
        value={data.city}/>
        <input type="text" name="countryname" placeholder="Country..........." required   onChange={handleChange}
        value={data.country_name}/>
        <input type="text" name="region_id" placeholder="Enter region id.........." required   onChange={handleChange}
        value={data.region_id}/>
        <input type="tel" name="phone" placeholder="Start with country code +254........." required   onChange={handleChange}
        value={data.phone}/>
        <input type="text" name="marital_status" placeholder="Single/married.........." required   onChange={handleChange}
        value={data.marital_status}/>
        <input type="text" name="employment_status" placeholder="Employed/ Not employed.........." required   onChange={handleChange}
        value={data.employment_status}/>
        <input type="text" name="monthly_income" placeholder="Amount.........." required   onChange={handleChange}
        value={data.monthly_income}/>
        <input type="text" name="access_to_safe_water" placeholder="Yes/No.........." required   onChange={handleChange}
        value={data.access_to_safe_water}/>
        <input type="text" name="access_to_electricity" placeholder="Yes/No.........." required   onChange={handleChange}
        value={data.access_to_electricity}/>
        <input type="text" name="medical_insurance" placeholder="Yes/N/A........." required   onChange={handleChange}
        value={data.medical_insurance}/>
        <input type="text" name="education_level" placeholder="The highest.........." required   onChange={handleChange}
        value={data.education_level}/>
        <input type="text" name="religion" placeholder="Christian/ Muslim/ Pagan.........." required   onChange={handleChange}
        value={data.religion}/>
        <input type="text" name="is_disabled" placeholder="Yes/ No........." required   onChange={handleChange}
        value={data.is_disabled}/>
        <input type="text" name="password_digest" placeholder="Password........." required   onChange={handleChange}
        value={data.password_digest}/>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
            <p>“As long as poverty, injustice and gross inequality
             exist in our world, none of us can truly rest.”
              “If a free society cannot help the many who
              are poor, it cannot save the few who are rich.”</p>
          </form>
        </div>
        </div>
    )
}

export default Form
