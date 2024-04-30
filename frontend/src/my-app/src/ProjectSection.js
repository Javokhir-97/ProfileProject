import ProjectCard from "./ProjectCard.js";
import "./projectcard.css";
import card1Image from "./images/card1.jpg";
import { useState } from "react";

function ProjectSection() {
  

  const [projects, setProjects] = useState([
    {
      title: "Awesome Project",
      description: "This was a fantastic project that achieved great results.",
      imageUrl: { card1Image },
      githubLink: "https://github.com/example/project",
      demoLink: "https://example.com/demo",
      key: 1,
    },
    {
      title: "Awesome Project",
      description: "This was a fantastic project that achieved great results.",
      imageUrl: { card1Image },
      githubLink: "https://github.com/example/project",
      demoLink: "https://example.com/demo",
      key: 2,
    },
    {
      title: "Awesome Project",
      description: "This was a fantastic project that achieved great results.",
      imageUrl: { card1Image },
      githubLink: "https://github.com/example/project",
      demoLink: "https://example.com/demo",
      key: 3,
    },
    
  ]);

  return (
    <div className='project-card-container panel project-panel' name='ProjectSection'>
     
        <ProjectCard projects={projects}/>
        {/*filter method filters each element in the array and returns a new array with only the ones that pass the criteria */}
        {/* <ProjectCard projects={projects.filter((project) => project.id === 1)}/> */}
    </div>
  );
}

export default ProjectSection;
