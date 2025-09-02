import React from 'react'
import './About.css'
import gallery_1 from'../../assets/gallery_1.png'
import gallery_2 from'../../assets/gallery_2.png.jpg'



const About = () => {
  return (
    <div className='About'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
      </div>
    </div>
  )
}

export default About
