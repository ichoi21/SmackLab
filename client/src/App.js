import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
// import AuthReducer from "./reducers/authReducer";
// import useReducer from "./reducers/useReducer";

import Chat from "./components/Chat/Chat";
import Home from "./components/Pages/Home";
import SignUp from "./components/Pages/SignUp";
import Login from "./components/Pages/Login";
import Quiz from "./components/Quiz/";
import Header from "./components/AppBar/index";
import PrivateBar from "./components/AppBar/PrivateBar";
import Footer from "./components/Footer";
import Categories from "./components/Exercise/Categories";
import ExercisesList from "./components/Exercise/ExerciseList";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Landing from "./components/Pages/Landing";
import Calc from "./components/Calculator/index";

import "./App.css";
import Fab from "@material-ui/core/Fab";
import PrivateRoute from "./handlers/PrivateRoute";
import PublicRoute from "./handlers/PublicRoute";

const App = () => {

  const { auth } = useAuthContext();

  return (
    <Router>
      <div className="App">
        {!auth.isAuthenticated ? <Header /> : <PrivateBar />}
        {/* <Header /> */}
        <Switch>
          {/* {!auth.isAuthenticated ? <Login /> : <Home />} */}
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/home" component={Home} />
          <PublicRoute exact path="/signup" component={SignUp} />
          <PublicRoute exact path="/login" component={Login} />
          <Route exact path="/chat" component={Chat} />
          <PrivateRoute exact path="/quiz" component={Quiz} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/exercises/:muscles" component={ExercisesList} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/calculator" component={Calc} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
        {/* Floating Button for chatter */}
        <div className="chatBtn">
          <Fab color="secondary" variant="extended" aria-label="chat">
            <Link to="/chat">
              {"Let's Chat..."}
            </Link>
          </Fab>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

// }
// }

export default App;
