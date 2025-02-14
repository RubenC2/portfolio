import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { projects } from "../../../Data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="projects" className={`projects ${darkMode ? 'projects--dark' : 'projects--light'}`}>
     <h2 className="projects_title">Mis Proyectos</h2>
      <article className="projects_content">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </article>
    </section>
  );
};

export default Projects;
