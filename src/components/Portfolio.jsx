import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    // Example project
    { title: "Logo Generator", imageUrl: './assets/ExampleImage.png', liveUrl: "link_to_live_version", repoUrl: "https://github.com/raaba241/Logo-Generator" },
    // Add more projects as needed
    { title: "Employee Tracker", imageUrl: './assets/ExampleImage.png', liveUrl: "link_to_live_version", repoUrl: "https://github.com/raaba241/Employee-Tracker" },
    { title: "Logo Generator", imageUrl: './assets/ExampleImage.png', liveUrl: "link_to_live_version", repoUrl: "https://github.com/raaba241/Logo-Generator" },
    { title: "Logo Generator", imageUrl: './assets/ExampleImage.png', liveUrl: "link_to_live_version", repoUrl: "https://github.com/raaba241/Logo-Generator" },
  ];

  // Return the portfolio section
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} />
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Version</a>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;