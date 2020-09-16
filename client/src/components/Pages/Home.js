import React from "react";
// import lgLogo from "../img/sl_md.png";
// import logo from "../img/logo1.png";
import { Paper, Grid, makeStyles, Typography } from "@material-ui/core";
import "./Home.css";
import "../../App.css";
import Card from "../Card/Card";
import Profile from "../Profile/Profile";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.default,
  },
}));

const currentUser = JSON.parse(localStorage.getItem("user"));
const currentUserName = currentUser.first_name;
const currentUserlName = currentUser.last_name;

const Home = () => {
  const classes = useStyles();
  return (
    <div className="Home">
      <Grid container className="Title">
        <div className="userName">
          <Typography
            variant="h5"
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Welcome Back {currentUserName} {currentUserlName}!
          </Typography>
        </div>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Profile text="View Profile" />
        </Grid>
        <Grid item xs={6}>
          <Card />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Card />
        </Grid>
        <Grid item xs={4}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

//BOTTOM CODE IS ACTUALLY NAVBAR - this has been MIGRATED YO!
