import './about.css'; // Import CSS for styling

const About = () => {
  

  return (
    <div className='about-container panel about-panel' name='About'>
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate software developer with expertise in web development.
          I love building user-friendly and efficient applications that solve real-world problems.
        </p>
      </div>
      <div className="about-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>HTML5 & CSS3</li>
          <li>RESTful APIs</li>
          <li>Database Management (SQL & NoSQL)</li>
          <li>Version Control (Git)</li>
          <li>Agile Methodologies</li>
        </ul>
      </div>
      <div className="about-section">
        <h2>Experience</h2>
        <p>
          I have worked on various projects, both independently and as part of a team.
          My experience includes developing responsive web applications, implementing
          new features, and optimizing performance.
        </p>
      </div>
      <div className="about-section">
        <h2>Education</h2>
        <p>
          I hold a Bachelor's degree in Computer Science from XYZ University.
          During my studies, I gained a solid foundation in software development
          principles and acquired practical experience through internships and projects.
        </p>
      </div>
    </div>
  );
};

export default About;
