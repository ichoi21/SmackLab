import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Palette,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link, Switch } from "react-router-dom";

import Chat from "../Chat/Chat";
import logo from "../img/logo1.png";
import logo_sm from "../img/sl_md.png";
import Login from "../Pages/Login";
import Categories from "../Exercise/Categories";
import Exercises from "../Exercise/Exercises";
import Quiz from "../Quiz";
import Exercises from "../Exercise/Categories";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";

import "../AppBar/AppBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "-webkit-sticky",
    top: 0,
    maxHeight: "10vh",
    minHeight: "5vh",
    height: "5vh",
    boxShadow: "none",
    backgroundColor: "#22121",
  },
  positionFixed: {
    flexGrow: 1,
    position: "-webkit-sticky",
    top: 0,
    maxHeight: "10vh",
    minHeight: "5vh",
    height: "5vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="#212121"
              aria-label="menu"
              image={logo}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">
                <img src={logo_sm} />
              </Link>
            </Typography>

            <Button color="text.primary">
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button color="white">
              <Link to="/login">Log In</Link>
            </Button>
            <Button color="white">
              <Link to="/chat">Chat</Link>
            </Button>
            <Button color="white">
              <Link to="/categories">Exercises</Link>
            </Button>
            <Button color="white">
            <Link to="/profile">Profile</Link>
              <Link to="/quiz">Quiz</Link>
            </Button>
            <Button color="white">
              <Link to="/profile">Profile</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </header>

      <Switch>
        <route path="/signup">
          <SignUp />
        </route>
        <route path="/login">
          <Login />
        </route>
        <route path="/chat">
          <Chat />
        </route>
        <route path="/categories">
          <Categories />
          </route>
        <route path="/quiz">
          <Quiz />
        </route>
        <route path="/profile">
          <Profile />
        </route>
        <route path="/exercises">
          <Exercises/>
        </route>
      </Switch>
    </div>
  );
};

export default Home;
