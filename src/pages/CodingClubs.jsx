import React from 'react';
import './CodingClubs.css'; // Ensure this CSS file exists and is correctly linked
import IntroToPython from './../assets/IntroToPython.jpg'
import ComputerProgramming from './../assets/ComputerProgramming.jpg'

const CodingClubs = () => {
  return (
    <>
      {/* Header Section */}
      <div className='robomania__header section__padding' id='home'>
        <div className="robomania__header-content">
          <h1 className="gradient__text">Coding Clubs</h1>
          <p>RoboMania STEM's Coding Clubs provide a dynamic learning experience for young enthusiasts. These clubs offer a comprehensive introduction to Python programming, emphasizing interactive learning through game design and storytelling. Students develop critical computational thinking and problem-solving skills while exploring advanced concepts in graphics programming, game development, and data analysis. Each session is crafted to inspire creativity and a deep understanding of computer science, preparing students for future technological challenges.</p>
        </div>
      </div> {/* Close the header div here */}

      {/* Separate New Sections */}
      <div className="programs">
      <h2 className="gradient__text programs-title">Coding Clubs</h2>
      <div className="program-item">
        <div>
          <h3 className='gradient__text'>New Students<br />(4 - 8th graders)</h3>
          <p>Explore the wonderful world of Python programming. Learn how to design interactive stories and games using Python programming. Understand the fundamentals computer science (CS) concepts using Python. Design engaging characters and exciting game levels and improve computational thinking (CT) skills.<br/><br/>Tuition: $129<br/><br/>Session duration: One month</p>
          <button onClick={() => window.location.href = 'https://www.paypal.com/webapps/shoppingcart?mfid=1706833310000_f472663220a49&flowlogging_id=f472663220a49#/checkout/shoppingCart'}>Monday<br />5:30-6:30pm<br /> <h1>Click to Enroll</h1></button>
          <br />
          <button onClick={() => window.location.href = 'https://www.paypal.com/webapps/shoppingcart?mfid=1706833292052_f1503526b00bc&flowlogging_id=f1503526b00bc#/checkout/shoppingCart'}>Tuesday<br />5:30-6:30pm<br /> <h1>Click to Enroll</h1></button>
        </div>
        <img src={IntroToPython} alt="New Students" />
      </div>

      <div className="program-item alternate">
        <img src={ComputerProgramming} alt="Continuing Students" />
        <div>
          <h3 className='gradient__text'>Continuing Students<br />(4 - 8th graders)</h3>
          <p>After completing the Introduction to Python session students will continue thier coding journey with Python in session 2 - 4. During session 2 - 4, students continue to build Computational thinking (CT) with a focus on Computer Science (CS) skills and problem solving. <br/><br/>Students will Learn advance coding skills in Python, a leading industry standard computer programming language. Students will engage in month-long problems solving projects and exercises which will encourage learning of new skills.<br/><br/>Tuition: $129<br/><br/>Session duration: One month (4 classes per month)</p>
          <button onClick={() => window.location.href = 'https://www.paypal.com/webapps/shoppingcart?mfid=1706833329352_f912936ec0fa2&flowlogging_id=f912936ec0fa2#/checkout/shoppingCart'}>Monday<br />5:30-6:30pm <br /> <h1>Click to Enroll</h1></button>
          <br />
          <button onClick={() => window.location.href = 'https://www.paypal.com/webapps/shoppingcart?mfid=1706833345894_f399561caf7e2&flowlogging_id=f399561caf7e2#/checkout/shoppingCart'}>Tuesday<br />5:30-6:30pm <br /> <h1>Click to Enroll</h1></button>
        </div>
      </div>
      <p className='codingclubs__para'>LEGO® and DUPLO® are registered trademarks of the LEGO® Group of companies which does not sponsor, authorize or endorse these programs or this web site. For teaching and learning purposes, the above mentioned summer camps will be utilizing LEGO®  and LEGO® style bricks along with open-source hardware and software.<br /><br />Middle and High school camps are being held at Texas A&M University in College Station, TX. Camps are sponsored by IMSA, a recognized student organization and organized by Robo Mania STEM Learning.</p>
    </div>
    </>
  );
}

export default CodingClubs;