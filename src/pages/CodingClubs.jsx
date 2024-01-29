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
          <h3 className='gradient__text'>New Students</h3>
          <p>Explore the wonderful world of Python programming. Learn how to design interactive stories and games using Python programming. Understand the fundamentals computer science (CS) concepts using Python. Design engaging characters and exciting game levels and improve computational thinking (CT) skills.<br/><br/>Tuition: $129<br/><br/>Session duration: One month</p>
          <button onClick={() => window.location.href = '/coding-clubs'}>Learn More</button>
        </div>
        <img src={IntroToPython} alt="New Students" />
      </div>

      <div className="program-item alternate">
        <img src={ComputerProgramming} alt="Continuing Students" />
        <div>
          <h3 className='gradient__text'>Continuing Students</h3>
          <p>After completing the Introduction to Python session students will continue thier coding journey with Python in session 2 - 4. During session 2 - 4, students continue to build Computational thinking (CT) with a focus on Computer Science (CS) skills and problem solving. <br/><br/>Students will Learn advance coding skills in Python, a leading industry standard computer programming language. Students will engage in month-long problems solving projects and exercises which will encourage learning of new skills.<br/><br/>Tuition: $129<br/><br/>Session duration: One month (4 classes per month)</p>
          <button onClick={() => window.location.href = '/coding-clubs'}>Learn More</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default CodingClubs;

// Explore the wonderful world of Python programming. Learn how to design interactive stories and games using Python programming. Understand the fundamentals computer science (CS) concepts using Python. Design engaging characters and exciting game levels and improve computational thinking (CT) skills.<br/><br/>Tuition: $129<br/><br/>Session duration: One month
// After completing the Introduction to Python session students will continue thier coding journey with Python in session 2 - 4. During session 2 - 4, students continue to build Computational thinking (CT) with a focus on Computer Science (CS) skills and problem solving. <br/><br/>Students will Learn advance coding skills in Python, a leading industry standard computer programming language. Students will engage in month-long problems solving projects and exercises which will encourage learning of new skills.<br/><br/>Tuition: $129<br/><br/>Session duration: One month (4 classes per month)