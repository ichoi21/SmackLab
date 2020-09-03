import React from "react";
import { Link, Switch, useRouteMatch } from "react-router-dom";
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import SignUp from "./SignUp";

import "../AppBar/AppBar.css";

// import logo from "./img/logo1.png";
// import lgLogo from "./img/sl_md.png";

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
          {/* <img className="App-logo hoverable z-depth-3" src={logo} alt="" />
          <img src={lgLogo} alt="" /> */}
          <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                SmackLab
              </Typography>
              <Button color="inherit">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </Toolbar>
          </AppBar>
        </header>

        <Switch>
          <route path="/signup">
            <SignUp />
          </route>
        </Switch>
      </div>
  );
}

export default Home;
