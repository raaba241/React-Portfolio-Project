import React from 'react';
import './Header.css';

// Header component to display the header and navigation

function Header({ activeSection, setActiveSection }) {
  return (
    <header>
      <h1>RAABA'S PORTFOLIO WEBSITE</h1>
      <nav>
        <ul>
          {['AboutMe', 'Portfolio', 'Contact', 'Resume'].map((section) => (
            <li key={section} className={activeSection === section ? 'active' : ''}>
              <button onClick={() => setActiveSection(section)}>
                {section.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;