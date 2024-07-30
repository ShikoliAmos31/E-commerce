import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/cart1.jpg'
import arrow_icon from '../Assets/arrow.jpg'
import hero_image from '../Assets/hero_image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
       <div className='Hero-left'>
        <h2>NEW ARRIVALS</h2>
        <div>
            <div className='hand-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p>Collection</p>
            <p>for customers</p>
        </div>
        <div className='Hero-latest-btn'>
           <div className='Latest Collection'></div>
           <img src={arrow_icon} alt=''/>
        </div>
       </div>
       <div className='Hero-right'>
       <img src={hero_image} alt=''/>
       </div> 
    </div>
  )
}

export default Hero