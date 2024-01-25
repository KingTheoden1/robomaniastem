import React from 'react';
import { codingclubs, roboticsclub, roboticskit, summercamps } from './imports';
import './programs.css';

const Programs = () => {
  return (
    <div className="programs">
      <h2 className="gradient__text programs-title">Programs</h2>
      <p className="programs-subtitle">Give your child an Academic Advantage!</p>
      <ProgramItem title="Coding Clubs" description="Learn Computational Thinking (CT) and Computer Science (CS) Skills and Code Games and Animations." image={codingclubs} link="/coding-clubs" />
      <ProgramItem title="Robotics Clubs" description="Explore the fascinating world of robotics and develop hands-on skills in building and programming robots." image={roboticsclub} link="/coding-clubs" />
      <ProgramItem title="Robotics Kit" description="We use LEGO® style bricks with open-source hardware and software to make STEM education affordable and fun for all." image={roboticskit} link="/coding-clubs" />
      <ProgramItem title="Summer Camps" description="Join our summer camps for an immersive learning experience in STEM, coding, and robotics." image={summercamps} link="/coding-clubs" />
    </div>
  );
};

const ProgramItem = ({ title, description, image, link, alternate }) => {
    return (
        <div className={`program-item ${alternate ? 'alternate' : ''}`}>
        {alternate ? <img src={image} alt={title} /> : null}
        <div>
          <h3 className='gradient__text'>{title}</h3>
          <p>{description}</p>
          <button onClick={() => window.location.href = link}>Learn More</button>
        </div>
        {!alternate ? <img src={image} alt={title} /> : null}
      </div>  
    );
};

export default Programs;