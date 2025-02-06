

const Nav = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className={`nav ${menuOpen ? "nav--open" : ""}`} role="navigation">
      <a href="#about" className="nav_link" onClick={() => setMenuOpen(false)}>
        Sobre mí
      </a>
      <a href="#projects" className="nav_link" onClick={() => setMenuOpen(false)}>
        Proyectos
      </a>
      <a href="#skills" className="nav_link" onClick={() => setMenuOpen(false)}>
        Skills
      </a>
      <a href="#contact" className="nav_link" onClick={() => setMenuOpen(false)}>
        Contacto
      </a>
    </nav>
  );
};

export default Nav;
