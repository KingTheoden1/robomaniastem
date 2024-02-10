import React from 'react'
import { Brand, Header, Programs } from '../components'
import ParentWorkshop from './../assets/parentworkshop.png';
import './Home.css';

const Home = () => {
  return (
    <>
        <Header />
        <Brand />
        <Programs />
        <div className="program-image-container">
          <img src={ParentWorkshop} alt="" />
        </div>
    </>
  )
}

export default Home