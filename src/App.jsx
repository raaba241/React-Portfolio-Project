import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer';
import './App.css';


// App component to render the main page

function App() {
  const [activeSection, setActiveSection] = useState('AboutMe');

  const renderSection = () => {
    switch (activeSection) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  }

  // Return the main page
  return (
    <div className='mainPage'>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;