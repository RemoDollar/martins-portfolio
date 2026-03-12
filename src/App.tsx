import React from "react";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />

      {/* Temporary content to test scroll effect */}
      <div
        style={{
          height: "200vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <h1 className="section-title">
          <span>Navbar Complete!</span>
        </h1>
      </div>
    </div>
  );
};

export default App;
