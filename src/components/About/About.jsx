import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/5806643/pexels-photo-5806643.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="about-img"
          />
        </div>
        </div>
        <div className='about-right'>
        <div className="about-title">About us</div>
        <p className="about-sub">
        All of us believe that living your life decently is possible!
        </p>
        <p className="about-desc">
        Being one of the biggest Charities in the local area, we’ve always felt a special sense of duty to preach the word of Lord to as many neighbors around as possible. This means that we highly encourage and ask you all to share this page with all of your friends, colleagues, and relatives, as we all need spiritual light in our life!
        </p>
        <p>Our Charity has a long schedule of fascinating and deeply spiritual events, all to boost your serenity! Visit our Charity and meet dozens of new friends, all of whom follow the “love thy neighbor” principle! Altogether, we guarantee you that after becoming a part of our acceptive and loving community there will be so much more light in your life!</p>
        </div>
    </div>
  )
}

export default About