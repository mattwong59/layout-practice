import React from "react";
import "./style.css";
import Hero from "./Hero.js";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </React.Fragment>
  );
}

export default App;
