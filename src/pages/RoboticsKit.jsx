import React from 'react';
//  import './RoboticsKit.css'; all css components are already in index.css file
import RoboticsClub from './../assets/roboticsclub.gif'
import RoboticsClub2 from './../assets/roboticsclub2.gif'

const CodingClubs = () => {
  return (
    <>
      {/* Header Section */}
      <div className='robomania__header section__padding' id='home'>
        <div className="robomania__header-content">
          <h1 className="gradient__text">Robotics Kit</h1>
          <p>Robo Mania robotics kit uses the research based OpenBrick educational robotics module for engaging students in Science, Technology, Engineering, and Mathematics (STEM) learning. OpenBrick is both effective, and affordable making it an ideal choice for parents and educators for immersing their students in hands on STEM learning.</p>
          <p>OpenBrick helps parents and teachers engage students in hands-on STEM learning using research based practices.</p>
        </div>
      </div> {/* Close the header div here */}

      {/* Separate New Sections */}
      <div className="programs">
      <h2 className="gradient__text programs-title">OpenBrick Software</h2>
      <div className="program-item">
        <div>
          <h3 className='gradient__text'>Visual Coding Software</h3>
          <p>OpenBrick Robotics Module can be programmed using visual coding blocks. The visual coding environment is perfect for beginners who are just starting on their coding journey.</p>
          <p><br />1) Click on the 'Visual Software Tutorial Video' button to learn how to install the OpenBrick visual coding blocks.</p>
          <p><br />2) Click on the 'Download Extension' button to download the necessary software.</p>
          <button onClick={() => window.location.href = 'https://aabstem.com/pd/introtoopenbrick/module1/'}>Visual Software<br />Tutorial Video<br /></button>
          <br />
          <button onClick={() => window.location.href = 'https://1drv.ms/f/s!AhTQxUmVj3Bwg6gfrQurB0rUzBGP1A?e=g4H2dB'}>Download<br />Software<br /></button>
        </div>
        <img src={RoboticsClub} alt="New Students" />
      </div>

      <div className="program-item alternate">
        <img src={RoboticsClub2} alt="Continuing Students" />
        <div>
          <h3 className='gradient__text'>C++ Coding Software</h3>
          <p>OpenBrick Robotics module can also be programmed using Arduino C++ programming language. The traditional method of C++ programming is preferred for users who have programming experience and who want more freedom with their OpenBrick Robotics Module</p>
          <p><br />1) Click on the 'Software Tutorial Video' button to learn how to install the Arduino integrated development environment.</p>
          <p><br />2) Click on the 'Download Extension' button to download the necessary software.</p>
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

export default CodingClubs;