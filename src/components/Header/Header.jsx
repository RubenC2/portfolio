import React from 'react';


const Header = () => {
  return (
    <header id="header">
      <section id="header__content">
        <img src="/images/RubenCastro.png" alt="Mi Foto" className="foto" />
        <article className="presentacion">
          <h1>Rubén Castro</h1>
          <p>Desarrollador Web Full Stack</p>
        </article>
        <a href="/CVRubenCastroDev.pdf" className="download-cv">Descargar CV</a>
        <a
          href="https://www.linkedin.com/in/rubencastrodev/"
          className="linkedin-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi LinkedIn
        </a>
      </section>
    </header>
  );
};

export default Header;
