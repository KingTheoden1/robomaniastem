import React from 'react'
import MiddleHighCamp from './../assets/Middle-High-Camp.jpg'
import ElementaryCamp from './../assets/ElementaryCamp.jpg'


const SummerCamps = () => {
  return (
    <>
      {/* Header Section */}
      <div className='robomania__header section__padding' id='home'>
        <div className="robomania__header-content">
          <h1 className="gradient__text">Summer Camps</h1>
          <p>RoboMania STEM's Summer Camps offer an immersive and engaging experience for young enthusiasts eager to explore the world of science and technology. These camps provide a perfect blend of fun and education, where students can delve into robotics, coding, and other STEM activities. Designed to spark creativity and foster problem-solving skills, the camps create an environment where children can learn, innovate, and make new friends, all while enjoying their summer break. Each camp is tailored to encourage curiosity and a love for learning, setting the stage for future success in any STEM-related field.</p>
        </div>
      </div> {/* Close the header div here */}

      {/* Separate New Sections */}
      <div className="programs">
      <h2 className="gradient__text programs-title">Camps Offered</h2>
      <div className="program-item">
        <div>
          <h3 className='gradient__text'>Elementary School Camps</h3>
          <p><br />Grades 3 -6</p>
          <p><br />Fun, Hands-on, Engaging, & Impactful!</p>
          <button onClick={() => window.location.href = 'https://aabstem.com/pd/introtoopenbrick/module1/'}>Visual Software<br />Tutorial Video<br /></button>
          <br />
          <button onClick={() => window.location.href = 'https://1drv.ms/f/s!AhTQxUmVj3Bwg6gfrQurB0rUzBGP1A?e=g4H2dB'}>Download<br />Software<br /></button>
        </div>
        <img src={ElementaryCamp} alt="" />
      </div>

      <div className="program-item alternate">
        <img src={MiddleHighCamp} alt="" />
        <div>
          <h3 className='gradient__text'>Middle/High School Camps</h3>
          <p><br />Grades 7 - 12</p>
          <p><br />Get your child ready for College!</p>
          <button onClick={() => window.location.href = 'https://aabstem.com/pd/introtoopenbrick/module1/'}>C++ Software<br />Tutorial Video<br /></button>
          <br />
          <button onClick={() => window.location.href = 'https://1drv.ms/f/s!AhTQxUmVj3Bwg6gfrQurB0rUzBGP1A?e=g4H2dB'}>Download<br />Software<br /></button>
        </div>
      </div>
      <p className='codingclubs__para'>LEGO® and DUPLO® are registered trademarks of the LEGO® Group of companies which does not sponsor, authorize or endorse these programs or this web site. For teaching and learning purposes, the above mentioned summer camps will be utilizing LEGO®  and LEGO® style bricks along with open-source hardware and software.<br /><br />Middle and High school camps are being held at Texas A&M University in College Station, TX. Camps are sponsored by IMSA, a recognized student organization and organized by Robo Mania STEM Learning.</p>
    </div>
    </>
  );
}


export default SummerCamps;