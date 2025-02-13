import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="projects" className={`projects ${darkMode ? 'projects--dark' : 'projects--light'}`}>
      <article className="projects_content">
        <h2 className="projects_title">Mis proyectos</h2>
        </article>
    </section>
  )
};

export default Projects;
