import React from 'react'
import './Subscribe.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react'
const Subscribe = () => {
  const form = useRef();
    const [done, setDone] = useState(false)
    

    const handleSubmit = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_dg5xgls', 'template_9g5ak8e', form.current, 'C5IYjO6gmEKlVIkdK')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  
    }

    return (
        <div className='demo' id='subscribe'>
            <div className='container'>
                <div className='col-1'>
                    <p>More Than 100 Hiring Managers,</p>
                    <p>hire our talent</p>
                    <p>Be informed each time we have top talent</p>
                    <form ref={form} onSubmit= {handleSubmit} className='form-j'>
                    <input className='field-name' type='email' placeholder='Enter your Email address' name='user_email' /> <br />
                    <button className='btn-j' onSubmit={handleSubmit}>Subscribe</button> <br />
                   <h2> {done && "Subscribed successfully..................."}</h2>
                </form>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Subscribe


