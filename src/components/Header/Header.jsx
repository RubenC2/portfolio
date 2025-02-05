import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Nav from "./Nav"; 

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="header">
      <h1 className="header__logo">RUBÉN CASTRO</h1>

      {/* Componente de Navegación */}
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} darkMode={darkMode}/>

      {/* Botones de Modo Oscuro y Menú Hamburguesa */}
      <div className="header__buttons">
        <button onClick={() => setDarkMode(!darkMode)} className="header__toggle-mode">
          {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
        </button>

        <button className="header__menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
