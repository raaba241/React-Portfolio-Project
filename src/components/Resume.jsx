import React from 'react';

function Resume() {
  return (
    <section>
      <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
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