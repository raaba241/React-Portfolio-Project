import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    // Simple email validation pattern
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }
    // Handle form submission here
    setEmailError('');
    alert('Form submitted'); // Placeholder action
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        {emailError && <p>{emailError}</p>}
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;