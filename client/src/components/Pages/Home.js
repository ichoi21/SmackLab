import React from "react";
import lgLogo from "../img/sl_md.png";
import logo from "../img/logo1.png";

import "../../App.css";

const Home = () => {
  return (
    <div className="App-header">
      <img className="App-logo z-depth-3" src={logo} />
      <img src={lgLogo} />
      <h3>Hello from Home.js (aka Landing)</h3>
    </div>
  );
};

export default Home;

//BOTTOM CODE IS ACTUALLY NAVBAR - this has been MIGRATED YO!
