import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="about" className={`about ${darkMode ? 'about--dark' : 'about--light'}`}>
      <article className="about_content">
        <h2 className="about_title">Sobre mí</h2>
        <p className="about_text">
          Con trayectoria en el ámbito educativo y social, he reorientado mi carrera profesional hacia el desarrollo web, 
          estudiando un bootcamp intensivo e inmersivo full time en The Bridge, impulsado por el deseo de aprender y afrontar nuevos retos. 
          Siempre en fase de crecimiento técnico, mi entusiasmo y compromiso me permiten avanzar rápidamente en este campo. 
          Además, cuento con soft skills claves, como la empatía, las habilidades sociales y comunicativas, la escucha activa y 
          el trabajo en equipo, lo que contribuye a crear un ambiente de trabajo positivo y productivo. 
          Estoy en búsqueda de nuevas oportunidades para formar parte de proyectos innovadores.
        </p>
      </article>
    </section>
  );
};

export default About;
