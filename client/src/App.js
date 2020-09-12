import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Chat from "./components/Chat/Chat";
import Home from "./components/Pages/Home";
import SignUp from "./components/Pages/SignUp";
import Login from "./components/Pages/Login";
import Quiz from "./components/Quiz/";
import Header from "./components/AppBar";
import Footer from "./components/Footer";
import Exercises from "./components/Exercise/Categories";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/exercises" component={Exercises} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
// }
// }

export default App;
