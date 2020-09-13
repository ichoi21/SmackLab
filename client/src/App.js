import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
// import AuthReducer from "./reducers/authReducer";
// import useReducer from "./reducers/useReducer";

import Chat from "./components/Chat/Chat";
import Home from "./components/Pages/Home";
import SignUp from "./components/Pages/SignUp";
import Login from "./components/Pages/Login";
import Quiz from "./components/Quiz/";
import Header from "./components/AppBar";
import Footer from "./components/Footer";
import Categories from "./components/Exercise/Categories";
import Exercises from "./components/Exercise/Exercises";
import Profile from "./components/Pages/Profile";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";

import "./App.css";

const App = () => {
  const { auth } = useAuthContext();

  return (
    <Router>
      <div className="App">
        <Header />
        {!auth.isAuthenticated ? <Login /> : <Home />}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/categories" component={Categories} />
          <Route path="/exercises" component={Exercises} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
// }
// }

export default App;
