import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
