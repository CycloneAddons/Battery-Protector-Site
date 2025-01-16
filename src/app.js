import React from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Main from "./components/Main";
import Features from "./components/Features";
import './App.css';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Main />
      <Features />
      <Background />
    </div>
  );
}

export default App;
