import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/robomania.png';
import './navbar.css';


const Menu = () => (
  <>
  <p><a href="/">Home</a></p>
  <p><a href="#">Coding Clubs</a></p>
  <p><a href="#">Robotics Club</a></p>
  <p><a href="#">Parent Workshop</a></p>
  <p><a href="/About">About</a></p>
  </>
)
// BEM -> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='robomania__navbar'>
      <div className='robomania__navbar-links'>
        <div className="robomania__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="robomania__navbar-links_container">
          <Menu />
        </div>
      </div>
      {/*<div className="robomania__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
  </div>*/}
      <div className="robomania__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}  />
        }
        {toggleMenu && (
          <div className="robomania__navbar-menu_container scale-up-center">
            <div className="robomania__navbar-menu_container-links">
              <Menu />
              {/*<div className="robomania__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>*/}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar