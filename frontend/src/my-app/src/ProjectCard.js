import "./projectcard.css"

const ProjectCard = ({projects}) => {

  return (
      <div>
      {projects.map((project) => (
        <div className="project-card">
        <div key={project.key}>
          <img src={project.imageUrl.card1Image} alt={project.title} className="project-image" />
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>}
            </div>
          </div>
        </div>
    </div>
          ))}
          </div>

  );
};

export default ProjectCard;
