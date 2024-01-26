import React from 'react';
import './CodingClubs.css';

const CodingClubs = () => {
  return (
    <div className='robomania__header section__padding' id='home'>
      <div className="robomania__header-content">
        <h1 className="gradient__text">Coding Clubs</h1>
        <p>RoboMania STEM's Coding Clubs provide a dynamic learning experience for young enthusiasts. These clubs offer a comprehensive introduction to Python programming, emphasizing interactive learning through game design and storytelling. Students develop critical computational thinking and problem-solving skills while exploring advanced concepts in graphics programming, game development, and data analysis. Each session is crafted to inspire creativity and a deep understanding of computer science, preparing students for future technological challenges.</p>
      </div>
      
    <div className="program-section">
      <div className="text-content">
        <h2>Title One</h2>
        <p>This is a paragraph about the first topic...</p>
      </div>
      <img src="path_to_your_image_one.jpg" alt="Description of Image One" />
    </div>

    <div className="program-section">
      <div className="text-content">
        <h2>Title Two</h2>
        <p>This is a paragraph about the second topic...</p>
      </div>
      <img src="path_to_your_image_two.jpg" alt="Description of Image Two" />
    </div>
  </div>  
  );
};

export default CodingClubs