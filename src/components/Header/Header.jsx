import { useState, useContext } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Nav from "./Nav"; 
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext); 
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="header">
      <h1 className="headerName">RUBÉN CASTRO</h1>

      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Botones de Modo Oscuro y Menú Hamburguesa */}
      <div className="header_buttons">
        <button onClick={() => setDarkMode(!darkMode)} className="header_toggle-mode">
          {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
        </button>

        <button className="header_menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
