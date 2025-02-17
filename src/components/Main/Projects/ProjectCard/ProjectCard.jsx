import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import { IoOpenOutline } from "react-icons/io5";


const ProjectCard = ({ project }) => {
    const { darkMode } = useContext(ThemeContext);
  
  return (
    <section id="projectCard" className={`projectCard ${darkMode ? 'projectCard--dark' : 'projectCard--light'}`}>
      <img src={project.image} alt={project.title} className="image" />
      <h3 className="projectCard_title">{project.title}</h3>
      <p className="projectCard_text">{project.description}</p>
      <article className="projectCard_content">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
            {tech}
          </span>
        ))}
      </article>
      <article className="projectCard_links">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Ver online<IoOpenOutline /></a>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Acceso al repositorio<IoOpenOutline /></a>
      </article>
    </section>
  );
};

export default ProjectCard;