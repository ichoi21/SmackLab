import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link, Switch, useRouteMatch } from "react-router-dom";

import Chat from "../Chat/Chat";
import logo from "../img/logo1.png";
import logo_sm from "../img/sl_md.png";
import SignUp from "./SignUp";

import "../AppBar/AppBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "-webkit-sticky",
    top: 0,
    maxHeight: "20vh",
    minHeight: "10vh",
    height: "10vh",
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
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              image={logo}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <img src={logo_sm} />
            </Typography>

            <Button color="inherit">
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button color="inherit">
              <Link to="/chat">Chat</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </header>

      <Switch>

        <route path="/signup">
          <SignUp />
        </route>
        <route path="/chat">
          <Chat />
        </route>
      </Switch>
    </div>
  );
};

export default Home;
