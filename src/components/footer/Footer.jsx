import React from 'react';
import './footer.css';
import robomania from '../../assets/robomania.png'

const Footer = () => {
  return (
    <div className='robomania__footer section__padding'>
      {/*<div className="robomania__footer-heading">
        <h1 className="gradient__text">Give your child an Academic Advantage!</h1>
      </div>
      <div className="robomania__footer-btn">
        <p>Learn More</p>
  </div>*/}

      <div className="robomania__footer-links">
        <div className="robomania__footer-links_logo">
          <img src={robomania} alt="logo" />
          <p>2551 Texas Ave S, STE E1(Inside Play Oasis), College Station, TX, 77840</p>
        </div>
        <div className="robomania__footer-links_div">
          <h4>Links</h4>
          <p>About Us</p>
          <p>Policies</p>
          <p>Contact</p>
        </div>
        <div className="robomania__footer-links_div">
          <h4>Company</h4>
          <p>Careers</p>
          <p>Terms & Conditions</p>
          <p>Research</p>
        </div>
        <div className="robomania__footer-links_div">
          <h4>Get in touch</h4>
          <p>2551 Texas Ave S, STE E1(Inside Play Oasis), College Station, TX, 77840</p>
          <p>(979) 429-2018</p>
          <p>info@RoboManiaSTEM.com</p>
        </div>
      </div>
      <div className="robomania__footer-copyright">
        <p>© 2024 Robo Mania Stem. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer