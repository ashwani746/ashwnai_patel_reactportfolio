import Home from "./components/Home";
import Navbar from "./components/NavBar";
import About from "./components/About";
import React from "react";
import Education from "./components/Education/Eduction";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Sociallinks from "./components/Sociallinks";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Contact/>
      <Projects/>
      
      <Sociallinks />
    </div>
  );
}

export default App;
