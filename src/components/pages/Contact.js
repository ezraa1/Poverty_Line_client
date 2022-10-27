import React from 'react'
import  './Contact.css'
import Phone from '../pages/img/phone.jpg'
import Email from '../pages/img/email.jpg'
import Address from "../pages/img/address.jpg"
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
                <h3 className='contact-title'>You can can email, call us or visit our offices</h3>
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
                <p className='contact-desc'>
                    Feel free to message us For enquires
                </p>
                <form ref={form} onSubmit= {handleSubmit}>
                    <input type='text' placeholder='Name' name='user_name' /> <br />
                    <input type='text' placeholder='Subject' name='user_subject' /><br />
                    <input type='text' placeholder='Email' name='user_email' />
                    <textarea placeholder='Message' name='message' rows='5'/>
                    <button>Submit</button> <br />
                   <h2> {done && "Sumitted successfully..................."}</h2>
                </form>
            </div>
        </div>
   </div>
      
    </div>
  );
}

export default Contact;