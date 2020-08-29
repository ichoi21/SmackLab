import React, { useEffect } from "react";
import { Button } from "react-materialize";

import logo from "./components/img/logo1.png";
import lgLogo from "./components/img/sl_md.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo hoverable z-depth-3" src={logo} />
        <img src={lgLogo} />
      </header>
    </div>
  );
}

export default App;
