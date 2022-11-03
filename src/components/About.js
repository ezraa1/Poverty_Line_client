import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about' >
            <div className='container'>
                <img src='https://images.pexels.com/photos/1340725/pexels-photo-1340725.jpeg?auto=compress&cs=tinysrgb&w=600' alt='john' />
                <div className='col-2'>
                    <h2>About Us</h2>
                    <span className='line'></span>
                    <h4><b><u>Did you know?</u></b></h4>
                    <p>42 percent of the population in Sub-Saharan Africa continues to live below the poverty line. There are many challenges that the poor face such as lack of education, employment, income, productive resources</p>

                    <p>We majorly focus on the youth/poor/needy to empower them with top skills through scholarships and donations, so that they maybe in a position to use their skills to generate money</p>
                    <p>Let's connect you with the best skills in town</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
