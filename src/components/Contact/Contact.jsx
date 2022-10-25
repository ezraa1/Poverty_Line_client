import React from 'react'
import  './Contact.css'
import Phone from '../../img/phone.jpg'
import Address from '../../img/address.jpg'
import Email from '../../img/email.jpg'
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
    <div className='contact'>
        <div className='contact-bg'></div>
        <div className='contact-wrapper'>
            <div className='contact-left'>
                <h1 className='contact-title'>You can reach us here or leave us a message</h1>
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
                    <b>Feel free to message us For enquires</b>
                </p>
                <form ref={form} onSubmit= {handleSubmit}>
                    <input type='text' placeholder='Name' name='user_name' />
                    <input type='text' placeholder='Subject' name='user_subject' />
                    <input type='text' placeholder='Email' name='user_email' />
                    <textarea placeholder='Message' name='message' rows='5'/>
                    <button>Submit</button>
                    {done && "sumitted successfully..................."}
                </form>
            </div>
        </div>
   </div>
  )
}


export default Contact;
