import React from "react";

const Region = ( ) => {
    const [data, setData] = useState({
        sub_region: "",
        sub_region_code: "",
        country_name: "",
        country_code: "",
        city: "",
        city_reporting_level:"",
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
                sub_region: "",
                sub_region_code: "",
                country_name: "",
                country_code: "",
                city: "",
                city_reporting_level:"",
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
        <label>Sub Region</label>
          <input type="text" name="sub_region" placeholder="sub_region.............." required  onChange={handleChange}
                value={data.user_id}  />
                <label>Sub Region Code</label>
          <input type="text" name="sub_region_code" placeholder="sub_region_code............" required   onChange={handleChange}
          value={data.sub_region_code}/>
          <label>Country Name</label>
          <input type="text" name=" country_name" placeholder="Country Name........." required   onChange={handleChange}
          value={data.country_name }/>
          <label>Country</label>
          <input type="text" name="country_code" placeholder="country_code........." required   onChange={handleChange}
            value={data.country_code }/>
            <label>City</label>
            <input type="text" name="city" placeholder="City............" required   onChange={handleChange}
          value={data.city}/>
          <label>City reporting level</label>
          <input type="text" name="city_reporting_level" placeholder="City reporting level............" required   onChange={handleChange}
          value={data.city_reporting_level}/>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
              <p>“It’s easier to take than to give. It’s nobler to give than to take. The thrill of taking lasts a day. The thrill of giving lasts a lifetime."
                      Joan Marques</p>
            </form>
          </div>
          </div>
      )
  }


export default Region
