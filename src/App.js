// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")

  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({ msg: message, type: type })
    setTimeout(() => {
      setalert(null)

    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showalert("Dark mode has been enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showalert("Light mode has been enabled", "success")

    }
  }
  return (
    <>
    <Router>

      <Navbar tittle='Text Analizer' AboutText="About" mode={mode} togglemode={togglemode} />
      <Alerts alert={alert} />
      <div className="container my-3">


      <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showalert={showalert} />} />
      </Routes>

       

      </div>

      </Router>
    </>
  );
}

export default App;
