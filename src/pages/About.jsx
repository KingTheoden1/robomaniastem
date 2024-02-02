import React from 'react';
import './About.css'; // Ensure this CSS file exists and is correctly linked
import IntroToPython from './../assets/IntroToPython.jpg'
import ComputerProgramming from './../assets/ComputerProgramming.jpg'
import CTSkills from './../assets/ctskills.jpg'

const CodingClubs = () => {
  return (
    <>
      {/* Header Section */}
      <div className='robomania__header section__padding' id='home'>
        <div className="robomania__header-content">
          <h1 className="gradient__text">About Us</h1>
          <p>To create fun and engaging learning spaces for hands-on science, technology, engineering, and mathematics (STEM) education for students, parents, and teachers using the power of open-source hardware, open-source software, and affordable educational robotics.</p>
        </div>
      </div> {/* Close the header div here */}

      {/* Separate New Sections */}
      <div className="programs__alt">
      <h2 className="gradient__text programs-title">Our Vision</h2>
      <div className="program-item">
        <div>
          <p>We envision fun and engaging learning spaces where all students have access to research-inspired science, technology, engineering, and mathematics (STEM) education and where students, teachers, and parents feel empowered with open-source technology and tools.</p>
        </div>
      </div>

      <div className="program-item alternate">
        <div>
          <h3 className='gradient__text'>Computational Thinking (CT) Skills</h3>
          <p>There are certain concepts, practices, and perspectives that are fundamemtal to becoming an effective coder. These fundamental skills are called Computational thining or CT skills. Research suggests that students who are able to master CT skills at an early age are more likely to succeed in demanding STEM courses beyond computer science at secondary and post-seocndary levels​(1).<br /><br />The map of CT skills below shows how Data is at the center of the CT concepts which are surrounded by CT practices that foster CT perspectives. This CT map was designed by Dr. Aamir Fidai based on the research done by Brannan & Resnick at MIT Media Lab in 2012(2)​.</p>
          <img className='img__ct' src={CTSkills} alt="CT Skills" />
          <p>Research References:<br /><br />1. Ye, J., Lai, X., & Wong, G. K. W. (2022). The transfer effects of computational thinking: A systematic review with meta‐analysis and qualitative synthesis. Journal of Computer Assisted Learning, 38(6), 1620-1638.<br /><br />​2. Brennan, K., & Resnick, M. (2012, April). New frameworks for studying and assessing the development of computational thinking. In Proceedings of the 2012 annual meeting of the American educational research association, Vancouver, Canada (Vol. 1, p. 25).</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default CodingClubs;