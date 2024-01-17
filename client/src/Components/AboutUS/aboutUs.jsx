import React from 'react'
import './aboutUs.scss'
const AboutUS = () => {
  return (
    <section id='aboutUS'>
      <div className="aboutUs">
        <div className="leftArea_aboutus">
        <div className="imageAboutUs">
          <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" alt="" />
        </div>
        <div className="textLeftAbbout">
          <div className="textBoxArea_leftPart">
            <h1>Trusted Merchant</h1>
            <p>FOR 50 YEARS</p>
          </div>
        </div>
        </div>

        <div className="rightArea_aboutus">
          <div className="textPart_rightAbout">
            <p>MERCHANT COMPANY</p>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos nam quibusdam placeat possimus culpa natus rem quos. Aperiam, sunt.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUS
