import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter >
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
  </>
  )
}
export default App
