import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${darkMode ? "footer--dark" : "footer--light"}`}>
      <p>© {new Date().getFullYear()} - Portfolio Rubén Castro. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

