

const Nav = ({ menuOpen, setMenuOpen, darkMode }) => {
  return (
    <nav className={`nav ${menuOpen ? "nav--open" : ""} ${darkMode ? "dark" : ""}`} role="navigation">
      <a href="#about" className="nav__link" onClick={() => setMenuOpen(false)}>
        Sobre mí
      </a>
      <a href="#projects" className="nav__link" onClick={() => setMenuOpen(false)}>
        Proyectos
      </a>
      <a href="#skills" className="nav__link" onClick={() => setMenuOpen(false)}>
        Skills
      </a>
      <a href="#contact" className="nav__link" onClick={() => setMenuOpen(false)}>
        Contacto
      </a>
    </nav>
  );
};

export default Nav;
