import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
