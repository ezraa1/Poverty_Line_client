import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='demo' id='subscribe'>
            <div className='container'>
                <div className='col-1'>
                    <p>More Than 100 Hiring Managers,</p>
                    <p>hire our talent</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                    <button className='button'>Get Talent</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Subscribe
