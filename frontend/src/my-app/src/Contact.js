import './contact.css'; // Import CSS for styling

const Contact = () => {
  

  return (
    <div className='contact-container panel contact-panel' name='Contact'>
      <div className="contact-section">
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to discuss a project, feel free to contact me:</p>
        <ul>
          <li>Email: example@example.com</li>
          <li>Phone: +1234567890</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">example</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
