import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="hero" className={`hero ${darkMode ? 'hero--dark' : 'hero--light'}`}>
      <article className="hero_content">
        <h1 className="hero_title">Hola, soy Rubén Castro</h1>
        <h2 className="hero_subtitle">Desarrollador Web Full Stack</h2>
        <img src="/images/RubenCastro.png" alt="Foto de Rubén Castro" className="foto" />
      </article>
      <article className="presentacion">
        <a href="/CVRubenCastroDev.pdf" className="download-cv" target="_blank">CV
          <HiOutlineDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/rubencastrodev/"
          className="linkedin-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/RubenC2" className="github-button" target="_blank">
          <FaGithub />
        </a>
      </article>
    </section>
  );
};

export default Hero;
