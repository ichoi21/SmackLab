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
<<<<<<< HEAD
import lgLogo from "../img/sl_md.png";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
=======
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Quiz from "../Quiz";
>>>>>>> 91daf4a9258ca6c9a09ba9139dc9d32fc3575554

import "../AppBar/AppBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "-webkit-sticky",
    top: 0,
    maxHeight: "20vh",
    minHeight: "10vh",
    height: "10vh",
    boxShadow: "none",
    backgroundColor: "#22121",
  },
  positionFixed: {
    flexGrow: 1,
    position: "-webkit-sticky",
    top: 0,
    maxHeight: "20vh",
    minHeight: "10vh",
    height: "10vh",
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
<<<<<<< HEAD
              <Link to="/profile">Profile</Link>
=======
              <Link to="/quiz">Quiz</Link>
>>>>>>> 91daf4a9258ca6c9a09ba9139dc9d32fc3575554
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
<<<<<<< HEAD
        <route path="/profile">
          <Profile />
=======
        <route path="/quiz">
          <Quiz />
>>>>>>> 91daf4a9258ca6c9a09ba9139dc9d32fc3575554
        </route>
      </Switch>
    </div>
  );
};

export default Home;
