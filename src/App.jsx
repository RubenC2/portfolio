import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeContext } from './context/ThemeContext';
import './App.css'

function App() {
   
   const [darkMode, setDarkMode] = useState(() => {
    // Preferencia desde localStorage
    return localStorage.getItem("theme") === "dark";
  });

  // Guardar en localStorage y aplicar clases al <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <>
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <BrowserRouter >
        <Header />
        <Main />
      </BrowserRouter>
    </ThemeContext.Provider>
    <Footer />
    </>
  );
};

export default App
