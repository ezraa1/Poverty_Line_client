import React from 'react'
import  './Contact.css'
import Phone from './img/phone.jpg'
import Email from './img/email.jpg'
import Address from "./img/address.jpg"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react'
const Contact = () => {
  const form = useRef();
    const [done, setDone] = useState(false)
    

    const handleSubmit = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_dg5xgls', 'template_ml9prze', form.current, 'C5IYjO6gmEKlVIkdK')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  
    }
  return (
    
    <div className="page-heading">
      
      <div className='contact'>
        <div className='contact-bg'></div>
        <div className='contact-wrapper'>
            <div className='contact-left'>
                
                <div className='contact-info'>
                <div className='contact-info-item'>
                        <img src={Phone} alt='' className='contact-icon'/>
                        +254745635271
                    </div>
                    <div className='contact-info-item'>
                        <img src={Email} alt='' className='contact-icon'/>
                        contact@ngo.com
                    </div>
                    <div className='contact-info-item'>
                        <img src={Address} alt='' className='contact-icon'/>
                        Nairobi, Kenya
                    </div>
                </div>
            </div>
            <div className='contact-right'>
            <h3 className='contact-title'><b>GET IN TOUCH</b></h3>
                <form className='contact-form' ref={form} onSubmit= {handleSubmit}>
                    <input className='contact-input' type='text' placeholder='Name' name='user_name' /> <br />
                    <input className='contact-input' type='text' placeholder='Phone Number' name='user_phone' /><br />
                    <input className='contact-input' type='text' placeholder='Email' name='user_email' />
                    <textarea className='contact-textarea' placeholder='Write your message here...' name='message' rows='5'/>
                    <button className='submit-contact'><b>SUBMIT</b></button> <br />
                   <h2 className='contact-done'> {done && "Sumitted successfully..................."}</h2>
                </form>
            </div>
        </div>
   </div>
      
    </div>
  );
}

export default Contact;