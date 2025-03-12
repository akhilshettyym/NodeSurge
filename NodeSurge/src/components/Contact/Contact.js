import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Get in Touch</h2>
        <p>
          Hey there! 👋 I'm <strong>Akhil Shetty</strong>, a passionate developer from Mangalore. 
          I'm always open to connecting and collaborating on exciting projects.
        </p>
        <div className="contact-details">
          <p><strong>Email:</strong> <a href="mailto:akhilshettym2003@gmail.com">akhilshettym2003@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/akhilshettym" target="_blank" rel="noopener noreferrer">linkedin.com/in/akhilshettym</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/akhilshettyym" target="_blank" rel="noopener noreferrer">github.com/akhilshettym</a></p>
        </div>
        <div className="contact-footer">
          <p>Looking forward to hearing from you! 😊</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;