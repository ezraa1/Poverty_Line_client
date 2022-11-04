import React from 'react'
import './About.css'


const About = () => {
    return (
        <div className='about' >
            <div className='container'>

                <img src='https://www.adp.com/-/media/adp/resourcehub/rh2/images/faq/img/co-employment-616x308.jpg?rev=410cd764c61b4694b3784f63cfe982ab&hash=660340AD356258150721A397B0BE29CE' alt='john' width={500} height={450} />

                <img src='https://images.pexels.com/photos/1340725/pexels-photo-1340725.jpeg?auto=compress&cs=tinysrgb&w=600' alt='john' width={500} height={450} />

                <div className='col-2'>
                    <h2 className='header-about'>About Us</h2>
                    <span className='line'></span>
                    <h4 className='header-did'><b><u>Did you know?</u></b></h4>
                    <p>Over 689 million people live below the poverty line, on less than $1.90 per day.
                        There are many challenges that the poor face such as lack of education, employment, income and productive resources.<br/><br/>
                        Our aim is to help reduce poverty by increasing employment generation and promoting social integration for the poor.<br/><br/>
                        We do this by providing a platform where  the youth/ needy/ poor can find jobs and generate money,
                        obtain scholarships from donors and raise funds for food and healthcare services.
                    </p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
