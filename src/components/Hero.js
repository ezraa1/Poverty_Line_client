import React from 'react'
import './Hero.css'
import TypeWriterEffect from 'react-typewriter-effect';

const Hero = () => {
    return (
        <div className='hero' >
            <div className='content'>
                <p>Reach us here</p>
                <p>Nairobi, kenya</p>
                <p>Empower the
                    <span>
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                fontWeight: 900,
                                textAlign: 'center',
                                fontSize: '2em',
                            }

                            }
                            startDelay={2000}
                            cursorColor="#ffff"
                            multiText={
                                [
                                    'poor',
                                    'hustler',
                                    'needy',
                                    'kids',
                                    'youth'
                                ]
                            }
                            multiTextDelay={1000}
                            typeSpeed={50}
                            multiTextLoop
                        />
                    </span>
                </p>
                <p>Here are few options: You can offer scholarships, donations or hire from our set of talents </p>
                <button href='/' className='button'><b>Hire Talent</b></button>
            </div>
        </div>
    )
}

export default Hero
