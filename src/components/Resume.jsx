import React from 'react';
import './Resume.css';
// resume component to display resume and proficiencies
function Resume() {
  return (
    <section>
      <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul className='skills'>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
}

export default Resume;