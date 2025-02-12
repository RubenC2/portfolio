

const Nav = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className={`nav ${menuOpen ? "nav--open" : ""}`} role="navigation">
      <a href="#hero" className="nav_link" onClick={() => setMenuOpen(false)}>
        Inicio
      </a>
      <a href="#about" className="nav_link" onClick={() => setMenuOpen(false)}>
        Sobre mí
      </a>
      <a href="#projects" className="nav_link" onClick={() => setMenuOpen(false)}>
        Proyectos
      </a>
      <a href="#career" className="nav_link" onClick={() => setMenuOpen(false)}>
        Mi carrera profesional
      </a>
    </nav>
  );
};

export default Nav;
