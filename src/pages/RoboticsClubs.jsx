import React from 'react';
// import './RoboticsClub.css'; all css components are already in index.css file
import RoboticsClub from './../assets/roboticsclub.gif'
import RoboticsClub2 from './../assets/roboticsclub2.gif'

const CodingClubs = () => {
  return (
    <>
      {/* Header Section */}
      <div className='robomania__header section__padding' id='home'>
        <div className="robomania__header-content">
          <h1 className="gradient__text">Robotics Clubs</h1>
          <p>The Robotics Clubs at RoboMania STEM immerse students in the exciting world of robotics, blending mechanics, electronics, and programming. These clubs ignite creativity and innovation, as students learn to build and program robots, enhancing their problem-solving and teamwork skills. Catering to various skill levels, the clubs offer a supportive environment for both beginners and advanced learners, making it an ideal platform for budding technologists and future innovators.</p>
        </div>
      </div> {/* Close the header div here */}

      {/* Separate New Sections */}
      <div className="programs">
      <h2 className="gradient__text programs-title">Robotics Clubs</h2>
      <div className="program-item">
        <div>
          <h3 className='gradient__text'>New Students<br />(4 - 8th graders)</h3>
          <p>Students will get an introduction to robots and robotic components. Students will build, code, and test their robotics while engaging in the engineering design process. Students will also gain understanding of robotic components and sensors.<br/><br/>This session will get students ready for session 2 - 4 where they will continue to build real industry inspired robots while engaging in the engineering design process and real-world problem solving.<br/><br/>Tuition: $129<br/><br/>Session duration: One month</p>
          <button onClick={() => window.location.href = 'https://www.paypal.com/webapps/shoppingcart?mfid=1706834126426_f785484e281f0&flowlogging_id=f785484e281f0#/checkout/shoppingCart'}>Wednesday<br />5:30-6:30pm<br /><h1>Click to Enroll</h1></button>
          <br />
          <button onClick={() => window.location.href = 'https://www.paypal.com/webapps/shoppingcart?mfid=1706834126426_f785484e281f0&flowlogging_id=f785484e281f0#/checkout/shoppingCart'}>Thursday<br />5:30-6:30pm<br /><h1>Click to Enroll</h1></button>
        </div>
        <img src={RoboticsClub} alt="New Students" />
      </div>

      <div className="program-item alternate">
        <img src={RoboticsClub2} alt="Continuing Students" />
        <div>
          <h3 className='gradient__text'>Continuing Students<br />(4 - 8th graders)</h3>
          <p>After completing the Introduction to Robotics and Engineering session students will continue thier robotics and engineering journey in session 2 - 4. During session 2 - 4, students continue to build their robotics and engineering skills.<br/><br/>Students will learn how robots are used in space exploration, warehouses, and other commercial industries. Students will assume the role of engineers and engage in real-world problem solving activities. Students will build, code, and test their robots, learn about motors, sensors and work on robotics and engineering projects.<br/><br/>Tuition: $129<br/><br/>Session duration: One month (4 classes per month)</p>
          <button onClick={() => window.location.href = 'https://www.paypal.com/webapps/shoppingcart?mfid=1706834126426_f785484e281f0&flowlogging_id=f785484e281f0#/checkout/shoppingCart'}>Wednesday<br />5:30-6:30pm<br /><h1>Click to Enroll</h1></button>
          <br />
          <button onClick={() => window.location.href = 'https://www.paypal.com/webapps/shoppingcart?mfid=1706834126426_f785484e281f0&flowlogging_id=f785484e281f0#/checkout/shoppingCart'}>Thursday<br />5:30-6:30pm<br /><h1>Click to Enroll</h1></button>
        </div>
      </div>
      <p className='codingclubs__para'>LEGO® and DUPLO® are registered trademarks of the LEGO® Group of companies which does not sponsor, authorize or endorse these programs or this web site. For teaching and learning purposes, the above mentioned summer camps will be utilizing LEGO®  and LEGO® style bricks along with open-source hardware and software.<br /><br />Middle and High school camps are being held at Texas A&M University in College Station, TX. Camps are sponsored by IMSA, a recognized student organization and organized by Robo Mania STEM Learning.</p>
    </div>
    </>
  );
}

export default CodingClubs;