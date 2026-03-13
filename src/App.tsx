import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;
