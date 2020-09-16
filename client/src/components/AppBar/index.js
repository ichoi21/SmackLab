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
import { Link } from "react-router-dom";

//images
import logo from "../img/logo1.png";
import logo_sm from "../img/sl_md.png";

//styles
import "../AppBar/AppBar.css";
import "./AppBar.css";
import { useAuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    maxHeight: "10vh",
    minHeight: "5vh",
    height: "8vh",
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

const Header = () => {
  const classes = useStyles();
  const { auth, setAuth } = useAuthContext();

  return (
    <div className="Header">
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

            <Button>
              <Link to="/home">Home</Link>
            </Button>
            <Button>
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button>
              <Link to="/login">Log In</Link>
            </Button>
            <Button>
              <Link to="/chat">Chat</Link>
            </Button>
            <Button>
              <Link to="/categories">Exercises</Link>
            </Button>
            <Button>
              <Link to="/calculator">Calculator</Link>
            </Button>
            <Button>
              <Link to="/quiz">Quiz</Link>
            </Button>
            <Button>
              <Link to="/profile">Profile</Link>
            </Button>
            <Button>
              <Link to="/about">About</Link>
            </Button>
            <Button>
              <Link to="/contact">Contact</Link>
            </Button>
            <Button onClick={()=>setAuth({type: "LOGOUT"})}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
};

export default Header;
