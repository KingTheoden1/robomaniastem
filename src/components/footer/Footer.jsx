import React from 'react';
import './footer.css';
import robomania from '../../assets/robomania.png'
import { Link } from 'react-router-dom';


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
          <p><Link to="/About">About Us</Link></p>
          <p>Policies</p>
          <p><a href='mailto:info@RoboManiaSTEM.com'>Contact</a></p>
        </div>
        <div className="robomania__footer-links_div">
          <h4>Company</h4>
          <p><a href='https://stemrichment.com/jobs' target='_blank'>Jobs</a></p>
          <p>Terms & Conditions</p>
          <p><a href='https://scholar.google.com/citations?user=gGmS1REAAAAJ&hl=en' target='_blank'>Research</a></p>
        </div>
        <div className="robomania__footer-links_div">
          <h4>Get in touch</h4>
          <p><a href='https://www.google.com/maps?sca_esv=fe0d19291777c631&rlz=1C1VDKB_enUS953US953&sxsrf=ACQVn09pQmx-fmqhh05OWdJ_xeFXsYBWpg:1706212668971&lsig=AB86z5XJMpAMZjvBL-oRG1TUtWWB&biw=1023&bih=1024&dpr=1.25&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KQmiN_hhhEaGMV6-FjX2WNno&daddr=2551+Texas+Ave+S+Ste+E1,+College+Station,+TX+77840' target='_blank'>2551 Texas Ave S, STE E1(Inside Play Oasis), College Station, TX, 77840</a></p>
          <p><a href='tel:9794292018'>(979) 429-2018</a></p>
          <p><a href='mailto:info@RoboManiaSTEM.com'>info@RoboManiaSTEM.com</a></p>
        </div>
      </div>
      <div className="robomania__footer-copyright">
        <p>© 2024 Robo Mania Stem. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer